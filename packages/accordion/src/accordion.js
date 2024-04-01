// Libraries
import React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Components
import MuiAccordion from "@mui/material/Accordion";

// Utilities
import {
  availableVariants,
  availableTypes,
  availableSizes,
  variants,
  types
} from "./constants";

// Extends MUI theme to enable transitions in accordion component instances
const getTheme = (outerTheme) =>
  createTheme({
    ...outerTheme,
    transitions: {
      ...outerTheme.transitions,
      create: () => ["none"]
    }
  });

const TransitionManager = ({ disableTransitions, wrapper, children }) =>
  disableTransitions ? wrapper(children) : children;

/**
 * MUI Accordion wrapper. Renders a composition of accordion summary, the
 * interactive portion that toggles content on and off, and accordion content
 * that expands and collapses
 *
 * Note accordion is wrapped in a nested theme provider, to enable transitions
 * locally.
 */
const Accordion = ({
  children,
  disableTransitions,
  dense,
  size,
  styleVariant,
  variant,
  type,
  ...MuiAccordionProps
}) => {
  const variantToUse = variant || styleVariant || variants.INDIVIDUAL_PANEL;
  const classes = `${
    dense || size === "dense" ? "DhigAccordion--density--dense" : ""
  } ${`DhigAccordion--variant--${variantToUse}`} DhigAccordion--type--${type}`;

  const squaredBorders = [variants.FLAT, variants.MINIMAL];
  return (
    <TransitionManager
      disableTransitions={disableTransitions}
      wrapper={(children) => (
        <ThemeProvider theme={(theme) => getTheme(theme)}>
          {children}
        </ThemeProvider>
      )}
    >
      <MuiAccordion
        classes={{ root: classes }}
        {...MuiAccordionProps}
        square={squaredBorders.includes(variant || styleVariant)}
      >
        {children}
      </MuiAccordion>
    </TransitionManager>
  );
};

Accordion.propTypes = {
  /**
   * The accordion content
   */
  children: PropTypes.any,
  /**
   * Disable transitions
   */
  disableTransitions: PropTypes.bool,
  /**
   * Which density option to use
   */
  dense: PropTypes.bool,
  /**
   * Which variant option to use
   */
  variant: PropTypes.oneOf(availableVariants),
  /**
   * Which type option to use
   */
  type: PropTypes.oneOf(availableTypes),
  /**
   * Which size option to use (deprecated)
   */
  size: PropTypes.oneOf(availableSizes),
  /**
   * Which style variant option to use (deprecated)
   */
  styleVariant: PropTypes.oneOf(availableVariants)
};

export const defaultProps = {
  dense: false,
  disableTransitions: false,
  type: types.ACCORDION_LIST
};

// Represents the iccc defaults
Accordion.defaultProps = {
  ...defaultProps
};

export default Accordion;
