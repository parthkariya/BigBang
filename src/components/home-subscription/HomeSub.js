import React from "react";
import "./HomeSub.css";
import images from "../../constants/images";
const HomeSub = () => {
  return (
    <>
      <section className="sec-home-sub">
        {/* <img
          src={images.blogimg1}
          alt="subscription background image"
          className="sub-img"
        /> */}
        <div className="sub-inner">
          <div className="con-sub">
            <p className="sub-txt">
              GET NEWS, UPDATES, SPECIAL EVENT NOTICES AND MORE WHEN YOU JOIN
              OUR EMAIL LIST
            </p>
            <div className="inp-box">
              <input
                type="text"
                placeholder="your email address"
                className="sub-inp"
              />
              <button className="sub-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeSub;
