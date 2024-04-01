import type { ThemeData } from "../../types";

export const makeToggleButtonGroupStyles = ({
  primitives,
  tokens
}: ThemeData) => {
  const borderRadius = primitives.borderRadii.medium;
  return {
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.colors["detail-1-20"],
          outline: `${primitives.borderWidths.medium} solid ${tokens.colors["detail-1-40"]}`,
          outlineOffset: "-1px",
          borderRadius: `calc(${borderRadius} + 1px)`,
          padding: 0,
          '& [class*="MuiToggleButtonGroup-grouped"]': {
            textTransform: "none",
            transitionTimingFunction: `${tokens.transitions["state-activate"].transitionTimingFunction}`,
            transitionDuration: `${tokens.transitions["state-activate"].transitionDuration}`,
            "&:not(:last-of-type)": {
              marginLeft: 0,
              border: `${primitives.borderWidths.medium} solid ${primitives.colors.detail.transparent}`,
              borderRadius,
              "&:after": {
                content: "''",
                borderLeft: `${primitives.borderWidths.medium} solid ${tokens.colors["row-divider"]}`,
                height: `calc(100% - (${borderRadius} * 3))`,
                position: "absolute",
                right: "-2px",
                zIndex: 0
              },
              "&:focus-visible": {
                transitionTimingFunction: `${tokens.transitions["state-activate"].transitionTimingFunction}`,
                transitionDuration: `${tokens.transitions["state-activate"].transitionDuration}`,
                border: `${primitives.borderWidths.medium} solid ${tokens.colors["ink-focus"]}`,
                "&:after": {
                  height: 0,
                  borderLeft: "none"
                }
              },
              "&:active": {
                transitionTimingFunction: `${tokens.transitions["state-activate"].transitionTimingFunction}`,
                transitionDuration: `${tokens.transitions["state-activate"].transitionDuration}`,
                "&:after": {
                  borderLeft: `${primitives.borderWidths.medium} solid ${tokens.colors["row-divider"]}`,
                  height: `calc(100% - (${borderRadius} * 3))`
                }
              },
              "&:hover": {
                transitionTimingFunction: `${tokens.transitions["state-blur"].transitionTimingFunction}`,
                transitionDuration: `${tokens.transitions["state-blur"].transitionDuration}`
              },
              "&.Mui-selected": {
                borderRadius,
                boxShadow: "none",
                border: `${primitives.borderWidths.medium} solid ${tokens.colors["ink-on-background"]}`,
                "&:after": {
                  height: 0,
                  borderLeft: `0px solid ${tokens.colors["row-divider"]}`
                },
                "&:focus-visible": {
                  transitionTimingFunction: `${tokens.transitions["state-activate"].transitionTimingFunction}`,
                  transitionDuration: `${tokens.transitions["state-activate"].transitionDuration}`,
                  boxShadow: `0px 0px 0px 1px ${tokens.colors.background}, 0px 0px 0px 2px ${tokens.colors["ink-focus"]}`
                },
                "&:active": {
                  transitionTimingFunction: `${tokens.transitions["state-activate"].transitionTimingFunction}`,
                  transitionDuration: `${tokens.transitions["state-activate"].transitionDuration}`,
                  boxShadow: "none"
                }
              }
            },
            "&:not(:first-of-type)": {
              marginLeft: 0,
              border: `${primitives.borderWidths.medium} solid ${primitives.colors.detail.transparent}`,
              borderRadius,
              "&:focus-visible": {
                transitionTimingFunction: `${tokens.transitions["state-activate"].transitionTimingFunction}`,
                transitionDuration: `${tokens.transitions["state-activate"].transitionDuration}`,
                border: `${primitives.borderWidths.medium} solid ${tokens.colors["ink-focus"]}`,
                "&:after": {
                  height: 0,
                  borderLeft: "none"
                }
              },
              "&:active": {
                transitionTimingFunction: `${tokens.transitions["state-activate"].transitionTimingFunction}`,
                transitionDuration: `${tokens.transitions["state-activate"].transitionDuration}`,
                "&:after": {
                  borderLeft: `${primitives.borderWidths.medium} solid ${tokens.colors["row-divider"]}`,
                  height: `calc(100% - (${borderRadius} * 3))`
                }
              },
              "&:hover": {
                transitionTimingFunction: `${tokens.transitions["state-blur"].transitionTimingFunction}`,
                transitionDuration: `${tokens.transitions["state-blur"].transitionDuration}`
              },
              "&.Mui-selected": {
                borderRadius,
                boxShadow: "none",
                border: `${primitives.borderWidths.medium} solid ${tokens.colors["ink-on-background"]}`,
                "&:after": {
                  height: 0,
                  borderLeft: `0px solid ${tokens.colors["row-divider"]}`
                },
                "&:focus-visible": {
                  transitionTimingFunction: `${tokens.transitions["state-activate"].transitionTimingFunction}`,
                  transitionDuration: `${tokens.transitions["state-activate"].transitionDuration}`,
                  boxShadow: `0px 0px 0px 1px ${tokens.colors.background}, 0px 0px 0px 2px ${tokens.colors["ink-focus"]}`
                },
                "&:active": {
                  transitionTimingFunction: `${tokens.transitions["state-activate"].transitionTimingFunction}`,
                  transitionDuration: `${tokens.transitions["state-activate"].transitionDuration}`,
                  boxShadow: "none"
                }
              }
            }
          }
        }
      }
    }
  };
};
