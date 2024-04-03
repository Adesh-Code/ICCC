import React from "react";
import PropTypes from "prop-types";
import FontExample from "./FontExample";

const FontWeightExample = ({ value }) => {
  return (
    <div>
      <FontExample fontWeight={value} />
      {value}
    </div>
  );
};

FontWeightExample.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default FontWeightExample;
