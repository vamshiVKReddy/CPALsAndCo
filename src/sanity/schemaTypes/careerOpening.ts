import { defineField, defineType } from "sanity";

export default defineType({
  name: "careerOpening",
  title: "Career Openings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "e.g. Audit, Taxation, Accounting, Training",
    }),
    defineField({
      name: "type",
      title: "Employment Type",
      type: "string",
      options: {
        list: ["Full-time", "Part-time", "Contract", "Internship"],
        layout: "radio",
      },
      initialValue: "Full-time",
    }),
    defineField({
      name: "description",
      title: "Role Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
      description: "Click Add Item to add each requirement as a separate line",
    }),
    defineField({
      name: "isActive",
      title: "Show on Website",
      type: "boolean",
      description:
        "✅ ON = This opening is visible on the Careers page. ❌ OFF = Hidden from website (but not deleted). When ALL openings are hidden or none exist, a 'No Current Openings' message is shown automatically.",
      initialValue: true,
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      description: "Lower number = shown first",
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
    select: { title: "title", subtitle: "category" },
    prepare({ title, subtitle }) {
      return { title, subtitle };
    },
  },
});
