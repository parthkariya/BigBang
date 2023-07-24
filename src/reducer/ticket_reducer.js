import {
  GET_TICKET_BEGIN,
  GET_TICKET_SUCCESS,
  GET_TICKET_ERROR,
} from "../action";

const ticket_reducer = (state, action) => {
  if (action.type === GET_TICKET_BEGIN) {
    return { ...state, is_loading_rides: true };
  }
  if (action.type === GET_TICKET_SUCCESS) {
    console.log("action.payload -->", action.payload);
    return {
      ...state,
      is_loading_rides: false,
      rides_list: action.payload,
    };
  }
  if (action.type === GET_TICKET_ERROR) {
    return { ...state, is_loading_rides: false };
  }
  return state;
};

export default ticket_reducer;
