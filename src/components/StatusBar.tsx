interface StatusBarProps {
  label: string
  color?: 'petroleo' | 'terracota'
}

export default function StatusBar({ label, color = 'petroleo' }: StatusBarProps) {
  const dotClass = color === 'terracota' ? 'bg-terracota' : 'bg-petroleo'
  const textClass = color === 'terracota' ? 'text-terracota' : 'text-petroleo'
  return (
    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide" aria-hidden="true">
      <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
      <span className={textClass}>{label}</span>
    </p>
  )
}
