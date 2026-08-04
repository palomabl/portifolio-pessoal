interface RetratoProps {
  src: string
  alt: string
  legenda: string
  sublegenda?: string
}

export default function Retrato({ src, alt, legenda, sublegenda }: RetratoProps) {
  return (
    <figure className="w-56 sm:w-64">
      <div className="overflow-hidden border border-nevoa bg-papel shadow-elevado">
        <img src={src} alt={alt} loading="eager" className="aspect-[4/5] w-full object-cover" />
      </div>
      <figcaption className="mt-3 border-l-2 border-terracota pl-3">
        <span className="block font-display text-sm font-semibold text-grafite">{legenda}</span>
        {sublegenda && (
          <span className="block text-xs uppercase tracking-wide text-grafite/60">{sublegenda}</span>
        )}
      </figcaption>
    </figure>
  )
}
