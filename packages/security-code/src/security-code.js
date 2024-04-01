import React from "react";
import OtpInput from "react-otp-input";
import MuiInput from "@mui/material/Input";
import PropTypes from "prop-types";
import MuiDivider from "@mui/material/Divider";
import DhigSecurityCodeStyleSheet from "./styles";

const SecurityCode = ({ dense, error, disabled, ...otherProps }) => {
  const classNames = ["DhigSecurityCode"];

  if (dense) {
    classNames.push("DhigSecurityCode--dense");
  }

  if (error) {
    classNames.push("DhigSecurityCode--error");
  }

  const renderInput = (inputProps) => {
    return (
      <MuiInput
        inputProps={{ ...inputProps }}
        className={classNames.join(" ")}
        sx={(theme) => DhigSecurityCodeStyleSheet(theme)}
        endAdornment={
          <MuiDivider
            sx={{
              height: "60%",
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)"
            }}
            orientation="vertical"
            light
          />
        }
        disabled={disabled}
      />
    );
  };

  return <OtpInput renderInput={renderInput} {...otherProps} />;
};

SecurityCode.propTypes = {
  /*
   * Disabled state
   */
  disabled: PropTypes.bool,
  /*
   * Dense variant
   */
  dense: PropTypes.bool,
  /*
   * Error state
   */
  error: PropTypes.bool,
  /*
   * Number of inputs
   */
  numInputs: PropTypes.number
};

SecurityCode.defaultProps = {
  disabled: false,
  dense: false,
  error: false,
  numInputs: 6
};

export default SecurityCode;
