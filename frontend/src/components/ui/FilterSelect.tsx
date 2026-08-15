type FilterOption = {
  label: string
  value: string
}

type FilterSelectProps = {
  value: string
  onChange: (value: string) => void
  options: FilterOption[]
}

function FilterSelect({
  value,
  onChange,
  options,
}: FilterSelectProps) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="
        w-full 
        rounded-lg
        border
        border-slate-300
        bg-white
        px-3
        py-2
        text-sm
        text-slate-900
        outline-none
        transition
        focus:border-slate-500
        dark:border-slate-700
        dark:bg-slate-900
        dark:text-slate-100
        sm:w-auto
      "
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default FilterSelect
