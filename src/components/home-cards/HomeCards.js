import React from "react";
import "./HomeCards.css";
import images from "../../constants/images";
import { HiArrowNarrowRight } from "react-icons/hi";
const HomeCards = () => {
  return (
    <>
      <section className="home-card-sec">
        <div className="home-card-cont">
          <div className="card-part  reveal fade-left">
            <img
              src={images.heroimg4}
              alt="card image"
              className="hero-card-img"
            />
            <div className="card-content">
              <p className="card-heading">Best Pool</p>
              <p className="card-desc">
                {" "}
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
              <button className="btn-card">
                read more <HiArrowNarrowRight />
              </button>
            </div>
          </div>
          <div className="card-part  reveal fade-bottom">
            <img
              src={images.heroimg2}
              alt="card image"
              className="hero-card-img"
            />
            <div className="card-content">
              <p className="card-heading">Water Slides</p>
              <p className="card-desc">
                {" "}
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
              <button className="btn-card">
                read more <HiArrowNarrowRight />
              </button>
            </div>
          </div>
          <div className="card-part  reveal fade-right">
            <img
              src={images.heroimg3}
              alt="card image"
              className="hero-card-img"
            />
            <div className="card-content">
              <p className="card-heading">World Class Rides</p>
              <p className="card-desc">
                {" "}
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
              <button className="btn-card">
                read more <HiArrowNarrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCards;
