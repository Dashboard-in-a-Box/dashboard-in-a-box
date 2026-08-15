import SidebarItem from './SidebarItem'

function Sidebar() {
  return (
    <aside className="hidden h-screen w-64 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 md:flex">
      <div className="flex h-16 items-center border-b border-slate-200 px-6 dark:border-slate-800">
        <span className="text-lg font-semibold text-slate-900 dark:text-white">
          Dashboard in a Box
        </span>
      </div>

      <nav className="flex-1 space-y-1 px-4 py-6">
        <SidebarItem label="Dashboard" active />
      </nav>

      <div className="border-t border-slate-200 px-6 py-4 dark:border-slate-800">
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Dashboard Engine
        </p>
      </div>
    </aside>
  )
}

export default Sidebar