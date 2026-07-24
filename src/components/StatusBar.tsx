interface StatusBarProps {
  label: string
  color?: 'orquidea' | 'menta'
}

export default function StatusBar({ label, color = 'menta' }: StatusBarProps) {
  const dotClass = color === 'orquidea' ? 'bg-orquidea' : 'bg-menta'
  const textClass = color === 'orquidea' ? 'text-orquidea' : 'text-menta'
  return (
    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide" aria-hidden="true">
      <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
      <span className={textClass}>{label}</span>
    </p>
  )
}
