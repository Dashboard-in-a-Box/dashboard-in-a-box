type NotificationProps = {
  message: string
  visible: boolean
  onClose: () => void
}

function Notification({
  message,
  visible,
  onClose,
}: NotificationProps) {
  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 rounded-xl border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:left-auto sm:w-full sm:max-w-sm">
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm text-slate-700 dark:text-slate-300">
          {message}
        </p>

        <button
          type="button"
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
          ✕
        </button>
      </div>
    </div>
  )
}

export default Notification