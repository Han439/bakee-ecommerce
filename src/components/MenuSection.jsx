import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import fetchMenuData from "../redux/actions/menuActions";
import { endCartAnimation } from "../redux/actions/cartAnimationActions";
import { openCart } from "../redux/actions/cartMobileActions";
import "../App.css";
import "../styles/MenuSection.css";
import FoodCard from "./FoodCard";
import Banner from "./Banner";

function MenuSection({
  category,
  menu,
  fetchMenuData,
  openCart,
  cartAnimation,
  endCartAnimation,
}) {
  useEffect(() => fetchMenuData(), []);

  let cards = [];
  menu.forEach((product) => {
    if (product.category === category) {
      cards.push(<FoodCard product={product} key={product.id} />);
    }
  });
  return (
    <>
      <div className="banner-layout">
        <Banner />
      </div>
      <p className="menu-title">Our Menu</p>
      <div className="menu-layout">{cards}</div>
      <div
        className={cartAnimation ? "cart-icon cart-animation" : "cart-icon"}
        onClick={openCart}
        onAnimationEnd={endCartAnimation}
      >
        <i className="fas fa-shopping-bag"></i>
      </div>
    </>
  );
}

const mapStateToProps = ({ category, menu, cartAnimation }) => ({
  category,
  menu,
  cartAnimation,
});

const mapDispatchToProps = {
  fetchMenuData,
  openCart,
  endCartAnimation,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSection);
