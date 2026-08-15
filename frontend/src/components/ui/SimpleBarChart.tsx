import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

type ChartDataItem = {
  name: string
  value: number
}

type SimpleBarChartProps = {
  data: ChartDataItem[]
}

function SimpleBarChart({ data }: SimpleBarChartProps) {
  return (
    <div className="h-72 w-full min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="currentColor" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SimpleBarChart