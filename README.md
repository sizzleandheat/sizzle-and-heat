# Sizzle and Heat

A cookware review and buying-guide website, built with Next.js, ready to deploy on Vercel.

## What's in here

- `app/` — every page of the site (home, blog list, individual posts, about, disclosure)
- `content/posts/` — your blog posts, written in plain Markdown files. Adding a new post is as simple as adding a new `.md` file here with the same format as `cast-iron-care-guide.md`.
- `app/globals.css` — all site styling (colors, fonts, button style)

## How to add a new blog post

1. Duplicate `content/posts/cast-iron-care-guide.md`
2. Rename the file to match your new post's topic, e.g. `best-cast-iron-skillets.md`
3. Update the info at the top between the `---` lines (title, excerpt, category, date)
4. Write your post below the second `---` using `##` for section headings and `-` for bullet points
5. Save, commit, and push to GitHub — Vercel will automatically rebuild and publish it

## Deploying this for the first time

### Step 1: Put this code on GitHub
1. Go to github.com and create a new repository (e.g. "sizzle-and-heat")
2. Upload all these files to that repository (GitHub's website lets you drag-and-drop files directly if you don't want to use the command line)

### Step 2: Connect it to Vercel
1. Go to vercel.com and sign in (use "Continue with GitHub" so the accounts link automatically)
2. Click "Add New Project"
3. Select the "sizzle-and-heat" repository you just created
4. Vercel will auto-detect it's a Next.js project — just click "Deploy"
5. Within a minute or two, your site will be live at a free `.vercel.app` address

### Step 3: Connect your real domain
1. In your Vercel project, go to Settings → Domains
2. Add "sizzleandheat.com" (once you've purchased it from a domain registrar)
3. Vercel will give you DNS records to add at your domain registrar — follow their instructions exactly

## Running it on your own computer (optional)

If you want to preview changes before pushing them live:

```
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.
