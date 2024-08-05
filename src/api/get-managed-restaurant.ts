import { api } from '@/lib/axios'

export interface GetManagedRestaurantResponse {
  name: string
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  try {
    const response = await api.get<GetManagedRestaurantResponse>(
      '/managed-restaurant',
    )
    return response.data
  } catch (error) {
    console.error('Erro ao buscar restaurante gerenciado:', error)
    throw error
  }
}
