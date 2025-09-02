/** @format */

import React from "react"

function ExplanationBoxes() {
  return (
    <section className='py-16 bg-[#3B4AFF]'>
      <div className='max-w-full 2xl:mx-20 mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-16 text-gray-100'>
          So funktioniert unser Buchungssystem
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch'>
          <div className='bg-white text-left p-4 md:p-8 rounded-2xl shadow-xl min-h-[300px]  lg:min-h-[380px]'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6'>1</h2>
            <h3 className='text-xl md:text-2xl font-medium mb-4'>
              Verfügbarkeit prüfen
            </h3>
            <p className='text-muted-foreground mx-auto max-w-7xl'>
              Prüfen Sie die Verfügbarkeit Ihrer gewünschten Wohnung direkt auf
              unserer Website. Sollte online kein Termin frei sein, können Sie
              uns selbstverständlich auch telefonisch kontaktieren.
            </p>
          </div>

          <div className='bg-white text-left p-4 md:p-8 rounded-2xl shadow-xl min-h-[300px] lg:min-h-[380px]'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6'>2</h2>
            <h3 className='text-xl md:text-2xl font-medium mb-4'>
              Ferienwohnung buchen
            </h3>
            <p className='text-muted-foreground mx-auto max-w-7xl'>
              Buchen Sie die passende Ferienwohnung in Gera bequem online. Wir
              garantieren Ihnen: Bei Direktbuchungen über unsere Website
              erhalten Sie immer den besten Preis – günstiger als bei Booking,
              Airbnb oder anderen Portalen.
            </p>
          </div>

          <div className='bg-white text-left p-4 md:p-8 rounded-2xl shadow-xl min-h-[300px]  lg:min-h-[380px]'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6'>3</h2>
            <h3 className='text-xl md:text-2xl font-medium mb-4'>
              Bestätigung & Zugangscode erhalten
            </h3>
            <p className='text-muted-foreground mx-auto max-w-7xl'>
              Nach Ihrer Buchung erhalten Sie automatisch eine E-Mail mit allen
              Details zu Ihrem Aufenthalt sowie Ihrem persönlichen Zugangscode
              für die Schlüsselbox.
            </p>
          </div>

          <div className='bg-white text-left p-4 md:p-8 rounded-2xl shadow-xl min-h-[300px]  lg:min-h-[380px]'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6'>4</h2>
            <h3 className='text-xl md:text-2xl font-medium mb-4'>
              Einfacherer & sicherer Check-in
            </h3>
            <p className='text-muted-foreground mx-auto max-w-7xl'>
              Ab 16:00 Uhr können Sie jederzeit selbst einchecken – 24/7, völlig
              unabhängig von Ihrer Anreisezeit. Einfach den Code eingeben,
              Schlüssel entnehmen und entspannt in Ihre Wohnung.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExplanationBoxes
