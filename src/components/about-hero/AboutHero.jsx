import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="abouthero_main_wrapp">
      <div className="abouthero_base_wrappflex">


        <div className="abouthero_base_wrapp">
          <h3 className="abouthero_starting-heading">About Us</h3>
          <div>
            <Link to={"/"}>Home</Link>
            <FiChevronRight className="abouthero_right_logo" />
            <Link to={"#"}>About</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
