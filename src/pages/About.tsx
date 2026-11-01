import ArtworkPlaceholder from '../components/ArtworkPlaceholder'

export default function About() {
  return (
    <main className="page-main section-wrap">
      <div className="page-intro"><span className="eyebrow">THE PERSON BEHIND THE WORK</span><h1>Curious by nature,<br /><em>textile by choice.</em></h1><p>A little about my background, the way I see design and the things that keep me curious.</p></div>
      <div className="about-layout"><ArtworkPlaceholder label="Portrait or personal studio photograph" tone="sage" className="about-art" /><div className="about-copy"><span className="eyebrow">HELLO, I'M MAHI</span><h2>Finding stories in<br /><em>the details.</em></h2><p>I’m Mahi Patel, a textile design student at the National Institute of Fashion Technology (NIFT), Bhopal. I’m from Vadodara, Gujarat, and my practice is shaped by an interest in the relationship between heritage and contemporary creative exploration.</p><p>I’m drawn to craftsmanship, positive and negative space, and the ways textiles can carry stories. I enjoy exploring how traditional processes and material experiments can become part of a fresh visual language.</p><div className="education-card"><span className="eyebrow">EDUCATION</span><h3>National Institute of Fashion Technology</h3><p>Bachelor of Design · Textile Department</p><span className="education-date">August 2023 — May 2027 · Pursuing</span></div></div></div>
      <section className="about-values"><span className="eyebrow">WHAT GUIDES MY PRACTICE</span><div className="value-grid"><article><b>01</b><h3>Craft & process</h3><p>Learning through making, material exploration and attention to the hand-made.</p></article><article><b>02</b><h3>Tradition & change</h3><p>Looking at craft heritage as a living source for contemporary ideas.</p></article><article><b>03</b><h3>Stories & surfaces</h3><p>Finding visual narratives in nature, culture, everyday life and detail.</p></article></div></section>
    </main>
  )
}
