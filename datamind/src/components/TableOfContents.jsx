import { useMemo } from "react";

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function TableOfContents({
  content,
}) {
  const headings = useMemo(() => {
    const matches = [
      ...content.matchAll(
        /<h2[^>]*>(.*?)<\/h2>/gi
      ),
    ];

    return matches.map((match) => {
      const text = match[1].replace(
        /<[^>]*>/g,
        ""
      );

      return {
        text,
        id: slugifyHeading(text),
      };
    });
  }, [content]);

  if (!headings.length) {
    return null;
  }

  return (
    <aside className="table-of-contents">
      <h2>Table of Contents</h2>

      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}