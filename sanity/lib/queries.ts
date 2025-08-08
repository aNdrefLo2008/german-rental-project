export const apartmentQuery = `*[_type == "wohnung" && slug.current == $slug][0]{
  _id,
  title,
  beschreibung,
  preisProNacht,
  guests,
  bedrooms,
  bathrooms,
  size,
  ausstattung,
  "images": bilder[]{asset->},
  verfuegbarkeitIframe,
  lageKarte,
  faq,
  metaDescription,
  features
}`;


export const allApartmentsQuery = `
  *[_type == "wohnung"]{
    _id,
    title,
    "slug": slug.current,
    "images": bilder[]{asset->},
    preisProNacht,
    guests,
    bedrooms,
    bathrooms,
    features,
    beschreibung
  } | order(_createdAt desc)
`

// /sanity/lib/queries.ts
export const upsellQuery = `
  *[_type == "upsell" && (!defined(zeitlichBegrenzt) || zeitlichBegrenzt == true)] 
  | order(_createdAt desc)[0] {
    title,
    beschreibung,
    preis,
    "imageUrl": image.asset->url,
    ctaLink
  }
`
