import { defineField, defineType } from "sanity";
import { portableTextContent } from "./portableTextField";

export default defineType({
  name: "careerOpening",
  title: "Career Openings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Job Title", type: "string", validation: (R) => R.required() }),
    defineField({ name: "category", title: "Category", type: "string", description: "e.g. Audit, Taxation, Accounting" }),
    defineField({
      name: "type",
      title: "Employment Type",
      type: "string",
      options: { list: ["Full-time", "Part-time", "Contract", "Internship"], layout: "radio" },
      initialValue: "Full-time",
    }),
    defineField({
      name: "description",
      title: "Role Description",
      description: "Supports bold, italic, lists, headings, links",
      ...portableTextContent,
    }),
    defineField({
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
      description: "Each requirement as a separate bullet item",
    }),
    defineField({
      name: "isActive",
      title: "Show on Website",
      type: "boolean",
      description: "✅ ON = visible on Careers page. ❌ OFF = hidden.",
      initialValue: true,
    }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number", initialValue: 10 }),
  ],
  orderings: [{ title: "Display Order", name: "displayOrderAsc", by: [{ field: "displayOrder", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "category" } },
});
