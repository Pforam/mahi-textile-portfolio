
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


const galleryImagePaths: Record<string, string[]> = {
  vansutra: [
    '/images/project%20gallery/vansutra/IMG_9335.jpg',
    '/images/project%20gallery/vansutra/IMG_9346.jpg',
    '/images/project%20gallery/vansutra/IMG_9352.jpg',
    '/images/project%20gallery/vansutra/IMG_9356.jpg',
    '/images/project%20gallery/vansutra/IMG_9361.jpg',
    '/images/project%20gallery/vansutra/IMG-20260515-WA0109.jpg',
  ],

  bhoomiyo: [
    '/images/project%20gallery/Bhoomiyo/attractive-woman-street-sunglasses%20copy.png',
    '/images/project%20gallery/Bhoomiyo/hand%20print%20colorways_export_2.png',
    '/images/project%20gallery/Bhoomiyo/Khetdhani_export.png',
    '/images/project%20gallery/Bhoomiyo/Matodu_export.png',
    '/images/project%20gallery/Bhoomiyo/Pankhiaaru_export.png',
    '/images/project%20gallery/Bhoomiyo/bhoomiyo.png',
  ],


'weave-design': [
  '/images/project%20gallery/Burger/IMG_20251128_111744.jpg',
  '/images/project%20gallery/Burger/IMG_20251128_111930.jpg',
  '/images/project%20gallery/Burger/IMG_20251128_112049.jpg',
  '/images/project%20gallery/Burger/IMG_20251128_112121.jpg',
  '/images/project%20gallery/Burger/IMG_20251128_112132.jpg',
  '/images/project%20gallery/Burger/IMG_20251128_112216.jpg',
],


  parijat: [
    '/images/project%20gallery/parijat/DSC09137.JPG',
    '/images/project%20gallery/parijat/DSC09155.JPG',
    '/images/project%20gallery/parijat/DSC09186.JPG',
    '/images/project%20gallery/parijat/DSC09219.JPG',
    '/images/project%20gallery/parijat/DSC09221.JPG',
    '/images/project%20gallery/parijat/DSC09253.JPG',
  ],

  'veil-of-the-wild': [
    '/images/project%20gallery/Veil%20of%20the%20wild/20251217_163716.png',
    '/images/project%20gallery/Veil%20of%20the%20wild/WhatsApp%20Image%202025-12-18%20at%2019.59.42%20(1).png',
    '/images/project%20gallery/Veil%20of%20the%20wild/WhatsApp%20Image%202025-12-18%20at%2019.59.42.png',
    '/images/project%20gallery/Veil%20of%20the%20wild/WhatsApp%20Image%202025-12-18%20at%2019.59.43%20(1).png',
    '/images/project%20gallery/Veil%20of%20the%20wild/WhatsApp%20Image%202025-12-18%20at%2019.59.43%20(2).png',
    '/images/project%20gallery/Veil%20of%20the%20wild/WhatsApp%20Image%202025-12-18%20at%2019.59.43.png',
  ],
}


function ProcessCarousel({
  label,
  processIndex,
}: {
  label: string
  processIndex: number
}) {
  // Replace these placeholder entries with as many real image paths as needed.
  const images = Array.from(
    { length: 3 },
    (_, index) => `${label} — Image ${index + 1}`,
  )

  // Duplicate the images to create a seamless continuous loop.
  const movingImages = [...images, ...images]

  return (
    <div
      className={`process-carousel ${processIndex % 2 === 1 ? 'reverse' : ''}`}
      aria-label={`Image carousel for ${label}`}
    >
      <div className="process-carousel-track">
        {movingImages.map((image, index) => (
          <div
            className="process-carousel-item"
            key={`${image}-${index}`}
            aria-hidden={index >= images.length}
          >
            <ArtworkPlaceholder
              label={image}
              tone={tones[index % tones.length]}
              className="process-carousel-image"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) return <Navigate to="/work" replace />

  const gallery = galleryProjects[project.slug]
  const galleryImages = galleryImagePaths[project.slug]

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

              <ProcessCarousel
                label={section.imageLabel}
                processIndex={index}
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
              <div className="project-gallery-item" key={label}>
                {galleryImages?.[index] ? (
                  <img
                    src={galleryImages[index]}
                    alt={label}
                    className="project-gallery-image"
                    loading="lazy"
                  />
                ) : (
                  <ArtworkPlaceholder
                    label={label}
                    tone={tones[index % tones.length]}
                    className="project-gallery-image"
                  />
                )}
              </div>
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
