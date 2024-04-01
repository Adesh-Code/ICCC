import React from "react";
import PropTypes from "prop-types";
import Value from "./Value";

const GeneralExample = ({ value }) => <Value>{value}</Value>;

GeneralExample.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default GeneralExample;
