type Column<T> = {
  key: keyof T
  header: string
}

type DataTableProps<T> = {
  columns: readonly Column<T>[]
  data: readonly T[]
}

function DataTable<T extends object>({
  columns,
  data,
}: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
        <thead className="bg-slate-50 dark:bg-slate-800">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/70"
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className="whitespace-nowrap px-4 py-3 text-sm text-slate-700 dark:text-slate-200"
                >
                  {String(row[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable