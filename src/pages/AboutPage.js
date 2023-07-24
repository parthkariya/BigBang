import React, { useEffect } from "react";
import { AboutHero, HomeFacility, HomeSub } from "../components";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AboutHero />
      <HomeFacility />
      <HomeSub />
    </div>
  );
};

export default AboutPage;
