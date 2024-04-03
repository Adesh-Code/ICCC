import React from "react";
import PropTypes from "prop-types";

// @to-do refactor example box styles

const OpacityExample = ({ designTokens: { primitives }, type, value }) => {
  return (
    <>
      <div
        style={{
          marginBottom: primitives.spacings[2],
          border: `${primitives.borderWidths.medium} solid ${primitives.colors.detail["slate-dark"]}`
        }}
      >
        <div
          style={{
            height: "32px",
            opacity: value,
            background: `repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50%/20px 20px`
          }}
        />
      </div>
      Opacity: {value}
    </>
  );
};

OpacityExample.propTypes = {
  designTokens: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
};

export default OpacityExample;
