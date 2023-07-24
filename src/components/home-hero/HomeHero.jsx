import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./HomeHero.css";
import images from "../../constants/images";
import data from "../../constants/data";
const HomeHero = () => {
  const [imageHero, setImageHero] = useState(data.imageHero);
  // console.log("data is", data.imageHero);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = imageHero.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, imageHero]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <>
      <section className="sec-hero">
        <div className="section-center">
          {imageHero.map((image, personIndex) => {
            const { id, imageUrl } = image;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === images.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position} key={id}>
                <img src={imageUrl} alt="hotel images" className="person-img" />
              </article>
            );
          })}
          {/* <button
            className="prev"
            onClick={() => {
              setIndex(index - 1);
            }}
          >
            <FiChevronLeft></FiChevronLeft>
          </button>
          <button
            className="next"
            onClick={() => {
              setIndex(index + 1);
              console.log("next", index);
            }}
          >
            <FiChevronRight></FiChevronRight>
          </button> */}
          <div className="hero-inner-main">
            <div className="hero-inner">
              <div className="hero-inner-part">
                <p className="hero-heading">Welcome to the world of</p>
                <div className="hero-inner-subheading-flex">
                  <div>A</div>
                  <div>D</div>
                  <div>V</div>
                  <div>E</div>
                  <div>N</div>
                  <div>T</div>
                  <div>U</div>
                  <div>R</div>
                  <div>E</div>
                </div>
                <p className="hero-inner-desc">
                  For the first time ever in Saurashtra you will experience the
                  true feel of an adventure park. With BigBang we have something
                  and everything for everyone, be it kids, teenager or adults,
                  we have some of the sporty rides which you are definitely
                  going to love, so enjoy with Bigbang and have best time with
                  your friends and family.
                </p>
              </div>
              <div className="hero-inner-part">
                <div className="hero-inner-part-bg">
                  <input
                    type="text"
                    className="hero-form-inp"
                    placeholder="Your Name"
                  />
                  <div className="hero-form-part">
                    <input
                      type="text"
                      className="hero-form-inp"
                      placeholder="Your Phone"
                    />
                    <input
                      type="text"
                      className="hero-form-inp"
                      placeholder="Your Email"
                    />
                  </div>
                  <select
                    name="package"
                    id="cars"
                    placeholder="Select Packages"
                    className="hero-form-inp"
                  >
                    <option value="family package" className="hero-form-inp">
                      Select Package
                    </option>
                    <option value="family package" className="hero-form-inp">
                      Family Package
                    </option>
                    <option value="basic package" className="hero-form-inp">
                      Basic Package
                    </option>
                    <option value="premium package" className="hero-form-inp">
                      Premium Package
                    </option>
                  </select>
                  <input
                    type="text"
                    className="hero-form-inp"
                    placeholder="DD-MM-YYYY"
                  />
                  <input
                    type="text"
                    className="hero-form-inp"
                    placeholder="Guest"
                  />
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
