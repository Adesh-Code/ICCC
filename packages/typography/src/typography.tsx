// Libraries
import React from "react";

// Components
import MuiTypography, { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";

// Utilities
import { availableVariants, availableColors } from "./constants";
// TODO: [Typescript] Migrate this to @iccc/types
import type { ThemeData } from "@iccc/theme-mui/src/types";


export type TypographyProps = {
  /**
   * DHIG Typography text colors
   */
  color?: typeof availableColors[number];
  /**
   * DHIG Tabular numeric, displays a set of figures where numbers are all of the same size, allowing them to be easily aligned like in tables.
   */
  tabularNumeric?: boolean;
  /**
   * DHIG Typography tokens
   */
  variant?: typeof availableVariants[number];
} & Omit<MuiTypographyProps, "variant" | "color">;

/**
 * @description iccc/typography
 *
 * @see Digital HIG Storybook: {@link https://storybook.digital-help-dev.autodesk.com/iccc/current/index.html?path=/docs/components-typography--api}
 */
const Typography: React.ForwardRefExoticComponent<TypographyProps> = React.forwardRef(
  ({ children, color, style, tabularNumeric = false, variant = 'body-copy-medium', ...otherProps }, ref) => {
    /**
     * Utility for color processing: Default color set in theme data. Header variant type overrides this, and color prop overrides that.
     */
    const processColorStyle = (theme: ThemeData) => {
      let colorStyle = null;

      if (
        variant &&
        (variant.includes("display") || variant.includes("headline"))
      ) {
        colorStyle = theme.tokens.colors["ink-on-background"];
      }

      if (color) {
        colorStyle = theme.tokens.colors[color];
      }

      return colorStyle;
    };

    return (
      <MuiTypography
        ref={ref}
        variant={variant as TypographyProps["variant"] & MuiTypographyProps["variant"]}
        {...otherProps}
        sx={[
          {
            color: (theme: ThemeData) => processColorStyle(theme)
          },
          tabularNumeric && {
            fontVariantNumeric: "tabular-nums"
          },
          style as any,
          otherProps.sx
        ]}
      >
        {children}
      </MuiTypography>
    );
  }
);

export default Typography;
