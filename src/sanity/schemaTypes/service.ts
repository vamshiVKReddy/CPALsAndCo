import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "serviceId",
      title: "Anchor ID",
      type: "string",
      description: "Used for page anchoring e.g. audit, gst, taxation. No spaces, lowercase only.",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short one-line description shown below the title",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Full description shown in the left panel",
    }),
    defineField({
      name: "color",
      title: "Card Color",
      type: "string",
      options: {
        list: [
          { title: "Blue (bg-blue-600)", value: "blue" },
          { title: "Dark / Emerald (bg-slate-900)", value: "emerald" },
        ],
        layout: "radio",
      },
      initialValue: "blue",
    }),
    defineField({
      name: "icon",
      title: "Service Icon",
      type: "string",
      description:
        "Paste an emoji character here. Examples: 🛡️ 📊 🧾 💡 📒 🏛️ 🚀 📜. To find emojis: on Windows press Win+. (Windows key + period), on Mac press Cmd+Ctrl+Space.",
    }),
    defineField({
      name: "sections",
      title: "Service Categories",
      type: "array",
      description: "Each category has a heading and a list of service items",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "heading",
              title: "Category Heading",
              type: "string",
              description: "e.g. Statutory Audit, Tax Planning",
              validation: (R) => R.required(),
            }),
            defineField({
              name: "items",
              title: "Service Items",
              type: "array",
              of: [{ type: "string" }],
              description: "Each item appears as a bullet point. Click Add Item to add more.",
            }),
          ],
          preview: {
            select: { title: "heading" },
          },
        },
      ],
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      description: "Lower number = shown first. Use 1, 2, 3...",
      initialValue: 10,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "displayOrderAsc",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "tagline" },
  },
});
