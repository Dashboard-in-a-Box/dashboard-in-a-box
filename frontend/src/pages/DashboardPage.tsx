import { useEffect, useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import KpiCard from '../components/ui/KpiCard'
import SearchInput from '../components/ui/SearchInput'
import FilterSelect from '../components/ui/FilterSelect'
import DataTable from '../components/ui/DataTable'
import Card from '../components/ui/Card'
import SimpleBarChart from '../components/ui/SimpleBarChart'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'
import Notification from '../components/ui/Notification'
import ThemeToggle from '../components/ui/ThemeToggle'

import {
  getProjects,
  getTasks,
} from '../services/operationsApi'

import type {
  OperationsProject,
  OperationsTask,
} from '../types/operations'

function DashboardPage() {
  const [operationsProjects, setOperationsProjects] =
    useState<OperationsProject[]>([])

  const [operationsTasks, setOperationsTasks] =
    useState<OperationsTask[]>([])

  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)

  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null)
  const [notificationVisible, setNotificationVisible] = useState(false)

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true)

        const [projects, tasks] = await Promise.all([
          getProjects(),
          getTasks(),
        ])

        setOperationsProjects(projects)
        setOperationsTasks(tasks)
        setLoadError(null)
      } catch (error) {
        console.error('Failed to load operations data:', error)
        setLoadError('Unable to load operations data.')
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  const selectedTask = operationsTasks.find(
    (task) => task.id === selectedTaskId
  )

  const columns = [
    { key: 'title', header: 'Task' },
    { key: 'project', header: 'Project' },
    { key: 'owner', header: 'Owner' },
    { key: 'status', header: 'Status' },
    { key: 'priority', header: 'Priority' },
    { key: 'dueDate', header: 'Due Date' },
  ] as const

  const filteredTasks = operationsTasks.filter((task) => {
    const normalizedSearch = search.toLowerCase()

    const matchesSearch =
      task.title.toLowerCase().includes(normalizedSearch) ||
      task.project.toLowerCase().includes(normalizedSearch) ||
      task.owner.toLowerCase().includes(normalizedSearch)

    const matchesStatus =
      status === 'all' ||
      task.status.toLowerCase().replaceAll(' ', '-') === status

    return matchesSearch && matchesStatus
  })

  const activeProjects = operationsProjects.filter(
    (project) => project.status !== 'Completed'
  ).length

  const openTasks = operationsTasks.filter(
    (task) => task.status !== 'Completed'
  ).length

  const overdueTasks = operationsTasks.filter(
    (task) =>
      task.status !== 'Completed' &&
      new Date(task.dueDate) < new Date()
  ).length

  const criticalIssues = operationsTasks.filter(
    (task) =>
      task.priority === 'Critical' &&
      task.status !== 'Completed'
  ).length

  const criticalTasks = operationsTasks.filter(
    (task) =>
      task.status !== 'Completed' &&
      (
        task.priority === 'Critical' ||
        new Date(task.dueDate) < new Date()
      )
  )

  const chartData = [
    {
      name: 'Open',
      value: operationsTasks.filter(
        (task) => task.status === 'Open'
      ).length,
    },
    {
      name: 'In Progress',
      value: operationsTasks.filter(
        (task) => task.status === 'In Progress'
      ).length,
    },
    {
      name: 'Blocked',
      value: operationsTasks.filter(
        (task) => task.status === 'Blocked'
      ).length,
    },
    {
      name: 'Completed',
      value: operationsTasks.filter(
        (task) => task.status === 'Completed'
      ).length,
    },
  ]

  if (isLoading) {
    return (
      <div className="p-6 text-slate-600 dark:text-slate-300">
        Loading operations data...
      </div>
    )
  }

  if (loadError) {
    return (
      <div className="p-6 text-red-600 dark:text-red-400">
        {loadError}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Operations Control Tower"
        description="Monitor projects, tasks, deadlines and operational risks from one place."
      />

      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="Active Projects"
          value={activeProjects}
          description="Currently running"
        />

        <KpiCard
          title="Open Tasks"
          value={openTasks}
          description="Require attention"
        />

        <KpiCard
          title="Overdue"
          value={overdueTasks}
          description="Past due date"
        />

        <KpiCard
          title="Critical Issues"
          value={criticalIssues}
          description="High priority"
        />
      </div>

      <Card>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Critical Attention
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Tasks that require immediate operational attention.
          </p>
        </div>

        <div className="space-y-3">
          {criticalTasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-col gap-2 rounded-lg border border-slate-200 p-4 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  {task.title}
                </p>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {task.project} · {task.owner}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:items-end">
                <div className="text-sm">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {task.priority}
                  </span>

                  <span className="mx-2 text-slate-300 dark:text-slate-700">
                    |
                  </span>

                  <span className="text-slate-500 dark:text-slate-400">
                    Due {task.dueDate}
                  </span>
                </div>

                <Button
                  onClick={() => {
                    setSelectedTaskId(task.id)
                    setIsModalOpen(true)
                  }}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Project Status
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Current progress and operational health across active projects.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {operationsProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-slate-200 p-4 dark:border-slate-800"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    {project.name}
                  </p>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {project.owner}
                  </p>
                </div>

                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {project.status}
                </span>
              </div>

              <div className="mt-4">
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">
                    Progress
                  </span>

                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {project.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-slate-900 dark:bg-slate-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
          Tasks by Status
        </h2>

        <SimpleBarChart data={chartData} />
      </Card>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="w-full sm:max-w-sm">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search tasks..."
          />
        </div>

        <FilterSelect
          value={status}
          onChange={setStatus}
          options={[
            { label: 'All statuses', value: 'all' },
            { label: 'Open', value: 'open' },
            { label: 'In Progress', value: 'in-progress' },
            { label: 'Blocked', value: 'blocked' },
            { label: 'Completed', value: 'completed' },
          ]}
        />
      </div>

      <DataTable
        columns={columns}
        data={filteredTasks}
      />

      <Modal
        open={isModalOpen}
        title="Task Details"
        onClose={() => {
          setIsModalOpen(false)
          setSelectedTaskId(null)
        }}
      >
        {selectedTask && (
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Task
              </p>

              <p className="font-medium text-slate-900 dark:text-white">
                {selectedTask.title}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Project
                </p>

                <p className="text-slate-900 dark:text-white">
                  {selectedTask.project}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Owner
                </p>

                <p className="text-slate-900 dark:text-white">
                  {selectedTask.owner}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Status
                </p>

                <p className="text-slate-900 dark:text-white">
                  {selectedTask.status}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Priority
                </p>

                <p className="text-slate-900 dark:text-white">
                  {selectedTask.priority}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Due Date
                </p>

                <p className="text-slate-900 dark:text-white">
                  {selectedTask.dueDate}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Source
                </p>

                <p className="text-slate-900 dark:text-white">
                  {selectedTask.source}
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Last Sync
              </p>

              <p className="text-slate-900 dark:text-white">
                {selectedTask.lastSync}
              </p>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={() => {
                  setIsModalOpen(false)
                  setNotificationVisible(true)
                }}
              >
                Open in Source
              </Button>
            </div>
          </div>
        )}
      </Modal>

      <Notification
        message="Source connection will be available when integrations are enabled."
        visible={notificationVisible}
        onClose={() => setNotificationVisible(false)}
      />
    </div>
  )
}

export default DashboardPage