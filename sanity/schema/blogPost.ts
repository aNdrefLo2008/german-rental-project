import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blogbeitrag',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'bild', title: 'Titelbild', type: 'image' }),
    defineField({ name: 'inhalt', title: 'Inhalt', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'veroeffentlichtAm', title: 'Veröffentlicht am', type: 'datetime' }),
  ],
})
