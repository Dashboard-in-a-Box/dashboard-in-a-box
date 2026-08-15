import type { ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

type DashboardLayoutProps = {
  children: ReactNode
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col bg-slate-50 dark:bg-slate-950">
        <Header />

        <main className="flex-1 bg-slate-50 p-4 dark:bg-slate-950 sm:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout