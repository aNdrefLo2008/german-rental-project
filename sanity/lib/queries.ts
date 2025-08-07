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
