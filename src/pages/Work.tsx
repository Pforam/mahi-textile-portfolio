import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { categories, projects } from '../data/projects'

export default function Work() {
  const [active, setActive] = useState('All')
  const filtered = useMemo(() => active === 'All' ? projects : projects.filter((project) => project.category === active), [active])
  return (
    <main className="page-main section-wrap">
      <div className="page-intro"><span className="eyebrow">THE PORTFOLIO</span><h1>Ideas take<br /><em>many forms.</em></h1><p>A collection of explorations in print, surface, weave, craft and visual storytelling.</p></div>
      <div className="filter-row" aria-label="Filter projects">{categories.map((category) => <button key={category} className={active === category ? 'filter-chip active' : 'filter-chip'} onClick={() => setActive(category)} aria-pressed={active === category}>{category}</button>)}</div>
      <div className="project-grid">{filtered.map((project) => <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} />)}</div>
      {filtered.length === 0 && <p className="empty-state">No projects in this category yet.</p>}
    </main>
  )
}
