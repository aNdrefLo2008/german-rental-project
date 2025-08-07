import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'trustElement',
  title: 'Trust Element (Logo, Siegel)',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string' }),
    defineField({ name: 'image', title: 'Bild / Logo', type: 'image' }),
  ],
})
