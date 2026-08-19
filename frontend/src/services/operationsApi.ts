import type {
  OperationsProject,
  OperationsTask,
} from '../types/operations'

const API_BASE_URL = 'http://localhost:5077/api'

export async function getProjects(): Promise<OperationsProject[]> {
  const response = await fetch(`${API_BASE_URL}/projects`)

  if (!response.ok) {
    throw new Error('Failed to load projects')
  }

  return response.json()
}

export async function getTasks(): Promise<OperationsTask[]> {
  const response = await fetch(`${API_BASE_URL}/tasks`)

  if (!response.ok) {
    throw new Error('Failed to load tasks')
  }

  return response.json()
}