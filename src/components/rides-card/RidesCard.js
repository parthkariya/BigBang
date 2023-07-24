import React, { useEffect, useState } from "react";
import "./RidesCard.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useTicketContext } from "../../context/ticket_context";
import { cartAction } from "../../redux/cart";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../Utils/notification";

const RidesCard = () => {
  const { getLocation, rides_list, is_loading_rides } = useTicketContext();

  useEffect(() => {
    getLocation();
    console.log("getStratege -->", rides_list);
  }, []);

  const [cartadd, setCartadd] = useState(false);
  const [cartid, setCartId] = useState();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = (item) => {
    const isAdded = cart.some((e) => {
      return e.id === item.id;
    });

    if (!isAdded) {
      dispatch(
        cartAction.add({
          id: item.id,
          name: item.name,
          price: item.amount,
          image: item.image_full,
          amount: 1,
        })
      );
    } else {
      Notification("error", "Error", "Ticket Already Added To Your Cart");
    }
  };

  return (
    <section className="sec-ridescard">
      <div className="ridescard-heading-sec">
        <h5 className="ridescard-heading">Our Rides</h5>
        <p className="ridescard-subheading">Feel The Thrill !</p>
      </div>

      {is_loading_rides ? (
        <div className="loader"></div>
      ) : (
        <div className="con-ridescard">
          {rides_list && rides_list.length > 0
            ? rides_list.map((e, index) => {
                return (
                  <div className="ridescard-part" key={e.id}>
                    <div className="ridescard-img-box">
                      <img
                        src={e.image_full}
                        alt={`${e.name} + "image"`}
                        className="ridescard-img"
                      />
                    </div>
                    <div className="ridescard-detail">
                      <p className="ridescard-name">{e.name}</p>
                      <div className="ridescard-capacity-box">
                        <p className="ridescard-capacity">{e.description}</p>
                      </div>
                      <p className="ridescard-desc">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>

                      <div className="ridescard-ticket-qnt">
                        {/* <p className="  ridescard-tic-qnt-heading  ">
                          Ticket Quentity:-
                        </p> */}
                        <button
                          className="btn btn-secondary"
                          onClick={addToCart.bind(this, e)}
                        >
                          Purchase Ticket
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      )}
      {/* 
      <div className="btn-buy-now-box">
        <button className="btn-ridescard-book">Book Now</button>
      </div> */}
    </section>
  );
};

export default RidesCard;
