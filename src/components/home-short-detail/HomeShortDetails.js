import React from "react";
import "./HomeShortDetails.css";
import images from "../../constants/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCountUp } from "react-countup";
import CountUp from "react-countup";
import { AiOutlinePlus } from "react-icons/ai";

const HomeShortDetails = () => {
  return (
    <>
      <section className="sec-home-details">
        <div className="home-details">
          {/* <img
            src={images.heroimg22}
            alt="swimming image"
            className="shortdetail-bg"
          /> */}
          <div className="inner-cont-shortdetails">
            <div className="cont1-shortdetails">
              <div className="cont1-shortdetails-part">
                <p className="shortdetail-heading">
                  SPEND YOUR HOLIDAY IN WATERBOOM
                </p>
                <p className="shortdetail-txt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="cont2-shortdetails-part">
                <button className="btn-shortdetails">Book Now</button>
                <p className="btn-down-txt">get information </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cont-details">
          <div className="detals-part">
            <img
              src="https://img.icons8.com/ios/80/000000/conference-call--v1.png"
              className="details-icon"
            />
            {/* <p className="details-number">4850+</p> */}
            <div className="details-number-flex">
              <CountUp
                className="details-number"
                start={0}
                end={4850}
                duration={2.75}
              />
              +{/* <AiOutlinePlus className="details-num-icon" /> */}
            </div>
            <p className="details-txt">Happy Visitors</p>
          </div>
          <div className="detals-part">
            <img
              src="https://img.icons8.com/ios/80/000000/ferris-wheel--v1.png"
              className="details-icon"
            />
            <div className="details-number-flex">
              <CountUp
                className="details-number"
                start={0}
                end={30}
                duration={2.75}
              />
              <AiOutlinePlus className="details-num-icon" />
            </div>
            <p className="details-txt">World Class Rides</p>
          </div>
          <div className="detals-part">
            <img
              src="https://img.icons8.com/external-others-pike-picture/80/000000/external-Experience-values-others-pike-picture.png"
              className="details-icon"
            />
            <div className="details-number-flex">
              <CountUp
                className="details-number"
                start={0}
                end={15}
                duration={2.75}
              />
              <AiOutlinePlus className="details-num-icon" />
            </div>
            <p className="details-txt">Years of Experience</p>
          </div>
          <div className="detals-part">
            <img
              src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/80/000000/external-lifeguard-protection-and-security-kmg-design-detailed-outline-kmg-design.png"
              className="details-icon"
            />
            <div className="details-number-flex">
              <CountUp
                className="details-number"
                start={0}
                end={40}
                duration={2.75}
              />
              <AiOutlinePlus className="details-num-icon" />
            </div>
            <p className="details-txt">Certified Lifeguard</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeShortDetails;
