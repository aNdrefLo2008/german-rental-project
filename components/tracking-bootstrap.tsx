/** @format */

"use client"

import {useEffect} from "react"
import {usePathname} from "next/navigation"

declare global {
  interface Window {
    dataLayer: any[]
  }
}

export function gtmEvent(
  event: string,
  params: Record<string, string | number | boolean | undefined> = {}
) {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({event, ...params})
}

export function TrackingBootstrap() {
  const pathname = usePathname()

  useEffect(() => {
    window.dataLayer = window.dataLayer || []

    // 1-Minuten-Event für Remarketing
    const t = setTimeout(() => {
      window.dataLayer.push({event: "one_minute_visit"})
    }, 60000)

    // Wohnungs-/Listing-Seite erkannt
    if (
      pathname?.startsWith("/wohnungen") ||
      pathname?.startsWith("/apartments")
    ) {
      window.dataLayer.push({
        event: "view_listing_page",
        listing_category: "wohnungen"
      })
    }

    return () => clearTimeout(t)
  }, [pathname])

  return null
}
