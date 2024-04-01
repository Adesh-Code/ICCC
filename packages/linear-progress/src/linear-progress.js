import React from "react";
import PropTypes from "prop-types";
import {
  availableSizes,
  availableVariants,
  sizes,
  variants
} from "./constants";
import MuiLinearProgress from "@mui/material/LinearProgress";
import Typography from "@iccc/typography";

const getPercentage = (value) =>
  typeof value === "number" && `${Math.round(value)}%`;

const LinearProgress = React.forwardRef(
  ({ children, size, variant, value, ...otherProps }, ref) => {
    return (
      <>
        <MuiLinearProgress
          {...otherProps}
          classes={{ root: `DhigLinearProgress--size--${size}` }}
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
  <div className="DhigLinearProgressLabel">
    {label && (
      <Typography
        variant={
          /* istanbul ignore next */ size === sizes.MEDIUM
            ? "body-copy-medium"
            : "smallprint"
        }
        color="ink-on-background"
      >
        {label}
      </Typography>
    )}
    {variant === variants.DETERMINATE && (
      <Typography
        variant={
          /* istanbul ignore next */ size === sizes.MEDIUM
            ? "body-copy-medium"
            : "smallprint"
        }
        color="ink-on-background"
      >
        {getPercentage(value)}
      </Typography>
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
