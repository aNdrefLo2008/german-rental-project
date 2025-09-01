/** @format */

"use client"

import {useEffect, useState} from "react"
import {StickyBookingBar} from "@/components/StickyBookingBar"
import {Header} from "@/components/header"

export function HeaderWithBooking() {
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}>
      <StickyBookingBar />
      <Header />
    </div>
  )
}
