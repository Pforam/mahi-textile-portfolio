
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ArtworkPlaceholder from '../components/ArtworkPlaceholder'
import { projects } from '../data/projects'

const tones = ['sand', 'clay', 'sage', 'rose'] as const

const galleryProjects: Record<string, string[]> = {
  vansutra: [
    'Vansutra — Project overview',
    'Vansutra — Design development',
    'Vansutra — Motif details',
    'Vansutra — Textile experiments',
    'Vansutra — Cushion collection',
    'Vansutra — Final presentation',
  ],
  parijat: [
    'Parijat — Project overview',
    'Parijat — Botanical inspiration',
    'Parijat — Motif development',
    'Parijat — Batik experiments',
    'Parijat — Garment outcomes',
    'Parijat — Final collection',
  ],
  'veil-of-the-wild': [
    'Veil of the Wild — Project overview',
    'Veil of the Wild — Initial drawings',
    'Veil of the Wild — Motif development',
    'Veil of the Wild — Digital prints',
    'Veil of the Wild — Home textiles',
    'Veil of the Wild — Final presentation',
  ],
  bhoomiyo: [
    'Bhoomiyo — Project overview',
    'Bhoomiyo — Research and inspiration',
    'Bhoomiyo — Hands-on prints',
    'Bhoomiyo — Digital prints',
    'Bhoomiyo — Colourways',
    'Bhoomiyo — Final presentation',
  ],
  'weave-design': [
    'Burger — Project overview',
    'Burger — Concept development',
    'Burger — Weave experiments',
    'Burger — Structure samples',
    'Burger — Material details',
    'Burger — Final presentation',
  ],
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) return <Navigate to="/work" replace />

  const gallery = galleryProjects[project.slug]

  return (
    <main className="project-detail section-wrap">
      <Link to="/work" className="back-link">
        <ArrowLeft size={15} /> All projects
      </Link>

      <header className="detail-header">
        <span className="eyebrow">
          {project.category} · {project.eyebrow}
        </span>
        <h1>
          {project.title}<span className="title-period">.</span>
        </h1>
        <p>{project.description}</p>
        {project.group && (
          <span className="collab-note">
            Group assignment · Collaborative project
          </span>
        )}
      </header>

      <ArtworkPlaceholder
        label={`${project.title} — main project image`}
        tone="clay"
        className="detail-hero-art"
      />

      <div className="detail-content">
        <aside className="detail-aside">
          <span className="eyebrow">PROJECT PALETTE</span>
          <div className="palette">
            {project.palette.map((color) => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
          <span className="eyebrow detail-aside-label">PROJECT NOTES</span>
          <p>{project.eyebrow}</p>
        </aside>

        <div className="detail-story">
          {project.sections.map((section, index) => (
            <section className="story-section" key={section.heading}>
              <div className="story-copy">
                <span className="eyebrow">
                  {String(index + 1).padStart(2, '0')} / THE PROCESS
                </span>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
              <ArtworkPlaceholder
                label={section.imageLabel}
                tone={tones[index % tones.length]}
                className="story-art"
              />
            </section>
          ))}
        </div>
      </div>

      {gallery && (
        <section className="project-gallery">
          <div className="project-gallery-heading">
            <span className="eyebrow">A CLOSER LOOK</span>
            <h2>Project <em>Gallery.</em></h2>
            <p>A visual collection of the process, details and final outcomes.</p>
          </div>

          <div className="project-gallery-grid">
            {gallery.map((label, index) => (
              <figure className="project-gallery-item" key={label}>
                <ArtworkPlaceholder
                  label={label}
                  tone={tones[index % tones.length]}
                  className="project-gallery-image"
                />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <div className="detail-next">
        <span className="eyebrow">MORE TO EXPLORE</span>
        <Link to="/work" className="text-link">
          Back to all projects <ArrowUpRight size={14} />
        </Link>
      </div>
    </main>
  )
}
