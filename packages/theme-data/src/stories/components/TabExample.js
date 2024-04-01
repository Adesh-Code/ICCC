import React from "react";
import PropTypes from "prop-types";

const TabExample = ({ designTokens: { primitives }, value }) => (
  <ul
    style={{
      fontSize: primitives.fontSizes[1]
    }}
  >
    <li>
      Background color: <strong>{value.backgroundColor}</strong>
    </li>
    <li>
      Border color: <strong>{value.borderColor}</strong>
    </li>
    <li>
      Border width: <strong>{value.borderWidth}</strong>
    </li>
    <li>
      Color: <strong>{value.color}</strong>
    </li>
    <li>
      Transition duration: <strong>{value.transitionDuration}</strong>
    </li>
    <li>
      Transition timing function:{" "}
      <strong>{value.transitionTimingFunction}</strong>
    </li>
  </ul>
);

TabExample.propTypes = {
  designTokens: PropTypes.object,
  value: PropTypes.any
};

export default TabExample;
