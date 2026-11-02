
import ArtworkPlaceholder from '../components/ArtworkPlaceholder'

const guidingPrinciples = [
  {
    number: '01',
    title: 'Inspiration and research',
    description:
      'Finding inspiration in everyday surroundings, cultural narratives, traditional crafts and the details of the world around me.',
  },
  {
    number: '02',
    title: 'Creative Exploration',
    description:
      'Experimenting with colours, materials, techniques and ideas to discover unexpected possibilities through hands-on exploration.',
  },
  {
    number: '03',
    title: 'Stories and surfaces',
    description:
      'Translating thoughts, memories and inspirations into visual narratives through patterns, textures, colours and surface expressions.',
  },
  {
    number: '04',
    title: 'Crafts and process',
    description:
      'Learning from traditional craftsmanship, exploring material processes and celebrating the beauty of making things by hand.',
  },
  {
    number: '05',
    title: 'Curiosity and discovery',
    description:
      'Embracing continuous learning, asking questions and finding new perspectives that allow ideas to evolve into meaningful creations.',
  },
]

const galleryItems = [
  'Textile explorations',
  'Craft and details',
  'Creative process',
  'Surface experiments',
  'Inspiration and research',
  'Material studies',
]

export default function About() {
  return (
    <main className="page-main section-wrap">
      <div className="page-intro">
        <span className="eyebrow">THE PERSON BEHIND THE WORK</span>
        <h1>Curious by nature,<br /><em>textile by choice.</em></h1>
        <p>A little about my background, the way I see design and the things that keep me curious.</p>
      </div>

      <div className="about-layout">
        <ArtworkPlaceholder
          label="Portrait or personal studio photograph"
          tone="sage"
          className="about-art"
        />

        <div className="about-copy">
          <span className="eyebrow">HELLO, I'M MAHI</span>
          <h2>Finding stories in<br /><em>the details.</em></h2>
          <p>
            I’m Mahi Patel, a textile design student at the National Institute
            of Fashion Technology (NIFT), Bhopal. I’m from Vadodara, Gujarat,
            and my practice is shaped by an interest in the relationship
            between heritage and contemporary creative exploration.
          </p>
          <p>
            I’m drawn to craftsmanship, positive and negative space, and the
            ways textiles can carry stories. I enjoy exploring how traditional
            processes and material experiments can become part of a fresh
            visual language.
          </p>

          <div className="education-card">
            <span className="eyebrow">EDUCATION</span>
            <h3>National Institute of Fashion Technology</h3>
            <p>Bachelor of Design · Textile Department</p>
            <span className="education-date">
              August 2023 — May 2027 · Pursuing
            </span>
          </div>
        </div>
      </div>

      <section className="about-values">
        <span className="eyebrow">WHAT GUIDES MY PRACTICE</span>
        <div className="value-grid">
          {guidingPrinciples.map((principle) => (
            <article key={principle.number}>
              <b>{principle.number}</b>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-gallery">
        <div className="about-gallery-heading">
          <span className="eyebrow">A GLIMPSE INTO MY WORLD</span>
          <h2>Collected moments &<br /><em>creative explorations.</em></h2>
        </div>

        <div className="about-marquee">
          <div className="about-marquee-track">
            {[...galleryItems, ...galleryItems].map((label, index) => (
              <div className="about-gallery-item" key={`${label}-${index}`}>
                <ArtworkPlaceholder
                  label={label}
                  tone={(['sage', 'clay', 'rose'] as const)[index % 3]}
                  className="about-gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
