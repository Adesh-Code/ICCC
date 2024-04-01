import React from "react";
import PropTypes from "prop-types";
import Checkmark from "@iccc/icon/lib/build/ui-controls/checkmark";
import SvgIcon from "@mui/material/SvgIcon";

const OptionContent = ({ children, isSelected }) => (
  <>
    <div className="DhigSelect--option">{children}</div>
    {isSelected && (
      <SvgIcon className="DhigSelect--checkedIcon" title="Selected">
        <Checkmark />
      </SvgIcon>
    )}
  </>
);

OptionContent.propTypes = {
  children: PropTypes.any,
  isSelected: PropTypes.bool
};

export default OptionContent;
