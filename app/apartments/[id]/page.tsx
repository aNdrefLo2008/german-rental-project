/** @format */

import {ApartmentDetail} from "@/components/apartment-detail"

type Props = {
  params: {
    id: string
  }
}

export default function ApartmentPage({params}: Props) {
  return (
    <main>
      <ApartmentDetail apartmentId={params.id} />
    </main>
  )
}
