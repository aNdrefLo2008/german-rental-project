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
  const scriptLoaded = useRef(false)
  const initializedIframes = useRef<Record<string, boolean>>({})

  useEffect(() => {
    function initializeIframe() {
      if (
        window.BookingToolIframe &&
        containerRef.current &&
        !initializedIframes.current[id]
      ) {
        window.BookingToolIframe.initialize({
          url,
          baseUrl: "https://login.smoobu.com",
          target: `[id="${id}"]`
        })
        initializedIframes.current[id] = true
      }
    }

    if (!scriptLoaded.current) {
      const script = document.createElement("script")
      script.id = "smoobu-script"
      script.src = "https://login.smoobu.com/js/Settings/BookingToolIframe.js"
      script.async = true
      script.onload = () => {
        scriptLoaded.current = true
        initializeIframe()
      }
      document.body.appendChild(script)
    } else {
      initializeIframe()
    }
  }, [id, url])

  return <div ref={containerRef} id={id}></div>
}
