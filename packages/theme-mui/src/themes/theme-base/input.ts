import type { ThemeData } from "../../types";

export const makeInputStyles = ({
  primitives,
  tokens
}: ThemeData) => ({
  MuiInput: {
    styleOverrides: {
      root: {
        fontWeight: primitives.fontWeights.stout
      },
      input: {
        "&::placeholder": {
          fontWeight: primitives.fontWeights.default
        }
      },
      underline: {
        '&[class*="MuiInputBase-root"]': {
          boxShadow: tokens.effects["field-default"],
          color: tokens.colors["ink-on-background"],
          ...tokens.transitions["state-activate"],
          marginTop: primitives.spacings["0"],
          padding: primitives.spacings["0"],
          "&:before": {
            height: "100%",
            ...tokens.transitions["state-activate"]
          },
          "&:after": {
            borderBottom: `${primitives.borderWidths.medium} solid ${tokens.colors["fill-primary"]}`
          },
          "&.Mui-error:before": {
            borderBottomWidth: primitives.borderWidths.none
          },
          "&.Mui-error:after": {
            borderBottomWidth: primitives.borderWidths.none
          },
          "&.Mui-disabled": {
            opacity: tokens.opacities.disabled,
            pointerEvents: "none"
          },
          "&:hover": {
            boxShadow: tokens.effects["field-default"],
            ...tokens.transitions["state-blur"],
            '&[class*="MuiFilledInput-underline"]': {
              boxShadow: "none"
            }
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottomWidth: primitives.borderWidths.none,
            boxShadow: `0px 1px 0px 0px ${tokens.colors["ink-hover"]}`
          },
          "&.Mui-error, &.Mui-error:hover, &.Mui-focused.Mui-error": {
            boxShadow: tokens.effects["field-error"],
            '&[class*="MuiFilledInput-underline"]': {
              boxShadow: "none"
            }
          },
          "&.Mui-error:hover:not(.Mui-disabled):before": {
            boxShadow: `0px 1px 0px 0px ${primitives.colors.accent.clay}`
          },
          "&.Mui-focused, &:focus, &:focus-visible": {
            boxShadow: `0px 1px 0px 0px ${tokens.colors["text-link-loud"]} inset, 0px 0px 0px 1px ${tokens.colors["text-link-loud"]} inset`,
            outline: "none",
            '&[class*="MuiFilledInput-underline"]': {
              boxShadow: "none"
            }
          },
          "&.Mui-focused:not(.Mui-disabled):before, &:focus:not(.Mui-disabled):before, &:focus-visible:not(.Mui-disabled):before":
            {
              borderBottomWidth: primitives.borderWidths.none,
              boxShadow: `0px 0px 0px 1px ${primitives.colors.accent.iris}, 0px 0px 0px 1px ${primitives.colors.primary.black}`
            },
          "&.Mui-error.Mui-focused:not(.Mui-disabled):before, &.Mui-error:focus:not(.Mui-disabled):before, &.Mui-error:focus-visible:not(.Mui-disabled):before":
            {
              borderBottomWidth: primitives.borderWidths.none,
              boxShadow: tokens.effects["field-error"]
            },
          '& + .DhigTextInput--count + [class*="MuiFormHelperText-root"]': {
            marginTop: `-${primitives.spacings[6]}`,
            paddingRight: primitives.spacings[9]
          },
          "&.Mui-error + .DhigTextInput--count": {
            color: tokens.colors["ink-error"]
          },
          "& + .DhigTextInput--count + .Mui-error": {
            position: "relative",
            paddingLeft: primitives.spacings[5],
            '& [class*="MuiSvgIcon-root"]': {
              position: "absolute",
              left: "0px"
            }
          },
          "& + .Mui-error": {
            position: "relative",
            paddingLeft: primitives.spacings[5],
            "& [class*='MuiSvgIcon-root']": {
              position: "absolute",
              left: "0px"
            }
          },
          '& [class*="MuiSelect-icon"]': {
            color: "inherit",
            marginRight: primitives.spacings["1"],
            top: "30%"
          },
          // eslint-disable-next-line no-warning-comments
          // todo: these styles are too general
          '& [class*="MuiInputAdornment-root"]': {
            width: "auto",
            paddingLeft: 0,
            paddingRight: 0,
            "button svg[class*='MuiSvgIcon-root']": {
              width: primitives.spacings["5"],
              height: primitives.spacings["5"],
              color: tokens.colors["fill-primary"]
            },
            '&[class*="MuiInputAdornment-positionStart"]': {
              marginLeft: "10px",
              marginRight: "11px"
            },
            '&[class*="MuiInputAdornment-positionEnd"]': {
              marginLeft: "11px",
              marginRight: "14px",
              "& [class*='MuiButtonBase-root']": {
                width: primitives.spacings["7"],
                height: primitives.spacings["7"]
              }
            }
          },
          '&[class*="MuiInputBase-multiline"]': {
            padding: primitives.spacings["0"]
          },
          '& [class*="MuiInputBase-input"]': {
            padding: `${primitives.spacings["2"]} ${primitives.spacings["4"]} ${primitives.spacings["2"]} ${primitives.spacings["3"]}`,
            color: tokens.colors["ink-on-background"],
            height: primitives.spacings["6"],
            ...tokens.typography["input-value"],
            '&[class*="MuiInputBase-inputMultiline"]': {
              padding: `${primitives.spacings["3"]} ${primitives.spacings["3"]} ${primitives.spacings["0"]} ${primitives.spacings["3"]} `
            },
            '&[class*="MuiInputBase-inputAdornedStart"]': {
              paddingLeft: primitives.spacings["0"],
              marginLeft: `-${primitives.spacings["2"]}`
            },
            '&[class*="MuiInputBase-inputAdornedEnd"]': {
              paddingRight: primitives.spacings["0"],
              marginRight: `-${primitives.spacings["2"]}`
            }
          }
        },
        "&.DhigNumberInput": {
          paddingRight: primitives.spacings["1"],
          "& [type='number']": {
            minWidth: "120px",
            paddingRight: primitives.spacings["2"],
            marginRight: primitives.spacings["0"],
            appearance: "none",
            "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
              appearance: "none"
            },
            '& ~ [class*="MuiInputAdornment-root"][class*="MuiInputAdornment-positionEnd"]':
              {
                borderRadius: primitives.borderRadii.medium,
                cursor: "pointer",
                height: "fit-content",
                margin: primitives.spacings["0"],
                padding: primitives.spacings["1"],
                width: "fit-content",
                "&:hover": {
                  backgroundColor: tokens.colors["hover-fill-subtle"]
                },
                "&:active": {
                  backgroundColor: tokens.colors["pressed-fill-subtle"]
                },
                "&:focus-visible": {
                  boxShadow: tokens.effects["focus-ring-thin"],
                  outline: "none",
                  backgroundColor: "transparent"
                },
                '[class*="MuiSvgIcon-root"]': {
                  cursor: "pointer",
                  height: primitives.spacings["5"],
                  width: primitives.spacings["5"]
                }
              }
          }
        }
      }
    }
  }
});
