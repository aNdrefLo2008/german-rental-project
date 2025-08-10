/** @format */

import React from "react"
import FaqItem from "./FaqItem"
import {client} from "@/sanity/lib/client"
import {faqQuery} from "@/sanity/lib/queries"

type FAQItem = {
  frage: string
  antwort: string
}

export default async function FAQSection() {
  const faqs: FAQItem[] = await client.fetch(faqQuery)

  if (!faqs || faqs.length === 0) {
    return (
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 max-w-3xl text-center text-gray-500'>
          <h2 className='text-3xl font-bold mb-8'>
            Frequently Asked Questions
          </h2>
          <p>Sorry, no FAQs available at the moment.</p>
        </div>
      </section>
    )
  }

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4 max-w-3xl'>
        <h2 className='text-3xl font-bold mb-8'>Frequently Asked Questions</h2>
        <div className='space-y-4'>
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              frage={faq.frage}
              antwort={faq.antwort}
              defaultOpen={i === 0}
            />
          ))}
        </div>

        <div className='mt-8 text-center'>
          <a
            href='/reviews'
            className='inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition'>
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
