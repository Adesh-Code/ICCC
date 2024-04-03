import React from "react";
import PropTypes from "prop-types";

const GridExample = ({ designTokens, value }) => (
  <>
    <p className="iccc-m-0">{value.name}</p>
    <ul
      style={{
        fontSize: designTokens.primitives.fontSizes[1]
      }}
    >
      <li>
        Breakpoint: <strong>{value.breakpoint}</strong>
      </li>
      <li>
        Gutter: <strong>{value.gutter}</strong>
      </li>
      <li>
        Margin: <strong>{value.margin}</strong>
      </li>
    </ul>
  </>
);

GridExample.propTypes = {
  designTokens: PropTypes.object,
  value: PropTypes.any
};

export default GridExample;
