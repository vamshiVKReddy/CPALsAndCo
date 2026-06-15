import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion: "2024-01-01",
  useCdn: false, // Always fetch live published data — never use stale CDN cache
  perspective: "published", // Only show published content, never drafts
});

// True only when project ID is configured
export const isSanityConfigured = !!projectId;
