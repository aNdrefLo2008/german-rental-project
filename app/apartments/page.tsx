/** @format */

import {ApartmentGrid} from "@/components/apartment-grid"

export default function ApartmentsPage() {
  return (
    <main className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <h1 className='text-4xl font-bold mb-4'>Unsere Wohnungen</h1>
        <p className='text-lg text-muted-foreground'>
          Entdecken Sie unsere Sammlung von 8 schönen Ferienwohnungen zur
          Kurzzeitmiete in Gera
        </p>
      </div>
      <ApartmentGrid />
    </main>
  )
}
