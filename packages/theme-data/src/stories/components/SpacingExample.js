import React from "react";
import PropTypes from "prop-types";
import Spacing from "./Spacing";
import Value from "./Value";

const SpacingExample = ({ value }) => (
  <div>
    <Spacing length={value} />
    <Value>{value}</Value>
  </div>
);

SpacingExample.propTypes = {
  value: PropTypes.string
};

export default SpacingExample;
