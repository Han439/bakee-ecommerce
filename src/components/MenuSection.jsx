import React from "react";
import '../App.css';
import '../styles/MenuSection.css';
import FoodCard from './FoodCard';
import Banner from './Banner';

class MenuSection extends React.Component {

  render() {
    const category = this.props.category;
    let cards = [];
    this.props.products.forEach((product) => {
      if (product.category === category) {
        cards.push(
          <FoodCard product={product} key={product.name} onAddToCart={this.props.onAddToCart}/>
        )
      }
    });

    return (
      <>
        <div className="banner-layout">
          <Banner />
        </div>
        <p className="menu-title">Our Menu</p>
        <div className="menu-layout">
          {cards}
        </div>
      </>
    );
  }
};

export default MenuSection;
