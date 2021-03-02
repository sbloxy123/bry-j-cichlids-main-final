import React from "react";
// import { Link } from "gatsby";
import "../css/hero.css";

const Hero = () => {
  return (
    <div className="black-overlay">
      <div className="container">
        <div className="hero-text">
          <h1 className="heading">hello</h1>
          <h2 className="subheading"></h2>
        </div>
        <div className="action-buttons">
          {/* <Link to="/gallery/">
              <button type="button" className="btn btn-danger">
                Galleries
              </button>
            </Link> */}
          {/* <Link to="/careGuide/">
              <button type="button" className="btn btn-outline-secondary">
                Care Guide
              </button>
            </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
