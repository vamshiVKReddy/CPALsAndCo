import { defineField, defineType } from "sanity";
import { portableTextContent } from "./portableTextField";

export default defineType({
  name: "industry",
  title: "Industries",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Industry Name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "icon", title: "Icon (emoji)", type: "string", description: "Press Win+. to open emoji picker" }),
    defineField({
      name: "description",
      title: "Description",
      description: "Supports bold, italic, lists, headings, links",
      ...portableTextContent,
    }),
    defineField({
      name: "services",
      title: "Service Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "Short service labels shown as pills",
    }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number", initialValue: 10 }),
  ],
  orderings: [{ title: "Display Order", name: "displayOrderAsc", by: [{ field: "displayOrder", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "icon" } },
});
