/** @format */

"use client"

import Script from "next/script"
import {useEffect, useState} from "react"

function hasConsent() {
  try {
    return (
      typeof window !== "undefined" &&
      localStorage.getItem("cookie-consent") === "accepted"
    )
  } catch {
    return false
  }
}

export function GTM() {
  const [consented, setConsented] = useState(false)
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  useEffect(() => {
    setConsented(hasConsent())
  }, [])

  if (!gtmId) {
    if (process.env.NODE_ENV === "development")
      console.warn("Missing NEXT_PUBLIC_GTM_ID")
    return null
  }

  return (
    <>
      {/* Consent Mode: default = denied */}
      <Script id='consent-default' strategy='beforeInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted'
          });
        `}
      </Script>

      {consented && (
        <>
          {/* Consent granted nach Opt-In */}
          <Script id='consent-grant' strategy='beforeInteractive'>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'update', {
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
                analytics_storage: 'granted'
              });
            `}
          </Script>

          {/* GTM laden */}
          <Script id='gtm' strategy='afterInteractive'>
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        </>
      )}
    </>
  )
}

export function GTMNoScript() {
  const [consented, setConsented] = useState(false)
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  useEffect(() => {
    setConsented(hasConsent())
  }, [])
  if (!gtmId || !consented) return null
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height='0'
        width='0'
        style={{display: "none", visibility: "hidden"}}
      />
    </noscript>
  )
}
