import React from "react";
import "../App.css";
import "../styles/Category.css";

class Category extends React.Component {
  handleCakeChange = (e) => {
    this.setState({ category: "cake" });
    this.props.onCakeChange(e);
  };

  handleDrinkChange = (e) => {
    this.setState({ category: "drink" });
    this.props.onDrinkChange(e);
  };

  render() {
    const { category } = this.props;
    const cake =
      category === "cake"
        ? "fas fa-cheese category-box chosen-category"
        : "fas fa-cheese category-box";

    const drink =
      category === "drink"
        ? "fas fa-coffee category-box chosen-category"
        : "fas fa-coffee category-box";

    return (
      <>
        <div className="cake">
          <i className={cake} onClick={this.handleCakeChange} />
          <p>Cake</p>
        </div>
        <div className="drink">
          <i className={drink} onClick={this.handleDrinkChange} />
          <p>Drink</p>
        </div>
      </>
    );
  }
}

export default Category;
