import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Globale Einstellungen',
  type: 'document',
  fields: [
    defineField({ name: 'siteTitle', title: 'Website-Titel', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'kontaktTelefon', title: 'Telefonnummer', type: 'string' }),
    defineField({ name: 'kontaktEmail', title: 'E-Mail-Adresse', type: 'string' }),
    defineField({ name: 'adresse', title: 'Adresse', type: 'string' }),
    defineField({ name: 'whatsAppLink', title: 'WhatsApp Link', type: 'url' }),
    defineField({ name: 'footerText', title: 'Footer Text', type: 'text' }),
    defineField({ name: 'navigation', title: 'Navigation', type: 'array', of: [{ type: 'navItem' }] }),
    defineField({ name: 'defaultMetaTitle', title: 'Standard Meta Title', type: 'string' }),
    defineField({ name: 'defaultMetaDescription', title: 'Standard Meta Description', type: 'string' }),
    defineField({ name: 'defaultKeywords', title: 'Standard Keywords', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'defaultOgImage', title: 'Standard Open Graph Bild', type: 'image' }),
  ],
})
