import {
  GET_LOGIN_BEGIN,
  GET_LOGIN_ERROR,
  GET_LOGIN_SUCCESS,
  GET_OTP_BEGIN,
  GET_OTP_ERROR,
  GET_OTP_SUCCESS,
  LOGOUT_USER,
} from "../action";

const user_reducer = (state, action) => {
  if (action.type === GET_OTP_BEGIN) {
    return { ...state, login_loading: true };
  }

  if (action.type === GET_OTP_SUCCESS) {
    return { ...state, login_loading: false };
  }

  if (action.type === GET_OTP_ERROR) {
    return { ...state, login_loading: false, login_error: true };
  }

  if (action.type === GET_LOGIN_BEGIN) {
    return { ...state, login_loading: true };
  }

  if (action.type === GET_LOGIN_SUCCESS) {
    const userid = action.payload.data.id;
    const logintoken = action.payload.token;

    console.log("logintoken -->", action.payload.token);

    return {
      ...state,
      login_loading: false,
      // logindata: action.payload.user,
      isLogin: true,
      userid: userid,
      logintoken: logintoken,
    };
  }

  if (action.type === GET_LOGIN_ERROR) {
    return { ...state, login_loading: false, login_error: true };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      isLogin: false,
      userid: "",
      // logindata: {},
      logintoken: "",
    };
  }

  return state;
};

export default user_reducer;
