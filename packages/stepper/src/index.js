import React from "react";
import PropTypes from "prop-types";
import SvgActiveIncomplete from "@iccc/icon/lib/build/stepper/active-incomplete";
import SvgComplete from "@iccc/icon/lib/build/stepper/complete";
import SvgError from "@iccc/icon/lib/build/stepper/error";
import SvgIcon from "@mui/material/SvgIcon";

export const StepIconComponent = ({
  active,
  completed,
  error,
  icon,
  ...otherProps
}) => {
  const iconMapping = {
    error: <SvgError />,
    active: icon ? (
      <text x="12" y="12" textAnchor="middle" dominantBaseline="central">
        {icon}
      </text>
    ) : (
      <SvgActiveIncomplete />
    ),
    completed: <SvgComplete />,
    default: icon ? (
      <text x="12" y="12" textAnchor="middle" dominantBaseline="central">
        {icon}
      </text>
    ) : null
  };

  const status = error
    ? "error"
    : completed
    ? "completed"
    : active
    ? "active"
    : "default";

  const selectedIcon = iconMapping[status];

  return selectedIcon ? (
    <SvgIcon {...otherProps}>{selectedIcon}</SvgIcon>
  ) : null;
};

StepIconComponent.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.any
};
