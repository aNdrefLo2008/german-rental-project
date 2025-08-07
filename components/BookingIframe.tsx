/** @format */

"use client"
import {useEffect, useRef} from "react"

interface BookingIframeProps {
  id: string
  url: string
}

declare global {
  interface Window {
    BookingToolIframe?: {
      initialize: (options: {
        url: string
        baseUrl: string
        target: string
      }) => void
    }
  }
}

export function BookingIframe({id, url}: BookingIframeProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Keep track of which iframes have been initialized
  const initializedIframes: Record<string, boolean> = {}

  useEffect(() => {
    if (!document.querySelector("#smoobu-script")) {
      const script = document.createElement("script")
      script.id = "smoobu-script"
      script.src = "https://login.smoobu.com/js/Settings/BookingToolIframe.js"
      script.async = true
      document.body.appendChild(script)

      script.onload = () => {
        if (
          window.BookingToolIframe &&
          containerRef.current &&
          !initializedIframes[id]
        ) {
          window.BookingToolIframe.initialize({
            url,
            baseUrl: "https://login.smoobu.com",
            target: `#${id}`
          })
          initializedIframes[id] = true
        }
      }
    } else {
      if (
        window.BookingToolIframe &&
        containerRef.current &&
        !initializedIframes[id]
      ) {
        window.BookingToolIframe.initialize({
          url,
          baseUrl: "https://login.smoobu.com",
          target: `#${id}`
        })
        initializedIframes[id] = true
      }
    }
  }, [id, url])

  return <div ref={containerRef} id={id}></div>
}
