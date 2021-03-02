import React from "react";
// import { Link } from "gatsby";
import "../css/hero.css";
import { graphql, useStaticQuery } from "gatsby";

const getImageAndText = graphql`
  {
    strapiHeroSection {
      heroText
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(getImageAndText);

  return (
    <div>
      <h1>{data.strapiHeroSection.heroText}</h1>
    </div>
  );
};

export default Hero;
