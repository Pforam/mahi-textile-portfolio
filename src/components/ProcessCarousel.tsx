
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ArtworkPlaceholder from './ArtworkPlaceholder'

type Slide = {
  label: string
  src?: string
}

type Props = {
  slides: Slide[]
  tone?: 'sand' | 'clay' | 'sage' | 'rose'
}

export default function ProcessCarousel({ slides, tone = 'sand' }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 3500)

    return () => window.clearInterval(timer)
  }, [slides.length, isPaused])

  useEffect(() => {
    setActiveIndex(0)
  }, [slides.length])

  if (!slides.length) return null

  const previousSlide = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length)
  }

  const currentSlide = slides[activeIndex]

  return (
    <div
      className="process-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="process-carousel-frame">
        {currentSlide.src ? (
          <img
            className="process-carousel-photo"
            src={currentSlide.src}
            alt={currentSlide.label}
          />
        ) : (
          <ArtworkPlaceholder
            label={currentSlide.label}
            tone={tone}
            className="process-carousel-photo"
          />
        )}
      </div>

      {slides.length > 1 && (
        <div className="process-carousel-controls">
          <button
            type="button"
            className="process-carousel-arrow"
            onClick={previousSlide}
            aria-label="Previous image"
          >
            <ChevronLeft size={19} />
          </button>

          <div className="process-carousel-indicators">
            {slides.map((slide, index) => (
              <button
                type="button"
                key={`${slide.label}-${index}`}
                className={
                  activeIndex === index
                    ? 'process-carousel-dot active'
                    : 'process-carousel-dot'
                }
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={activeIndex === index ? 'true' : undefined}
              />
            ))}
          </div>

          <span className="process-carousel-count">
            {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>

          <button
            type="button"
            className="process-carousel-arrow"
            onClick={nextSlide}
            aria-label="Next image"
          >
            <ChevronRight size={19} />
          </button>
        </div>
      )}
    </div>
  )
}
