interface BrowserFrameProps {
  titulo: string
  children: React.ReactNode
  className?: string
}

export default function BrowserFrame({ titulo, children, className = '' }: BrowserFrameProps) {
  return (
    <div className={`overflow-hidden border border-nevoa bg-papel ${className}`.trim()}>
      <div className="flex items-center gap-2 border-b border-nevoa bg-osso px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-nevoa" />
          <span className="h-2 w-2 rounded-full bg-nevoa" />
          <span className="h-2 w-2 rounded-full bg-nevoa" />
        </span>
        <span className="mx-auto truncate rounded-sm bg-papel px-3 py-0.5 font-mono text-[11px] text-grafite/45">
          {titulo}
        </span>
      </div>
      {children}
    </div>
  )
}
