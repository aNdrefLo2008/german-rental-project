// /schemas/legalPage.js
import { defineType, defineField } from "sanity";

export default defineType({
  name: "legalPage",
  title: "Rechtliche Seiten",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Inhalt",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lastUpdated",
      title: "Zuletzt aktualisiert",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
