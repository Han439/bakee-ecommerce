import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Cookies from "universal-cookie";
import { trackPromise } from "react-promise-tracker";
import "../App.css";
import "../styles/CheckOut.css";
import PopBox from "./PopBox";
import AddressForm from "./AddressForm";
import InfoForm from "./InfoForm";
import PlaceOrder from "./PlaceOrder";
import Loader from "./Loader";
import { orderSuccess, orderFail } from "../redux/actions/orderResultActions";
import { closeCheckOutBox } from "../redux/actions/checkOutBoxActions";
import { resetCart, setDeliveryFee } from "../redux/actions/cartActions";

/*global google*/

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const nameRegex = RegExp(/[a-zA-Z]{3,}/);

const phoneRegex = RegExp(/[0-9]{9,}/);

class CheckOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      name: "",
      phone: "",
      mail: "",
      address: "",
      formValidate: {
        name: "",
        phone: "",
        mail: "",
        address: "",
      },
    };
  }

  calculateDeliveryFee = () => {
    const origin = new google.maps.LatLng(10.765215, 106.692297);
    const destination = this.state.address;
    const deliveryService = new google.maps.DistanceMatrixService();
    trackPromise(
      deliveryService.getDistanceMatrix(
        {
          origins: [origin],
          destinations: [destination],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false,
        },
        this.callback
      )
    );
  };

  callback = (response, status) => {
    const fair = 0.5;
    if (status !== google.maps.DistanceMatrixStatus.OK) {
      console.log("error");
      this.updateResult(false);
    } else {
      console.log(response.rows[0].elements[0].distance);
      const distance = response.rows[0].elements[0].distance.value / 1000;
      const deliver = Number(distance * fair).toFixed(2);
      this.props.setDeliveryFee(deliver);
    }
  };

  validateInput = () => {
    let { formValidate, name, phone, mail } = this.state;

    formValidate.name = nameRegex.test(name)
      ? ""
      : "minimum 3 character required and must contain only character";

    formValidate.phone = phoneRegex.test(phone)
      ? ""
      : "minumum 10 phone number required";

    formValidate.mail = emailRegex.test(mail) ? "" : "invalid email address";

    this.setState({ formValidate: formValidate });
    return formValidate;
  };

  validateAddress = () => {
    let { formValidate, address } = this.state;
    formValidate.address = address.length > 0 ? "" : "invalid address";
    this.setState({ formValidate: formValidate });
    return formValidate.address;
  };

  isValidated = () => {
    const { step } = this.state;

    let valid = true;

    const { name, phone, mail } = this.validateInput();
    if (step === 0) {
      [name, phone, mail].forEach((input) => {
        input.length > 0 && (valid = false);
      });
    }

    if (step === 1) {
      this.validateAddress().length > 0 && (valid = false);
    }

    return valid;
  };

  nextStep = () => {
    let { step } = this.state;
    step += 1;
    if (this.isValidated()) {
      if (step === 2) {
        this.calculateDeliveryFee();
      }
      this.setState({ step: step });
    }
  };

  previousStep = () => {
    let { step } = this.state;
    step -= 1;
    this.setState({ step: step });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleAddressChange = (address) => {
    this.setState({ address });
  };

  renderSwitch = (step) => {
    const { cart } = this.props;
    const { formValidate, name, phone, mail, address } = this.state;
    let values = { name, phone, mail, address };
    switch (step) {
      case 0:
        return (
          <InfoForm
            values={values}
            onInfoChange={this.handleChange}
            formValidate={formValidate}
          />
        );
      case 1:
        return (
          <AddressForm
            values={values}
            onAddressChange={this.handleAddressChange}
            formValidate={formValidate}
          />
        );
      case 2:
        return <PlaceOrder paymentInfo={cart} values={values} />;
      default:
        return null;
    }
  };

  handleSubmit = () => {
    // prepare data for posting
    let { orderSuccess, orderFail, closeCheckOutBox, resetCart } = this.props;

    let cartData = this.props.cart;

    const { name, phone, mail, address } = this.state;

    const cart = JSON.stringify(cartData.products);

    const price = Number(cartData.subTotal).toFixed(2);

    const deliveryFee = Number(cartData.deliveryFee).toFixed(2);

    const data = { name, phone, mail, address, cart, price, deliveryFee };

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

  componentDidMount() {
    let st = localStorage.getItem("checkout");
    if (st) {
      st = JSON.parse(st);
      const { name, phone, mail, address, step } = st;
      this.setState({ name, phone, mail, address, step });
    }
  }

  componentWillUnmount() {
    const { name, phone, mail, address, step } = this.state;
    localStorage.setItem(
      "checkout",
      JSON.stringify({ name, phone, mail, address, step })
    );
  }

  render() {
    let { closeCheckOutBox } = this.props;
    let { step } = this.state;
    const header = [
      "Who are we deliver to?",
      "Where are we deliver to?",
      "Comfirmation",
    ];
    return (
      <>
        <PopBox
          header={header[step]}
          onCloseBox={closeCheckOutBox}
          body={
            <>
              <div className="inputField scroll-bar scroll-bar-transparent">
                {this.renderSwitch(step)}
              </div>
              <div
                className={step > 0 ? "step-layout col-layout" : "step-layout"}
              >
                {step > 0 && (
                  <button onClick={this.previousStep} className="previous-btn">
                    &larr; Back
                  </button>
                )}
                {step === 2 ? (
                  <button onClick={this.handleSubmit} className="btn next-btn">
                    Place Order &rarr;
                  </button>
                ) : (
                  <button onClick={this.nextStep} className="btn next-btn">
                    Next &rarr;
                  </button>
                )}
              </div>
            </>
          }
        />
        <Loader />
      </>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart,
});

const mapDispatchToProps = {
  resetCart,
  setDeliveryFee,
  orderSuccess,
  orderFail,
  closeCheckOutBox,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
