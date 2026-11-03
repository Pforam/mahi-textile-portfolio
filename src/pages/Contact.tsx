import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight, Send } from 'lucide-react'

// Create a free form at https://formspree.io, then copy its endpoint ID
// (the part after /f/ in https://formspree.io/f/xxxxxxxx).
// Store it in a .env file as: VITE_FORMSPREE_ID=xxxxxxxx
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!FORMSPREE_ID) {
      setStatus('error')
      setErrorMessage('The form is not configured yet. Please email me directly.')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)

    // Spam trap: real visitors never fill this hidden field.
    if (formData.get('_gotcha')) return

    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        const result = await response.json().catch(() => null)
        const detail = result?.errors
          ?.map((e: { message: string }) => e.message)
          .join(', ')
        setStatus('error')
        setErrorMessage(detail || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

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

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Honeypot field for bots (Formspree discards submissions that fill it) */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
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

          <button
            type="submit"
            className="button button-dark"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}{' '}
            <Send size={16} />
          </button>

          {status === 'success' && (
            <p className="form-status form-status-success" role="status">
              Thank you! Your message has been sent. I’ll get back to you soon.
            </p>
          )}

          {status === 'error' && (
            <p className="form-status form-status-error" role="alert">
              {errorMessage}
            </p>
          )}
        </form>
      </section>
    </main>
  )
}
