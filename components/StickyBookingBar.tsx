/** @format */

"use client"

import {useEffect, useState, useRef} from "react"
import {Button} from "@/components/ui/button"
import Link from "next/link"
import {ShoppingCart} from "lucide-react"

function getLuminance(rgb: string) {
  // rgb like "rgb(255, 255, 255)"
  const match = rgb.match(/rgba?\((\d+), ?(\d+), ?(\d+)/)
  if (!match) return 1 // fallback light

  const r = parseInt(match[1], 10) / 255
  const g = parseInt(match[2], 10) / 255
  const b = parseInt(match[3], 10) / 255

  const lum = [r, g, b].map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  )

  return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2]
}

export function StickyBookingBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [isBgDark, setIsBgDark] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const parent = ref.current.parentElement
    if (!parent) return

    const style = window.getComputedStyle(parent)
    const bgColor = style.backgroundColor || "rgb(255,255,255)"

    const luminance = getLuminance(bgColor)
    setIsBgDark(luminance < 0.5)
  }, [])

  return (
    <div
      ref={ref}
      className={`
      fixed sm:bottom-4 bottom-12 left-1/2 transform -translate-x-1/2
      backdrop-blur
      shadow-lg
      rounded-full
      px-6 py-3
      flex items-center space-x-4
      max-w-md w-full
      z-50
    `}
      style={{backgroundColor: "rgba(255, 255, 255, 0.7)"}} // semi-transparent white bg for blur effect
    >
      <ShoppingCart
        className={`w-6 h-6 ${isBgDark ? "text-white" : "text-gray-700"}`}
      />
      <span
        className={`font-medium whitespace-nowrap ${
          isBgDark ? "text-white" : "text-gray-700"
        }`}>
        Special Offer 50% Off:
      </span>
      <Button
        asChild
        size='lg'
        variant='default'
        className={`whitespace-nowrap ${isBgDark ? "text-white" : ""}`}>
        <Link href='/apartments' target='_blank' rel='noopener noreferrer'>
          Jetzt buchen
        </Link>
      </Button>
    </div>
  )
}
