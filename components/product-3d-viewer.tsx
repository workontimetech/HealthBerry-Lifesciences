"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { RotateCw } from "lucide-react"

interface Product3DViewerProps {
  frontImage: string
  rightImage?: string // Optional separate right image
  productName: string
}

export default function Product3DViewer({ frontImage, rightImage, productName }: Product3DViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: -15, y: 25 }) // Start with a slight 3D angle
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)
  const [dimensions, setDimensions] = useState({ width: 280, height: 350, depth: 120 })

  // Load images and get their dimensions
  useEffect(() => {
    const loadImageDimensions = async () => {
      try {
        // Load front image to get width and height
        const frontImg = new window.Image()
        frontImg.src = frontImage
        await new Promise((resolve, reject) => {
          frontImg.onload = resolve
          frontImg.onerror = reject
        })

        let depth = 120 // Default depth

        // If right image is provided, use it to determine depth
        if (rightImage) {
          const rightImg = new window.Image()
          rightImg.src = rightImage
          await new Promise((resolve, reject) => {
            rightImg.onload = resolve
            rightImg.onerror = reject
          })
          depth = rightImg.width // Right image width becomes the depth
        }

        // Set dimensions based on front image dimensions
        setDimensions({
          width: frontImg.width,
          height: frontImg.height,
          depth: depth,
        })
      } catch (error) {
        console.error("Error loading image dimensions:", error)
        // Keep default dimensions on error
      }
    }

    loadImageDimensions()
  }, [frontImage, rightImage])

  // Handle mouse down
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartPos({ x: e.clientX, y: e.clientY })
  }

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.clientX - startPos.x
    const deltaY = e.clientY - startPos.y

    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }))

    setStartPos({ x: e.clientX, y: e.clientY })
  }

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    const touch = e.touches[0]
    setStartPos({ x: touch.clientX, y: touch.clientY })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const touch = e.touches[0]
    const deltaX = touch.clientX - startPos.x
    const deltaY = touch.clientY - startPos.y

    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }))

    setStartPos({ x: touch.clientX, y: touch.clientY })
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Handle scroll for zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.1 : 0.1
    setScale(prev => Math.max(0.5, Math.min(2, prev + delta)))
  }

  // Reset view
  const handleReset = () => {
    setRotation({ x: -15, y: 25 }) // Reset to default 3D angle
    setScale(1)
  }

  // Determine which face to show based on rotation
  const getFaceToShow = () => {
    // Normalize Y rotation to 0-360
    const normalizedY = ((rotation.y % 360) + 360) % 360

    // Front: 0-45 and 315-360
    // Right: 45-135
    // Back: 135-225
    // Left: 225-315

    if (normalizedY < 45 || normalizedY >= 315) {
      return "front"
    } else if (normalizedY >= 45 && normalizedY < 135) {
      return "right"
    } else if (normalizedY >= 135 && normalizedY < 225) {
      return "back"
    } else {
      return "left"
    }
  }

  const currentFace = getFaceToShow()

  // Calculate scale factor to fit in container
  const maxDimension = Math.max(dimensions.width, dimensions.height, dimensions.depth)
  const scaleFactor = 400 / maxDimension // Scale to fit in ~400px container
  const scaledWidth = dimensions.width * scaleFactor
  const scaledHeight = dimensions.height * scaleFactor
  const scaledDepth = dimensions.depth * scaleFactor

  return (
    <div className="relative">
      {/* 3D Viewer Container */}
      <div
        ref={containerRef}
        className={`relative w-full aspect-square bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 rounded-2xl border-2 border-border overflow-hidden shadow-2xl ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        style={{
          perspective: "1200px",
          perspectiveOrigin: "center center",
        }}
      >
        {/* 3D Box Container */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})`,
            transformStyle: "preserve-3d",
            transition: isDragging ? "none" : "transform 0.3s ease-out",
          }}
        >
          {/* Front Face - Uses front image dimensions (width x height) */}
          <div
            className="absolute bg-white flex items-center justify-center p-6 border-2 border-slate-300"
            style={{
              width: `${scaledWidth}px`,
              height: `${scaledHeight}px`,
              transform: `translateZ(${scaledDepth / 2}px)`,
              transformStyle: "preserve-3d",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.05), 0 0 30px rgba(0,0,0,0.2)",
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={frontImage}
                alt={`${productName} - Front`}
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Back Face - White (same as front dimensions) */}
          <div
            className="absolute bg-white border-2 border-slate-300"
            style={{
              width: `${scaledWidth}px`,
              height: `${scaledHeight}px`,
              transform: `rotateY(180deg) translateZ(${scaledDepth / 2}px)`,
              transformStyle: "preserve-3d",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.05), 0 0 30px rgba(0,0,0,0.2)",
            }}
          />

          {/* Right Face - Uses depth (from right image) x height */}
          <div
            className="absolute bg-white flex items-center justify-center p-4 border-2 border-slate-300"
            style={{
              width: `${scaledDepth}px`,
              height: `${scaledHeight}px`,
              transform: `rotateY(90deg) translateZ(${scaledWidth / 2}px)`,
              transformStyle: "preserve-3d",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.05), 0 0 30px rgba(0,0,0,0.2)",
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={rightImage || frontImage}
                alt={`${productName} - Right`}
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Left Face - White (depth x height) */}
          <div
            className="absolute bg-white border-2 border-slate-300"
            style={{
              width: `${scaledDepth}px`,
              height: `${scaledHeight}px`,
              transform: `rotateY(-90deg) translateZ(${scaledWidth / 2}px)`,
              transformStyle: "preserve-3d",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.05), 0 0 30px rgba(0,0,0,0.2)",
            }}
          />

          {/* Top Face - Uses width x depth */}
          <div
            className="absolute bg-gradient-to-br from-white to-slate-50 border-2 border-slate-300"
            style={{
              width: `${scaledWidth}px`,
              height: `${scaledDepth}px`,
              transform: `rotateX(90deg) translateZ(${scaledHeight / 2}px)`,
              transformStyle: "preserve-3d",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.05), 0 0 30px rgba(0,0,0,0.15)",
            }}
          />

          {/* Bottom Face - Uses width x depth */}
          <div
            className="absolute bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-300"
            style={{
              width: `${scaledWidth}px`,
              height: `${scaledDepth}px`,
              transform: `rotateX(-90deg) translateZ(${scaledHeight / 2}px)`,
              transformStyle: "preserve-3d",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.05), 0 0 30px rgba(0,0,0,0.15)",
            }}
          />

          {/* Edge outlines for better cuboid definition */}
          <div
            className="absolute border-[3px] border-slate-400 pointer-events-none"
            style={{
              width: `${scaledWidth}px`,
              height: `${scaledHeight}px`,
              transform: `translateZ(${scaledDepth / 2}px)`,
              transformStyle: "preserve-3d",
            }}
          />
        </div>

        {/* Instructions Overlay */}
        {!isDragging && rotation.x === -15 && rotation.y === 25 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black/60 text-white px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm animate-pulse">
              Click & Drag to Rotate
            </div>
          </div>
        )}

        {/* Current View Indicator */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-border">
          <p className="text-xs text-muted-foreground font-medium">Current View</p>
          <p className="text-sm font-bold text-foreground capitalize">{currentFace}</p>
        </div>

        {/* Zoom Indicator */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-border">
          <p className="text-xs text-muted-foreground font-medium">Zoom</p>
          <p className="text-sm font-bold text-foreground">{Math.round(scale * 100)}%</p>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium"
          >
            <RotateCw size={16} />
            Reset View
          </button>
        </div>
        <div className="text-xs text-muted-foreground">
          Scroll to zoom • Drag to rotate
        </div>
      </div>
    </div>
  )
}
