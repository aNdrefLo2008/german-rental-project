/** @format */

import {ApartmentDetail} from "@/components/apartment-detail"

interface Props {
  params: Promise<{id: string}>
  // optionally include searchParams if you use it
  searchParams?: Promise<{[key: string]: string | string[] | undefined}>
}

export default async function ApartmentPage({params}: Props) {
  const resolvedParams = await params
  const id = resolvedParams.id

  return <ApartmentDetail apartmentId={id} />
}
