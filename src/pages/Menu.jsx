import React from "react";
import { connect } from "react-redux";
import { endCartAnimation } from "../redux/actions/cartAnimationActions";
import "../App.css";
import AppLayout from "../hocs/AppLayout";
import Cart from "../components/Cart";
import MenuSection from "../components/MenuSection";
import Category from "../components/Category";
import Navigator from "../components/Navigator";
import CheckOut from "../components/CheckOut";
import OrderResult from "../components/OrderResult";

const App = (props) => {
  const { result, displayCheckOut } = props;

  return (
    <>
      <AppLayout
        nav={<Navigator />}
        side={<Category />}
        main={<MenuSection />}
        cart={<Cart />}
      />
      {displayCheckOut && <CheckOut />}
      {result.displayResult && <OrderResult />}
    </>
  );
};

const mapStateToProps = ({ result, cart, displayCheckOut, cartAnimation }) => ({
  result,
  cart,
  displayCheckOut,
});

const mapDispatchToProps = {
  endCartAnimation,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
