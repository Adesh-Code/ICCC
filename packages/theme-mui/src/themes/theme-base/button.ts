import type { ThemeData } from "../../types";

export const makeButtonStyles = ({
  primitives,
  tokens
}: ThemeData) => {
  const getButtonStyles = ({ size, variant }) => {
    const { button } = tokens;

    // Rewrite font size value to incorporate root font size factor
    const fontSize =
      size === "dense" ? primitives.fontSizes[2] : primitives.fontSizes[3];

    return {
      ...button[variant][size].default,
      alignItems: "flex-start",
      fontSize,
      "&:hover": {
        ...button[variant][size].hover,
        fontSize
      },
      "&.Mui-disabled": {
        ...button[variant][size].disabled,
        fontSize
      },
      "&:focus-visible": {
        ...button[variant][size].focus,
        fontSize
      },
      "&:focus:active": {
        ...button[variant][size].pressed,
        fontSize
      },
      "&:active": {
        ...button[variant][size].pressed,
        fontSize
      }
    };
  };

  const linkPseudoStateOverrides = {
    textUnderlineOffset: "0.375em",
    transition: `text-decoration-color ${primitives.transitions.duration["1"]} ${primitives.transitions.easing.smooth}`
  };

  const linkDenseOverrides = {
    paddingTop: primitives.spacings["1"],
    paddingBottom: primitives.spacings["1"],
    paddingLeft: primitives.spacings["0"],
    paddingRight: primitives.spacings["0"],
    fontSize: primitives.fontSizes[2]
  };

  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "contained"
      },
      styleOverrides: {
        outlined: getButtonStyles({
          size: "defaultSize",
          variant: "outlined"
        }),
        outlinedSizeSmall: getButtonStyles({
          size: "dense",
          variant: "outlined"
        }),
        contained: getButtonStyles({
          size: "defaultSize",
          variant: "contained"
        }),
        containedSizeSmall: getButtonStyles({
          size: "dense",
          variant: "contained"
        }),
        text: getButtonStyles({
          size: "defaultSize",
          variant: "text"
        }),
        textSizeSmall: getButtonStyles({
          size: "dense",
          variant: "text"
        }),
        startIcon: {
          "& svg": {
            color: "inherit"
          }
        },
        endIcon: {
          "& svg": {
            color: "inherit"
          }
        },
        iconSizeMedium: {
          "& > *:first-of-type": {
            fontSize: "inherit"
          }
        },
        root: {
          '& [class*="MuiTouchRipple-root"]': {
            display: "none"
          },
          "&:has([class*='MuiButton-endIcon'])": {
            textAlign: "right"
          },
          "&:has([class*='MuiButton-startIcon'])": {
            textAlign: "left"
          },
          "&[class*='MuiButton-link-button']": {
            ...getButtonStyles({
              size: "defaultSize",
              variant: "link-button"
            }),
            "&:hover": {
              boxShadow: "none",
              ...tokens.textLink.hoverState,
              ...linkPseudoStateOverrides
            },
            "&:active, &:focus:active": {
              boxShadow: "none",
              ...tokens.textLink.pressedState,
              ...linkPseudoStateOverrides
            },
            "& [class*='MuiButton-startIcon']": {
              marginRight: primitives.spacings["1"],
              marginLeft: 0
            }
          },
          "&[class*='MuiButton-link-buttonSizeSmall']": {
            ...getButtonStyles({
              size: "dense",
              variant: "link-button"
            }),
            lineHeight: primitives.lineHeights.default,
            "&:hover": {
              boxShadow: "none",
              ...tokens.textLink.hoverState,
              ...linkPseudoStateOverrides,
              ...linkDenseOverrides
            },
            "&:active, &:focus:active": {
              boxShadow: "none",
              ...tokens.textLink.pressedState,
              ...linkPseudoStateOverrides,
              ...linkDenseOverrides
            },
            "&:focus-visible": {
              ...linkDenseOverrides,
              lineHeight: primitives.lineHeights.default,
              "&:hover": {
                outline: `${primitives.borderWidths.large} solid ${tokens.colors["ink-focus"]}`,
                outlineOffset: "1px"
              }
            },
            ...linkDenseOverrides
          }
        }
      }
    },
    MuiLoadingButton: {
      defaultProps: {
        loadingPosition: "start",
        variant: "contained"
      },
      styleOverrides: {
        root: {
          textAlign: "left",
          "&[class*='MuiLoadingButton-loading']": {
            opacity: "0.6"
          },
          "&[class*='MuiButton-link-button'].Mui-disabled": {
            padding: `${primitives.spacings["1"]} 0px ${primitives.spacings["1"]} ${primitives.spacings["1"]}`,
            opacity: "0.6"
          },
          "&:has([class*='MuiLoadingButton-loadingIndicatorEnd'])": {
            textAlign: "right"
          },
          '& [class*="MuiLoadingButton-loadingIndicator"]': {
            '& [class*="DhigCircularProgress--foreground"]': {
              color: "inherit"
            }
          }
        },
        loadingIndicator: {
          position: "static",
          marginTop: "3px",
          "& svg": {
            color: "inherit"
          }
        },
        loadingIndicatorStart: {
          marginRight: primitives.spacings["2"],
          marginLeft: `-${primitives.spacings["1"]}`
        },
        loadingIndicatorEnd: {
          marginRight: `-${primitives.spacings["1"]}`,
          marginLeft: primitives.spacings["2"]
        }
      }
    }
  };
};
