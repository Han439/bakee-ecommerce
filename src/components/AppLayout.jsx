import React from "react";
import { connect } from "react-redux";
import { closeCart } from "../redux/actions/cartMobileActions";
import "../App.css";

const AppLayout = ({ nav, side, main, cart, displayCartMobile, closeCart }) => {
  return (
    <>
      <div className="main-layout">
        <div className="main">
          <div className="nav-container col-layout">{nav}</div>
          <div className="category-layout">{side}</div>
          <div className="menu-section scroll-bar scroll-bar-transparent">
            {main}
          </div>
        </div>
        <div
          className={displayCartMobile ? "cart-layout-mobile" : "cart-layout"}
        >
          {cart}
          <div className="cart-out-icon" onClick={closeCart}>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ displayCartMobile }) => ({
  displayCartMobile,
});

const mapDispatchToProps = {
  closeCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
