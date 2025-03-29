import React from "react";

export default function Layout({ children }) {
  const year = new Date().getFullYear();
  const url = import.meta.env.VITE_PORTFOLIO_URL;

  return (
    <div className="layout-container">
      <main className="content">{children}</main>
      <footer className="footer">
        © {year} Email Template Editor | Built with ❤️ by{" "}
        <span className="owner-name">
          <a href={url} target="_blank">
            Aman Devani
          </a>
        </span>
        .
      </footer>
    </div>
  );
}
