/** @format */

"use client"
/** @format */

import React, {useState} from "react"
import {motion, AnimatePresence} from "framer-motion"
import {ChevronDown} from "lucide-react"

type FaqItemProps = {
  frage: string
  antwort: string
  defaultOpen?: boolean
}

export default function FaqItem({
  frage,
  antwort,
  defaultOpen = false
}: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className='border rounded-lg bg-white shadow-md'>
      <button
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className='w-full flex justify-between items-center p-4 font-semibold text-lg cursor-pointer focus:outline-none'>
        {frage}
        <motion.span
          animate={{rotate: isOpen ? 180 : 0}}
          transition={{duration: 0.3, ease: "easeInOut"}}
          className='ml-2'>
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='content'
            initial={{height: 0, opacity: 0}}
            animate={{height: "auto", opacity: 1}}
            exit={{height: 0, opacity: 0}}
            transition={{duration: 0.4, ease: "easeInOut"}}
            className='overflow-hidden'>
            <div className='px-4 pb-4 text-gray-700'>{antwort}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
