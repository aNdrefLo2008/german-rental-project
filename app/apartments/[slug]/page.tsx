/** @format */

import {client} from "../../../sanity/lib/client"
import {apartmentQuery} from "../../../sanity/lib/queries"
import {ApartmentDetail} from "@/components/apartment-detail"
import type {Metadata} from "next"

interface Props {
  params: Promise<{slug: string}>
  searchParams?: Promise<{[key: string]: string | string[] | undefined}>
}

async function getSettings() {
  return await client.fetch(`*[_type == "settings"][0]{
    defaultMetaTitle,
    defaultMetaDescription,
    defaultKeywords,
    defaultOgImage
  }`)
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const resolvedParams = await params
  const apartment = await client.fetch(apartmentQuery, {
    slug: resolvedParams.slug
  })

  const settings = await getSettings()

  const title =
    apartment?.title ?? settings?.defaultMetaTitle ?? "Apartment Detail"
  const description =
    apartment?.metaDescription ??
    settings?.defaultMetaDescription ??
    "Apartment in Gera"

  return {
    title,
    description,
    keywords: settings?.defaultKeywords || [],
    openGraph: {
      title,
      description,
      images: [
        {
          url:
            apartment.images?.[0]?.asset?.url ||
            settings?.defaultOgImage?.asset?.url ||
            "/fallback-og.jpg",
          width: 1200,
          height: 630
        }
      ],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  }
}

export default async function ApartmentPage({params}: Props) {
  const resolvedParams = await params

  if (!resolvedParams.slug) throw new Error("Missing slug param!")

  const apartment = await client.fetch(apartmentQuery, {
    slug: resolvedParams.slug
  })

  if (!apartment) {
    return <div>Apartment not found</div>
  }

  return <ApartmentDetail apartment={apartment} />
}
