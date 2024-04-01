import React, { useState } from "react";
import PropTypes from "prop-types";
import Typography from "@iccc/typography";

/**
 * Renders a character counter
 *
 * @param {Object} props
 * @param {number} props.count - Current character count
 * @param {number} props.maxLength - Maximum allowed length
 *
 */
export const CharacterCounter = ({ count, maxLength }) => {
  return (
    <Typography className="DhigTextInput--count">
      {`${count} / ${maxLength}`}
    </Typography>
  );
};

CharacterCounter.propTypes = {
  count: PropTypes.number,
  maxLength: PropTypes.number,
  exceeded: PropTypes.bool
};

export const useCount = (maxLength, initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const count = (value && value.length) || 0;
  const [exceeded, setExceeded] = useState(count > maxLength);
  const handleChange = (event) => {
    const inputValue = event.target.value;
    setExceeded(inputValue.length > maxLength);
    setValue(inputValue);
  };
  return { value, count, exceeded, handleChange };
};
