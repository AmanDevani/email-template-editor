import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const onClick = () => {
    window.gtag("event", "click", {
      event_category: "Navigation",
      event_label: "Back to Home Button",
      value: 1,
    });
    navigate("/");
  };

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Oops! Page Not Found</h2>
      <p className="notfound-text">
        The page you're looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link className="notfound-button" onClick={onClick}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
