
import { ArrowUpRight, Send } from 'lucide-react'

export default function Contact() {
  return (
    <main className="page-main section-wrap contact-page">
      <span className="eyebrow">SAY HELLO</span>

      <h1>
        Good things start
        <br />
        with a <em>conversation.</em>
      </h1>

      <p className="contact-lede">
        For collaborations, opportunities or simply to talk about textiles,
        craft and ideas — I’d love to hear from you.
      </p>

      <div className="contact-links">

        <a
          className="contact-link"
          href="https://wa.me/919081105923"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <strong>Contact number</strong>
            <small>+91 9081105923</small>
            <span className="contact-description">
              Call me or text me at WhatsApp.
            </span>
          </span>
          <ArrowUpRight />
        </a>

        <a
          className="contact-link"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mahikpatel21%40gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <strong>Email</strong>
            <small>mahikpatel21@gmail.com</small>
            <span className="contact-description">
              For enquiries, collaborations and opportunities.
            </span>
          </span>
          <ArrowUpRight />
        </a>

        <a
          className="contact-link"
          href="https://www.behance.net/mahipatel15"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <strong>Behance</strong>
            <small>mahipatel15</small>
            <span className="contact-description">
              Explore more projects and portfolio work.
            </span>
          </span>
          <ArrowUpRight />
        </a>

      </div>

      <section className="contact-form-section">
        <span className="eyebrow">LET'S START A CONVERSATION</span>

        <h2>Leave me a <em>message.</em></h2>

        <p>
          Have something in mind? Share your thoughts, ideas or enquiries
          below.
        </p>

        <form
          className="contact-form"
          action="https://formsubmit.co/mahikpatel21@gmail.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New message from Mahi's Portfolio"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <input
            type="text"
            name="_honey"
            style={{ display: 'none' }}
          />

          <div className="form-field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-email">Your email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              placeholder="Write something..."
              required
            />
          </div>

          <button type="submit" className="button button-dark">
            Send message <Send size={16} />
          </button>
        </form>
      </section>
    </main>
  )
}
