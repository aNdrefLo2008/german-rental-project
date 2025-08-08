/** @format */

import type React from "react"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {WhatsAppButton} from "@/components/whatsapp-button"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Gera Apartments - Premium Short-Term Rentals",
  description:
    "Discover our collection of 8 beautifully furnished short-term rental apartments in Gera, Germany. Perfect for business travelers, tourists, and extended stays.",
  keywords:
    "Gera apartments, short-term rental, vacation rental, business accommodation, Germany"
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
