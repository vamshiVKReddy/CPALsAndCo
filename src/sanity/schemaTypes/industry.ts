import { defineField, defineType } from "sanity";

export default defineType({
  name: "industry",
  title: "Industries",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Industry Name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "icon", title: "Icon (emoji)", type: "string", description: "Paste an emoji e.g. 🏭" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({
      name: "services",
      title: "Service Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "Short service labels shown as pills e.g. GST Compliance, Statutory Audit",
    }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number", initialValue: 10 }),
  ],
  orderings: [{ title: "Display Order", name: "displayOrderAsc", by: [{ field: "displayOrder", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "icon" } },
});
