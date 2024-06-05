import React from "react";
import "./App.css";
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import PageNotFound from "./PageNotFound";

export default function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        
        {/* <Route path="*" element={<PageNotFound />} /> 
      </Routes> */}

      <NavBar />
      <Home />
      <Experience />
      <ExperienceTwo />
      <Form />
    </div>
  );
}

function NavBar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="sample_logo.jpg"
        alt="Portfolio"
        width="500"
        height="600"
      />

      {/* <Link to="/App.js" activeClassName="active">
        Home
      </Link>
      <Link to="/AboutMe.js" activeClassName="active">
        About{" "}
      </Link> */}
      <Link to="/portfolio" activeClassName="active">
        Portfolio
      </Link>
    </div>
  );
}

function Experience() {
  return (
    <div className="experience-container">
      <h1 className="title">My experience</h1>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla.{" "}
      </p>
    </div>
  );
}

function ExperienceTwo() {
  return (
    <div>
      <div className="jobdescription">
        <div className="fixedposition">
          <h1 className="positionname">Webflow</h1>
          <p className="position">Graphic Designer</p>
          <p className="positionduration"> April 2014 - Mar 2015</p>
        </div>

        <div className="flexibleposition">
          <h1 className="positionname">Webflow</h1>
          <p className="position">Graphic Designer</p>
          <p className="positionduration"> April 2014 - Mar 2015</p>
        </div>

        <div className="flexibleposition">
          <h1 className="positionname">Webflow</h1>
          <p className="position">Graphic Designer</p>
          <p className="positionduration"> April 2014 - Mar 2015</p>
        </div>

        <div className="flexibleposition">
          <h1 className="positionname">Webflow</h1>
          <p className="position">Graphic Designer</p>
          <p className="positionduration"> April 2014 - Mar 2015</p>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="formcontainer">
      <div className="thecopy">
        <h1 className="copy">Want to get in touch? Drop me a line!</h1>
        <p className="copy2">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </div>

      <form>
        <div className="justform">
          <div className="namemail">
            <div className="inputwrapper">
              <label className="alabel">NAME: </label>
              <input
                className="input"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="inputwrapper">
              <label className="emailaddress">EMAIL ADDRESS: </label>
              <input
                className="input"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <p>
            <label className="formlabeltag">FORM LABEL:</label>
            <textarea
              name="subject"
              className="formlabel"
              placeholder="Enter your message"
            ></textarea>
          </p>
        </div>
      </form>

      <button className="button">SUBMIT</button>
    </div>
  );
}

/*
<Routes>
        {The route below is for home component with exact 
        path "/", in component props we passed the imported 
component}
        <Route exact path="/" element={<App />} />

        {This route is for about component with exact path
        "/about", in component props we pass the imported component
         }
        <Route path="./AboutMe" element={<AboutMe />} />

        {This route is for the portfolio -- the list of project
        that has been done }
        <Route path="./FirstProject" element={<FirstProject />} />

        {If any route mismatches the upper route endpoints then, redirect
        triggers and redirects app to home component with to="/" }
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
*/
