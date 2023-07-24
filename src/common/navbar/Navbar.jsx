import React, { useEffect, useState } from "react";
import "./Navbar.css";
import images from "../../constants/images";
import {
  AiFillClockCircle,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdClose, MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import {
  ACCEPT_HEADER,
  login_url as url,
  otp_verify_url,
} from "../../Utils/Constant";
import Notification from "../../Utils/notification";
import createNotification from "../../Utils/notification";
import { useUserContext } from "../../context/user_context";
import axios from "axios";
import { Model } from "react-model";
import { FiUserPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../redux/cart";
import DatePicker from "react-date-picker";

const Navbar = () => {
  const regexpMobile = /^[0-9\b]+$/;
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleOtp, setToggleOtp] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [number, setNumber] = useState();
  const [otp, setOtp] = useState();
  const [userLogin, setUserLogin] = useState();
  const [value, onChange] = useState(new Date());

  const history = useNavigate();
  const { setLogin, verifyOtp, isLogin, logoutUser } = useUserContext();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // console.log("isLogin =-=->", isLogin);
  }, []);

  const onHandleTelephoneChange = (e) => {
    let telephone = e.target.value;
    if (telephone === "" || regexpMobile.test(telephone)) {
      setNumber(telephone);
    } else {
      return;
    }
  };

  const onHandleOtpChange = (e) => {
    let otpValue = e.target.value;
    if (otpValue === "" || regexpMobile.test(otpValue)) {
      setOtp(otpValue);
    } else {
      return;
    }
  };

  const Login = async () => {
    if (number === "") {
      //  alert("Enter the Mobile number....!");
      Notification("error", "Error", "Enter the Mobile number....!");
      return;
    } else if (number.length < 10 || number.length > 10) {
      // alert("Enter valid mobile number...");
      Notification("error", "Error!", "Enter valid mobile number...");
      return;
    }

    var parms = {
      number: number,
    };

    const data = await setLogin(parms, url);
    if (data) {
      if (data.success === 1) {
        console.log("login -->", data.success);
        Notification("success", "Success!", data.message);
        // setNumber("");
        setToggleLogin(false);
        setToggleOtp(true);
      }
      if (data.success === 0) {
        console.log("login -->", data.success);
        Notification("error", "Error!", data.message);
        setNumber("");

        // setSignupType(8);
      }
    }
    console.log(number);
  };

  const onOtp = async () => {
    if (otp === "") {
      Notification("error", "Error", "Please Enter Otp!");
      return;
    }
    var params = {
      number: number,
      otp: otp,
    };

    // verifyOtp(params, otp_verify_url, navigate);
    const otpdata = await verifyOtp(params, otp_verify_url, history);

    if (otpdata) {
      if (otpdata.success === 1) {
        setToggleOtp(false);
        setNumber("");
        Notification("success", "Success!", "Login Success");
        setUserLogin(true);
      } else {
        Notification("error", "Error!", otpdata.message);
        setUserLogin(false);
      }
    }
  };

  // -=-=-=-=-= cart -=-=-=--=-==--

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="nav-main">
        <div className="nav-flex">
          <div className="nav-logo-part">
            <img
              src={images.bibanglogo}
              alt="brand logo"
              className="nav-logo App-logo-spin"
            />
          </div>
          <ul className="main-nav-list">
            <li>
              <Link className="main-nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className="main-nav-link"
                to="/aboutus"
                onClick={() => setToggleMenu(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Booking
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                pages
              </a>
            </li>
            <li>
              <a className="main-nav-link nav-cta" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="main-nav-link nav-cta" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-icon-part">
            <Link
              to={"/cart"}
              // onClick={() => setToggleCart(true)}s
              className="reletive_nav_btn"
            >
              {cart.length !== 0 ? (
                <>
                  <div className="nav_cart_dot">
                    {cart.reduce((acc, cur) => acc + cur.amount, 0)}
                  </div>
                </>
              ) : null}

              <AiOutlineShoppingCart className="nav-icon" />
            </Link>

            {isLogin ? (
              <button
                onClick={() => {
                  logoutUser();
                  console.log(logoutUser());
                }}
              >
                <AiOutlineLogin className="nav-icon" />
              </button>
            ) : (
              <button onClick={() => setToggleLogin(true)}>
                <FiUserPlus className="nav-icon" />
              </button>
            )}
          </div>

          <div className="nav-btn-icon-part">
            {toggleMenu === false ? (
              <button className="nav-btn" onClick={() => setToggleMenu(true)}>
                <AiOutlineMenu className="nav-btn-icon" />
              </button>
            ) : (
              <button className="nav-btn" onClick={() => setToggleMenu(false)}>
                <AiOutlineClose className="nav-btn-icon" />
              </button>
            )}
          </div>
        </div>
      </nav>

      {toggleMenu && (
        <>
          <div className="side_screen">
            <div className="side_screen_base">
              <div className="side_screen_part">
                <div className="sidebar_logo_wrapp">
                  <img
                    src={images.bibanglogo}
                    alt="brand logo"
                    className="sidebar_logo"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum cupiditate asperiores voluptates sint minima quae
                    rem, nesciunt magnam error voluptatibus?
                  </p>
                </div>
                <div className="sidebar_location_wrapp">
                  <h3>Our Location</h3>

                  <div className="location_single_wrapp">
                    <MdLocationOn className="sidebar_single_logo" />
                    <p>
                      Rajkot-Ahmedabad Highway, Opp. Bhamnbor G.I.D.C,
                      <br /> Nr. Bhansal Petrol Pump, Rajkot, Gujrat - 363520
                    </p>
                  </div>

                  <div className="location_single_wrapp">
                    <MdEmail className="sidebar_single_logo" />
                    <p>bigbang@gmail.com</p>
                  </div>

                  <div className="location_single_wrapp">
                    <MdPhone className="sidebar_single_logo" />
                    <p>+91 85111 64111 / +91 74860 00709</p>
                  </div>

                  <div className="location_single_wrapp">
                    <AiFillClockCircle className="sidebar_single_logo" />
                    <p>11:00 AM - 16:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul className="side_screen_link_part">
            <li className="side_screen_single_link">
              <Link to={"/"} onClick={() => setToggleMenu(false)}>
                Home
              </Link>
            </li>
            <li className="side_screen_single_link">
              <Link to="/aboutus" onClick={() => setToggleMenu(false)}>
                About Us
              </Link>
            </li>
            <li className="side_screen_single_link">
              <a
                // className="btn btn-outline-primary"
                href="#"
                onClick={() => setToggleMenu(false)}
              >
                Booking
              </a>
            </li>
            <li className="side_screen_single_link">
              <a
                // className="btn btn-outline-primary"
                href="#"
                onClick={() => setToggleMenu(false)}
              >
                pages
              </a>
            </li>
            <li className="side_screen_single_link">
              <a
                // className="btn btn-outline-primary"
                href="#"
                onClick={() => setToggleMenu(false)}
              >
                Blog
              </a>
            </li>
            <li className="side_screen_single_link">
              <a
                // className="btn btn-outline-primary"
                href="#"
                onClick={() => setToggleMenu(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </>
      )}

      {toggleLogin && (
        <div className="side_screen2">
          {/* <Model isOpen={open} className="login_model"> */}
          <button
            className="login_close_btn"
            onClick={() => {
              setNumber("");
              setToggleLogin(false);
            }}
          >
            <MdClose />
          </button>
          <div className="login">
            <h2>Log In</h2>
            {/* <input type="text" placeholder="Username" /> */}
            <label htmlFor="mobile Number">Number</label>
            <input
              type="number"
              placeholder="Enter Your Mobile Number"
              required
              maxLength="10"
              value={number}
              onChange={(e) => onHandleTelephoneChange(e)}
            />
            <button className="btn btn-secondary" onClick={() => Login()}>
              Login
            </button>
          </div>
          {/* </Model> */}
        </div>
      )}

      {toggleOtp && (
        <div className="side_screen2">
          {/* <Model isOpen={open} className="login_model"> */}
          <button
            className="login_close_btn"
            onClick={() => {
              setNumber("");
              setToggleOtp(false);
            }}
          >
            <MdClose />
          </button>
          <div className="login">
            <h2>OTP</h2>
            {/* <input type="text" placeholder="Username" /> */}
            <label htmlFor="mobile Number">Otp</label>
            <input
              type="number"
              placeholder="Enter Provided otp"
              required
              maxLength="6"
              value={otp}
              onChange={(e) => onHandleOtpChange(e)}
            />
            <button className="btn btn-secondary" onClick={() => onOtp()}>
              Login
            </button>
          </div>
          {/* </Model> */}
        </div>
      )}
    </>
  );
};

export default Navbar;
