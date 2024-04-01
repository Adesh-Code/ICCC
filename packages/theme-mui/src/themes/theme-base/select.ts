import type { ThemeData } from "../../types";

export const makeSelectStyles = ({
  primitives,
  tokens
}: ThemeData) => ({
  MuiSelect: {
    styleOverrides: {
      root: {
        color: tokens.colors["ink-on-background"],
        ...tokens.typography["short-copy-medium"],
        backgroundColor: tokens.colors["field-fill"],
        "& em": {
          color: tokens.colors["ink-on-background-60"],
          fontStyle: "normal"
        },
        "&[aria-expanded='true'] + input + .DhigSvgIcon--type--ui-control-icon":
          {
            transform: "rotate(180deg)"
          },
        "& .DhigSelect--option": {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          "& + .DhigSelect--checkedIcon": {
            display: "none"
          }
        }
      },
      outlined: {
        "&&": {
          paddingRight: primitives.spacings["3"]
        }
      },
      select: {
        minHeight: "inherit"
      }
    }
  },
  MuiNativeSelect: {
    styleOverrides: {
      select: {
        "&:hover": {
          borderBottomWidth: primitives.borderWidths.none,
          boxShadow: `0px 1px 0px 0px ${tokens.colors["ink-hover"]}`,
          transitionTimingFunction:
            tokens.transitions["state-blur"].transitionTimingFunction,
          transitionDuration:
            tokens.transitions["state-blur"].transitionDuration
        },
        "&:focus, &:focus-visible": {
          borderBottomWidth: primitives.borderWidths.none,
          borderRadius: `${primitives.borderRadii.medium} ${primitives.borderRadii.medium} 0 0`,
          boxShadow: tokens.effects["focus-ring-thin"]
        }
      }
    }
  }
});
