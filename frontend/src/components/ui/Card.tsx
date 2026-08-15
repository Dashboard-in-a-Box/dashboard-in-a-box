import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`
  rounded-xl
  border
  border-slate-200
  bg-white
  p-5
  shadow-sm
  dark:border-slate-800
  dark:bg-slate-900
  ${className}
`}
    >
      {children}
    </div>
  )
}

export default Card