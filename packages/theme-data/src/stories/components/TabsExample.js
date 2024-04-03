import React from "react";
import PropTypes from "prop-types";

const TabsExample = ({ designTokens: { primitives }, value }) => (
  <ul
    style={{
      fontSize: primitives.fontSizes[1]
    }}
  >
    <li>
      Background color: <strong>{value.backgroundColor}</strong>
    </li>
    <li>
      Box shadow: <strong>{value.boxShadow}</strong>
    </li>
    <li>
      Color: <strong>{value.color}</strong>
    </li>
    <li>
      Opacity: <strong>{value.opacity}</strong>
    </li>
  </ul>
);

TabsExample.propTypes = {
  designTokens: PropTypes.object,
  value: PropTypes.any
};

export default TabsExample;
