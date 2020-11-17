import React from "react";
import "../styles/CheckOut.css";

export class PlaceOrder extends React.Component {
  render() {
    let { values, paymentInfo } = this.props;
    let { products, subTotal, deliveryFee } = paymentInfo;
    return (
      <>
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
      </>
    );
  }
}

export default PlaceOrder;
