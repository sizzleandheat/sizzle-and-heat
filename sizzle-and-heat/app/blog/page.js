import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Reviews & Guides | Sizzle and Heat",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="page-container">
      <h1>Reviews &amp; Guides</h1>
      {posts.map((post) => (
        <div className="post-list-item" key={post.slug}>
          <h3>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="meta">
            {post.category} · {post.date}
          </p>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
