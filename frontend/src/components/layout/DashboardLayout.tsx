import type { ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

type DashboardLayoutProps = {
  children: ReactNode
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

       <main className="flex-1 p-6 lg:p-8">
        <div className="mx-auto w-full max-w-7xl">
          {children}
        </div>
      </main>
      </div>
    </div>
  )
}

export default DashboardLayout