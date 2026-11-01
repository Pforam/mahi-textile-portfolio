const skills = [
  { title: 'Textile & design', items: ['Print design', 'Surface design', 'Embroidery', 'Tie-dye', 'Batik', 'Patchwork', 'Weave design', 'Crochet', 'Sketching', 'Painting', 'Digital illustration', 'Graphic design'] },
  { title: 'Software', items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Poincarre', 'Sketchbook Pro', 'Microsoft Office'] },
]
const clusters = [
  ['Maheshwari weaving', 'Maheshwar'], ['Sironj durries', 'Sironj'], ['Batik', 'Ujjain'], ['Zari Zardozi', 'Bhopal'],
]
const crafts = ['Mata Ni Pachedi — Ahmedabad', 'Patan Patola — Surendranagar', 'Tangaliya — Surendranagar', 'Bujodi weaving — Bhujodi', 'Ajrakh printing — Ajrakhpur', 'Kharad weaving — Kukma', 'Beadwork — Bhuj', 'Nine hand embroideries of Kutch', 'Rogan art — Bhuj']
export default function Skills() {
  return (
    <main className="page-main section-wrap">
      <div className="page-intro"><span className="eyebrow">MATERIALS, METHODS & TOOLS</span><h1>Learning through<br /><em>making.</em></h1><p>A growing toolkit shaped by studio practice, experimentation and exposure to craft traditions.</p></div>
      <div className="skills-grid">{skills.map((group, index) => <section className="skills-panel" key={group.title}><span className="eyebrow">0{index + 1} / PRACTICE</span><h2>{group.title}</h2><div className="tag-cloud">{group.items.map((item) => <span key={item}>{item}</span>)}</div></section>)}</div>
      <section className="craft-learning"><div className="section-heading"><div><span className="eyebrow">LEARNING FROM PLACE</span><h2>Craft-cluster <em>exposure.</em></h2></div></div><div className="cluster-grid">{clusters.map(([craft, place], index) => <article key={craft}><span>0{index + 1}</span><h3>{craft}</h3><p>{place}</p></article>)}</div></section>
      <section className="craft-learning handcraft-section"><span className="eyebrow">HANDCRAFT KNOWLEDGE & UNDERSTANDING</span><h2>Traditions worth<br /><em>understanding.</em></h2><p className="section-lede">A selection of Indian craft traditions explored through learning and exposure. These are presented as areas of understanding, not claims of mastery.</p><div className="handcraft-list">{crafts.map((craft) => <span key={craft}>{craft}</span>)}</div></section>
    </main>
  )
}
