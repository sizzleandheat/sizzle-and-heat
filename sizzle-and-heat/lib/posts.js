import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...data,
      };
    });

  // newest first
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...data,
  };
}

export function getAllSlugs() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}
