import hybridRagImage from "../assets/hybridrag.jpg";
import agneticAI  from "../assets/ai-agent-data_science.jpg";
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
    image:hybridRagImage,
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
    image: agneticAI,
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
  {
    slug: "data-quality-in-agentic-ai",
    title: "Data Quality in Agentic AI: Why Bad Data Breaks Decisions",
    description:
      "Agentic AI acts on data, not just answers. Learn how outdated or duplicate data causes wrong decisions, plus 6 simple habits to improve data quality.",
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
      "agentic AI",
      "data quality",
      "data analysis",
      "data science",
    ],
    excerpt:
      "Agentic AI acts on the data it finds. See how outdated or duplicate data leads to wrong decisions, and how to prevent it.",
    content: `
      <p>
    <strong>An AI agent can make a wrong decision without making a mistake in its reasoning.</strong>
  </p>

  <p>
    That may sound surprising, but the problem can start much earlier.
  </p>

  <p>
    If an AI agent is working with outdated, incomplete, or incorrect information, it may produce a perfectly reasonable answer based on bad data. As the agent takes on more tasks and makes more decisions, that small data problem can travel through the entire workflow.
  </p>

  <p>
    This changes how we should approach data quality.
  </p>

  <p>
    With traditional AI, poor data may lead to a poor prediction or an inaccurate answer. With Agentic AI, poor data can influence <strong>what the system decides to do next</strong>.
  </p>

  <p>
    That is why data quality is becoming one of the most important parts of building reliable AI systems.
  </p>

  <h2>Why Agentic AI Changes the Data Quality Problem</h2>

  <p>
    Traditional AI often responds to a specific request.
  </p>

  <p>
    You provide data, ask a question, and receive an output.
  </p>

  <p>
    Agentic AI can work differently. It can take a larger goal, break it into smaller tasks, gather information, evaluate what it finds, and decide what to do next.
  </p>

  <p>For example, instead of asking:</p>

  <blockquote>
    “What were our sales last month?”
  </blockquote>

  <p>you might ask:</p>

  <blockquote>
    “Find the products with falling sales, identify possible reasons, and prepare a summary for the team.”
  </blockquote>

  <p>
    The agent may need to look at sales records, compare periods, identify patterns, and prepare an answer.
  </p>

  <p>
    The more complex the process, the more chances there are for unreliable data to influence the result.
  </p>

  <p>This is the important shift:</p>

  <p>
    <strong>AI is no longer only interpreting information. It may be using that information to guide a sequence of actions.</strong>
  </p>

  <p>
    That makes the quality of the information much more important.
  </p>

  <h2>A Small Data Error Can Become a Chain of Wrong Decisions</h2>

  <p>
    Consider a simple example.
  </p>

  <p>
    A company has customer records with duplicate entries.
  </p>

  <p>
    A normal report might simply show an incorrect customer count.
  </p>

  <p>
    But an AI agent could use that same information to identify its most valuable customer groups.
  </p>

  <p>
    If duplicate records make one group appear larger than it really is, the agent may interpret that as an important business pattern.
  </p>

  <p>
    It could then recommend focusing more resources on that group.
  </p>

  <p>
    The recommendation may sound logical.
  </p>

  <p>
    The problem is that the reasoning was based on unreliable information from the start.
  </p>

  <p>The chain might look like this:</p>

  <p>
    <strong>Poor data → incorrect interpretation → wrong recommendation → wrong action</strong>
  </p>

  <p>
    <strong>This is where data quality becomes even more critical in Agentic AI systems.</strong>
  </p>

  <p>
    The original data error may be small, but the decision built on top of it may not be.
  </p>

  <h2>What Poor Data Quality Looks Like in AI Workflows</h2>

  <p>
    Data quality problems are often less obvious than people expect.
  </p>

  <p>They can include:</p>

  <ul>
    <li>Missing customer information</li>
    <li>Duplicate records</li>
    <li>Outdated information</li>
    <li>Incorrect values</li>
    <li>Different formats for the same information</li>
    <li>Incomplete records</li>
    <li>Information from unreliable sources</li>
  </ul>

  <p>
    Take customer contact information as an example.
  </p>

  <p>
    A company may have an old phone number stored for a customer. The record itself is not empty. It simply isn't current.
  </p>

  <p>
    An AI agent using that information may still consider the record valid.
  </p>

  <p>
    That can lead to the wrong message being sent, the wrong customer being contacted, or an important follow-up being missed.
  </p>

  <p>
    The challenge is not whether AI can process the information.
  </p>

  <p>
    <strong>The issue is that the information no longer represents reality.</strong>
  </p>

  <h2>Clean Data Isn't Always Useful Data</h2>

  <p>
    The problem is not AI’s ability to handle the information
  </p>

  <p>
    <strong>Clean data does not automatically mean useful data.</strong>
  </p>

  <p>
    Imagine a company reports that sales increased by 20%.
  </p>

  <p>
    The number is accurate.
  </p>

  <p>
    But what caused the increase?
  </p>

  <p>
    Perhaps most of the growth came from one city. Maybe a seasonal promotion created the increase. Perhaps one large customer placed an unusually large order.
  </p>

  <p>
    The sales number itself is correct, but without context, it can lead to the wrong conclusion.
  </p>

  <p>
    This matters because AI agents need more than accurate numbers.
  </p>

  <p>
    They need enough context to understand what those numbers represent.
  </p>

  <p>For someone working with data, this means asking questions such as:</p>

  <ul>
    <li>Where did this information come from?</li>
    <li>How recent is it?</li>
    <li>What does this number actually represent?</li>
    <li>What changed during this period?</li>
    <li>Is there another explanation for the result?</li>
  </ul>

  <p>
    These questions are just as important as the technical steps involved in cleaning the data.
  </p>

  <h2>Practical Example: When an AI Agent Trusts Outdated Information</h2>

  <p>
    Imagine an online store using an AI agent to help with customer support.
  </p>

  <p>A customer asks:</p>

  <blockquote>
    “My order hasn't arrived. Can you check what happened?”
  </blockquote>

  <p>
    The agent checks the order information and sees:
  </p>

  <p>
    <strong>Status: In transit</strong>
  </p>

  <p>
    Based on that information, it tells the customer to wait another day.
  </p>

  <p>
    But there is a problem.
  </p>

  <p>
    The delivery information has not been updated. The package was actually delivered the previous day.
  </p>

  <p>
    The agent understood the customer's question.
  </p>

  <p>
    It followed the information available to it.
  </p>

  <p>
    Its response may even sound completely reasonable.
  </p>

  <p>
    But it was still wrong.
  </p>

  <p>Why?</p>

  <p>
    <strong>The data it trusted was outdated.</strong>
  </p>

  <p>
    Now consider an agent that can also create support tickets, process refunds, or send automated messages.
  </p>

  <p>
    A simple outdated status could influence several actions.
  </p>

  <p>
    This is the real concern with Agentic AI.
  </p>

  <p>
    The question is no longer only:
  </p>

  <p>
    <strong>“Can the AI give the right answer?”</strong>
  </p>

  <p>
    It becomes:
  </p>

  <p>
    “Can the AI make the right decision based on the information available to it?”
  </p>

  <h2>Data Quality Problems Can Travel Through a Workflow</h2>

  <p>
    Agentic systems often work through several connected steps.
  </p>

  <p>
    One step produces information that another step may use.
  </p>

  <p>
    That means an early mistake can continue moving forward.
  </p>

  <p>For example:</p>

  <p>
    <strong>Customer data → analysis → recommendation → automated action</strong>
  </p>

  <p>
    If the customer data is inaccurate, the analysis can lead to the wrong conclusions.
  </p>

  <p>
    If the analysis is wrong, the recommendation may be wrong.
  </p>

  <p>
    If the recommendation is wrong, the automated action may also be wrong.
  </p>

  <p>
    <strong>This does not mean Agentic AI is inherently unreliable.</strong>
  </p>

  <p>
    It means that <strong>greater autonomy creates a greater need for reliable inputs and sensible checks.</strong>
  </p>

  <p>
    The more responsibility we give an AI system, the more carefully we need to evaluate the information behind its decisions.
  </p>

  <h2>Why Data Validation Cannot Be a One-Time Task</h2>

  <p>
    Data cleaning is often treated as something that happens before analysis.
  </p>

  <p>
    But business data changes constantly.
  </p>

  <p>
    Customers change their details. Products change. Prices change. New records are added. Old information becomes less useful.
  </p>

  <p>
    That means data quality needs ongoing attention.
  </p>

  <p>
    Before an AI agent relies on information, simple questions can make a big difference:
  </p>

  <ul>
    <li>Is the information complete?</li>
    <li>Is it recent?</li>
    <li>Are there duplicates?</li>
    <li>Does it come from a trusted source?</li>
    <li>Does it fit the current situation and context?</li>
    <li>Does it match the business rules?</li>
  </ul>

  <p>
    These do not need to become complicated technical processes.
  </p>

  <p>
    The basic principle is simple:
  </p>

  <p>
    <strong>Before trusting an AI decision, understand what information influenced it.</strong>
  </p>

  <h2>Where Human Judgment Still Matters</h2>

  <p>
    Agentic AI can reduce repetitive work, but that does not mean every decision should be fully automated.
  </p>

  <p>
    There is an important difference between asking an agent to organize routine information and asking it to make a high-impact decision.
  </p>

  <p>
    For example, an agent might safely summarize customer feedback.
  </p>

  <p>
    However, actions such as approving a large refund, changing a critical business process, or making customer-impacting decisions may still need human oversight.
  </p>

  <p>
    Human oversight provides an important final layer of judgment.
  </p>

  <p>
    The goal is not to have people review every action taken by AI.
  </p>

  <p>
    It is to identify the decisions where human oversight adds real value.
  </p>

  <h2>Simple Ways to Improve Data Quality for AI</h2>

  <p>
    You do not need to redesign your entire data environment to start.
  </p>

  <p>
    A few practical habits can help.
  </p>

  <h3>1. Know where your data comes from</h3>

  <p>
    Understand which systems and sources provide the information your AI uses.
  </p>

  <h3>2. Keep important information updated</h3>

  <p>
    Old information can create just as many problems as incorrect information.
  </p>

  <h3>3. Look for duplicates</h3>

  <p>
    Repeated records can distort customer counts, sales figures, and other important measures.
  </p>

  <h3>4. Give numbers context</h3>

  <p>
    A number without its time period, location, or business context may be misleading.
  </p>

  <h3>5. Question unusual results</h3>

  <p>
    If AI identifies a significant change, verify the information before taking action.
  </p>

  <h3>6. Keep important decisions traceable</h3>

  <p>
    For important decisions, it should be clear which information influenced the AI’s recommendation.
  </p>

  <p>
    These practices are useful even before introducing Agentic AI.
  </p>

  <h2>Why Data Skills Matter as AI Becomes More Autonomous</h2>

  <p>
    As AI systems become more capable, understanding data becomes increasingly valuable.
  </p>

  <p>
    You do not need to become an AI researcher to understand why data quality matters.
  </p>

  <p>
    But knowing how to clean data, explore patterns, identify unusual results, and question conclusions gives you a stronger foundation for working with AI.
  </p>

  <p>
    This is also why learning data science can be useful for people who want to work with modern AI systems.
  </p>

  <p>
    A <strong>data science course</strong> can help build practical skills around data analysis, interpretation, and problem-solving—skills that remain important even as more tasks become automated.
  </p>

  <p>
    At Innomatics Research Labs, this connection between data skills and modern AI is an important part of how learners can think about building practical capabilities.
  </p>

  <p>The bigger lesson is simple:</p>

  <p>
    <strong>Learning how AI works is valuable. Learning how to question the data behind AI is just as important.</strong>
  </p>

  <h2>Building Trust Is Key to the Future of Agentic AI</h2>

  <p>
    Agentic AI is moving beyond systems that simply generate answers.
  </p>

  <p>
    These systems can increasingly analyze information, plan tasks, interact with tools, and support real business workflows.
  </p>

  <p>
    That makes trust more important.
  </p>

  <p>
    A highly capable AI agent working with poor-quality information can still produce poor outcomes.
  </p>

  <p>
    So, the goal should not simply be to build agents that can accomplish more tasks.
  </p>

  <p>
    The goal should be to build AI agents that can perform tasks more reliably.
  </p>

  <p>
    And reliability starts with the information they use.
  </p>

  <p>
    The most useful question may not be:
  </p>

  <p>
    <strong>“How intelligent is the agent?”</strong>
  </p>

  <p>
    It may be:
  </p>

  <p>
    “Can we trust the information the agent relies on when making decisions?”
  </p>

  <p>
    Because as AI becomes more autonomous, <strong>better decisions will depend not only on better AI, but also on better data.</strong>
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
