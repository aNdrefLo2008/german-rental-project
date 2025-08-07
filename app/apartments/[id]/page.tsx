import { ApartmentDetail } from "@/components/apartment-detail"

interface ApartmentPageProps {
  params: {
    id: string
  }
}

export default function ApartmentPage({ params }: ApartmentPageProps) {
  return (
    <main>
      <ApartmentDetail apartmentId={params.id} />
    </main>
  )
}
