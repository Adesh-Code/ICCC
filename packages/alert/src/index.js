import React from "react";
import PropTypes from "prop-types";
import {
  availableSeverities,
  availableVariants,
  severities,
  variants
} from "@iccc/alert/lib/constants";
import SvgIcon from "@mui/material/SvgIcon";
import AlertSolidIcon from "@iccc/icon/lib/build/display-icons/alert";
import CompleteSolidIcon from "@iccc/icon/lib/build/display-icons/complete";
import ErrorSolidIcon from "@iccc/icon/lib/build/display-icons/error";
import InfoSolidIcon from "@iccc/icon/lib/build/display-icons/info";

import AlertOutline from "@iccc/icon/lib/build/icons/alert-outline";
import Complete from "@iccc/icon/lib/build/icons/complete";
import ErrorOutline from "@iccc/icon/lib/build/icons/error-outline";
import InfoOutline from "@iccc/icon/lib/build/icons/info-outline";

export const AlertIcon = ({ severity, variant, ...otherProps }) => {
  let icon;
  if (variant === variants.FILLED) {
    switch (severity) {
      case severities.INFO: {
        icon = <InfoOutline />;
        break;
      }
      case severities.SUCCESS: {
        icon = <Complete />;
        break;
      }
      case severities.WARNING: {
        icon = <AlertOutline />;
        break;
      }
      case severities.ERROR: {
        icon = <ErrorOutline />;
        break;
      }
      default: {
        icon = <InfoOutline />;
      }
    }
  } else {
    switch (severity) {
      case severities.INFO: {
        icon = <InfoSolidIcon />;
        break;
      }
      case severities.SUCCESS: {
        icon = <CompleteSolidIcon />;
        break;
      }
      case severities.WARNING: {
        icon = <AlertSolidIcon />;
        break;
      }
      case severities.ERROR: {
        icon = <ErrorSolidIcon />;
        break;
      }
      default: {
        icon = <InfoSolidIcon />;
      }
    }
  }

  return <SvgIcon {...otherProps}>{icon}</SvgIcon>;
};

AlertIcon.propTypes = {
  severity: PropTypes.oneOf(availableSeverities),
  variant: PropTypes.oneOf(availableVariants)
};

AlertIcon.defaultProps = {
  severity: severities.INFO
};
