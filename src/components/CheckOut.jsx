import React from "react";
import "../App.css";
import "../styles/CheckOut.css";
import PopBox from "../hocs/PopBox";
import AddressForm from "./AddressForm";
import InfoForm from "./InfoForm";
import PlaceOrder from "./PlaceOrder";
import Loader from "./Loader";
import { connect } from "react-redux";
import { orderSuccess, orderFail } from "../redux/actions/orderResultActions";
import { closeCheckOutBox } from "../redux/actions/checkOutBoxActions";
import { resetCart } from "../redux/actions/cartActions";
import { increaseStep } from "../redux/actions/checkOutStepActions";

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

  renderSwitch = (step) => {
    const { formValidate } = this.state;
    switch (step) {
      case 0:
        return <InfoForm />;
      case 1:
        return <AddressForm />;

      case 2:
        return <PlaceOrder />;

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

// const validate = (val) => {
//   const errors = {};
//   if (!val.firstName) {
//     console.log("First Name is required");
//     errors.firstName = "Required";
//   }
//   if (!val.lastName) {
//     console.log("Last Name is required");
//     errors.lastName = "Required";
//   }
//   if (!val.email) {
//     console.log("email is required");
//     errors.email = "Required";
//   } else if (!/^.+@.+$/i.test(val.email)) {
//     console.log("email is invalid");
//     errors.email = "Invalid email address";
//   }
//   if (!val.age) {
//     errors.age = "Required";
//   } else if (isNaN(Number(val.age))) {
//     errors.age = "Must be a number";
//   } else if (Number(val.age) < 18) {
//     errors.age = "Sorry, you must be at least 18 years old";
//   }
//   return errors;
// };
