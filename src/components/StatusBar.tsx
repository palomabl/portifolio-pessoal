interface StatusBarProps {
  label: string
  color?: 'orquidea' | 'menta'
}

export default function StatusBar({ label, color = 'menta' }: StatusBarProps) {
  const colorClass = color === 'orquidea' ? 'text-orquidea' : 'text-menta'
  return (
    <p className={`font-mono text-xs tracking-widest ${colorClass}`} aria-hidden="true">
      [ {label} ]
    </p>
  )
}
