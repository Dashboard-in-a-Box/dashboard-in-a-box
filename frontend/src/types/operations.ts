export type TaskStatus =
  | 'Open'
  | 'In Progress'
  | 'Blocked'
  | 'Completed'

export type TaskPriority =
  | 'Low'
  | 'Medium'
  | 'High'
  | 'Critical'

export type ProjectStatus =
  | 'On Track'
  | 'At Risk'
  | 'Delayed'
  | 'Completed'

export type OperationsTask = {
  id: number
  title: string
  project: string
  owner: string
  status: TaskStatus
  priority: TaskPriority
  dueDate: string
  source: string
  lastSync: string
}

export type OperationsProject = {
  id: number
  name: string
  owner: string
  status: ProjectStatus
  progress: number
}