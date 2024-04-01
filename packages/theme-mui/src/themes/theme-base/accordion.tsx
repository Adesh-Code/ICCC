import React from "react";
import type { ThemeData } from "../../types";
import SvgIcon from "@mui/material/SvgIcon";
/* TODO: [Typescript] remove ignore once icon is migrated */
// @ts-ignore
import CaretDownSmallIcon from "@iccc/icon/lib/build/ui-controls/caret-down-small";

export const makeAccordionStyles = ({
  primitives,
  tokens
}: ThemeData) => {
  const borderRadius = primitives.borderRadii.large;

  return {
    MuiAccordion: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          "&::before": {
            background: "none"
          },
          margin: `${primitives.spacings["2"]} ${primitives.spacings["0"]}`,
          '& [class*="MuiAccordionSummary-root"]': {
            padding: `${primitives.spacings["6"]} ${primitives.spacings["5"]} ${primitives.spacings["6"]}  ${primitives.spacings["6"]}`
          },
          '& [class*="MuiAccordionDetails-root"]': {
            padding: `0 ${primitives.spacings["6"]} ${primitives.spacings["7"]} ${primitives.spacings["6"]}`
          },
          "&.Mui-expanded": {
            margin: `${primitives.spacings["2"]} ${primitives.spacings["0"]}`,
            "&:hover": {
              background: tokens.colors["ink-on-fill-primary"]
            },
            "&:active": {
              background: tokens.colors["ink-on-fill-primary"]
            }
          },
          "&:first-of-type": {
            marginTop: primitives.spacings["0"]
          },
          "&:last-child": {
            marginBottom: primitives.spacings["0"]
          },
          "&:focus, &:focus-visible, &:focus-within": {
            zIndex: 1
          },
          "&.Mui-disabled": {
            backgroundColor: "initial",
            "&:hover": {
              background: tokens.colors["ink-on-fill-primary"]
            },
            "&:focus, &:focus-visible, &:focus-within": {
              boxShadow: "unset"
            },
            "&:active": {
              background: tokens.colors["ink-on-fill-primary"]
            }
          },
          "&.DhigAccordion--density--dense": {
            '& [class*="MuiAccordionSummary-root"]': {
              padding: `${primitives.spacings["4"]}`
            },
            '& [class*="MuiAccordionDetails-root"]': {
              padding: `0 ${primitives.spacings["4"]} ${primitives.spacings["6"]} ${primitives.spacings["4"]}`
            }
          },
          "&.DhigAccordion--variant--individualPanel": {
            boxShadow: tokens.effects["container-0"],
            "&:focus, &:focus-visible, &:focus-within": {
              '& [class*="MuiAccordionSummary-root"]': {
                borderRadius
              }
            }
          },
          "&.DhigAccordion--variant--individualPanel.Mui-expanded": {
            boxShadow: tokens.effects["container-1"],
            "&:focus, &:focus-visible": {
              border: "unset"
            }
          },
          "&.DhigAccordion--variant--flat:first-of-type": {
            borderTop: `${primitives.borderWidths.medium} solid ${tokens.colors["detail-1-opaque"]}`
          },
          "&.DhigAccordion--variant--flat": {
            borderBottom: `${primitives.borderWidths.medium} solid ${tokens.colors["detail-1-opaque"]}`,
            margin: 0,
            '& [class*="MuiAccordionSummary-root"]': {
              paddingLeft: primitives.spacings["4"],
              paddingRight: primitives.spacings["0"],
              "&::before, &::after": {
                borderRadius: primitives.spacings["0"]
              }
            },
            '& [class*="MuiAccordionDetails-root"]': {
              paddingLeft: primitives.spacings["0"],
              paddingRight: primitives.spacings["0"]
            },
            "&:not(:focus):not(:focus-visible):not(:focus-within)": {
              '& [class*="MuiAccordionSummary-root"]': {
                paddingLeft: primitives.spacings["0"],
                paddingRight: primitives.spacings["0"]
              },
              '& [class*="MuiAccordionDetails-root"]': {
                paddingLeft: primitives.spacings["0"]
              }
            },
            "&:focus-within": {
              '& [class*="MuiAccordionSummary-root"]:focus:not(:focus-visible)':
                {
                  paddingLeft: primitives.spacings["0"]
                },
              '& [class*="MuiAccordionSummary-root"]:focus:not(:focus-visible) ~ [class*="MuiCollapse-root"] [class*="MuiAccordionDetails-root"]':
                {
                  paddingLeft: primitives.spacings["0"]
                }
            }
          },
          "&.DhigAccordion--variant--mergedPanel:last-of-type": {
            borderBottomLeftRadius: primitives.spacings["2"],
            borderBottomRightRadius: primitives.spacings["2"],
            borderBottom: `${primitives.borderWidths.medium} solid ${tokens.colors["detail-2-opaque"]}`
          },
          "&.DhigAccordion--variant--mergedPanel:first-of-type": {
            borderTopLeftRadius: primitives.spacings["2"],
            borderTopRightRadius: primitives.spacings["2"]
          },
          "&.DhigAccordion--variant--mergedPanel": {
            border: `${primitives.borderWidths.medium} solid ${tokens.colors["detail-1-opaque-50"]}`,
            borderBottom: primitives.spacings["0"],
            borderRadius: primitives.spacings["0"],
            margin: primitives.spacings["0"],
            "&:focus, &:focus-visible, &:focus-within": {
              '& [class*="MuiAccordionSummary-root"]': {
                borderRadius
              }
            },
            "&:active": {
              background:
                "linear-gradient(270deg, rgba(43, 194, 117, 0.15) 0%, rgba(43, 194, 117, 0) 100%)"
            },
            "&.Mui-expanded:active": {
              backgroundImage: "none"
            },
            '& [class*="MuiAccordionDetails-root"]': {
              background: tokens.colors.background,
              borderBottomLeftRadius: primitives.borderRadii.large,
              borderBottomRightRadius: primitives.borderRadii.large,
              marginLeft: "1px",
              marginRight: "1px"
            }
          },
          "&.DhigAccordion--variant--minimal": {
            border: "none",
            margin: primitives.spacings["0"],
            '& [class*="MuiAccordionSummary-root"]': {
              paddingLeft: primitives.spacings["4"],
              paddingRight: primitives.spacings["3"],
              "&::before, &::after": {
                borderRadius: primitives.spacings["0"]
              }
            },
            '& [class*="MuiAccordionDetails-root"]': {
              paddingLeft: primitives.spacings["0"],
              paddingRight: primitives.spacings["0"]
            },
            "&:not(:focus):not(:focus-visible):not(:focus-within)": {
              '& [class*="MuiAccordionSummary-root"]': {
                paddingLeft: primitives.spacings["0"],
                paddingRight: primitives.spacings["3"]
              }
            },
            "&:focus-within": {
              '& [class*="MuiAccordionSummary-root"]:focus:not(:focus-visible)':
                {
                  paddingLeft: primitives.spacings["0"]
                },
              '& [class*="MuiAccordionSummary-root"]:focus:not(:focus-visible) ~ [class*="MuiCollapse-root"] [class*="MuiAccordionDetails-root"]':
                {
                  paddingLeft: primitives.spacings["0"]
                }
            },
            "&.Mui-disabled": {
              boxShadow: "none"
            }
          },
          "&.DhigAccordion--type--stepper": {
            '& [class*="MuiAccordionSummary-root"]': {
              "&::before, &::after": {
                borderRadius: primitives.spacings["0"]
              }
            },
            '& [class*="MuiAccordionSummary-content"]': {
              "& svg": {
                fontSize: primitives.spacings["7"],
                marginRight: primitives.spacings["3"]
              },
              '& [class*="MuiTypography-root"]:first-of-type': {
                marginTop: primitives.spacings["1"]
              }
            },
            '& [class*="MuiAccordionSummary-expandIconWrapper"]': {
              transform: "none",
              "& button": {
                padding: `${primitives.spacings["2"]} ${primitives.spacings["3"]}`,
                minWidth: "auto",
                fontSize: primitives.fontSizes["2"],
                height: "fit-content"
              }
            }
          },
          "&.DhigAccordion--size--normal.DhigAccordion--type--stepper": {
            '& [class*="MuiAccordionDetails-root"]': {
              paddingLeft: `calc(${primitives.spacings["6"]} + ${primitives.spacings["7"]} + ${primitives.spacings["3"]})`,
              background: tokens.colors.background
            }
          },
          "&.DhigAccordion--size--dense.DhigAccordion--type--stepper": {
            '& [class*="MuiAccordionDetails-root"]': {
              paddingLeft: `calc(${primitives.spacings["4"]} + ${primitives.spacings["7"]} + ${primitives.spacings["3"]})`,
              background: tokens.colors.background
            }
          }
        },
        rounded: {
          borderRadius,
          "&:first-of-type": {
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius
          },
          "&:last-child": {
            borderBottomLeftRadius: borderRadius,
            borderBottomRightRadius: borderRadius
          }
        }
      }
    },
    MuiAccordionSummary: {
      defaultProps: {
        expandIcon: (
          <SvgIcon>
            <CaretDownSmallIcon />
          </SvgIcon>
        )
      },
      styleOverrides: {
        root: {
          minHeight: primitives.spacings["0"],
          backgroundColor: "initial",
          ...tokens.transitions["state-blur"],
          zIndex: 1,
          "&::before, &::after": {
            content: "''",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: "-1",
            opacity: 0,
            ...tokens.transitions["state-blur"],
            borderRadius
          },
          "&::before": {
            background:
              "linear-gradient(270deg, rgba(128, 128, 255, 0.2) 0%, rgba(128, 128, 255, 0) 100%)",
            ...tokens.transitions["state-activate"]
          },
          "&::after": {
            background:
              "linear-gradient(270deg, rgba(43, 194, 117, 0.15) 0%, rgba(43, 194, 117, 0) 100%)",
            ...tokens.transitions["state-activate"]
          },
          "&.Mui-expanded": {
            backgroundColor: "initial",
            minHeight: primitives.spacings["0"]
          },
          "&:hover:not(:active)::before": {
            opacity: 1
          },
          "&:focus": {
            boxShadow: tokens.effects["focus-ring-thin"],
            ...tokens.transitions["state-activate"]
          },
          "&:focus:not(:focus-visible)": {
            boxShadow: "none"
          },
          "&:focus-visible": {
            boxShadow: tokens.effects["focus-ring-thin"],
            ...tokens.transitions["state-activate"]
          },
          "&:active::after": {
            opacity: 1
          },
          "&.Mui-focused, &.Mui-focusVisible": {
            backgroundColor: "transparent"
          }
        },
        content: {
          margin: primitives.spacings["0"],
          "&.Mui-expanded": {
            margin: primitives.spacings["0"]
          }
        },
        expandIconWrapper: {
          '& [class*="MuiSvgIcon-root"]': {
            color: tokens.colors["ink-on-background"],
            fontSize: primitives.spacings["6"]
          }
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          flexDirection: "column",
          color: tokens.colors["text-on-background"]
        }
      }
    }
  };
};
