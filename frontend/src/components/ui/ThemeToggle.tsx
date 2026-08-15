import { useEffect, useState } from 'react'

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <button
      type="button"
      onClick={() => setDarkMode((current) => !current)}
      className="
        rounded-lg
        border
        border-slate-300
        px-3
        py-2
        text-sm
        font-medium
        text-slate-700
        transition
        hover:bg-slate-100
        dark:border-slate-700
        dark:text-slate-200
        dark:hover:bg-slate-800
      "
    >
      {darkMode ? 'Light mode' : 'Dark mode'}
    </button>
  )
}

export default ThemeToggle