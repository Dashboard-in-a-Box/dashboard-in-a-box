import Card from './Card'

type KpiCardProps = {
  title: string
  value: string | number
  description?: string
}

function KpiCard({
  title,
  value,
  description,
}: KpiCardProps) {
  return (
    <Card>
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-2xl font-semibold text-slate-900">
        {value}
      </p>

      {description && (
        <p className="mt-2 text-sm text-slate-500">
          {description}
        </p>
      )}
    </Card>
  )
}

export default KpiCard