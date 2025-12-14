import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { db, storage } from '../config/firebase'
import { Property, PropertyFilters } from '../types'

export const createProperty = async (
  property: Omit<Property, 'id' | 'createdAt' | 'updatedAt'>
): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'properties'), {
      ...property,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    })
    return docRef.id
  } catch (error) {
    console.error('Error creating property:', error)
    throw error
  }
}

export const getProperties = async (
  filters?: PropertyFilters
): Promise<Property[]> => {
  try {
    let q = query(collection(db, 'properties'), orderBy('createdAt', 'desc'))

    if (filters?.type) {
      q = query(q, where('type', '==', filters.type))
    }
    if (filters?.status) {
      q = query(q, where('status', '==', filters.status))
    }
    if (filters?.bedrooms) {
      q = query(q, where('bedrooms', '==', filters.bedrooms))
    }
    if (filters?.location) {
      q = query(q, where('location', '==', filters.location))
    }

    const querySnapshot = await getDocs(q)
    let properties = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    })) as Property[]

    // Apply price filters client-side
    if (filters?.minPrice) {
      properties = properties.filter((p) => p.price >= filters.minPrice!)
    }
    if (filters?.maxPrice) {
      properties = properties.filter((p) => p.price <= filters.maxPrice!)
    }

    return properties
  } catch (error) {
    console.error('Error getting properties:', error)
    throw error
  }
}

export const getPropertyById = async (id: string): Promise<Property | null> => {
  try {
    const docRef = doc(db, 'properties', id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate() || new Date(),
        updatedAt: docSnap.data().updatedAt?.toDate() || new Date(),
      } as Property
    }
    return null
  } catch (error) {
    console.error('Error getting property:', error)
    throw error
  }
}

export const updateProperty = async (
  id: string,
  updates: Partial<Property>
): Promise<void> => {
  try {
    const docRef = doc(db, 'properties', id)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.now(),
    })
  } catch (error) {
    console.error('Error updating property:', error)
    throw error
  }
}

export const deleteProperty = async (id: string): Promise<void> => {
  try {
    const docRef = doc(db, 'properties', id)
    const docSnap = await getDoc(docRef)
    
    // Delete images from storage
    if (docSnap.exists()) {
      const property = docSnap.data() as Property
      if (property.images && property.images.length > 0) {
        for (const imageUrl of property.images) {
          try {
            const imageRef = ref(storage, imageUrl)
            await deleteObject(imageRef)
          } catch (error) {
            console.error('Error deleting image:', error)
          }
        }
      }
    }
    
    await deleteDoc(docRef)
  } catch (error) {
    console.error('Error deleting property:', error)
    throw error
  }
}

export const uploadImage = async (file: File): Promise<string> => {
  try {
    const storageRef = ref(storage, `properties/${Date.now()}_${file.name}`)
    await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(storageRef)
    return downloadURL
  } catch (error) {
    console.error('Error uploading image:', error)
    throw error
  }
}

