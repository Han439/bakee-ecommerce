import React from "react";
import "../App.css";
import "../styles/CheckOut.css";
import PlacesAutocomplete from "react-places-autocomplete";

/*global google*/

class AddressForm extends React.Component {
  handleChange = (address) => {
    this.props.onAddressChange(address);
  };

  render() {
    let { values, formValidate } = this.props;
    const searchOptions = {
      location: new google.maps.LatLng(10.765215, 106.692297),
      radius: 500,
      types: ["address"],
    };
    return (
      <PlacesAutocomplete
        value={values.address}
        onChange={this.handleChange}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
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
    );
  }
}

export default AddressForm;
