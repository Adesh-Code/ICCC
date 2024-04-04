import React from "react";
import PropTypes from "prop-types";
import {
  availableSizes,
  availableVariants,
  variants
} from "./constants";
import MuiLinearProgress from "@mui/material/LinearProgress";

const getPercentage = (value) =>
  typeof value === "number" && `${Math.round(value)}%`;

const LinearProgress = React.forwardRef(
  ({ children, size, variant, value, ...otherProps }, ref) => {
    return (
      <>
        <MuiLinearProgress
          {...otherProps}
          classes={{ root: `icccLinearProgress--size--${size}` }}
          variant={variant}
          value={value}
          ref={ref}
        />
        {children}
      </>
    );
  }
);

LinearProgress.displayName = "LinearProgress";

LinearProgress.defaultProps = {
  size: "small"
};

LinearProgress.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(availableSizes),
  variant: PropTypes.oneOf(availableVariants),
  value: PropTypes.number
};

export const LinearProgressLabel = ({ label, variant, size, value }) => (
  <div className="icccLinearProgressLabel">
    {label && (
      <h5>

        {label}
      </h5>
    )}
    {variant === variants.DETERMINATE && (
      <h5>
        {getPercentage(value)}
      </h5>
    )}
  </div>
);

LinearProgressLabel.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(availableVariants),
  size: PropTypes.oneOf(availableSizes),
  value: PropTypes.number
};

export default LinearProgress;
