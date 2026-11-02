
import { Link } from 'react-router-dom'
import ArtworkPlaceholder from '../components/ArtworkPlaceholder'

const skills = [
  {
    title: 'Textile & design',
    items: [
      'Print design',
      'Surface design',
      'Embroidery',
      'Tie-dye',
      'Batik',
      'Hand painting',
      'Weave design',
      'Natural dyeing',
      'Sketching',
      'Painting',
      'Digital illustration',
      'Graphic design',
    ],
  },
  {
    title: 'Software',
    items: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe InDesign',
      'Poincarre',
      'Sketchbook Pro',
      'Microsoft Office',
    ],
  },
]

const clusters = [
  {
    slug: 'maheshwari-weaving',
    title: 'Maheshwari Weaving',
    place: 'Maheshwar',
    label: 'Maheshwari weaving field exposure',
    tone: 'clay' as const,
  },
  {
    slug: 'batik',
    title: 'Batik',
    place: 'Ujjain',
    label: 'Batik craft exposure',
    tone: 'rose' as const,
  },
  {
    slug: 'zari-zardozi',
    title: 'Zari Zardozi',
    place: 'Bhopal',
    label: 'Zari Zardozi craft exposure',
    tone: 'sage' as const,
  },
]

const crafts = [
  'Mata Ni Pachedi — Ahmedabad',
  'Patan Patola — Surendranagar',
  'Tangaliya — Surendranagar',
  'Bujodi weaving — Bhujodi',
  'Ajrakh printing — Ajrakhpur',
  'Kharad weaving — Kukma',
  'Beadwork — Bhuj',
  'Nine hand embroideries of Kutch',
  'Rogan art — Bhuj',
  'Sironj Durries — Sironj',
]

export default function Skills() {
  return (
    <main className="page-main section-wrap">
      <div className="page-intro">
        <span className="eyebrow">MATERIALS, METHODS & TOOLS</span>
        <h1>
          Learning through
          <br />
          <em>making.</em>
        </h1>
        <p>
          A growing toolkit shaped by studio practice, experimentation and
          exposure to craft traditions.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((group, index) => (
          <section className="skills-panel" key={group.title}>
            <span className="eyebrow">0{index + 1} / PRACTICE</span>
            <h2>{group.title}</h2>
            <div className="tag-cloud">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="craft-learning">
        <div className="section-heading">
          <div>
            <span className="eyebrow">LEARNING FROM PLACE</span>
            <h2>
              Craft-cluster <em>exposure.</em>
            </h2>
          </div>
        </div>

        <p className="section-lede">
          Field experiences and observations from traditional craft clusters,
          exploring the people, processes and techniques behind each craft.
        </p>

        <div className="cluster-card-grid">
          {clusters.map((cluster, index) => (
            <Link
              className="cluster-card"
              to={`/craft-exposure/${cluster.slug}`}
              key={cluster.slug}
            >
              <div className="cluster-card-image">
                <ArtworkPlaceholder
                  label={cluster.label}
                  tone={cluster.tone}
                />
                <span className="cluster-card-number">
                  0{index + 1}
                </span>
              </div>

              <div className="cluster-card-info">
                <h3>{cluster.title}</h3>
                <p>{cluster.place}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="craft-learning handcraft-section">
        <span className="eyebrow">
          HANDCRAFT KNOWLEDGE & UNDERSTANDING
        </span>

        <h2>
          Traditions worth
          <br />
          <em>understanding.</em>
        </h2>

        <p className="section-lede">
          A selection of Indian craft traditions explored through learning
          and exposure. These are presented as areas of understanding, not
          claims of mastery.
        </p>

        <div className="tradition-card-grid">
          {crafts.map((craft, index) => (
            <article className="tradition-card" key={craft}>
              <div className="tradition-card-image">
                <ArtworkPlaceholder
                  label={`Craft tradition ${index + 1}`}
                  tone={(['clay', 'sage', 'rose'] as const)[index % 3]}
                />
              </div>
              <h3>{craft}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
