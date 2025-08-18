/** @format */

import type React from "react"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {WhatsAppButton} from "@/components/whatsapp-button"
import {StickyBookingBar} from "@/components/StickyBookingBar"
import {CookieConsentBanner} from "@/components/CookieConsentBanner"
import {client} from "@/sanity/lib/client"
import {GTM, GTMNoScript} from "@/components/GTM"
import {TrackingBootstrap} from "@/components/tracking-bootstrap"

const inter = Inter({subsets: ["latin"]})

async function getSettings() {
  return await client.fetch(`*[_type == "settings"][0]{
    defaultMetaTitle,
    defaultMetaDescription,
    defaultKeywords
  }`)
}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings()

  return {
    title: settings?.defaultMetaTitle || "Fallback Title",
    description: settings?.defaultMetaDescription || "Fallback description",
    keywords: settings?.defaultKeywords || [],
    openGraph: {
      title: settings?.defaultMetaTitle || "Fallback Title",
      description: settings?.defaultMetaDescription || "Fallback description",
      images: [
        {
          url: settings?.defaultOgImage?.asset?.url || "/fallback-og.jpg",
          width: 1200,
          height: 630
        }
      ],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: settings?.defaultMetaTitle || "Fallback Title",
      description: settings?.defaultMetaDescription || "Fallback description"
    }
  }
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <GTM />
        <GTMNoScript />
        <Header />
        <TrackingBootstrap />
        {children}
        <CookieConsentBanner />
        <StickyBookingBar />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
