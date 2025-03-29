import React from "react";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Oops! Page Not Found</h2>
      <p className="notfound-text">
        The page you're looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <a href="/" className="notfound-button">
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
