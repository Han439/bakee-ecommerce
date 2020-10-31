import React from "react";
import '../App.css';
import CartItem from "./CartItem";
import '../styles/Cart.css';

class Cart extends React.Component {

    render() {
        let {products, subTotal, deliver} = this.props.cart
        let carts = [];
        products.forEach((item, idx) => {
            carts.push(
                <CartItem  product={item} key={item.name} index={idx} onAdd={this.props.onAdd} onReduce={this.props.onReduce} onRemove={this.props.onRemove}/>
            )
        });

        return (
            <div className="cart-container">
                <h3>My Orders</h3>
                <div className="cart-items scroll-bar">
                    {carts}
                </div>
                <div className="">
                    <div className="order-payment">
                        <div className="payment-breakdown">
                            <div className="col-layout">
                                <p>Sub total</p>
                                <p className="price">${subTotal}</p>
                            </div>
                            <div className="col-layout">
                                <p>Delivery fee</p>
                                <p className="price">${deliver}</p>
                            </div>
                        </div>
                        <div className="col-layout">
                            <p>Total</p>
                            <p className="price">${(Number(subTotal) + Number(deliver)).toFixed(2)}</p>
                        </div>
                    </div>
                    <button 
                    className="btn check-out-btn"
                    onClick={this.props.onCheckOut}
                    disabled={products.length === 0}>
                        Check Out
                    </button>
                </div>
            </div>
        );
    };
};

export default Cart;
