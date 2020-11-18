import React from "react";
import { connect } from "react-redux";
import { decreaseStep } from "../redux/actions/checkOutStepActions";
import { orderSuccess, orderFail } from "../redux/actions/orderResultActions";
import { closeCheckOutBox } from "../redux/actions/checkOutBoxActions";
import { resetCart } from "../redux/actions/cartActions";
import axios from "axios";
import Cookies from "universal-cookie";
import { trackPromise } from "react-promise-tracker";
import "../styles/CheckOut.css";

const PlaceOrder = ({
  values,
  paymentInfo,
  previousStep,
  resetCart,
  closeCheckOutBox,
  orderSuccess,
  orderFail,
}) => {
  let { products, subTotal, deliveryFee } = paymentInfo;
  const handleSubmit = () => {
    // prepare data for posting
    let { products, subTotal, deliveryFee } = paymentInfo;
    const { name, phone, mail, address } = values;
    const cart = JSON.stringify(products);
    const price = Number(subTotal).toFixed(2);
    const fee = Number(deliveryFee).toFixed(2);
    const data = { name, phone, mail, address, cart, price, deliveryFee: fee };
    const postData = JSON.stringify(data);

    // prepare for api call
    const cookies = new Cookies();
    const url = "http://127.0.0.1:8000/api/order/";
    trackPromise(
      axios
        .request({
          url: url,
          method: "post",
          data: postData,
          headers: {
            "Content-type": "application/json",
            "X-CSRFToken": cookies.get("csrftoken"),
            Accept: "application/json; indent=4",
          },
        })
        .then((response) => {
          resetCart();
          closeCheckOutBox();
          orderSuccess();
        })
        .catch((error) => {
          orderFail();
        })
    );
  };
  return (
    <>
      <div className="inputField scroll-bar scroll-bar-transparent">
        <table className="info-list">
          <tr>
            <td>Name</td>
            <td>{values.name}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{values.phone}</td>
          </tr>
          <tr>
            <td>Mail</td>
            <td>{values.mail}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{values.address}</td>
          </tr>
        </table>
        {products.length !== 0 && (
          <table className="info-list">
            {products.map((item) => {
              return (
                <tr key={item.name}>
                  <td>
                    {item.name} <br />
                    <span>x{item.quantity}</span>
                  </td>
                  <td>
                    <br />${item.fullPrice}
                  </td>
                </tr>
              );
            })}
          </table>
        )}
        <table className="info-list">
          <tr>
            <td>Sub total</td>
            <td>${subTotal}</td>
          </tr>
          <tr>
            <td>Delivery fee</td>
            <td>${deliveryFee}</td>
          </tr>
          <tr className="total">
            <td>Total</td>
            <td>${(Number(subTotal) + Number(deliveryFee)).toFixed(2)}</td>
          </tr>
        </table>
      </div>
      <div className="step-layout col-layout">
        <button onClick={previousStep} className="previous-btn">
          &larr; Back
        </button>
        <button onClick={handleSubmit} className="btn next-btn">
          Place Order &rarr;
        </button>
      </div>
    </>
  );
};

const mapStateToProps = ({ cart, checkOutInput }) => ({
  values: checkOutInput,
  paymentInfo: cart,
});

const mapDispatchToProps = {
  previousStep: decreaseStep,
  resetCart,
  closeCheckOutBox,
  orderSuccess,
  orderFail,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder);
