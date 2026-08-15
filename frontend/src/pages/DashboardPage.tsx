import { useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import KpiCard from '../components/ui/KpiCard'
import SearchInput from '../components/ui/SearchInput'
import FilterSelect from '../components/ui/FilterSelect'
import DataTable from '../components/ui/DataTable'
import Card from '../components/ui/Card'
import SimpleBarChart from '../components/ui/SimpleBarChart'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'
import Notification from '../components/ui/Notification'
import ThemeToggle from '../components/ui/ThemeToggle'

function DashboardPage() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [exampleName, setExampleName] = useState('')
  const [notificationVisible, setNotificationVisible] = useState(false)
  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'status', header: 'Status' },
    { key: 'owner', header: 'Owner' },
  ] as const
  const data = [
    {
      name: 'Example Item 1',
      status: 'Active',
      owner: 'Alex',
    },
    {
      name: 'Example Item 2',
      status: 'Pending',
      owner: 'Jordan',
    },
    {
      name: 'Example Item 3',
      status: 'Closed',
      owner: 'Taylor',
    },
  ]
  const chartData = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 65 },
  { name: 'Mar', value: 52 },
  { name: 'Apr', value: 78 },
  { name: 'May', value: 61 },
]
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Overview of your management workspace."
      />
<div className="flex justify-end">
  <ThemeToggle />
</div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="Total Items"
          value="1,248"
          description="Example metric"
        />

        <KpiCard
          title="Active"
          value="842"
          description="Example metric"
        />

        <KpiCard
          title="Pending"
          value="37"
          description="Example metric"
        />

        <KpiCard
          title="Issues"
          value="8"
          description="Example metric"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="w-full sm:max-w-sm">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search items..."
          />
        </div>

        <FilterSelect
          value={status}
          onChange={setStatus}
          options={[
            { label: 'All statuses', value: 'all' },
            { label: 'Active', value: 'active' },
            { label: 'Pending', value: 'pending' },
            { label: 'Closed', value: 'closed' },
          ]}
        />
      </div>
      <DataTable columns={columns} data={data} />
      <Card>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
      Example Chart
    </h2>

        <SimpleBarChart data={chartData} />
      </Card>
      <Card>
  <div className="flex items-center justify-between gap-4">
    <div>
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
        Form & Modal
      </h2>

      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Example reusable form controls.
      </p>
    </div>

    <Button onClick={() => setIsModalOpen(true)}>
      Open Modal
    </Button>
  </div>
</Card>

<Modal
  open={isModalOpen}
  title="Example Form"
  onClose={() => setIsModalOpen(false)}
>
  <div className="space-y-4">
    <Input
      label="Name"
      value={exampleName}
      onChange={setExampleName}
      placeholder="Enter a name"
    />

    <div className="flex justify-end gap-2">
      <Button
        type="button"
        onClick={() => setIsModalOpen(false)}
        className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
      >
        Cancel
      </Button>

     <Button
  onClick={() => {
    setIsModalOpen(false)
    setNotificationVisible(true)
  }}
>
  Save
</Button>
    </div>
  </div>
</Modal>
  <Notification
    message="Changes saved successfully."
    visible={notificationVisible}
    onClose={() => setNotificationVisible(false)}
  />
    </div>
  )
}

export default DashboardPage