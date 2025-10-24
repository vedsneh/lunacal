"use client"

import { useState, useEffect } from "react"

interface GalleryImage {
  id: string
  src: string
}

export default function GalleryWidget() {
  const [images, setImages] = useState<GalleryImage[]>([
    { id: "1", src: "/abstract-pattern-1.png" },
    { id: "2", src: "/abstract-pattern-2.png" },
    { id: "3", src: "/abstract-pattern-3.png" },
  ])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [hoveredImageId, setHoveredImageId] = useState<string | null>(null)

  const handleAddImage = () => {
    const newImage: GalleryImage = {
      id: Date.now().toString(),
      src: `/placeholder.svg?height=200&width=200&query=abstract-pattern-${images.length + 1}`,
    }
    setImages([...images, newImage])
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Update visible count on mount and resize
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1)
      else if (window.innerWidth < 1024) setVisibleCount(2)
      else setVisibleCount(3)
    }
    updateCount()
    window.addEventListener("resize", updateCount)
    return () => window.removeEventListener("resize", updateCount)
  }, [])

  const visibleImages = images.slice(currentIndex, currentIndex + visibleCount)
  const remainingImages = visibleCount - visibleImages.length

  return (
    <div
      className="w-full rounded-2xl"
      style={{
        backgroundColor: "#363c43",
        border: "1px solid #2a2f35",
        borderRadius: "20px",
        padding: "0px",
        minHeight: "auto",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 pb-4 sm:pb-6">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Help icon */}
          <button className="flex-shrink-0 transition-colors" style={{ color: "#7a8a9a" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          </button>

          {/* Gallery label in pill shape */}
          <div
            className="px-4 sm:px-6 py-2 rounded-full font-medium text-xs sm:text-sm whitespace-nowrap"
            style={{
              backgroundColor: "#1a1a1a",
              color: "#ffffff",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
               fontFamily: "Poppins, sans-serif",
            }}
          >
            Gallery
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          {/* Add Image button */}
          <button
            onClick={handleAddImage}
            className="px-3 sm:px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-1 sm:gap-2 text-xs sm:text-sm flex-1 sm:flex-none justify-center"
            style={{
              backgroundColor: "#2a2f35",
              color: "#b0b8c0",
              border: "1px solid #4a5a6a",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
               fontFamily: "Plus Jakarta Sans, sans-serif",
            }}
          >
            <span>+</span>
            <span className="hidden sm:inline">ADD IMAGE</span>
            <span className="sm:hidden">ADD</span>
          </button>

          {/* Navigation arrows */}
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full transition-colors"
            style={{
              backgroundColor: "#2a2f35",
              color: "#7a8a9a",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full transition-colors"
            style={{
              backgroundColor: "#2a2f35",
              color: "#7a8a9a",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Gallery grid */}
      <div className="flex gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
        {/* Grid icon on left */}
        <div className="flex-shrink-0 pt-1" style={{ color: "#7a8a9a" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </svg>
        </div>

        {/* Images grid */}
        <div
          className={`flex-1 grid gap-3 sm:gap-4 ${visibleCount === 1 ? "grid-cols-1" : visibleCount === 2 ? "grid-cols-2" : "grid-cols-3"}`}
        >
          {visibleImages.map((image) => (
            <div
              key={image.id}
              className="aspect-square rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: "#2a2f35",
                boxShadow:
                  hoveredImageId === image.id
                    ? "0 8px 24px rgba(0, 0, 0, 0.5), 0 0 20px rgba(100, 200, 255, 0.3)"
                    : "0 4px 12px rgba(0, 0, 0, 0.3)",
                transform: hoveredImageId === image.id ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setHoveredImageId(image.id)}
              onMouseLeave={() => setHoveredImageId(null)}
            >
              <div className="relative w-full h-full">
                <img src={image.src || "/placeholder.svg"} alt="Gallery" className="w-full h-full object-cover" />
                {hoveredImageId === image.id && (
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      backgroundColor: "rgba(100, 180, 255, 0.2)",
                    }}
                  />
                )}
              </div>
            </div>
          ))}
          {/* Placeholder for remaining slots */}
          {Array.from({ length: remainingImages }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="aspect-square rounded-2xl"
              style={{
                backgroundColor: "#2a2f35",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
