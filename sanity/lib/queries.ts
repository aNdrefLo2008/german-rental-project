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

export const settingsQuery = `
  *[_type == "settings"][0]{
    siteTitle,
    "logoUrl": logo.asset->url,
    kontaktTelefon,
    kontaktEmail,
    adresse,
    whatsAppLink,
    footerText,
    navigation[]{
      title,
      url
    }
  }
`

export const blogQuery = `
  *[_type == "blogPost"] | order(veroeffentlichtAm desc) {
      _id,
      title,
      "slug": slug.current,
      "bild": bild.asset->url,
      inhalt,
      veroeffentlichtAm
    }
`

export const singleBlogPostQuery = `
  *[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    "bild": bild.asset->url,
    inhalt,
    veroeffentlichtAm
  }
`