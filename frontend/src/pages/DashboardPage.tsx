import { useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import KpiCard from '../components/ui/KpiCard'
import SearchInput from '../components/ui/SearchInput'
import FilterSelect from '../components/ui/FilterSelect'
import DataTable from '../components/ui/DataTable'
import Card from '../components/ui/Card'
import SimpleBarChart from '../components/ui/SimpleBarChart'

function DashboardPage() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
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
        <h2 className="mb-4 text-lg font-semibold text-slate-900">
          Example Chart
        </h2>

        <SimpleBarChart data={chartData} />
      </Card>
    </div>
  )
}

export default DashboardPage