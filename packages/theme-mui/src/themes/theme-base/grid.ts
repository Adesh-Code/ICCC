import type { Breakpoints } from "@mui/material/styles";
import type { ThemeData } from "../../types";

export const makeGridStyles = ({
  breakpoints,
  primitives,
  tokens
}: ThemeData & { breakpoints: Breakpoints }) => {
  // Use grid token "margin" values for container padding
  const containerBreakpointStyles = Object.fromEntries(
    breakpoints.keys.map((breakpoint) => [
      breakpoints.up(breakpoints.values[breakpoint]),
      {
        // Subtract left padding of first grid item from left padding of container
        // for consistent padding on either side of the container
        paddingLeft: `calc(${tokens.grid[breakpoint].margin} - ${tokens.grid[breakpoint].gutter})`,
        paddingRight: tokens.grid[breakpoint].margin
      }
    ])
  );

  // Programatically add scoped item spacing using the "gutter" values of the grid tokens
  const itemBreakpointStyles = Object.fromEntries(
    breakpoints.keys.map((breakpoint) => [
      breakpoints.up(breakpoints.values[breakpoint]),
      {
        [`& [class*='MuiGrid-item']`]: {
          paddingLeft: tokens.grid[breakpoint].gutter,
          paddingTop: tokens.grid[breakpoint].gutter
        }
      }
    ])
  );

  return {
    MuiGrid: {
      styleOverrides: {
        root: {
          "&[class*='MuiGrid-container']": {
            ...containerBreakpointStyles,
            maxWidth: primitives.grid["max-width"]
          },
          ...itemBreakpointStyles
        }
      }
    },
    MuiGrid2: {
      defaultProps: {
        spacing: {
          xs: tokens.grid.xs.gutter,
          sm: tokens.grid.sm.gutter,
          md: tokens.grid.md.gutter,
          lg: tokens.grid.lg.gutter,
          xl: tokens.grid.xl.gutter
        }
      }
    }
  };
};
