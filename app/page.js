import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="hero">
        <div>
          <p className="hero-eyebrow">Cookware, tested and compared</p>
          <h1>Find cookware that earns a spot in your kitchen</h1>
          <p>
            We compare materials, durability, and price so you don&apos;t
            have to guess. Honest reviews and buying guides for pots, pans,
            and kitchen tools that actually last.
          </p>
          <Link href="/blog" className="btn">
            Browse guides
          </Link>
        </div>
        <div className="hero-image-placeholder" />
      </section>

      <section className="categories">
        <h2>Popular categories</h2>
        <div className="category-grid">
          <div className="category-card">Cast iron</div>
          <div className="category-card">Non-stick</div>
          <div className="category-card">Stainless steel</div>
          <div className="category-card">Bakeware</div>
        </div>
      </section>

      <section className="post-feed">
        <h2>Latest guides</h2>
        <div className="post-grid">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="post-card">
              <div className="post-card-image" />
              <div className="post-card-body">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
