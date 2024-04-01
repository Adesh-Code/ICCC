import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SvgAdd from "@iccc/icon/lib/build/icons/add";
import SvgIcon from "@mui/material/SvgIcon";
import SvgSubtract from "@iccc/icon/lib/build/icons/subtract";

const NumberInput = ({
  className,
  id,
  max,
  min,
  step,
  value,
  error,
  onChange,
  onKeyDown,
  ...otherProps
}) => {
  const [number, setNumber] = useState(value);
  const [customError, setCustomError] = useState(false);

  useEffect(() => {
    setNumber(value);
  }, [value]);

  const parseInput = (input) => {
    if (!input) {
      return "";
    }
    const num = parseFloat(input);
    return num;
  };

  const validateInput = (input) => {
    input === "" || input > max || input < min
      ? setCustomError(true)
      : setCustomError(false);
  };

  const handleChange = (input) => {
    const value = parseInput(input);
    validateInput(value);
    setNumber(value);
    if (onChange) {
      onChange(value);
    }
  };

  const changeValue = (currentValue, max, min, step) => {
    if (currentValue === "") return min;

    const number = currentValue + step;
    if (typeof max === "number" && number > max) {
      setCustomError(false);
      return max;
    }
    if (typeof min === "number" && number < min) {
      setCustomError(false);
      return min;
    }

    const decimals = (step.toString().split(".")[1] || []).length;
    if (decimals) {
      return parseFloat(number.toFixed(decimals));
    }
    validateInput(number);
    return number;
  };

  const handleKeyDown = (event, operation) => {
    if (event.key === "ArrowUp" || (operation === "add" && onChange)) {
      return onChange((currentValue) =>
        changeValue(currentValue, max, min, step)
      );
    }
    if (event.key === "ArrowDown" || (operation === "subtract" && onChange)) {
      return onChange((currentValue) =>
        changeValue(currentValue, max, min, step * -1)
      );
    }
    if (onKeyDown) return onKeyDown(event);
    return null;
  };

  return (
    <Input
      classes={{ root: `DhigNumberInput ${className.split(" ")}` }}
      id={id}
      value={number}
      inputProps={{
        type: "number"
      }}
      onChange={(e) => handleChange(e.target.value)}
      onKeyDown={handleKeyDown}
      error={error || customError}
      endAdornment={
        <>
          <InputAdornment position="end" tabIndex="0">
            <SvgIcon
              fontSize="medium"
              onClick={(e) => handleKeyDown(e, "subtract")}
            >
              <SvgSubtract />
            </SvgIcon>
          </InputAdornment>
          <InputAdornment position="end" tabIndex="0">
            <SvgIcon fontSize="medium" onClick={(e) => handleKeyDown(e, "add")}>
              <SvgAdd />
            </SvgIcon>
          </InputAdornment>
        </>
      }
      {...otherProps}
    />
  );
};

NumberInput.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  id: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
};

export const defaultProps = {
  className: "",
  error: false,
  id: "",
  max: 100,
  min: 0,
  step: 1,
  value: 0
};

NumberInput.defaultProps = {
  ...defaultProps
};

export default NumberInput;
