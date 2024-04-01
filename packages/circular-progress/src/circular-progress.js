import React from "react";
import PropTypes from "prop-types";
import {
  availableSizes,
  availableVariants,
  sizes,
  variants
} from "./constants";
import Container from "@mui/material/Container";
import MuiCircularProgress from "@mui/material/CircularProgress";
import Typography from "@iccc/typography";

const getPercentage = (value) =>
  typeof value === "number" && `${Math.round(value)}%`;

const CircularProgress = React.forwardRef(
  ({ label, size, variant, value, ...otherProps }, ref) => {
    return (
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: size === sizes.MEDIUM ? "column" : "row"
        }}
        className={"DhigCircularProgress--wrapper"}
      >
        <Container
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column"
          }}
          className="DhigCircularProgress--container"
        >
          <MuiCircularProgress
            {...otherProps}
            classes={{
              root: `DhigCircularProgress--background DhigCircularProgress--size--${size}`
            }}
            size={null}
            variant={variants.DETERMINATE}
            value={100}
          />
          <MuiCircularProgress
            {...otherProps}
            classes={{
              root: `DhigCircularProgress--foreground DhigCircularProgress--size--${size}`
            }}
            size={null}
            variant={variant}
            value={value}
            ref={ref}
          />
          {size === sizes.LARGE && (label || variant === variants.DETERMINATE) && (
            <Container
              sx={{
                flexDirection: "column"
              }}
              className={`DhigCircularProgress--label DhigCircularProgress--label--${size}`}
            >
              <Typography
                align="center"
                variant="short-copy-small"
                color="ink-on-background"
              >
                {label ? label : getPercentage(value)}
              </Typography>
            </Container>
          )}
        </Container>
        {size !== sizes.LARGE && (label || variant === variants.DETERMINATE) && (
          <Container
            sx={{
              alignItems: "center",
              display: "flex"
            }}
            className={`DhigCircularProgress--label--determinate DhigCircularProgress--label--determinate--${
              size === sizes.MEDIUM ? "medium" : "notMedium"
            }`}
          >
            <Typography
              variant={
                /* istanbul ignore next */ size === sizes["X-SMALL"]
                  ? "smallprint"
                  : "short-copy-small"
              }
              color="ink-on-background"
            >
              {label ? label : getPercentage(value)}
            </Typography>
          </Container>
        )}
      </Container>
    );
  }
);

CircularProgress.displayName = "CircularProgress";

CircularProgress.defaultProps = {
  size: "small"
};

CircularProgress.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(availableSizes),
  variant: PropTypes.oneOf(availableVariants),
  value: PropTypes.number
};

export default CircularProgress;
