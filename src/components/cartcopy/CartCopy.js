import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../redux/cart";
import DatePicker from "react-date-picker";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/user_context";
import axios from "axios";
import { ACCEPT_HEADER, create_ticket } from "../../Utils/Constant";
import moment from "moment";
import Notification from "../../Utils/notification";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import "./CartCopy.css";

const CartCopy = () => {
  const [value, onChange] = useState(new Date());
  const [get_date, setDate] = useState(moment(value).format("YYYY-MM-DD"));

  const { logintoken, isLogin } = useUserContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    // localStorage.getItem("cart");

    // const items = JSON.parse(localStorage.getItem("items"));

    // console.log("logintoken -=->", items);
  }, []);

  // cart----------------

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const inc = (id) => {
    dispatch(cartAction.inc(id));
  };

  const dec = (id) => {
    dispatch(cartAction.dec(id));
  };

  const deleteItem = (id) => {
    dispatch(cartAction.remove(id));
  };

  const deleteAll = () => {
    dispatch(cartAction.reset());
  };

  // api --------------------

  const CreateTicket = async () => {
    if (isLogin == false) {
      Notification("error", "Error", "Please Login First");
    } else if (get_date == null || get_date == undefined || get_date === "") {
      Notification("error", "Error", "Please Select Date");
    } else {
      const formData = new FormData();

      for (var i = 0; i < cart.length; i++) {
        formData.append("ride_id[" + i + "]", cart[i].id);
        formData.append("total_person[" + i + "]", cart[i].amount);
      }
      formData.append("payment_type", "wallet");
      formData.append("date", get_date);

      await axios
        .post(create_ticket, formData, {
          headers: {
            Accept: ACCEPT_HEADER,
            Authorization: "Bearer " + logintoken,
          },
        })
        .then((res) => {
          console.log("----create ", res.data);
          if (res.data.success == 1 || res.data.success === "1") {
            setDate("");
            deleteAll();
            Notification("success", "Success", "Your Ticket has been Booked");
            console.log(res);
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      {console.log(cart.length)}
      {cart.length !== 0 ? (
        <>
          <section class="cart_wrapper">
            <div class="cart_lists">
              <div class="cart_title">Your Cart</div>

              <div class="cart_list_wrap">
                <div class="cart_responsive">
                  {cart.map((e) => {
                    console.log(e);
                    return (
                      <div class="tr_item">
                        <div class="td_item item_img">
                          <img src={e.image} />
                        </div>
                        <div class="td_item item_name">
                          <label class="main">{e.name}</label>
                          {/* <label class="sub">Ref. 007891987</label> */}
                        </div>
                        {/* <div class="td_item item_color">
                    <label>Blue</label>
                  </div> */}
                        <div class="td_item item_price">
                          <label>{e.price}</label>
                        </div>

                        <div class="td_item item_price">
                          <label>{e.price * e.amount}</label>
                        </div>
                        <div class="td_item item_qty">
                          {/* <td className="cart_td_name"> */}
                          <button
                            onClick={dec.bind(this, e.id)}
                            className="dec-btn"
                          >
                            <AiOutlineMinus className="dec-icon" />
                          </button>{" "}
                          {e.amount}{" "}
                          <button
                            onClick={inc.bind(this, e.id)}
                            className="inc-btn"
                          >
                            <AiOutlinePlus className="inc-icon" />
                          </button>
                          {/* </td> */}
                        </div>

                        <div class="td_item item_remove">
                          {/* <span class="material-icons-outlined">close</span> */}
                          <button
                            onClick={deleteItem.bind(this, e.id)}
                            className="delete-icon"
                          >
                            <AiOutlineClose />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div class="footer">
                  <div class="back_cart">
                    <div className="cart-remove-box">
                      <button onClick={deleteAll} className="btn btn-primary">
                        Remove All
                      </button>
                    </div>
                  </div>
                  {/* <div class="subtotal">
              <label>Subtotal: </label>
              <strong>$2451.00</strong>
            </div> */}
                </div>
              </div>
            </div>

            <div class="cart_details">
              <div class="cart_title">Cart Details</div>
              <div class="form_row">
                <div class="fo_grmroup cart_type">
                  <label class="cart-select-date">Select Date</label>
                  <div>
                    <DatePicker
                      onChange={onChange}
                      value={value}
                      className="gift-selector2"
                    />
                  </div>
                </div>

                <h3 className="cart-gt">
                  Grand Total :
                  {cart.reduce((acc, cur) => acc + cur.price * cur.amount, 0)}
                </h3>

                <button class="cart-sub-btn">Submit</button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="empty_cart">
          <p
            style={{
              fontWeight: "bold",
              alignItems: "center",
              justifyContent: "center",
              margin: "8%",
            }}
          >
            Cart is empty
          </p>
          <Link
            to="/"
            className="btn btn-secondary"
            // onClick={() => setToggleCart(false)}
          >
            Fill it
          </Link>
        </div>
      )}
    </>
  );
};

export default CartCopy;
