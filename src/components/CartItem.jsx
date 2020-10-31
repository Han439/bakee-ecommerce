import React from "react";
import '../App.css';
import '../styles/CartItem.css';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddMore = this.handleAddMore.bind(this);
        this.handleReduceItem = this.handleReduceItem.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    };

    handleAddMore = (e) =>  {
        let {onAdd, index} = this.props
        onAdd(index)
    };

    handleReduceItem = (e) => {
        let {onReduce, index} = this.props
            onReduce(index)
    };

    handleRemoveItem = (e) => {
        this.props.onRemove(this.props.product)
    }

    render() {
        return (
            <div className="cart-item">
                <div className="cart-image-container">
                    <img alt="" src={this.props.product.image}/>
                </div>
                <div className="cart-order-info">
                    <div className="cart-item-info order-info col-layout">
                        <p className="name">{this.props.product.name}</p>
                        <p className="price">${this.props.product.basePrice}</p>
                    </div>
                    <div className="order-change order-info col-layout">
                        <div className="quantity">
                            <i className="fas fa-minus minus" onClick={this.handleReduceItem}/>
                            <span>{this.props.product.quantity}</span>
                            <i className="fas fa-plus" onClick={this.handleAddMore}/>
                        </div>
                        <div className="remove">
                            <i className="fas fa-trash-alt" onClick={this.handleRemoveItem}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default CartItem;
