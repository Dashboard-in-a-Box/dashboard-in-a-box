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
    <div className="h-72 w-full min-w-0 text-slate-700 dark:text-slate-200">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 8,
            right: 8,
            bottom: 0,
            left: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="currentColor"
            opacity={0.15}
            vertical={false}
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: 'currentColor',
              fontSize: 12,
            }}
          />

          <YAxis
            allowDecimals={false}
            axisLine={false}
            tickLine={false}
            tick={{
              fill: 'currentColor',
              fontSize: 12,
            }}
          />

          <Tooltip
            cursor={{
              fill: 'currentColor',
              opacity: 0.05,
            }}
            contentStyle={{
              backgroundColor: 'var(--chart-tooltip-bg)',
              borderColor: 'var(--chart-tooltip-border)',
              borderRadius: '8px',
              color: 'var(--chart-tooltip-text)',
            }}
            labelStyle={{
              color: 'var(--chart-tooltip-text)',
              fontWeight: 600,
            }}
            itemStyle={{
              color: 'var(--chart-tooltip-text)',
            }}
          />

          <Bar
            dataKey="value"
            fill="var(--chart-bar)"
            radius={[6, 6, 0, 0]}
            maxBarSize={90}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SimpleBarChart