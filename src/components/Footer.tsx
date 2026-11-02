import { SiWhatsapp } from '@icons-pack/react-simple-icons'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
          <h2>Let’s make<br /><em>something meaningful.</em></h2>
        </div>

        <a
          className="round-link"
          href="https://wa.me/919081105923"
          target="_blank"
          rel="noreferrer"
          aria-label="Contact Mahi on WhatsApp"
        >

        <SiWhatsapp size={28} />

        </a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Mahi Patel</span>
        <span>Textile design · Vadodara / Bhopal</span>
        <a
          href="https://www.behance.net/mahipatel15"
          target="_blank"
          rel="noreferrer"
        >
          Behance <ArrowUpRight size={13} />
        </a>
      </div>
    </footer>
  )
}
