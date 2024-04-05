import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addItem, delItem } from "../redux/action";



const Cart = () => {
  const state = useSelector((state) => state.handleCart);
//   {console.log(state[0])}
  const dispatch = useDispatch();

  const handleUpQty = (item) => {
    dispatch(addItem(item))
  }
  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const cartItems = (cartItem,index) => {
    {console.log(cartItem)}
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <div>
                <button onClick={() => handleClose(cartItem)}>-</button>
                <span>{cartItem.qty}</span>
                <button
                  onClick={() => {
                    handleUpQty(cartItem);
                  }}
                >
                  +
                </button>
              </div>
              <p className="lead fw-bold">${cartItem.price * cartItem.qty}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-primary mb-5 w-25 mx-auto"
          >
            Proceed To checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      <div>{state.length !== 0 && state.map(cartItems)}</div>
      <div>{state.length !== 0 && button()}</div>
    </>
  );
};

export default Cart;
