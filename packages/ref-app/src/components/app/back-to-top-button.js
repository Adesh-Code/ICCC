/* istanbul ignore file */
import React, { useState, useEffect, forwardRef } from "react";
import { PropTypes } from "prop-types";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import IconButton from "@iccc/mui/dist/icon-button";
import { Up } from "@iccc/icon";

import { themeDark } from "@iccc/mui/dist/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const dark = createTheme(themeDark);

export const BackToTopButton = forwardRef(
  ({ onClick, mode = "into view", children }, ref) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (mode === "into view") {
            setShouldShow(
              entry.isIntersecting || entry.boundingClientRect.top < 0
            );
          }
          if (mode === "out of view") {
            setShouldShow(!entry.isIntersecting);
          }
        },
        { rootMargin: "0px" }
      );
      observer.observe(ref.current);

      return () => observer.disconnect();
    }, [shouldShow, mode, ref]);

    const icon = (
      <SvgIcon fontSize="medium" titleAccess={children.toString()}>
        <Up />
      </SvgIcon>
    );

    const styles = {
      "&[class*='MuiButtonBase'].DhigBackToTopButton": {
        boxShadow: "0px 3px 0px 0px rgba(0,0,0,.05)",
        border: (theme) =>
          `solid ${theme.primitives.colors.tint["slate-175"]} 1px`, //using slate-175 because we're locally in Dark Mode
        position: "fixed",
        left: 24,
        zIndex: 999,
        opacity: shouldShow ? 1.0 : 0.0,
        bottom: 24,
        transitionDuration: (theme) => theme.primitives.transitions.duration[3],
        transitionProperty: "opacity, box-shadow, transform",
        ":hover:focus, :hover": {
          backgroundColor: (theme) =>
            `${theme.primitives.colors.primary["white"]}`,
          boxShadow: "0px 8px 0px -3px rgba(0,0,0,.05)",
          border: (theme) =>
            `solid ${theme.primitives.colors.tint["slate-175"]} 1px`,
          transform: "translate(0, -1px)"
        },
        ":active:focus, :focus": {
          boxShadow: "0px 2px 0px 0px rgba(0,0,0,.05)",
          border: (theme) =>
            `solid ${theme.primitives.colors.tint["slate-175"]} 1px`,
          transform: "translate(0, 1px)"
        },
        "@media (prefers-reduced-motion: no-preference)": {
          transitionProperty: "bottom, box-shadow, transform",
          bottom: shouldShow ? 24 : -60,
          opacity: 1.0
        }
      }
    };

    return (
      <ThemeProvider theme={dark}>
        {isMobile ? (
          <IconButton
            classes={{ root: "DhigBackToTopButton" }}
            onClick={onClick}
            sx={styles}
          >
            {icon}
          </IconButton>
        ) : (
          <Button
            classes={{ root: "DhigBackToTopButton" }}
            startIcon={icon}
            onClick={onClick}
            sx={styles}
          >
            {children}
          </Button>
        )}
      </ThemeProvider>
    );
  }
);

BackToTopButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  mode: PropTypes.oneOf(["into view", "out of view"])
};

BackToTopButton.defaultProps = {
  children: "Back to top",
  mode: "into view"
};
