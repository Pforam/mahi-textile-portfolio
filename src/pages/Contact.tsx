import { ArrowUpRight, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <main className="page-main section-wrap contact-page">
      <span className="eyebrow">SAY HELLO</span><h1>Good things start<br />with a <em>conversation.</em></h1>
      <p className="contact-lede">For collaborations, opportunities or simply to talk about textiles, craft and ideas — I’d love to hear from you.</p>
      <div className="contact-links"><a className="contact-link" href="mailto:hello@example.com"><span><Mail size={18} /> Email <small>Replace with Mahi’s approved public email</small></span><ArrowUpRight /></a><a className="contact-link" href="https://www.behance.net/mahipatel15" target="_blank" rel="noreferrer"><span>Behance <small>Explore more projects and portfolio work</small></span><ArrowUpRight /></a></div>
      <p className="contact-footnote">Email is currently a placeholder and must be replaced before launch.</p>
    </main>
  )
}
