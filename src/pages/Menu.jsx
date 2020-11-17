import React from "react";
import { connect } from "react-redux";
import { openCart } from "../redux/actions/cartMobileActions";
import { endCartAnimation } from "../redux/actions/cartAnimationActions";
import "../App.css";
import AppLayout from "../components/AppLayout";
import Cart from "../components/Cart";
import MenuSection from "../components/MenuSection";
import Category from "../components/Category";
import Navigator from "../components/Navigator";
import CheckOut from "../components/CheckOut";
import OrderResult from "../components/OrderResult";

const App = (props) => {
  const {
    result,
    cartAnimation,
    endCartAnimation,
    displayCheckOut,
    openCart,
  } = props;

  return (
    <>
      <AppLayout
        nav={<Navigator />}
        side={<Category />}
        main={<MenuSection />}
        cart={<Cart />}
      />
      <div
        className={cartAnimation ? "cart-icon cart-animation" : "cart-icon"}
        onClick={openCart}
        onAnimationEnd={endCartAnimation}
      >
        <i className="fas fa-shopping-bag"></i>
      </div>
      {displayCheckOut && <CheckOut />}
      {result.displayResult && <OrderResult />}
    </>
  );
};

const mapStateToProps = ({ result, cart, displayCheckOut, cartAnimation }) => ({
  result,
  cart,
  displayCheckOut,
  cartAnimation,
});

const mapDispatchToProps = {
  openCart,
  endCartAnimation,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
