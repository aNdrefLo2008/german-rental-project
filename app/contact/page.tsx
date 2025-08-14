/** @format */

import {ContactForm} from "@/components/contact-form"
import {ContactInfo} from "@/components/contact-info"

export default function ContactPage() {
  return (
    <main className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <h1 className='text-4xl font-bold mb-4'>Kontakt</h1>
        <p className='text-lg text-muted-foreground'>
          Nehmen Sie Kontakt auf, um Ihren Aufenthalt zu buchen oder Fragen zu
          stellen
        </p>
      </div>
      <div className='grid md:grid-cols-2 gap-8'>
        <ContactForm />
        <ContactInfo />
      </div>
    </main>
  )
}
