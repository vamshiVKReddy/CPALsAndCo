import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Information",
  type: "document",
  // This is a singleton — only one document of this type should exist.
  // The Studio structure forces it to always open/save as document ID "singletonContact".
  // The frontend queries by both _id == "singletonContact" AND type fallback.
  fields: [
    defineField({
      name: "address",
      title: "Office Address",
      type: "text",
      rows: 3,
      description: "Full office address as it should appear on the website and footer",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number(s)",
      type: "text",
      rows: 2,
      description: "Enter each phone number on a separate line. e.g.\n+91 76708 04206\n+91 93928 33698",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "businessHours",
      title: "Business Hours",
      type: "text",
      rows: 2,
      description: "e.g.\nMon – Sat: 9:30 AM – 6:30 PM\nSunday: Closed",
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Contact Information", subtitle: "Singleton — only one document" }),
  },
});
