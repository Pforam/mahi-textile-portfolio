type Props = { label: string; tone?: 'sand' | 'clay' | 'sage' | 'rose'; className?: string }

export default function ArtworkPlaceholder({ label, tone = 'sand', className = '' }: Props) {
  return (
    <div className={`artwork-placeholder tone-${tone} ${className}`} role="img" aria-label={`${label}. Original portfolio image to be added.`}>
      <span className="artwork-mark" aria-hidden="true">✳</span>
      <span className="artwork-label">{label}</span>
      <span className="artwork-note">Original artwork image to be added</span>
    </div>
  )
}
