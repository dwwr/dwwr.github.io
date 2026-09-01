import { useEffect, useRef } from 'react'
import { copy, formatCopy } from '../../content'
import type { ProjectImage } from '../../content/types'
import { ProjectImageCarouselView } from './ProjectImageCarouselView'
import './ProjectImageLightbox.css'

export interface ProjectImageLightboxProps {
  readonly open: boolean
  readonly title: string
  readonly images: readonly ProjectImage[]
  readonly index: number
  readonly onClose: () => void
  readonly onPrevious: () => void
  readonly onNext: () => void
}

export function ProjectImageLightbox({
  open,
  title,
  images,
  index,
  onClose,
  onPrevious,
  onNext,
}: ProjectImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const hasMultiple = images.length > 1

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) {
      dialog.showModal()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    if (!open || !hasMultiple) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onPrevious()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        onNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, hasMultiple, onPrevious, onNext])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      className="project-image-lightbox"
      aria-label={formatCopy(copy.a11y.projectLightbox, { title })}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose()
      }}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
    >
      <div
        className="project-image-lightbox__inner"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="project-image-lightbox__carousel-wrap">
          <ProjectImageCarouselView
            title={title}
            images={images}
            index={index}
            variant="lightbox"
            onPrevious={onPrevious}
            onNext={onNext}
            onImageClick={onClose}
          />
        </div>
      </div>
    </dialog>
  )
}
