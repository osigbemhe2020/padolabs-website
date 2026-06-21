import { createClient } from "next-sanity";

export const writeClient = createClient({
  projectId: "htuor14k" ,
  dataset: "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-05-22",
  useCdn: false,
  token: "sko560h3qwaf483WA9fmk6r1TdolMZzyr3jn5ucAY8KbEwoUi9Ad8qCT0VNG5tbYgRHMmEEVa2g7gFqPFvbt7TWe4BSafC6G10xcdDAf05BGhTk2BrrJmMo45KMc5P1yfA8RagcxIvcEtizWXWYdlQyxOSmQNMSTg33tOgGW3k7bPcDFw9Vk",
});

// process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
// process.env.NEXT_PUBLIC_SANITY_DATASET!
