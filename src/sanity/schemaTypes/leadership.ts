import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'leadership',
  title: 'Leadership Team',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'qualification',
      title: 'Qualification',
      type: 'string',
      description: 'e.g. B.Com, FCA',
    }),
    defineField({
      name: 'membershipNumber',
      title: 'Membership Number',
      type: 'string',
      description: 'ICAI Membership Number (e.g. 123456)',
    }),
    defineField({
      name: 'experienceSummary',
      title: 'Experience Summary',
      type: 'text',
      description: 'Bio or experience summary',
      rows: 4,
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this profile is displayed (lower numbers show first)',
      initialValue: 10,
    }),
  ],
})
