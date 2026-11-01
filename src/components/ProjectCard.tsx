import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import ArtworkPlaceholder from './ArtworkPlaceholder'

const tones = ['sand', 'clay', 'sage', 'rose'] as const
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link to={`/work/${project.slug}`} className="project-card">
      <div className="project-card-image">
        <ArtworkPlaceholder label={`${project.title} — cover image`} tone={tones[index % tones.length]} />
        <span className="card-arrow"><ArrowUpRight size={20} /></span>
      </div>
      <div className="project-card-meta"><span>{project.category}</span><span>{String(index + 1).padStart(2, '0')}</span></div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
    </Link>
  )
}
