import { getPostBySlug, getAllSlugs } from "@/lib/posts";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  return {
    title: `${post.title} | Sizzle and Heat`,
    description: post.excerpt,
  };
}

// Minimal markdown-to-JSX renderer for ## headings, lists, and paragraphs.
// Keeps this dependency-free; swap for a full markdown renderer later if needed.
function renderContent(markdown) {
  const lines = markdown.split("\n");
  const elements = [];
  let listBuffer = [];
  let listType = null;

  const flushList = (key) => {
    if (listBuffer.length === 0) return;
    const Tag = listType === "ol" ? "ol" : "ul";
    elements.push(
      <Tag key={`list-${key}`}>
        {listBuffer.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </Tag>
    );
    listBuffer = [];
    listType = null;
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("## ")) {
      flushList(idx);
      elements.push(<h2 key={idx}>{trimmed.replace("## ", "")}</h2>);
    } else if (trimmed.startsWith("# ")) {
      flushList(idx);
      // skip - title is rendered separately from frontmatter
    } else if (/^\d+\.\s/.test(trimmed)) {
      listType = "ol";
      listBuffer.push(trimmed.replace(/^\d+\.\s/, ""));
    } else if (trimmed.startsWith("- ")) {
      listType = "ul";
      listBuffer.push(trimmed.replace(/^-\s/, ""));
    } else if (trimmed === "") {
      flushList(idx);
    } else if (trimmed.startsWith("---")) {
      flushList(idx);
    } else {
      flushList(idx);
      elements.push(<p key={idx}>{trimmed.replace(/\*\*/g, "")}</p>);
    }
  });
  flushList("end");

  return elements;
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);

  return (
    <div className="page-container">
      <div className="post-header">
        <h1>{post.title}</h1>
        <p className="meta">
          {post.category} · {post.date}
        </p>
      </div>
      <div className="post-content">{renderContent(post.content)}</div>
    </div>
  );
}
