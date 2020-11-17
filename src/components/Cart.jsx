import React from "react";
import "../App.css";
import CartItem from "./CartItem";
import "../styles/Cart.css";
import { connect } from "react-redux";
import { openCheckOutBox } from "../redux/actions/checkOutBoxActions";

const Cart = ({ cart, openCheckOutBox }) => {
  let { products, subTotal, deliveryFee } = cart;
  let carts = [];
  products.forEach((item, idx) => {
    carts.push(<CartItem product={item} key={item.id} index={idx} />);
  });

  return (
    <div className="cart-container">
      <h3>My Orders</h3>
      <div className="cart-items scroll-bar">{carts}</div>
      <div className="">
        <div className="order-payment">
          <div className="payment-breakdown">
            <div className="col-layout">
              <p>Sub total</p>
              <p className="price">${subTotal}</p>
            </div>
            <div className="col-layout">
              <p>Delivery fee</p>
              <p className="price">${deliveryFee}</p>
            </div>
          </div>
          <div className="col-layout">
            <p>Total</p>
            <p className="price">
              ${(Number(subTotal) + Number(deliveryFee)).toFixed(2)}
            </p>
          </div>
        </div>
        <button
          className="btn check-out-btn"
          onClick={openCheckOutBox}
          disabled={carts.length === 0}
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart,
});

const mapDispatchToProps = {
  openCheckOutBox,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
