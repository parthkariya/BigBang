import React from "react";
import "./HomeBlog.css";
import images from "../../constants/images";
import { BsStopwatch } from "react-icons/bs";
const HomeBlog = () => {
  return (
    <>
      <section className="sec-home-blog">
        <div className="heading-section">
          <h5 className="sec-blog-heading">our blog</h5>
          <h3 className="sec-blog-subheading">latest blog & Articles</h3>
          <p className="sec-blog-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="cont-home-blog">
          <div className="home-blog-part">
            <div className="blog-img-box">
              <img src={images.blogimg1} className="blog-img" />
            </div>
            <div className="blog-content">
              <p className="blog-heading">
                Why Children Dont Like Getting Out Of The Water
              </p>
              <div className="date-box">
                <BsStopwatch className="dt-time-icon" />
                <p className="blog-date">August 10, 2021</p>
              </div>
              <p className="blog-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <button className="btn-card">Read More</button>
            </div>
          </div>
          <div className="home-blog-part">
            <div className="blog-img-box">
              <img src={images.heroimg55} className="blog-img" />
            </div>
            <div className="blog-content">
              <p className="blog-heading">
                5 Reasons To Escape The Cold Weather This Season
              </p>
              <div className="date-box">
                <BsStopwatch className="dt-time-icon" />
                <p className="blog-date">August 5, 2021</p>
              </div>
              <p className="blog-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <button className="btn-card">Read More</button>
            </div>
          </div>
          <div className="home-blog-part">
            <div className="blog-img-box">
              <img src={images.heroimg66} className="blog-img" />
            </div>
            <div className="blog-content">
              <p className="blog-heading">
                5 Ways To Enjoy Waterboom This Spring Break
              </p>
              <div className="date-box">
                <BsStopwatch className="dt-time-icon" />
                <p className="blog-date">August 5, 2021</p>
              </div>
              <p className="blog-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <button className="btn-card">read more</button>
            </div>
          </div>
          <div className="home-blog-part">
            <div className="blog-img-box">
              <img src={images.testibg} className="blog-img" />
            </div>
            <div className="blog-content">
              <p className="blog-heading">
                4 Things You Must Do To Save Money While Planning A Vacation
              </p>
              <div className="date-box">
                <BsStopwatch className="dt-time-icon" />
                <p className="blog-date">August 5, 2021</p>
              </div>
              <p className="blog-txt">
                Lorem ipsum dolor sit amet, consectetur ad ipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <button className="btn-card">read more</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBlog;
