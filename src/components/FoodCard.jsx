import React from "react";
import '../App.css';
import '../styles/FoodCard.css';

class FoodCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleAddToCart = this.handleAddToCart.bind(this);
  };

  handleAddToCart = (e) => {
    this.props.onAddToCart(this.props.product)
  };

  render() {
    return (
      <div className="card-item">
          <div className="card-image-container">
              <img alt="" src={this.props.product.image}/>
          </div>
          <div className="food-info">
              <p className="food-name">{this.props.product.name}</p>
              <p className="price">${this.props.product.price}</p>
          </div>
          <div>
              <button className="add-btn btn" onClick={this.handleAddToCart}>Add</button>
          </div>
      </div>
    );
  };
};

export default FoodCard;
