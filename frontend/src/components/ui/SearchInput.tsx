type SearchInputProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
}: SearchInputProps) {
  return (
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
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
        placeholder:text-slate-400
        focus:border-slate-500
        dark:border-slate-700
        dark:bg-slate-900
        dark:text-slate-100
        dark:placeholder:text-slate-500
      "
    />
  )
}

export default SearchInput