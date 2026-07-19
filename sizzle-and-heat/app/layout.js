import "./globals.css";

export const metadata = {
  title: "Sizzle and Heat | Cookware Reviews & Buying Guides",
  description:
    "Honest cookware reviews and buying guides to help you choose pots, pans, and kitchen tools that actually last.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a href="/" className="logo">
              Sizzle &amp; Heat
            </a>
            <nav className="main-nav">
              <a href="/">Home</a>
              <a href="/blog">Reviews</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <p className="disclosure">
              As an Amazon Associate I earn from qualifying purchases. Content
              on this site is researched and drafted with the help of AI
              tools, then reviewed before publishing.{" "}
              <a href="/disclosure">Full disclosure</a>.
            </p>
            <p className="copyright">
              &copy; {new Date().getFullYear()} Sizzle and Heat
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
