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

export const operationsTasks: OperationsTask[] = [
  {
    id: 1,
    title: 'Validate customer onboarding flow',
    project: 'Customer Portal',
    owner: 'Alex Morgan',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2026-08-16',
    source: 'Customer Portal.xlsx',
    lastSync: '2026-08-15 09:30',
  },
  {
    id: 2,
    title: 'Resolve inventory sync issue',
    project: 'Inventory Integration',
    owner: 'Jordan Lee',
    status: 'Blocked',
    priority: 'Critical',
    dueDate: '2026-08-14',
    source: 'Jira',
    lastSync: '2026-08-15 10:05',
  },
  {
    id: 3,
    title: 'Prepare weekly operations report',
    project: 'Operations Reporting',
    owner: 'Taylor Smith',
    status: 'Open',
    priority: 'Medium',
    dueDate: '2026-08-18',
    source: 'Google Sheets',
    lastSync: '2026-08-15 08:45',
  },
  {
    id: 4,
    title: 'Review supplier SLA performance',
    project: 'Supplier Management',
    owner: 'Sam Wilson',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2026-08-17',
    source: 'Supplier SLA.xlsx',
    lastSync: '2026-08-15 09:10',
  },
  {
    id: 5,
    title: 'Update deployment checklist',
    project: 'Platform Upgrade',
    owner: 'Alex Morgan',
    status: 'Completed',
    priority: 'Low',
    dueDate: '2026-08-13',
    source: 'Microsoft Planner',
    lastSync: '2026-08-15 10:20',
  },
  {
    id: 6,
    title: 'Investigate delayed support tickets',
    project: 'Customer Support',
    owner: 'Jordan Lee',
    status: 'Open',
    priority: 'Critical',
    dueDate: '2026-08-15',
    source: 'Support System',
    lastSync: '2026-08-15 10:15',
  },
]

export const operationsProjects: OperationsProject[] = [
  {
    id: 1,
    name: 'Customer Portal',
    owner: 'Alex Morgan',
    status: 'On Track',
    progress: 72,
  },
  {
    id: 2,
    name: 'Inventory Integration',
    owner: 'Jordan Lee',
    status: 'At Risk',
    progress: 48,
  },
  {
    id: 3,
    name: 'Operations Reporting',
    owner: 'Taylor Smith',
    status: 'On Track',
    progress: 81,
  },
  {
    id: 4,
    name: 'Supplier Management',
    owner: 'Sam Wilson',
    status: 'Delayed',
    progress: 36,
  },
]