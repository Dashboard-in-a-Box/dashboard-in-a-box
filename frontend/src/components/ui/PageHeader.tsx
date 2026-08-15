type PageHeaderProps = {
  title: string
  description?: string
}

function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h1>

      {description && (
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  )
}

export default PageHeader