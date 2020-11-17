import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import fetchMenuData from "../redux/actions/menuActions";
import "../App.css";
import "../styles/MenuSection.css";
import FoodCard from "./FoodCard";
import Banner from "./Banner";

function MenuSection({ category, menu, fetchMenuData }) {
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
    </>
  );
}

const mapStateToProps = ({ category, menu }) => ({
  category,
  menu,
});

const mapDispatchToProps = {
  fetchMenuData,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSection);
