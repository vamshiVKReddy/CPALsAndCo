import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Client is only usable when projectId is set — safe to import everywhere
export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Helper — true only at runtime when credentials are configured
export const isSanityConfigured = !!projectId
