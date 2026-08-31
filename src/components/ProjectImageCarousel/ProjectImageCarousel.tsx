import { useEffect, useState } from 'react'
import { copy, formatCopy } from '../../content'
import type { ProjectImage } from '../../content/types'
import './ProjectImageCarousel.css'

const AUTO_ADVANCE_MS = 3000

export interface ProjectImageCarouselProps {
  readonly title: string
  readonly images: readonly ProjectImage[]
}

function ChevronLeftIcon() {
  return (
    <svg className="project-image-carousel__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg className="project-image-carousel__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function ProjectImageCarousel({ title, images }: ProjectImageCarouselProps) {
  const [index, setIndex] = useState(0)
  const image = images[index]
  const hasMultiple = images.length > 1

  const goPrevious = () => {
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1))
  }

  const goNext = () => {
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1))
  }

  useEffect(() => {
    if (!hasMultiple) return

    const intervalId = window.setInterval(() => {
      setIndex((current) => (current === images.length - 1 ? 0 : current + 1))
    }, AUTO_ADVANCE_MS)

    return () => window.clearInterval(intervalId)
  }, [hasMultiple, images.length, index])

  if (!image) return null

  return (
    <div
      className="project-image-carousel"
      aria-label={formatCopy(copy.a11y.projectCarousel, { title })}
    >
      {hasMultiple ? (
        <button
          type="button"
          className="project-image-carousel__nav project-image-carousel__nav--prev"
          aria-label={copy.projectCarousel.previous}
          onClick={goPrevious}
        >
          <ChevronLeftIcon />
        </button>
      ) : null}

      <div className="project-image-carousel__viewport">
        <img className="project-image-carousel__image" src={image.src} alt={image.alt} />
        {hasMultiple ? (
          <span className="project-image-carousel__counter">
            {formatCopy(copy.projectCarousel.counter, {
              current: String(index + 1),
              total: String(images.length),
            })}
          </span>
        ) : null}
      </div>

      {hasMultiple ? (
        <button
          type="button"
          className="project-image-carousel__nav project-image-carousel__nav--next"
          aria-label={copy.projectCarousel.next}
          onClick={goNext}
        >
          <ChevronRightIcon />
        </button>
      ) : null}
    </div>
  )
}
