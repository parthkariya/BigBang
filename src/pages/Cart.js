import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../redux/cart";
import DatePicker from "react-date-picker";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import axios from "axios";
import { ACCEPT_HEADER, create_ticket } from "../Utils/Constant";
import moment from "moment";
import Notification from "../Utils/notification";
import CartCopy from "../components/cartcopy/CartCopy";

const Cart = () => {
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
      <CartCopy />
      {/* <div style={{ width: "100%", height: "100vh", marginTop: "100px" }}>
        {cart.length !== 0 ? (
          <>
            <table
              style={{
                width: "100%",
                margin: "30px 0",
                borderCollapse: "collapse",
              }}
            >
              <tr>
                <th className="cart_th_name">Image</th>
                <th className="cart_th_name">Name</th>
                <th className="cart_th_name">Price</th>
                <th className="cart_th_name">Total Price</th>
                <th className="cart_th_name">Amount</th>
                <th className="cart_th_name">Action</th>
              </tr>
              {cart.map((e) => {
                console.log(e);
                return (
                  <tr>
                    <td className="cart_td_name">
                      <img
                        src={e.image}
                        alt=""
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td className="cart_td_name">{e.name}</td>
                    <td className="cart_td_name">{e.price}</td>
                    <td className="cart_td_name">{e.price * e.amount}</td>
                    <td className="cart_td_name">
                      <button
                        onClick={dec.bind(this, e.id)}
                        className="btn-small btn-cart-inc-dec btn-primary"
                      >
                        -
                      </button>{" "}
                      {e.amount}{" "}
                      <button
                        onClick={inc.bind(this, e.id)}
                        className="btn-small btn-cart-inc-dec btn-primary"
                      >
                        +
                      </button>
                    </td>
                    <td className="cart_td_name">
                      <button
                        onClick={deleteItem.bind(this, e.id)}
                        className="btn-small btn-cart-inc-dec btn-primary"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
            <div className="d-flex justify-content-between px-4 card-total-con">
              <div>
                <label htmlFor="date" className="">
                  Sellect Date :
                </label>

                <DatePicker
                  onChange={onChange}
                  value={value}
                  className="gift-selector2"
                />
                <h3 className="cart-gt">
                  Grand Total :
                  {cart.reduce((acc, cur) => acc + cur.price * cur.amount, 0)}
                </h3>
                <div className="btn btn-primary" onClick={CreateTicket}>
                  Submit
                </div>
              </div>

              <div className="cart-remove-box">
                <button onClick={deleteAll} className="btn btn-primary">
                  Remove All
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="empty_cart">
            <p
              style={{
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
                margin: "25 %",
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
      </div> */}
    </>
  );
};

export default Cart;
