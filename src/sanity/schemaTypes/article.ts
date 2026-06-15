import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Insights / Articles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. Tax Updates, GST Updates, Audit Insights, Compliance Updates, Business Advisory',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time',
      type: 'string',
      description: 'e.g. 8 min read',
    }),
    defineField({
      name: 'content',
      title: 'Article Content',
      type: 'text',
      description: 'The main body content of the article. Supports simple markdown tables, lists, and headings.',
      rows: 20,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'SEO title tag. Falls back to Title if empty.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'SEO meta description snippet.',
      rows: 3,
    }),
  ],
})
