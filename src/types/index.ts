export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  type: 'house' | 'apartment' | 'condo' | 'villa'
  status: 'sale' | 'rent'
  images: string[]
  createdAt: Date
  updatedAt: Date
  userId: string
  userEmail: string
}

export interface User {
  uid: string
  email: string | null
  displayName: string | null
}

export interface PropertyFilters {
  type?: string
  status?: string
  minPrice?: number
  maxPrice?: number
  bedrooms?: number
  location?: string
}

