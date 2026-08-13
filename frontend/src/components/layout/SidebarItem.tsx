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
          ? 'bg-slate-100 text-slate-900'
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
      }`}
    >
      {label}
    </a>
  )
}

export default SidebarItem