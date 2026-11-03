
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import ArtworkPlaceholder from './ArtworkPlaceholder'

const tones = ['sand', 'clay', 'sage', 'rose'] as const

const projectImages: Record<string, string> = {
  vansutra: '/images/hero/Vansutra.jpg',
  parijat: '/images/hero/parijat.jpg',
  'veil-of-the-wild': '/images/hero/Veil of the wild 1.png',
  bhoomiyo: '/images/hero/Bhoomiyo 2.png',
  'weave-design': '/images/hero/burger.jpg',
  'surface-experiments': '/images/work cover pages/Surface experiment.jpg',
  photography: '/images/work cover pages/photography.jpg',
}

export default function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const image = projectImages[project.slug]

  return (
    <Link to={`/work/${project.slug}`} className="project-card">
      <div className="project-card-image">
        {image ? (
          <img
            src={image}
            alt={`${project.title} — project cover`}
            loading="lazy"
          />
        ) : (
          <ArtworkPlaceholder
            label={`${project.title} — cover image`}
            tone={tones[index % tones.length]}
          />
        )}

        <span className="card-arrow">
          <ArrowUpRight size={20} />
        </span>
      </div>

      <div className="project-card-meta">
        <span>{project.category}</span>
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.summary}</p>
    </Link>
  )
}
