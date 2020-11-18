import React from "react";
import { connect } from "react-redux";
import {
  addQuantity,
  subtractQuantity,
  removeFromCart,
} from "../redux/actions/cartActions";
import "../App.css";
import "../styles/CartItem.css";

const CartItem = ({
  product,
  addQuantity,
  subtractQuantity,
  removeFromCart,
}) => {
  return (
    <div className="cart-item">
      <div className="cart-image-container">
        <img alt="" src={product.image} />
      </div>
      <div className="cart-order-info">
        <div className="cart-item-info order-info col-layout">
          <p className="name">{product.name}</p>
          <p className="price">${product.fullPrice}</p>
        </div>
        <div className="order-change order-info col-layout">
          <div className="quantity">
            <i
              className="fas fa-minus minus"
              onClick={() => subtractQuantity(product)}
            />
            <span>{product.quantity}</span>
            <i className="fas fa-plus" onClick={() => addQuantity(product)} />
          </div>
          <div className="remove">
            <i
              className="fas fa-trash-alt"
              onClick={() => removeFromCart(product)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addQuantity: (product) => dispatch(addQuantity(product)),
  subtractQuantity: (product) => dispatch(subtractQuantity(product)),
  removeFromCart: (product) => dispatch(removeFromCart(product)),
});

export default connect(null, mapDispatchToProps)(CartItem);
