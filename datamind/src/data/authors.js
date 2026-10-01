export const authors = [
  {
    name: "Editorial Team",
    slug: "editorial-team",
    bio: "The editorial team publishes practical insights on Data Science, AI, Machine Learning, Generative AI, Agentic AI, RAG, and Data Analytics.",
  },
];

export function getAuthorBySlug(slug) {
  return authors.find((author) => author.slug === slug);
}