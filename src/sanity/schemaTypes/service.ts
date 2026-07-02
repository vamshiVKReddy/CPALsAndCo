import { defineField, defineType } from "sanity";
import { portableTextContent } from "./portableTextField";

export default defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (R) => R.required() }),
    defineField({ name: "serviceId", title: "Anchor ID", type: "string", description: "Lowercase, no spaces. e.g. audit, gst", validation: (R) => R.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string", description: "Short one-line description" }),
    defineField({
      name: "description",
      title: "Description",
      description: "Supports bold, italic, lists, headings, links",
      ...portableTextContent,
    }),
    defineField({
      name: "color",
      title: "Card Color",
      type: "string",
      options: { list: [{ title: "Blue", value: "blue" }, { title: "Dark", value: "emerald" }], layout: "radio" },
      initialValue: "blue",
    }),
    defineField({ name: "icon", title: "Icon (emoji)", type: "string", description: "Press Win+. or Cmd+Ctrl+Space to open emoji picker" }),
    defineField({
      name: "sections",
      title: "Service Categories",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "heading", title: "Category Heading", type: "string", validation: (R) => R.required() }),
          defineField({ name: "items", title: "Service Items", type: "array", of: [{ type: "string" }] }),
        ],
        preview: { select: { title: "heading" } },
      }],
    }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number", initialValue: 10 }),
  ],
  orderings: [{ title: "Display Order", name: "displayOrderAsc", by: [{ field: "displayOrder", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "tagline" } },
});
