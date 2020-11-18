import React from "react";
import { connect } from "react-redux";
import { handleInputChange } from "../redux/actions/checkOutInputActions";
import {
  increaseStep,
  decreaseStep,
} from "../redux/actions/checkOutStepActions";
import { setDeliveryFee } from "../redux/actions/cartActions";
import "../App.css";
import "../styles/CheckOut.css";
import PlacesAutocomplete from "react-places-autocomplete";
import { trackPromise } from "react-promise-tracker";
import Loader from "./Loader";

/*global google*/

const AddressForm = ({
  address,
  formValidate,
  handleInputChange,
  previousStep,
  nextStep,
  setDeliveryFee,
}) => {
  const calculateDeliveryFee = () => {
    const origin = new google.maps.LatLng(10.765215, 106.692297);
    const destination = address;
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
        callback
      )
    );
  };

  const callback = (response, status) => {
    const fair = 0.5;
    if (status !== google.maps.DistanceMatrixStatus.OK) {
      console.log("error");
    } else {
      console.log(response.rows[0].elements[0].distance);
      const distance = response.rows[0].elements[0].distance.value / 1000;
      const deliver = Number(distance * fair).toFixed(2);
      setDeliveryFee(deliver);
    }
  };

  const searchOptions = {
    location: new google.maps.LatLng(10.765215, 106.692297),
    radius: 500,
    types: ["address"],
  };
  return (
    <>
      <div className="inputField scroll-bar scroll-bar-transparent">
        <PlacesAutocomplete
          value={address}
          onChange={(address) => handleInputChange("address", address)}
          searchOptions={searchOptions}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <>
              <div>
                <label>Address</label>
                <input
                  {...getInputProps({
                    placeholder: "Enter your address",
                    className: "location-search-input",
                  })}
                />
                {formValidate.address.length !== 0 && (
                  <p className="error">{formValidate.address}</p>
                )}
              </div>
              <div className="dropdown-container">
                {/* {loading && <div>Loading...</div>} */}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </PlacesAutocomplete>
      </div>
      <div className="step-layout col-layout">
        <button onClick={previousStep} className="previous-btn">
          &larr; Back
        </button>
        <button
          onClick={() => {
            calculateDeliveryFee();
            nextStep();
          }}
          className="btn next-btn"
        >
          Next &rarr;
        </button>
      </div>
      <Loader />
    </>
  );
};

const mapStateToProps = ({ checkOutInput }) => ({
  address: checkOutInput.address,
});

const mapDispatchToProps = (dispatch) => ({
  setDeliveryFee: (fee) => dispatch(setDeliveryFee(fee)),
  handleInputChange: (address, value) =>
    dispatch(handleInputChange(address, value)),
  previousStep: () => dispatch(decreaseStep()),
  nextStep: () => dispatch(increaseStep()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);
