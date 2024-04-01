import React from "react";
import PropTypes from "prop-types";

const TransitionExample = ({ designTokens, type, value }) => {
  return type === "transitionToken" ? (
    <ul style={{ fontSize: designTokens.primitives.fontSizes[1] }}>
      <li>
        Transition duration: <strong>{value.transitionDuration}</strong>
      </li>
      <li>
        Transition timing function:{" "}
        <strong>{value.transitionTimingFunction}</strong>
      </li>
    </ul>
  ) : (
    <div>{value}</div>
  );
};

TransitionExample.propTypes = {
  designTokens: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default TransitionExample;
