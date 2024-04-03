import React from "react";
import PropTypes from "prop-types";
import Value from "./Value";
import FontExample from "./FontExample";

const remToPx = (value) => {
  const numericValue = parseFloat(value);
  return !isNaN(numericValue) ? `${parseFloat(value) * 16}px` : "";
};

const FontSizeExample = ({ value }) => (
  <div>
    <FontExample fontSize={value} />
    <Value>{value}</Value>
    <Value>{remToPx(value)}</Value>
  </div>
);

FontSizeExample.propTypes = {
  value: PropTypes.string
};

export default FontSizeExample;
