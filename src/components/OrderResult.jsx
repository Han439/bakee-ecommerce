import React from "react";
import { connect } from "react-redux";
import PopBox from "../hocs/PopBox";
import { closeOrderBox } from "../redux/actions/orderResultActions";
import "../App.css";
import "../styles/OrderResult.css";

const OrderResult = ({ isSuccess, closeOrderBox }) => {
  const header = ["SUCCESS", "ERROR"];
  return (
    <PopBox
      header={isSuccess ? header[0] : header[1]}
      onCloseBox={closeOrderBox}
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
};
const mapStateToProps = ({ result }) => ({
  isSuccess: result.isSuccess,
});

const mapDispatchToProps = {
  closeOrderBox,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderResult);
