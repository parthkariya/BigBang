import React from "react";
import "./HomeTestimonial.css";
import images from "../../constants/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoPlayer from "react-video-js-player";
import Adventure from "../../asset/Adventure.mp4.mp4";

const HomeTestimonial = () => {
  const videoSrc = Adventure;
  const poster = "";

  const testiSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 4000,
    autoplay: true,
    autostart: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <section className="home-testimonials">
        {/* <img
          src={images.homegallery7}
          alt="testimonial background image"
          className="testi-bg"
        /> */}
        <div className="testi-inner-main">
          <VideoPlayer
            src={videoSrc}
            poster={poster}
            autoplay={true}
            className="testi-video"
          />

          <div className="testi-cont">
            <h2 className="testi-title">8450+ HAPPY VISITORS </h2>

            <Slider {...testiSettings}>
              <div className="testi-slide" width="50%">
                <p className="testi-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  officia nobis ab labore sequi rem. Ex vel assumenda magnam
                  laborum enim, ea numquam labore Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nulla officia nobis ab labore
                  sequi rem. Ex vel assumenda magnam laborum enim, ea numquam
                  labore in alias tempore. Adipisci, facilis quisquam. in alias
                  tempore. Adipisci, facilis quisquam.
                </p>
                <div className="img-center">
                  <div className="visiter-img-box">
                    <img
                      src={images.visiter1}
                      alt="visiter image"
                      className="testi-visiter-img"
                    />
                  </div>
                </div>
                <h2 className="testi-name">Eddie Jacobs</h2>
                <h4 className="testi-position">Student</h4>
              </div>
              <div className="testi-slide" width="50%">
                <p className="testi-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  officia nobis ab Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Nulla officia nobis ab labore sequi rem. Ex
                  vel assumenda magnam laborum enim, ea numquam labore in alias
                  tempore. Adipisci, facilis quisquam. labore sequi rem. Ex vel
                  assumenda magnam laborum enim, ea numquam labore in alias
                  tempore. Adipisci, facilis quisquam.
                </p>
                <div className="img-center">
                  <div className="visiter-img-box">
                    <img
                      src={images.visiter2}
                      alt="visiter image"
                      className="testi-visiter-img"
                    />
                  </div>
                </div>
                <h2 className="testi-name">Clifford Charles</h2>
                <h4 className="testi-position">Student</h4>
              </div>
              <div className="testi-slide" width="50%">
                <p className="testi-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  officia nobis ab labore sequi rem. Ex vel assumenda magnam
                  laborum enim, ea numquam labore in Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nulla officia nobis ab labore
                  sequi rem. Ex vel assumenda magnam laborum enim, ea numquam
                  labore in alias tempore. Adipisci, facilis quisquam. alias
                  tempore. Adipisci, facilis quisquam.
                </p>
                <div className="img-center">
                  <div className="visiter-img-box">
                    <img
                      src={images.visiter3}
                      alt="visiter image"
                      className="testi-visiter-img"
                    />
                  </div>
                </div>
                <h2 className="testi-name">Harvie Sampson</h2>
                <h4 className="testi-position">Student</h4>
              </div>
              <div className="testi-slide" width="50%">
                <p className="testi-txt">
                  Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Nulla officia nobis ab labore sequi rem. Ex
                  vel assumenda magnam laborum enim, ea numquam labore in alias
                  tempore. Adipisci, facilis quisquam. sit amet consectetur
                  adipisicing elit. Nulla officia nobis ab labore sequi rem. Ex
                  vel assumenda magnam laborum enim, ea numquam labore in alias
                  tempore. Adipisci, facilis quisquam.
                </p>
                <div className="img-center">
                  <div className="visiter-img-box">
                    <img
                      src={images.visiter4}
                      alt="visiter image"
                      className="testi-visiter-img"
                    />
                  </div>
                </div>
                <h3 className="testi-name">Peter</h3>
                <h4 className="testi-position">Student</h4>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTestimonial;
