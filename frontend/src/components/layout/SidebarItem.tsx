type SidebarItemProps = {
  label: string
  active?: boolean
}

function SidebarItem({ label, active = false }: SidebarItemProps) {
  return (
    <a
      href="#"
      className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
        active
          ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
      }`}
    >
      {label}
    </a>
  )
}

export default SidebarItem