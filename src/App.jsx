import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import React, { useEffect } from "react";
import app from "../package.json";
import ReactGA from "react-ga4";

function App() {
  console.log(app?.version);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window?.location?.pathname + window?.location?.search,
      title: window?.location?.pathname,
    });
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
