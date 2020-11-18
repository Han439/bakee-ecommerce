import React from "react";
import { connect } from "react-redux";
import "../App.css";
import "../styles/CheckOut.css";
import PopBox from "../hocs/PopBox";
import AddressForm from "./AddressForm";
import InfoForm from "./InfoForm";
import PlaceOrder from "./PlaceOrder";
import Loader from "./Loader";
import { orderSuccess, orderFail } from "../redux/actions/orderResultActions";
import { closeCheckOutBox } from "../redux/actions/checkOutBoxActions";
import { resetCart } from "../redux/actions/cartActions";
import { increaseStep } from "../redux/actions/checkOutStepActions";

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
      formValidate: {
        name: "",
        phone: "",
        mail: "",
        address: "",
      },
    };
  }

  validateInput = () => {
    let { formValidate } = this.state;
    const { name, phone, mail, address } = this.props.input;
    formValidate.name = nameRegex.test(name)
      ? ""
      : "minimum 3 character required and must contain only character";

    formValidate.phone = phoneRegex.test(phone)
      ? ""
      : "minumum 10 phone number required";

    formValidate.mail = emailRegex.test(mail) ? "" : "invalid email address";

    formValidate.address = address.length > 0 ? "" : "invalid address";

    this.setState({ formValidate: formValidate });
    return formValidate;
  };

  isValidated = () => {
    const { step } = this.props;
    let valid = true;

    const { name, phone, mail, address } = this.validateInput();

    if (step === 0) {
      [name, phone, mail].forEach((input) => {
        input.length > 0 && (valid = false);
      });
    }

    if (step === 1) {
      address.length > 0 && (valid = false);
    }

    return valid;
  };

  nextStep = () => {
    let { step } = this.props;
    step += 1;
    if (this.isValidated()) {
      if (step === 2) {
        this.calculateDeliveryFee();
      }
      this.props.increaseStep();
    }
  };

  renderSwitch = (step) => {
    const { formValidate } = this.state;
    const { name, phone, mail, address } = this.props.input;
    switch (step) {
      case 0:
        return (
          <InfoForm nextStep={this.nextStep} formValidate={formValidate} />
        );
      case 1:
        return (
          <AddressForm
            onAddressChange={this.handleAddressChange}
            formValidate={formValidate}
          />
        );
      case 2:
        return <PlaceOrder handleSubmit={this.handleSubmit} />;
      default:
        return null;
    }
  };

  render() {
    let { closeCheckOutBox, step } = this.props;
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
          body={this.renderSwitch(step)}
        />
        <Loader />
      </>
    );
  }
}

const mapStateToProps = ({ cart, checkOutStep, checkOutInput }) => ({
  cart,
  step: checkOutStep,
  input: checkOutInput,
});

const mapDispatchToProps = {
  resetCart,
  orderSuccess,
  orderFail,
  closeCheckOutBox,
  increaseStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
