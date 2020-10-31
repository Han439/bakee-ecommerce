import React from "react";
import PopBox from "./PopBox";
import "../App.css";
import "../styles/OrderResult.css";

class CheckOut extends React.Component {
  render() {
    let { onCloseResult } = this.props;
    let { isSuccess } = this.props;
    const header = ["SUCCESS", "ERROR"];
    return (
      <PopBox
        header={isSuccess ? header[0] : header[1]}
        onCheckOut={onCloseResult}
        body={
          <div className="result">
            {isSuccess ? (
              <div>
                <i class="fas fa-check-circle"></i>
                <h4>
                  YOUR ORDER IS ON THE WAY <br />
                  PLEASE CHECK YOUR EMAIL FOR COMFIRMATION
                </h4>
              </div>
            ) : (
              <div>
                <i class="fas fa-exclamation-circle"></i>
                <h4>
                  THERE IS A ERROR OCCUR
                  <br />
                  PLEASE FILL IN THE INPUT CORRECTLY
                </h4>
              </div>
            )}
          </div>
        }
      />
    );
  }
}

export default CheckOut;
