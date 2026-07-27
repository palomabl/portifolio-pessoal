import './Polaroid.css'

interface PolaroidProps {
  src: string
  alt: string
  caption: string
  subcaption?: string
  className?: string
}

export default function Polaroid({ src, alt, caption, subcaption, className = '' }: PolaroidProps) {
  return (
    <div className={`polaroid ${className}`.trim()}>
      <span className="polaroid-tape polaroid-tape--left" aria-hidden="true" />
      <span className="polaroid-tape polaroid-tape--right" aria-hidden="true" />
      <div className="polaroid-photo">
        <img src={src} alt={alt} loading="eager" />
        <span
          className="polaroid-grain"
          aria-hidden="true"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}grain.svg)` }}
        />
      </div>
      <div className="polaroid-caption">
        <span className="polaroid-caption-main">{caption}</span>
        {subcaption && <span className="polaroid-caption-sub">{subcaption}</span>}
      </div>
    </div>
  )
}
