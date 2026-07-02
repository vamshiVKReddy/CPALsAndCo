import { defineField, defineType } from "sanity";
import { portableTextContent } from "./portableTextField";

export default defineType({
  name: "leadership",
  title: "Leadership Team",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "designation", title: "Designation", type: "string", validation: (R) => R.required() }),
    defineField({ name: "qualification", title: "Qualification", type: "string", description: "e.g. B.Com, FCA, DISA (ICAI)" }),
    defineField({ name: "membershipNumber", title: "Membership Number", type: "string", description: "ICAI Membership Number e.g. 123456" }),
    defineField({
      name: "experienceSummary",
      title: "Experience Summary / Biography",
      description: "Supports bold, italic, lists, headings, links",
      ...portableTextContent,
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number", initialValue: 10 }),
  ],
  orderings: [{ title: "Display Order", name: "displayOrderAsc", by: [{ field: "displayOrder", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "designation" } },
});
