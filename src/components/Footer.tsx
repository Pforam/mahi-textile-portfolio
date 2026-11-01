import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div><span className="eyebrow">HAVE A PROJECT IN MIND?</span><h2>Let’s make<br /><em>something meaningful.</em></h2></div>
        <a className="round-link" href="mailto:hello@example.com" aria-label="Email Mahi (replace with approved email)"><ArrowUpRight size={28} /></a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Mahi Patel</span>
        <span>Textile design · Vadodara / Bhopal</span>
        <a href="https://www.behance.net/mahipatel15" target="_blank" rel="noreferrer">Behance <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  )
}
