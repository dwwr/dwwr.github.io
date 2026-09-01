import type { RefObject } from 'react'
import { copy, formatCopy } from '../../content'
import type { ProjectImage } from '../../content/types'
import './ProjectImageCarousel.css'

export type ProjectImageCarouselVariant = 'inline' | 'lightbox'

export interface ProjectImageCarouselViewProps {
  readonly title: string
  readonly images: readonly ProjectImage[]
  readonly index: number
  readonly variant?: ProjectImageCarouselVariant
  readonly onPrevious: () => void
  readonly onNext: () => void
  readonly onImageClick?: () => void
  readonly imageButtonRef?: RefObject<HTMLButtonElement | null>
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

export function ProjectImageCarouselView({
  title,
  images,
  index,
  variant = 'inline',
  onPrevious,
  onNext,
  onImageClick,
  imageButtonRef,
}: ProjectImageCarouselViewProps) {
  const image = images[index]
  const hasMultiple = images.length > 1

  if (!image) return null

  return (
    <div
      className={`project-image-carousel project-image-carousel--${variant}`}
      aria-label={formatCopy(copy.a11y.projectCarousel, { title })}
    >
      {hasMultiple ? (
        <button
          type="button"
          className="project-image-carousel__nav project-image-carousel__nav--prev"
          aria-label={copy.projectCarousel.previous}
          onClick={onPrevious}
        >
          <ChevronLeftIcon />
        </button>
      ) : null}

      <div className="project-image-carousel__viewport">
        {onImageClick ? (
          <button
            ref={imageButtonRef}
            type="button"
            className="project-image-carousel__image-button"
            aria-label={
              variant === 'lightbox'
                ? copy.projectCarousel.closeLightbox
                : copy.projectCarousel.openLightbox
            }
            onClick={onImageClick}
          >
            <img className="project-image-carousel__image" src={image.src} alt="" />
          </button>
        ) : (
          <div className="project-image-carousel__image-shell">
            <img
              className="project-image-carousel__image"
              src={image.src}
              alt={image.alt}
            />
          </div>
        )}
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
          onClick={onNext}
        >
          <ChevronRightIcon />
        </button>
      ) : null}
    </div>
  )
}
