import React from "react";
import "../App.css";
import "../styles/CheckOut.css";

class PopBox extends React.Component {
  render() {
    return (
      <div className="checkout-layout">
        <div className="checkout-container">
          <div className="checkout-header">
            <h4>{this.props.header}</h4>
            <i
              class="fas fa-times close-icon"
              onClick={this.props.onCloseBox}
            />
          </div>
          {this.props.body}
        </div>
      </div>
    );
  }
}

export default PopBox;
