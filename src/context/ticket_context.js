import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import {
  GET_TICKET_BEGIN,
  GET_TICKET_ERROR,
  GET_TICKET_SUCCESS,
} from "../action";
import ticket_reducer from "../reducer/ticket_reducer";
import { ACCEPT_HEADER, get_ride } from "../Utils/Constant";
import Notification from "../Utils/notification";

const initialState = {
  is_loading_rides: false,
  rides_list: [],
};

const TicketContext = React.createContext();

export const TicketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ticket_reducer, initialState);

  const getStratege = async () => {
    dispatch({ type: GET_TICKET_BEGIN });
    await axios
      .get(get_ride, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      })
      .then((res) => {
        // console.log("res :============ ", res.data.success);
        if (res.data.success == 1) {
          dispatch({ type: GET_TICKET_SUCCESS, payload: res.data.data });
        }
      })
      .catch((err) => {
        dispatch({ type: GET_TICKET_ERROR });
        // console.log(err)
      });
  };

  const getLocation = async () => {
    dispatch({ type: GET_TICKET_BEGIN });
    await axios
      .get(get_ride, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      })
      .then((res) => {
        console.log("---res : ", res.data);
        const data = res.data.data;

        if (res.data.success === 1) {
          dispatch({ type: GET_TICKET_SUCCESS, payload: data });
        } else {
        }
      })
      .catch((err) => {
        // console.log(err)
        dispatch({ type: GET_TICKET_ERROR });
      });
  };

  return (
    <TicketContext.Provider value={{ ...state, getLocation }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicketContext = () => {
  return useContext(TicketContext);
};
