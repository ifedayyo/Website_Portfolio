import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FirstProject from "./FirstProject";
import Portfolio from "./Portfolio";
import reportWebVitals from "./reportWebVitals";
import AboutMe from "./AboutMe";
import PageNotFound from "./PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <FootBar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="firstproject" element={<FirstProject />} />
         */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function NavBar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="./src/sample_logo.jpg"
        alt="Portfolio"
        width="500"
        height="600"
      />

      <Link to="/" activeClassName="active">
        Home
      </Link>
      <Link to="/aboutme" activeClassName="active">
        About{" "}
      </Link>
      <Link to="/portfolio" activeClassName="active">
        Portfolio
      </Link>
    </div>
  );
}

function FootBar() {
  return <div></div>;
}
