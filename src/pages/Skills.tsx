
import { Link } from 'react-router-dom'

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

// const clusters = [
//   {
//     slug: 'maheshwari-weaving',
//     title: 'Maheshwari Weaving',
//     place: 'Maheshwar',
//     label: 'Maheshwari weaving field exposure',
//     tone: 'clay' as const,
//   },
//   {
//     slug: 'batik',
//     title: 'Batik',
//     place: 'Ujjain',
//     label: 'Batik craft exposure',
//     tone: 'rose' as const,
//   },
//   {
//     slug: 'zari-zardozi',
//     title: 'Zari Zardozi',
//     place: 'Bhopal',
//     label: 'Zari Zardozi craft exposure',
//     tone: 'sage' as const,
//   },
// ]

const clusters = [
  {
    slug: 'maheshwari-weaving',
    title: 'Maheshwari Weaving',
    place: 'Maheshwar',
    image: '/images/skills%20and%20craft/blog%20carousel/maheshwar.jpeg',
  },
  {
    slug: 'batik',
    title: 'Batik',
    place: 'Ujjain',
    image: '/images/skills%20and%20craft/blog%20carousel/batik.jpeg',
  },
  {
    slug: 'zari-zardozi',
    title: 'Zari Zardozi',
    place: 'Bhopal',
    image: '/images/skills%20and%20craft/blog%20carousel/zari-zardozi.jpeg',
  },
]

const crafts = [
  {
    title: 'Mata Ni Pachedi — Ahmedabad',
    image: '/images/skills%20and%20craft/Mata%20ni%20pachedi.jpg',
  },
  {
    title: 'Patan Patola — Surendranagar',
    image: '/images/skills%20and%20craft/patola.jpg',
  },
  {
    title: 'Tangaliya — Surendranagar',
    image: '/images/skills%20and%20craft/Tangaliya.jpg',
  },
  {
    title: 'Bujodi weaving — Bhujodi',
    image: '/images/skills%20and%20craft/Bhujodi%20weaving.jpg',
  },
  {
    title: 'Ajrakh printing — Ajrakhpur',
    image: '/images/skills%20and%20craft/Ajrakh%20printing.jpg',
  },
  {
    title: 'Kharad weaving — Kukma',
    image: '/images/skills%20and%20craft/Kharad%20weaving.jpg',
  },
  {
    title: 'Beadwork — Bhuj',
    image: '/images/skills%20and%20craft/bead%20work.jpg',
  },
  {
    title: 'Nine hand embroideries of Kutch',
    image: '/images/skills%20and%20craft/9%20embroideries.jpg',
  },
  {
    title: 'Rogan art — Bhuj',
    image: '/images/skills%20and%20craft/Rogan%20art.jpg',
  },
  {
    title: 'Sironj Durries — Sironj',
    image: '/images/skills%20and%20craft/Sironj%20durries.jpeg',
  },
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
                <img
                  src={cluster.image}
                  alt={cluster.title}
                  loading="lazy"
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
          {crafts.map((craft) => (
            <article className="tradition-card" key={craft.title}>
              <div className="tradition-card-image">
                <img
                  src={craft.image}
                  alt={craft.title}
                  loading="lazy"
                />
              </div>
              <h3>{craft.title}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
