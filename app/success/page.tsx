/** @format */

import {useEffect} from "react"
import {gtmEvent} from "@/components/tracking-bootstrap"

export default function BookingSuccess() {
  useEffect(() => {
    gtmEvent("booking_success", {
      value: 0, // optional: Warenkorbwert
      currency: "EUR", // optional
      booking_id: "XYZ123" // optional
    })
  }, [])
  return <h1>Danke für Ihre Buchung!</h1>
}
