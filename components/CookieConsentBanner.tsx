/** @format */

"use client"

import {useState, useEffect} from "react"
import {Button} from "@/components/ui/button"
import {X} from "lucide-react"
import {motion, AnimatePresence} from "framer-motion"
import {gtmEvent} from "@/components/tracking-bootstrap"

export function CookieConsentBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) setShow(true)
  }, [])

  const close = (accepted: boolean) => {
    if (accepted) {
      localStorage.setItem("cookie-consent", "accepted")
      gtmEvent("form_submit", {form_id: "contact", method: "ajax"})
    } else {
      localStorage.setItem("cookie-consent", "rejected")
    }
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{y: 100, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          exit={{y: 100, opacity: 0}}
          transition={{duration: 0.3}}
          className='
            fixed bottom-36 sm:bottom-22 left-0 right-0 bg-white shadow-lg rounded-lg
            px-6 py-4 flex flex-col md:flex-row gap-4 items-center justify-between
            max-w-4xl mx-auto
            text-sm text-gray-700
            z-[9999]
          '
          style={{backdropFilter: "saturate(180%) blur(12px)"}}>
          <p className='max-w-full md:max-w-[75%] text-center md:text-left'>
            Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Mit der
            Nutzung stimmen Sie unserer{" "}
            <a
              href='/datenschutz'
              target='_blank'
              rel='noopener noreferrer'
              className='underline underline-offset-2 hover:text-indigo-600'>
              Datenschutzerklärung
            </a>{" "}
            zu.
          </p>

          <div className='flex justify-center items-center space-x-4'>
            <Button size='sm' variant='outline' onClick={() => close(false)}>
              Ablehnen
            </Button>
            <Button size='sm' onClick={() => close(true)}>
              Akzeptieren
            </Button>
            <button
              onClick={() => close(false)}
              aria-label='Schließen'
              className='ml-0 md:ml-2 justify-center items-center flex p-1 rounded hover:bg-gray-100 text-center'>
              <X className='w-5 h-5 text-gray-500 text-center' />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
