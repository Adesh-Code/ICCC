import React from "react";
import PropTypes from "prop-types";

const BorderWidthExample = ({ designTokens: { primitives }, value }) => (
  <div
    style={{
      height: "32px",
      borderColor: primitives.colors.detail["slate-dark"],
      borderStyle: "solid",
      borderWidth: value,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: primitives.spacings[4]
    }}
  >
    {value}
  </div>
);

BorderWidthExample.propTypes = {
  designTokens: PropTypes.object,
  value: PropTypes.string
};

export default BorderWidthExample;
