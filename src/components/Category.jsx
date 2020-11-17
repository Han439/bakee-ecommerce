import React from "react";
import { connect } from "react-redux";
import { switchToCake, switchToDrink } from "../redux/actions/categoryActions";
import { CAKE, DRINK } from "../redux/types/categoryTypes";
import "../App.css";
import "../styles/Category.css";

function Category({ category, switchToCake, switchToDrink }) {
  const cake =
    category === CAKE
      ? "fas fa-cheese category-box chosen-category"
      : "fas fa-cheese category-box";

  const drink =
    category === DRINK
      ? "fas fa-coffee category-box chosen-category"
      : "fas fa-coffee category-box";
  return (
    <>
      <div className="cake">
        <i className={cake} onClick={switchToCake} />
        <p>Cake</p>
      </div>
      <div className="drink">
        <i className={drink} onClick={switchToDrink} />
        <p>Drink</p>
      </div>
    </>
  );
}

const matchStateToProps = ({ category }) => ({
  category,
});

const matchDispatchToProps = {
  switchToCake,
  switchToDrink,
};

export default connect(matchStateToProps, matchDispatchToProps)(Category);
