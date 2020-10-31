import React from "react";
import axios from "axios";
import shortid from "shortid";
import "../App.css";
import AppLayout from "../components/AppLayout";
import Cart from "../components/Cart";
import MenuSection from "../components/MenuSection";
import Category from "../components/Category";
import Navigator from "../components/Navigator";
import CheckOut from "../components/CheckOut";
import OrderResult from "../components/OrderResult";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "cake",
      isCartMobile: false,
      isCheckOut: false,
      result: false,
      isSuccess: false,
      cartAnimation: false,
      cart: { products: [], subTotal: 0, deliver: 0 },
    };
    this.handleDrinkCategory = this.handleDrinkCategory.bind(this);
    this.handleCakeCategory = this.handleCakeCategory.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleAddMore = this.handleAddMore.bind(this);
    this.handleReduce = this.handleReduce.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
    this.handlePayment = this.handlePayment.bind(this);
    this.resetCart = this.resetCart.bind(this);
    this.handleResultBox = this.handleResultBox.bind(this);
    this.handleCartMobile = this.handleCartMobile.bind(this);
    this.handleDeliveryFee = this.handleDeliveryFee.bind(this);
  }

  handleDeliveryFee = (deliver) => {
    const { products, subTotal } = this.state.cart;
    this.setState({ cart: { products, subTotal, deliver } });
  };

  handleDrinkCategory = (e) => {
    this.setState({ category: "drink" });
  };

  handleCakeCategory = (e) => {
    this.setState({ category: "cake" });
  };

  handleAddToCart = (product) => {
    let { products, subTotal, deliver } = this.state.cart;

    for (let i = 0; i < products.length; i++) {
      if (products[i].name === product.name) {
        return;
      }
    }
    // set quantity
    product.quantity = 1;
    product.basePrice = product.quantity * product.price;

    let newCart = products.concat(product);
    let cart = {
      products: newCart,
      subTotal: subTotal + product.price,
      deliver: deliver,
    };

    this.setState({
      cart: cart,
      cartAnimation: true,
    });
  };

  handleAddMore = (key) => {
    this.handlePayment(key, 1);
  };

  handleReduce = (key) => {
    this.handlePayment(key, -1);
  };

  handlePayment = (key, change) => {
    let { products, subTotal, deliver } = this.state.cart;
    let item = products[key];
    // change quantity
    item.quantity = item.quantity + change;
    // if quantity === 0 remove from cart
    if (products[key].quantity === 0) {
      this.handleRemoveFromCart(products[key]);
      return;
    }
    // set new price with new quantity
    item.basePrice = item.quantity * item.price;
    // set the new subtotal
    subTotal = subTotal + change * item.price;
    // update the item to the cart
    products[key] = item;
    // update the state
    let cart = { products: products, subTotal: subTotal, deliver: deliver };

    this.setState({ cart: cart });
  };

  handleRemoveFromCart = (product) => {
    let { products, subTotal, deliver } = this.state.cart;
    const newCart = products.filter((item) => item.name !== product.name);
    let cart = {
      products: newCart,
      subTotal: subTotal - product.basePrice,
      deliver: deliver,
    };

    this.setState({ cart: cart });
  };

  resetCart = () => {
    this.setState({
      cart: { ...this.state.cart, products: [], subTotal: 0 },
      isCheckOut: false,
    });
  };

  handleCheckOut = () => {
    let { isCheckOut } = this.state;
    this.setState({ isCheckOut: !isCheckOut });
  };

  handleResultBox = () => {
    let { result } = this.state;
    this.setState({ result: !result });
  };

  updateResult = (type = true) => {
    this.setState({ isSuccess: type });
  };

  handleCartMobile = () => {
    this.setState({ isCartMobile: !this.state.isCartMobile });
  };

  componentDidMount() {
    axios.default.headers = {
      "Content-Type": "application/json",
    };

    axios
      .get("/api/product/")
      .then((res) => {
        this.setState({ data: res.data });
        let storage = localStorage.getItem("cart");
        if (storage) {
          const cart = JSON.parse(storage);
          this.setState({ cart });
        }
      })
      .catch((error) => console.log(error));
  }

  componentWillUnmount() {
    const { cart } = this.state;
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  render() {
    const {
      data,
      category,
      result,
      isCheckOut,
      isSuccess,
      isCartMobile,
      cart,
      cartAnimation,
    } = this.state;

    return (
      <>
        <AppLayout
          nav={<Navigator />}
          side={
            <Category
              onCakeChange={this.handleCakeCategory}
              onDrinkChange={this.handleDrinkCategory}
            />
          }
          main={
            <MenuSection
              products={data}
              category={category}
              onAddToCart={this.handleAddToCart}
            />
          }
          cart={
            <div
              className={isCartMobile ? "cart-layout-mobile" : "cart-layout"}
            >
              <Cart
                cart={cart}
                onAdd={this.handleAddMore}
                onReduce={this.handleReduce}
                onRemove={this.handleRemoveFromCart}
                onCheckOut={this.handleCheckOut}
              />
              <div className="cart-out-icon" onClick={this.handleCartMobile}>
                <i class="fas fa-long-arrow-alt-right"></i>
              </div>
            </div>
          }
        />
        <div
          className={cartAnimation ? "cart-icon cart-animation" : "cart-icon"}
          onClick={this.handleCartMobile}
          onAnimationEnd={() => this.setState({ cartAnimation: false })}
        >
          <i class="fas fa-shopping-bag"></i>
        </div>
        {isCheckOut && (
          <CheckOut
            paymentInfo={cart}
            onReset={this.resetCart}
            onCheckOut={this.handleCheckOut}
            handleDeliveryFee={this.handleDeliveryFee}
            handleResultBox={this.handleResultBox}
            updateResult={this.updateResult}
          />
        )}
        {result && (
          <OrderResult
            isSuccess={isSuccess}
            onCloseResult={this.handleResultBox}
          />
        )}
      </>
    );
  }
}

export default App;
