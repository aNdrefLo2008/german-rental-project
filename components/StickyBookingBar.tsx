/** @format */
"use client"

import Link from "next/link"

export function StickyBookingBar() {
  return (
    <div className='w-full shadow-md bg-gray-100'>
      <div
        className='
          mx-auto max-w-5xl 
          flex flex-col sm:flex-row items-center justify-center 
          gap-2 px-4 sm:px-6 py-3 text-center sm:text-left
        '>
        <p className='font-normal lg:font-medium text-sm  sm:text-base text-gray-700'>
          Erhalten Sie 20 € Rabatt auf Ihre Buchung nur für kurze Zeit mit Code:{" "}
          <span className='font-bold'>20EURO</span> –{" "}
          <Link
            href='/booking'
            target='_blank'
            rel='noopener noreferrer'
            className='font-bold underline'>
            Jetzt Buchen
          </Link>{" "}
          oder anrufen: <span className='font-bold'>0176 3449 2580</span>
        </p>
      </div>
    </div>
  )
}
