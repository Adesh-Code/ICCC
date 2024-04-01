import type { ThemeData } from "../../types";

export const makeToggleButtonStyles = ({
  primitives,
  tokens
}: ThemeData) => ({
  MuiToggleButton: {
    styleOverrides: {
      root: {
        ...tokens.typography["body-copy-small"],
        color: tokens.colors["ink-on-background-60"],
        fontWeight: primitives.fontWeights.stout,
        padding: `4.5px ${primitives.spacings["4"]}`,
        border: "none",
        boxSizing: "border-box",
        "&:hover": {
          backgroundColor: tokens.colors["hover-fill-subtle"]
        },
        "&:active": {
          backgroundColor: tokens.colors["pressed-fill-subtle"],
          border: "none"
        },
        "&.Mui-selected": {
          backgroundColor: tokens.colors["fill-elevation-2"],
          color: tokens.colors["ink-on-background"],
          "&:hover": {
            backgroundColor: tokens.colors["fill-elevation-2"]
          }
        },
        "&.Mui-disabled": {
          border: "none",
          color: tokens.colors["detail-1-transparent"]
        }
      },
      sizeSmall: {
        fontSize: primitives.fontSizes["1"],
        padding: `3px ${primitives.spacings["3"]}`
      }
    }
  }
});
