import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "default",
  title: "CPALS & Co CMS",
  projectId: projectId || "placeholder",
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singleton
            S.listItem()
              .title("Contact Information")
              .id("contactInfo")
              .child(S.document().schemaType("contact").documentId("singletonContact")),
            S.divider(),
            S.documentTypeListItem("article").title("Insights Articles"),
            S.documentTypeListItem("leadership").title("Leadership Team"),
            S.divider(),
            S.documentTypeListItem("service").title("Services"),
            S.documentTypeListItem("industry").title("Industries"),
            S.documentTypeListItem("careerOpening").title("Career Openings"),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
});
