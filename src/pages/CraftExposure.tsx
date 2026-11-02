
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import ArtworkPlaceholder from '../components/ArtworkPlaceholder'

const exposureData = {
  'maheshwari-weaving': {
    title: 'Maheshwari Weaving',
    place: 'Maheshwar, Madhya Pradesh',
    eyebrow: 'WEAVING · TEXTILE HERITAGE · FIELD EXPOSURE',
    intro:
      'An exploration of Maheshwar and its weaving tradition. This space will document field observations, photographs and learning from the craft cluster.',
    sections: [
      {
        number: '01',
        heading: 'The place & its craft',
        text: 'Field notes and observations about the craft cluster will be added here.',
      },
      {
        number: '02',
        heading: 'Process & practice',
        text: 'Photographs and documentation of the weaving process will be added here.',
      },
      {
        number: '03',
        heading: 'Learning & reflections',
        text: 'Personal observations and reflections from the field experience will be added here.',
      },
    ],
    galleryLabels: [
      'The craft and its surroundings',
      'Tools and materials',
      'The making process',
      'Details and textures',
      'People and practice',
      'Field observations',
    ],
  },
  batik: {
    title: 'Batik',
    place: 'Ujjain, Madhya Pradesh',
    eyebrow: 'RESIST DYEING · SURFACE DESIGN · FIELD EXPOSURE',
    intro:
      'An exploration of Batik and its practice in Ujjain. This space will document field observations, photographs and learning from the craft cluster.',
    sections: [
      {
        number: '01',
        heading: 'The place & its craft',
        text: 'Field notes and observations about the craft cluster will be added here.',
      },
      {
        number: '02',
        heading: 'Process & practice',
        text: 'Photographs and documentation of the Batik process will be added here.',
      },
      {
        number: '03',
        heading: 'Learning & reflections',
        text: 'Personal observations and reflections from the field experience will be added here.',
      },
    ],
    galleryLabels: [
      'The craft and its surroundings',
      'Tools and materials',
      'Wax application',
      'Dyeing process',
      'Surface details',
      'Field observations',
    ],
  },
  'zari-zardozi': {
    title: 'Zari Zardozi',
    place: 'Bhopal, Madhya Pradesh',
    eyebrow: 'EMBROIDERY · SURFACE CRAFT · FIELD EXPOSURE',
    intro:
      'An exploration of Zari Zardozi and its practice in Bhopal. This space will document field observations, photographs and learning from the craft cluster.',
    sections: [
      {
        number: '01',
        heading: 'The place & its craft',
        text: 'Field notes and observations about the craft cluster will be added here.',
      },
      {
        number: '02',
        heading: 'Process & practice',
        text: 'Photographs and documentation of the embroidery process will be added here.',
      },
      {
        number: '03',
        heading: 'Learning & reflections',
        text: 'Personal observations and reflections from the field experience will be added here.',
      },
    ],
    galleryLabels: [
      'The craft and its surroundings',
      'Tools and materials',
      'Embroidery in progress',
      'Stitches and details',
      'Materials and embellishments',
      'Field observations',
    ],
  },
}

export default function CraftExposure() {
  const { slug } = useParams()
  const craft = slug
    ? exposureData[slug as keyof typeof exposureData]
    : undefined

  if (!craft) {
    return (
      <main className="page-main section-wrap">
        <h1>Craft exposure not found.</h1>
        <Link className="text-link" to="/skills">
          Back to Skills & Craft <ArrowUpRight size={14} />
        </Link>
      </main>
    )
  }

  return (
    <main className="craft-exposure-page">
      <div className="section-wrap">
        <Link to="/skills" className="craft-back-link">
          <ArrowLeft size={15} /> Back to Skills & Craft
        </Link>

        <header className="craft-exposure-header">
          <span className="eyebrow">{craft.eyebrow}</span>
          <h1>{craft.title.split(' ').map((word, index) => (
            <span key={word}>
              {index === craft.title.split(' ').length - 1 ? (
                <em>{word}</em>
              ) : (
                `${word} `
              )}
            </span>
          ))}</h1>
          <p className="craft-exposure-location">{craft.place}</p>
          <p className="craft-exposure-intro">{craft.intro}</p>
        </header>

        <div className="craft-exposure-hero">
          <ArtworkPlaceholder
            label={`${craft.title} — featured field photograph`}
            tone="clay"
          />
          <span className="craft-image-caption">
            FIELD NOTES · {craft.place.toUpperCase()}
          </span>
        </div>

        <section className="craft-story">
          <div className="craft-story-aside">
            <span className="eyebrow">DOCUMENTING THE EXPERIENCE</span>
            <p>Place, people, process and practice.</p>
          </div>

          <div className="craft-story-content">
            {craft.sections.map((section) => (
              <article className="craft-story-section" key={section.number}>
                <span className="eyebrow">{section.number} / FIELD NOTES</span>
                <h2>{section.heading}</h2>
                <p>{section.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="craft-exposure-gallery">
          <div className="section-heading">
            <div>
              <span className="eyebrow">A VISUAL DOCUMENTATION</span>
              <h2>Through the <em>lens.</em></h2>
            </div>
          </div>

          <div className="craft-gallery-grid">
            {craft.galleryLabels.map((label, index) => (
              <figure className="craft-gallery-item" key={label}>
                <ArtworkPlaceholder
                  label={label}
                  tone={(['clay', 'sage', 'rose'] as const)[index % 3]}
                />
                <figcaption>
                  <span>0{index + 1}</span>
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="craft-exposure-bottom">
          <Link to="/skills" className="text-link">
            <ArrowLeft size={14} /> Explore more crafts
          </Link>
        </div>
      </div>
    </main>
  )
}
