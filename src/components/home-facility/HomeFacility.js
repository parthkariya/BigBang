import React from "react";
import "./HomeFacility.css";
import images from "../../constants/images";
import { ImSpoonKnife } from "react-icons/im";
import { AiTwotoneHome, AiOutlineClockCircle } from "react-icons/ai";
import { GiLockers } from "react-icons/gi";
import { SiSpyderide } from "react-icons/si";

const HomeFacility = () => {
  return (
    <section className="sec-home-facility">
      <div className="home-fac-container">
        <div className="fac-part reveal fade-right">
          <div className="diff-facility">
            <div className="diff-facility-list">
              <div className="diff-facility-content">
                <img
                  src="https://img.icons8.com/pastel-glyph/64/000000/home.png"
                  className="fac-icon"
                />
                <p className="fac-heading">Private Gazebo</p>
                <p className="fac-txt">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </div>
            <div className="diff-facility-list">
              <div className="diff-facility-content">
                <img
                  src="https://img.icons8.com/ios/64/000000/restaurant.png"
                  className="fac-icon"
                />
                <p className="fac-heading">Delicious Food</p>
                <p className="fac-txt">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </div>
            <div className="diff-facility-list">
              <div className="diff-facility-content">
                <img
                  src="https://img.icons8.com/pastel-glyph/64/000000/school-locker.png"
                  className="fac-icon"
                />
                <p className="fac-heading">Safety Lockers</p>
                <p className="fac-txt">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </div>
            <div className="diff-facility-list">
              <div className="diff-facility-content">
                <img
                  src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-river-spring-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
                  className="fac-icon"
                />
                <p className="fac-heading">River Rides</p>
                <p className="fac-txt">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="fac-time-date">
            <div>
              <p className="fac-day">Monday-Friday</p>
              <p className="fac-day">Satureday-Sunday</p>
              <p className="fac-day">Holiday</p>
            </div>

            <div>
              <div className="fac-time">
                <AiOutlineClockCircle />
                <p className="fac-timing">11:00 AM - 16:00 PM</p>
              </div>
              <div className="fac-time">
                <AiOutlineClockCircle />
                <p className="fac-timing">09:00 AM - 17:00 PM</p>
              </div>
              <div className="fac-time">
                <AiOutlineClockCircle />
                <p className="fac-timing">09:00 AM - 17:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fac-part reveal fade-left">
          <img
            src={images.homegallery5}
            alt="facility image"
            className="fac-img"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeFacility;
