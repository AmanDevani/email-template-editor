import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import ReactGA from "react-ga4";

ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);

createRoot(document.getElementById("root")).render(<App />);
