import Link from "next/link";
import { getAllCategories, getPostsByCategorySlug } from "@/lib/posts";

const ALL_CATEGORIES = [
  { slug: "cast-iron", name: "Cast Iron" },
  { slug: "non-stick", name: "Non-Stick" },
  { slug: "stainless-steel", name: "Stainless Steel" },
  { slug: "bakeware", name: "Bakeware" },
];

export function generateStaticParams() {
  return ALL_CATEGORIES.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }) {
  const category = ALL_CATEGORIES.find((c) => c.slug === params.category);
  const name = category ? category.name : params.category;
  return {
    title: `${name} Cookware Reviews & Guides | Sizzle and Heat`,
  };
}

export default function CategoryPage({ params }) {
  const category = ALL_CATEGORIES.find((c) => c.slug === params.category);
  const name = category ? category.name : params.category;
  const posts = getPostsByCategorySlug(params.category);

  return (
    <div className="page-container">
      <h1>{name}</h1>

      {posts.length === 0 ? (
        <p style={{ color: "#5f5c56" }}>
          We don&apos;t have any {name.toLowerCase()} guides published yet —
          check back soon, or browse{" "}
          <Link href="/blog" style={{ textDecoration: "underline" }}>
            all guides
          </Link>{" "}
          in the meantime.
        </p>
      ) : (
        posts.map((post) => (
          <div className="post-list-item" key={post.slug}>
            <h3>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="meta">
              {post.category} · {post.date}
            </p>
            <p>{post.excerpt}</p>
          </div>
        ))
      )}
    </div>
  );
}
