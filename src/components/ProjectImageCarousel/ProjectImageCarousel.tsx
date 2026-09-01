import { useCallback, useEffect, useRef, useState } from 'react'
import type { ProjectImage } from '../../content/types'
import { ProjectImageCarouselView } from './ProjectImageCarouselView'
import { ProjectImageLightbox } from './ProjectImageLightbox'

const AUTO_ADVANCE_MS = 3000

export interface ProjectImageCarouselProps {
  readonly title: string
  readonly images: readonly ProjectImage[]
}

export function ProjectImageCarousel({ title, images }: ProjectImageCarouselProps) {
  const [index, setIndex] = useState(0)
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const imageButtonRef = useRef<HTMLButtonElement>(null)
  const hasMultiple = images.length > 1

  const goPrevious = useCallback(() => {
    setAutoPlayEnabled(true)
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1))
  }, [images.length])

  const goNext = useCallback(() => {
    setAutoPlayEnabled(true)
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1))
  }, [images.length])

  const openLightbox = () => {
    setLightboxOpen(true)
  }

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    imageButtonRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!hasMultiple || !autoPlayEnabled || lightboxOpen) return

    const intervalId = window.setInterval(() => {
      setIndex((current) => (current === images.length - 1 ? 0 : current + 1))
    }, AUTO_ADVANCE_MS)

    return () => window.clearInterval(intervalId)
  }, [autoPlayEnabled, hasMultiple, images.length, index, lightboxOpen])

  if (images.length === 0) return null

  return (
    <>
      <ProjectImageCarouselView
        title={title}
        images={images}
        index={index}
        variant="inline"
        onPrevious={goPrevious}
        onNext={goNext}
        onImageClick={openLightbox}
        imageButtonRef={imageButtonRef}
      />

      <ProjectImageLightbox
        open={lightboxOpen}
        title={title}
        images={images}
        index={index}
        onClose={closeLightbox}
        onPrevious={goPrevious}
        onNext={goNext}
      />
    </>
  )
}
