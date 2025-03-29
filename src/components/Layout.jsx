import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  const year = new Date().getFullYear();
  const url = import.meta.env.VITE_PORTFOLIO_URL;

  const onClick = () => {
    window.gtag("event", "click", {
      event_category: "Navigation",
      event_label: "Visited Portfolio",
      value: url,
    });
    window.open(url, "_blank");
  };

  return (
    <div className="layout-container">
      <main className="content">{children}</main>
      <footer className="footer">
        © {year} Email Template Editor | Built with ❤️ by{" "}
        <span className="owner-name">
          <Link onClick={onClick} target="_blank">
            Aman Devani
          </Link>
        </span>
        .
      </footer>
    </div>
  );
}
