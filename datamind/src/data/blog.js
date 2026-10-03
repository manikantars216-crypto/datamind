export const blogs = [
  {
    slug: "what-is-hybrid-rag",
    title: "What Is Hybrid RAG? How Hybrid Retrieval Improves AI Search",
    description:
      "Learn how Hybrid RAG combines multiple retrieval methods to improve search accuracy, context, and AI-generated answers.",
    category: "RAG",
    categorySlug: "rag",
    author: {
      name: "Editorial Team",
      slug: "editorial-team",
    },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    readTime: "8 min read",
    image: "/images/hybrid-rag.jpg",
    keywords: [
      "Hybrid RAG",
      "RAG",
      "AI search",
      "retrieval augmented generation",
      "hybrid retrieval",
    ],
    excerpt:
      "Hybrid RAG combines different retrieval techniques to help AI systems find more relevant information before generating an answer.",
    content: `
      <p>
        Retrieval-Augmented Generation, or RAG, helps AI systems retrieve
        relevant information before generating a response. Hybrid RAG takes
        this idea further by combining multiple retrieval approaches.
      </p>

      <h2>What Is Hybrid RAG?</h2>

      <p>
        Hybrid RAG combines different search methods, such as keyword-based
        retrieval and semantic search, to find useful information from a
        knowledge base.
      </p>

      <p>
        Instead of relying on one retrieval technique, a hybrid system can
        consider both exact matches and semantic relationships between queries
        and documents.
      </p>

      <h2>How Hybrid Retrieval Works</h2>

      <p>
        A typical Hybrid RAG workflow starts with a user query. The system
        sends the query through multiple retrieval methods, combines the
        results, and then selects useful context for the language model.
      </p>

      <h2>Why Hybrid RAG Matters</h2>

      <p>
        Different retrieval techniques have different strengths. Keyword
        search can identify exact terms, while semantic retrieval can identify
        conceptually related information.
      </p>

      <h2>Conclusion</h2>

      <p>
        Hybrid RAG provides a flexible approach to <a href="https://www.innomatics.in/">
      Agentic AI systems for data science
    </a> AI search by combining
        complementary retrieval strategies. It is particularly useful when
        applications need both precise matching and semantic understanding.
      </p>
    `,
  },

  {
    slug: "agentic-ai-in-data-science",
    title: "Agentic AI in Data Science: What Can It Automate?",
    description:
      "Explore how Agentic AI can automate repetitive data science tasks while keeping humans involved in important decisions.",
    category: "Agentic AI",
    categorySlug: "agentic-ai",
    author: {
      name: "Editorial Team",
      slug: "editorial-team",
    },
    datePublished: "2026-09-29",
    dateModified: "2026-09-29",
    readTime: "7 min read",
    image: "/images/agentic-ai-data-science.jpg",
    keywords: [
      "Agentic AI",
      "Agentic AI in Data Science",
      "AI agents",
      "data science automation",
    ],
    excerpt:
      "Agentic AI can help automate repetitive data science workflows, from data preparation to analysis and reporting.",
    content: `
      <p>
        Data science involves many repetitive tasks, including preparing data,
        running analysis, checking results, and generating reports. Agentic AI
        introduces systems that can perform multiple steps toward a defined
        goal.
      </p>

      <h2>What Is Agentic AI?</h2>

      <p>
        Agentic AI refers to AI systems that can reason about tasks, decide
        which actions are needed, use tools, and work through multiple steps.
      </p>

      <h2>How Agentic AI Can Help Data Scientists</h2>

      <p>
        An AI agent can assist with data preparation, exploratory analysis,
        code generation, documentation, and repetitive reporting tasks.
      </p>

      <h2>Human Oversight Still Matters</h2>

      <p>
        Automation does not remove the need for human judgment. Data quality,
        business context, statistical assumptions, and final decisions still
        require careful review.
      </p>

      <h2>Conclusion</h2>

      <p>
        Agentic AI can reduce repetitive work in data science while allowing
        professionals to spend more time on interpretation and decision-making.
      </p>
    `,
  },

  {
    slug: "exploratory-data-analysis",
    title: "What Is Exploratory Data Analysis and Why Does It Matter?",
    description:
      "Learn how Exploratory Data Analysis helps identify patterns, relationships, outliers, and data quality issues before modeling.",
    category: "Data Science",
    categorySlug: "data-science",
    author: {
      name: "Editorial Team",
      slug: "editorial-team",
    },
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    readTime: "6 min read",
    image: "/images/exploratory-data-analysis.jpg",
    keywords: [
      "Exploratory Data Analysis",
      "EDA",
      "data analysis",
      "data science",
    ],
    excerpt:
      "Exploratory Data Analysis helps data professionals understand datasets before building statistical or machine learning models.",
    content: `
      <p>
        Exploratory Data Analysis, commonly called EDA, is the process of
        examining a dataset to understand its structure, quality, patterns,
        and relationships.
      </p>

      <h2>What Does EDA Include?</h2>

      <p>
        EDA can include summary statistics, distributions, missing-value
        analysis, correlation analysis, and data visualization.
      </p>

      <h2>Why EDA Is Important</h2>

      <p>
        A model can only work with the data it receives. EDA helps identify
        problems before they become hidden inside a machine learning workflow.
      </p>

      <h2>Conclusion</h2>

      <p>
        EDA provides a foundation for better data understanding and more
        informed modeling decisions.
      </p>
    `,
  },
];

export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug);
}

export function getBlogsByCategory(categorySlug) {
  return blogs.filter((blog) => blog.categorySlug === categorySlug);
}

export function getRelatedBlogs(currentBlog, limit = 3) {
  return blogs
    .filter(
      (blog) =>
        blog.slug !== currentBlog.slug &&
        blog.categorySlug === currentBlog.categorySlug
    )
    .slice(0, limit);
}
