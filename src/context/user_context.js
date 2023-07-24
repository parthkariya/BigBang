import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";

import {
  GET_LOGIN_BEGIN,
  GET_LOGIN_ERROR,
  GET_LOGIN_SUCCESS,
  GET_OTP_BEGIN,
  GET_OTP_ERROR,
  GET_OTP_SUCCESS,
  LOGOUT_USER,
} from "../action";
import user_reducer from "../reducer/user_reducer";

import { ACCEPT_HEADER, login_url as url } from "../Utils/Constant";

const getToken = () => {
  let userid = localStorage.getItem("token");
  if (userid) {
    return JSON.parse(localStorage.getItem("token"));
  } else {
    return 0;
  }
};

const getUserId = () => {
  let userid = localStorage.getItem("userid");
  if (userid) {
    return JSON.parse(localStorage.getItem("userid"));
  } else {
    return 0;
  }
};

const getLoginState = () => {
  let islogin = localStorage.getItem("islogin");
  if (islogin) {
    return JSON.parse(localStorage.getItem("islogin"));
  } else {
    return false;
  }
};

const initialState = {
  login_loading: false,
  logintoken: getToken(),
  userid: getUserId(),
  isLogin: getLoginState(),
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(user_reducer, initialState);

  const setLogin = async (params, url) => {
    dispatch({ type: GET_OTP_BEGIN });
    try {
      const response = await axios.post(url, params, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const logindata = response.data;
      console.log("logindata-----> ", logindata);
      if (logindata.success == 1) {
        dispatch({ type: GET_OTP_SUCCESS, payload: logindata });
        console.log("logindata.success-----> ", logindata.success);

        return logindata;
      } else {
        alert(logindata.message + "");
        console.log("logindata.message-----> ", logindata.message);

        dispatch({ type: GET_OTP_ERROR });
      }
    } catch (error) {
      dispatch({ type: GET_OTP_ERROR });
    }
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    // localStorage.setItem("logindata", "");
    localStorage.setItem("islogin", "");
    localStorage.setItem("userid", "");
    localStorage.setItem("token", "");
    // history("/");
    return "logout";
  };

  const verifyOtp = async (params, url, history) => {
    dispatch({ type: GET_LOGIN_BEGIN });
    try {
      const response = await axios.post(url, params, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const logindata = response.data;
      console.log("logindata-----> ", logindata);
      if (logindata.success == 1) {
        dispatch({ type: GET_LOGIN_SUCCESS, payload: logindata });
        localStorage.setItem("islogin", JSON.stringify(true));
        localStorage.setItem("token", JSON.stringify(logindata.token));
        // localStorage.setItem(
        //   "loginuser",
        //   JSON.stringify(response.data.user.fname)
        // );
        localStorage.setItem(
          "loginnumber",
          JSON.stringify(response.data.data.number)
        );
        // fetchProfile(logindata.token);
        // if (
        //   response.data.user.is_login === 1 ||
        //   response.data.user.is_login === "1"
        // )
        history("/aboutus");
        // else history.push("/discover");

        return logindata;
      } else {
        if (response.data.status === "Token is Expired") {
          console.log("responce - status", response.data.status);
          logoutUser(history);
          history("/");
        }
        alert(logindata.message + "");
        console.log("=-=-=>", logindata.message + "");
        dispatch({ type: GET_LOGIN_ERROR });
      }
    } catch (error) {
      dispatch({ type: GET_LOGIN_ERROR });
    }
  };

  return (
    <UserContext.Provider value={{ ...state, setLogin, logoutUser, verifyOtp }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
