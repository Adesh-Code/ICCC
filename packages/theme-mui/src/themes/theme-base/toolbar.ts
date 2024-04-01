import type { ThemeData } from "../../types";

export const makeToolbarStyles = ({
  primitives,
  tokens
}: ThemeData) => ({
  MuiToolbar: {
    styleOverrides: {
      root: {
        boxShadow: tokens.effects["elevation-0-dropdown"],
        ...tokens.typography["short-copy-medium"],
        backgroundColor: tokens.colors["fill-primary"],
        borderRadius: primitives.borderRadii.large,
        color: tokens.colors["ink-on-fill-primary"],
        padding: `${primitives.spacings["2"]} ${primitives.spacings["4"]}`,
        boxSizing: "border-box",
        justifyContent: "space-between",
        minHeight: `calc(${primitives.spacings["8"]} + ${primitives.spacings["1"]})`,
        '& [class*="MuiIconButton-root"]': {
          marginRight: primitives.spacings["2"]
        },
        '& button[class*="MuiButton-root"]': {
          backgroundColor: tokens.colors["fill-primary"],
          borderColor: tokens.colors["ink-on-fill-primary"],
          color: tokens.colors["ink-on-fill-primary"],
          whiteSpace: "nowrap"
        },
        '& button[class*="MuiButton-root"]:focus:active': {
          color: tokens.colors["ink-on-fill-primary"]
        },
        '& [class*="MuiTypography-root"]': {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          marginRight: primitives.spacings["4"]
        },
        // Not addding theming for breakpoints; this is only to override the MUI defaults.
        ["@media (min-width: 600px)"]: {
          padding: `${primitives.spacings["2"]} ${primitives.spacings["4"]}`,
          minHeight: `calc(${primitives.spacings["8"]} + ${primitives.spacings["1"]})`
        },
        ["@media (min-width: 0px) and (orientation: landscape)"]: {
          minHeight: `calc(${primitives.spacings["8"]} + ${primitives.spacings["1"]})`
        }
      }
    }
  }
});
