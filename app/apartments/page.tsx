import { ApartmentGrid } from "@/components/apartment-grid"

export default function ApartmentsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Our Apartments</h1>
        <p className="text-lg text-muted-foreground">
          Discover our collection of 8 beautiful short-term rental apartments in Gera
        </p>
      </div>
      <ApartmentGrid />
    </main>
  )
}
