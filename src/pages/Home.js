import React from "react";
import {
  HomeHero,
  HomeCards,
  HomeFacility,
  RidesCard,
  HomeGallery,
  HomeTestimonial,
  HomeShortDetails,
  HomeBlog,
  HomeSub,
} from "../components";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeCards />
      <HomeFacility />
      <RidesCard />
      <HomeTestimonial />
      <HomeGallery />
      <HomeShortDetails />
      <HomeBlog />
      <HomeSub />
    </>
  );
};

export default Home;
