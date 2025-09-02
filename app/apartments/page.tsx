/** @format */

import {ApartmentGrid} from "@/components/apartment-grid"

export default function ApartmentsPage() {
  return (
    <main className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <h1 className='text-4xl font-bold mb-4 mt-6'>
          Unsere Ferienwohnungen in Gera
        </h1>
        <p className='text-lg text-muted-foreground'>
          Unsere voll ausgestatteten Ferienwohnungen in Gera sind die ideale
          Lösung für Firmenbuchungen ebenso wie für private Gäste, die Wert auf
          Komfort und eine ruhige Lage legen. Sie können
        </p>
      </div>
      <ApartmentGrid />
    </main>
  )
}
