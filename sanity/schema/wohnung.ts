import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'wohnung',
  title: 'Wohnung',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'beschreibung', title: 'Beschreibung', type: 'text' }),
    defineField({ name: 'bilder', title: 'Bilder', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'ausstattung', title: 'Ausstattung', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'preisProNacht', title: 'Preis pro Nacht (EUR)', type: 'number' }),
    defineField({ name: 'verfuegbarkeitIframe', title: 'Smoobu Buchungs-iFrame URL', type: 'url' }),
    defineField({ name: 'lageKarte', title: 'Google Maps Embed Link', type: 'url' }),
    defineField({ name: 'faq', title: 'FAQ zur Wohnung', type: 'array', of: [{ type: 'faq' }] }),
    defineField({ name: 'metaDescription', title: 'Meta Description (SEO)', type: 'string' }),
  ],
})
