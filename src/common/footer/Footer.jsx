import React from "react";
import images from "../../constants/images";
import "./Footer.css";
import { GoLocation } from "react-icons/go"
import { FiPhoneCall } from "react-icons/fi"
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa"
import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai"
const Footer = () => {
  return (
    <>
      <section className="sec-footer">
        <div className="con-footer">
          {/* <div className="footer-part1-main"> */}
          <div className="footer-part1 bgg">
            <div className="footer-logo-box">
              <img src={images.bibanglogo} alt="brand logo" className="footer-logo" />
            </div>
            <p className="footer-txt">Lorem ipsum dolor sit amet, consectetur adipiscing   <br /> elit, sed do eiusmod</p>
            <div className="footer-addr-box">
              <GoLocation className="footer-iconn" />
              <p className="footer-addr">Rajkot-Ahmedabad Highway, Opp. Bamanbor <br /> G.I.D.C., Nr. Bansal Petrol Pump,<br /> Rajkot, Gujarat-363520.</p>
            </div>
            <div className="footer-addr-box">
              <AiOutlineMail className="footer-iconn" />
              <a className="footer-addr" href="mailto:Support@admin.com">Support@admin.com</a>
            </div>
            <div className="footer-addr-box">
              <FiPhoneCall className="footer-iconn" />
              <a className="footer-addr" href="tel:8511164111">8511164111</a>
            </div>
            <div className="footer-addr-box">
              <FiPhoneCall className="footer-iconn" />
              <a className="footer-addr" href="tel:7486000709">7486000709</a>
            </div>
          </div>
          {/* </div> */}
          <div className="footer-parts-flex">
            <div className="footer-part">
              <p className="footer-link-heading">Quick Links</p>
              <ul className="footer-nav">
                <li className="footer-nav-link"><a href="#">About</a></li>
                <li className="footer-nav-link"><a href="#">Services</a></li>
                <li className="footer-nav-link"><a href="#">Booking</a></li>
                <li className="footer-nav-link"><a href="#">Packages</a></li>
                <li className="footer-nav-link"><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-part">
              <p className="footer-link-heading">Useful Links</p>
              <ul className="footer-nav">
                <li className="footer-nav-link"><a href="#">Privacy Policy</a></li>
                <li className="footer-nav-link"><a href="#">Terms and Condition</a></li>
                <li className="footer-nav-link"><a href="#">Desclaimer</a></li>
                <li className="footer-nav-link"><a href="#">Support</a></li>
                <li className="footer-nav-link"><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-part footer-part-last">
              <p className="footer-link-heading">Opening Hours</p>
              <div className="footer-timming">
                <div className="footer-day-part">
                  <p className="footer-day">Monday-Friday</p>
                  <p className="footer-day">Satureday-Sunday</p>
                  <p className="footer-day">Holiday</p>
                </div>
                <div className="footer-day-part">
                  <div className="footer-time-box">
                    <AiOutlineClockCircle className="footer-icon" />
                    <p className="footer-time">11:00AM-16:00PM</p>
                  </div>
                  <div className="footer-time-box">
                    <AiOutlineClockCircle className="footer-icon" />
                    <p className="footer-time">09:00AM-17:00PM</p>
                  </div>
                  <div className="footer-time-box">
                    <AiOutlineClockCircle className="footer-icon" />
                    <p className="footer-time">09:00AM-17:00PM</p>
                  </div>

                </div>

              </div>
              <div className="hr"></div>
              <div className="footer-payment-part">
                <div className="footer-payment1">
                  <FaCcMastercard className="footer-pay-icon" />
                  <p className="footer-payment-method">Master Card</p>
                </div>
                <div className="footer-payment1">
                  <FaCcPaypal className="footer-pay-icon" />
                  <p className="footer-payment-method">Paypal </p>
                </div>
                <div className="footer-payment1">
                  <FaCcVisa className="footer-pay-icon" />
                  <p className="footer-payment-method">Visa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
