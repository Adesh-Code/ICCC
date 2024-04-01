import React from "react";
import PropTypes from "prop-types";

const VersionNotice = ({ packageName, version }) => (
  <small>
    Version {version}{" "}
    <a
      href={`https://git.autodesk.com/dpe/iccc/blob/master/packages/${packageName}/CHANGELOG.md`}
      rel="noreferrer"
      target="_blank"
    >
      See changelog
    </a>
  </small>
);

VersionNotice.propTypes = {
  packageName: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired
};

export default VersionNotice;
