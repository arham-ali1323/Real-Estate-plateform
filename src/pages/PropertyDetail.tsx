import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getPropertyById, deleteProperty } from '../services/propertyService'
import { Property } from '../types'
import { useAuth } from '../context/AuthContext'
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaEdit, FaTrash } from 'react-icons/fa'
import { toast } from 'react-hot-toast'

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (id) {
      loadProperty()
    }
  }, [id])

  const loadProperty = async () => {
    try {
      setLoading(true)
      const data = await getPropertyById(id!)
      setProperty(data)
    } catch (error) {
      toast.error('Failed to load property')
      console.error('Error loading property:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!id || !window.confirm('Are you sure you want to delete this property?')) {
      return
    }

    try {
      setDeleting(true)
      await deleteProperty(id)
      toast.success('Property deleted successfully')
      navigate('/')
    } catch (error) {
      toast.error('Failed to delete property')
      console.error('Error deleting property:', error)
    } finally {
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-4">Property not found</p>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Go back to properties
          </Link>
        </div>
      </div>
    )
  }

  const isOwner = currentUser && currentUser.uid === property.userId

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-700 mb-4 inline-block"
        >
          ← Back to Properties
        </Link>
{/* back to home button */}
        {isOwner && (
          <div className="flex justify-end gap-4 mb-4">
            <Link
              to={`/edit-property/${property.id}`}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaEdit />
              <span>Edit</span>
            </Link>
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-400"
            >
              <FaTrash />
              <span>{deleting ? 'Deleting...' : 'Delete'}</span>
            </button>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
            {property.images && property.images.length > 0 ? (
              property.images.map((image, index) => (
                <div key={index} className="relative h-64 md:h-96">
                  <img
                    src={image}
                    alt={`${property.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))
            ) : (
              <div className="col-span-2 h-96 bg-gray-200 flex items-center justify-center rounded-lg">
                <p className="text-gray-400">No images available</p>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {property.title}
                </h1>
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-blue-600">
                  ${property.price.toLocaleString()}
                </p>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mt-2">
                  {property.status === 'sale' ? 'For Sale' : 'For Rent'}
                </span>
              </div>
            </div>

            <div className="border-t border-b py-6 my-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <FaBed className="text-blue-600 mx-auto mb-2" size={24} />
                  <p className="text-2xl font-bold text-gray-800">{property.bedrooms}</p>
                  <p className="text-gray-600">Bedrooms</p>
                </div>
                <div>
                  <FaBath className="text-blue-600 mx-auto mb-2" size={24} />
                  <p className="text-2xl font-bold text-gray-800">{property.bathrooms}</p>
                  <p className="text-gray-600">Bathrooms</p>
                </div>
                <div>
                  <FaRulerCombined className="text-blue-600 mx-auto mb-2" size={24} />
                  <p className="text-2xl font-bold text-gray-800">{property.area}</p>
                  <p className="text-gray-600">Sqft</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Property Type</h3>
                <p className="text-gray-600 capitalize">{property.type}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Listed By</h3>
                <p className="text-gray-600">{property.userEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetail

