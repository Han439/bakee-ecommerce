import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { startCartAnimation } from "../redux/actions/cartAnimationActions";
import "../App.css";
import "../styles/FoodCard.css";

const FoodCard = ({ product, addToCart, startCartAnimation }) => {
  return (
    <div className="card-item">
      <div className="card-image-container">
        <img alt="" src={product.image} />
      </div>
      <div className="food-info">
        <p className="food-name">{product.name}</p>
        <p className="price">${product.price}</p>
      </div>
      <div>
        <button
          className="add-btn btn"
          onClick={() => {
            startCartAnimation();
            addToCart(product);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCart(product)),
  startCartAnimation: () => dispatch(startCartAnimation()),
});

export default connect(null, mapDispatchToProps)(FoodCard);
