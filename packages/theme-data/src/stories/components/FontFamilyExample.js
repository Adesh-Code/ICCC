import React from "react";
import PropTypes from "prop-types";
import FontExample from "./FontExample";

const FontFamilyExample = ({ value }) => {
  return (
    <div>
      <FontExample fontFamily={value} />
      {value}
    </div>
  );
};

FontFamilyExample.propTypes = {
  value: PropTypes.string
};

export default FontFamilyExample;
