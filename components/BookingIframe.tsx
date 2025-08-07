/** @format */

"use client"
import {useEffect, useRef} from "react"

interface BookingIframeProps {
  id: string
  url: string
}

// Keep track of which iframes have been initialized
const initializedIframes: Record<string, boolean> = {}

export function BookingIframe({id, url}: BookingIframeProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load script only once
    if (!document.querySelector("#smoobu-script")) {
      const script = document.createElement("script")
      script.id = "smoobu-script"
      script.src = "https://login.smoobu.com/js/Settings/BookingToolIframe.js"
      script.async = true
      document.body.appendChild(script)

      script.onload = () => {
        if (
          (window as any).BookingToolIframe &&
          containerRef.current &&
          !initializedIframes[id]
        ) {
          ;(window as any).BookingToolIframe.initialize({
            url,
            baseUrl: "https://login.smoobu.com",
            target: `#${id}`
          })
          initializedIframes[id] = true
        }
      }
    } else {
      // Initialize only once per iframe id
      if (
        (window as any).BookingToolIframe &&
        containerRef.current &&
        !initializedIframes[id]
      ) {
        ;(window as any).BookingToolIframe.initialize({
          url,
          baseUrl: "https://login.smoobu.com",
          target: `#${id}`
        })
        initializedIframes[id] = true
      }
    }
  }, [id, url])

  return <div id={id} ref={containerRef}></div>
}
