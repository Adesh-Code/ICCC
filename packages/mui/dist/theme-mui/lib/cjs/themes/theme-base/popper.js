"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePopperStyles = void 0;
var makePopperStyles = exports.makePopperStyles = function makePopperStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiPopper: {
      styleOverrides: {
        root: {
          "&.DhigFlyout": {
            background: "transparent",
            "&[class*='MuiTooltip-popper'][data-popper-placement*='top'] [class*='MuiTooltip-arrow']:before": {
              boxShadow: "0px 1px 0px 0px rgba(0, 0, 0, 0.6),0px 1px 0px 0px rgba(0, 0, 0, 0.6) inset,1px 0px 0px 0px rgba(0, 0, 0, 0.6) inset,-1px 0px 0px 0px rgba(0, 0, 0, 0.6) inset"
            },
            "&[class*='MuiTooltip-popper'][data-popper-placement*='top'] [class*='MuiTooltip-arrow']": {
              marginBottom: "".concat(primitives.spacings["0"]),
              bottom: "-14px"
            },
            "&[class*='MuiTooltip-popper'][data-popper-placement*='bottom'] [class*='MuiTooltip-arrow']": {
              top: "-13px",
              marginTop: primitives.spacings["0"]
            },
            "& [class*='MuiTooltip-tooltip']": {
              background: tokens.colors["fill-elevation-0"],
              boxShadow: tokens.effects["elevation-0-popover"],
              padding: "".concat(primitives.spacings["3"], " 1px ").concat(primitives.spacings["4"], " 1px"),
              borderRadius: primitives.borderRadii["medium"],
              "& [class*='MuiTooltip-arrow']": {
                fontSize: primitives.spacings["5"]
              },
              "& [class*='MuiTooltip-arrow']:before": {
                backgroundColor: primitives.colors.primary.white,
                boxShadow: tokens.effects["elevation-0-popover"]
              },
              "& [class*='MuiPaper-root']": {
                boxShadow: "none",
                '& [class*="MuiList-root"][role="menu"]': {
                  outline: "none"
                }
              },
              "& [class*='MuiMenuItem-root']": {
                padding: "".concat(primitives.spacings["2"], " ").concat(primitives.spacings["4"], " ").concat(primitives.spacings["2"], " ").concat(primitives.spacings["5"]),
                "&:focus": {
                  backgroundColor: tokens.colors["fill-elevation-0"],
                  padding: "".concat(primitives.spacings["2"], " ").concat(primitives.spacings["4"], " ").concat(primitives.spacings["2"], " ").concat(primitives.spacings["5"]),
                  "&.Mui-selected": {
                    backgroundColor: tokens.colors["activated-fill-subtle"]
                  }
                },
                "& [class*='MuiSvgIcon-root']": {
                  position: "absolute",
                  right: primitives.spacings["3"]
                }
              },
              "& [class*='MuiMenuItem-root']:active": {
                background: tokens.colors["activated-pressed-fill-subtle"]
              }
            }
          },
          '&[class*="MuiAutocomplete-popper"]': {
            '& [class*="MuiPaper-root"]': Object.assign(Object.assign({}, tokens.typography["body-copy-medium"]), {
              color: tokens.colors["ink-on-background"],
              boxShadow: tokens.effects["elevation-0-dropdown"],
              borderRadius: "".concat(primitives.borderRadii.none, " ").concat(primitives.borderRadii.none, " ").concat(primitives.borderRadii.medium, " ").concat(primitives.borderRadii.medium),
              margin: "".concat(primitives.spacings["1"], " ").concat(primitives.spacings["0"]),
              backgroundColor: tokens.colors["fill-elevation-0"],
              '& [class*="MuiAutocomplete-noOptions"]': {
                color: tokens.colors["ink-on-background"]
              },
              '& [class*="MuiAutocomplete-listbox"]': {
                '& [class*="MuiAutocomplete-option"]': Object.assign(Object.assign({
                  cursor: "pointer",
                  display: "flex",
                  boxSizing: "border-box",
                  alignItems: "center",
                  padding: "10px ".concat(primitives.spacings["3"]),
                  justifyContent: "flex-start"
                }, tokens.transitions["state-blur"]), {
                  '&[aria-selected="true"]': {
                    backgroundColor: tokens.colors["activated-fill-subtle"]
                  },
                  '&[aria-disabled="true"]': {
                    opacity: "0.3",
                    pointerEvents: "none"
                  },
                  "&.Mui-focused:hover": Object.assign({
                    backgroundColor: tokens.colors["hover-fill-subtle"]
                  }, tokens.transitions["state-activate"]),
                  "&.Mui-focused:active, &:active": Object.assign({
                    backgroundColor: tokens.colors["pressed-fill-subtle"]
                  }, tokens.transitions["state-activate"]),
                  "&.Mui-focused.Mui-focusVisible": Object.assign({
                    boxShadow: "inset ".concat(tokens.effects["focus-ring-thin"])
                  }, tokens.transitions["state-activate"]),
                  '& [class*="DhigCombobox--checkedIcon"]': {
                    position: "absolute",
                    right: primitives.spacings["3"]
                  },
                  '& [class*="MuiCheckbox-root"]': {
                    marginRight: primitives.spacings["2"]
                  }
                }),
                "& li": {
                  '[class*="MuiListSubheader-root"]': {
                    borderTop: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["row-divider"]),
                    marginLeft: "1px",
                    marginRight: "1px",
                    background: tokens.gradients["fill-category-title"]
                  },
                  '&:first-of-type [class*="MuiListSubheader-root"]': {
                    borderTop: "none"
                  }
                }
              },
              '& [class*="MuiListSubheader-root"]': {
                backgroundColor: primitives.colors.detail.transparent
              },
              '& [class*="DhigCombobox--addendum"]': Object.assign(Object.assign({
                color: tokens.colors["detail-2-transparent"]
              }, tokens.typography["body-copy-small"]), {
                padding: primitives.spacings["3"]
              })
            })
          }
        }
      }
    }
  };
};