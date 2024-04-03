import React from "react";
import PropTypes from "prop-types";
import Swatch from "./Swatch";
import Value from "./Value";
const hexToHsl = require("hex-to-hsl");

// @todo: improve presentation of color token swatch
const ColorExample = ({ designTokens, type, value }) => {
  const isToken = type === "colorToken";
  return (
    <div>
      <Swatch color={value} />
      <Value>
        {isToken ? "value: " : "hex: "}
        {value}
      </Value>
      {!isToken && <Value>hsl: [{hexToHsl(value).join(", ")}]</Value>}
    </div>
  );
};

ColorExample.propTypes = {
  designTokens: PropTypes.any,
  type: PropTypes.string,
  value: PropTypes.any
};

export default ColorExample;
