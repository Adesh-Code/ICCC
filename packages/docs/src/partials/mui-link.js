import React from "react";
import PropTypes from "prop-types";

const MuiLink = ({ componentName, link }) => (
  <small>
    <a href={link} rel="noreferrer" target="_blank">
      MUI {componentName}
    </a>
  </small>
);

MuiLink.propTypes = {
  componentName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default MuiLink;
