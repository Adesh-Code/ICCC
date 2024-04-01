import React from "react";
import PropTypes from "prop-types";

const Value = ({ children }) => <p style={{ margin: 0 }}>{children}</p>;

Value.propTypes = {
  children: PropTypes.node
};

export default Value;
