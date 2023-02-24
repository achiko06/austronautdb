import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: '2023-02-22',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});