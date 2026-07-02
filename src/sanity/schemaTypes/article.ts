import { defineField, defineType } from "sanity";
import { portableTextContent } from "./portableTextField";

export default defineType({
  name: "article",
  title: "Insights / Articles",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (R) => R.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "e.g. Tax Updates, GST Updates, Audit Insights, Compliance Updates, Business Advisory",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "publishDate",
      title: "Publish Date",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
      validation: (R) => R.required(),
    }),
    defineField({ name: "readingTime", title: "Reading Time", type: "string", description: "e.g. 8 min read" }),
    defineField({
      name: "content",
      title: "Article Content",
      description: "Supports bold, italic, underline, headings, bullet lists, numbered lists, block quotes and hyperlinks",
      ...portableTextContent,
    }),
    defineField({ name: "metaTitle", title: "Meta Title", type: "string", description: "SEO title. Falls back to article Title." }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 3, description: "SEO description snippet." }),
  ],
  orderings: [{ title: "Publish Date (newest first)", name: "publishDateDesc", by: [{ field: "publishDate", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "category" } },
});
