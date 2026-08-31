import { useState } from 'react'
import { copy, formatCopy } from '../../content'
import type { ProjectImage } from '../../content/types'
import './ProjectImageCarousel.css'

export interface ProjectImageCarouselProps {
  readonly title: string
  readonly images: readonly ProjectImage[]
}

export function ProjectImageCarousel({ title, images }: ProjectImageCarouselProps) {
  const [index, setIndex] = useState(0)
  const image = images[index]
  const hasMultiple = images.length > 1

  if (!image) return null

  const goPrevious = () => {
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1))
  }

  const goNext = () => {
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1))
  }

  return (
    <div
      className="project-image-carousel"
      aria-label={formatCopy(copy.a11y.projectCarousel, { title })}
    >
      <img className="project-image-carousel__image" src={image.src} alt={image.alt} />
      {hasMultiple ? (
        <div className="project-image-carousel__controls">
          <button type="button" className="project-image-carousel__button" onClick={goPrevious}>
            {copy.projectCarousel.previous}
          </button>
          <span className="project-image-carousel__counter">
            {formatCopy(copy.projectCarousel.counter, {
              current: String(index + 1),
              total: String(images.length),
            })}
          </span>
          <button type="button" className="project-image-carousel__button" onClick={goNext}>
            {copy.projectCarousel.next}
          </button>
        </div>
      ) : null}
    </div>
  )
}
