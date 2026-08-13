function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div>
        <span className="text-sm text-slate-500">
          Management Dashboard
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-medium text-slate-700">
          U
        </div>
      </div>
    </header>
  )
}

export default Header