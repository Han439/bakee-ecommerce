import React from "react";
import { connect } from "react-redux";
import { handleInputChange } from "../redux/actions/checkOutInputActions";
import { increaseStep } from "../redux/actions/checkOutStepActions";
import "../App.css";
import "../styles/CheckOut.css";

const InfoForm = ({ values, formValidate, nextStep, handleInputChange }) => {
  const { name, phone, mail } = formValidate;
  return (
    <>
      <div className="inputField scroll-bar scroll-bar-transparent">
        <div>
          <label>Name</label>
          <input
            value={values.name}
            onChange={(e) => handleInputChange(e)}
            name="name"
            placeholder="Enter your name"
            type="text"
            formNoValidate
          />
          {name.length !== 0 && <p className="error">{name}</p>}
        </div>

        <div>
          <label>Phone</label>
          <input
            value={values.phone}
            onChange={(e) => handleInputChange(e)}
            name="phone"
            placeholder="Enter your phone number"
            type="text"
            formNoValidate
          />
          {phone.length !== 0 && <p className="error">{phone}</p>}
        </div>

        <div>
          <label>Mail</label>
          <input
            value={values.mail}
            onChange={(e) => handleInputChange(e)}
            name="mail"
            placeholder="Enter your mail"
            type="email"
            formNoValidate
          />
          {mail.length !== 0 && <p className="error">{mail}</p>}
        </div>
      </div>
      <div className="step-layout">
        <button onClick={nextStep} className="btn next-btn">
          Next &rarr;
        </button>
      </div>
    </>
  );
};

const mapStateToProps = ({ checkOutInput }) => ({
  values: checkOutInput,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (e) =>
    dispatch(handleInputChange(e.target.name, e.target.value)),
  nextStep: () => dispatch(increaseStep()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoForm);
