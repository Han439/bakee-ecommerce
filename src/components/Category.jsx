import React from "react";
import '../App.css';
import '../styles/Category.css';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {category: 'cake'};
    this.handleDrinkChange = this.handleDrinkChange.bind(this);
    this.handleCakeChange = this.handleCakeChange.bind(this);
  };

  handleCakeChange = (e) => {
    this.setState({category: 'cake'})
    this.props.onCakeChange(e);
  };

  handleDrinkChange = (e) => {
    this.setState({category: 'drink'})
    this.props.onDrinkChange(e);
  };
  
  render() {
    let cake = this.state.category === 'cake' ? 
    "fas fa-cheese category-box chosen-category" :
    "fas fa-cheese category-box"

    let drink = this.state.category === 'drink' ? 
    "fas fa-coffee category-box chosen-category" :
    "fas fa-coffee category-box"

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
  };
};

export default Category;
