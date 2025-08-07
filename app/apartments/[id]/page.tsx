/** @format */

import {ApartmentDetail} from "@/components/apartment-detail"

export default function ApartmentPage({params}: {params: {id: string}}) {
  return <ApartmentDetail apartmentId={params.id} />
}
