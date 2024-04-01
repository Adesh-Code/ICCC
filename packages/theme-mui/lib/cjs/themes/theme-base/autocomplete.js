"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAutocompleteStyles = void 0;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
var _cross = _interopRequireDefault(require("@iccc/icon/lib/build/icons/cross"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* TODO: [Typescript] remove ignore once icon is migrated */
// @ts-ignore

var makeAutocompleteStyles = exports.makeAutocompleteStyles = function makeAutocompleteStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiAutocomplete: {
      defaultProps: {
        clearIcon: ( /*#__PURE__*/_react.default.createElement(_SvgIcon.default, {
          fontSize: "small"
        }, /*#__PURE__*/_react.default.createElement(_cross.default, null))),
        componentsProps: {
          clearIndicator: {
            tabIndex: 0
          }
        }
      },
      styleOverrides: {
        root: {
          '&[class*="DhigCombobox"]': {
            '&[class*="MuiAutocomplete-hasPopupIcon"]': {
              '& [class*="MuiAutocomplete-inputRoot"]': {
                paddingRight: primitives.spacings["3"]
              }
            },
            '& [class*="DhigCombobox--textField"]': {
              '& [class*="DhigCombobox--input"][class*="MuiInputBase-inputAdornedEnd"]': {
                padding: "".concat(primitives.spacings["2"], " ").concat(primitives.spacings["3"])
              }
            }
          },
          '& [class*="DhigCombobox--textField"]': {
            '& [class*="MuiInput-root"]': {
              display: "flex",
              flexWrap: "wrap",
              paddingRight: primitives.spacings["0"]
            },
            '& [class*="MuiAutocomplete-endAdornment"]': {
              display: "flex",
              flexDirection: "row",
              marginRight: "0",
              top: primitives.spacings["2"],
              right: primitives.spacings["2"],
              minWidth: "fit-content",
              gap: primitives.spacings["1"],
              "& button": {
                color: tokens.colors["ink-on-background"]
              }
            }
          },
          '& [class*="DhigCombobox--input"]': {},
          '&[class*="DhigCombobox--multiple"]': {
            '& [class*="DhigCombobox--textField"]': {
              '& [class*="MuiInput-root"]': {
                paddingLeft: primitives.spacings["3"],
                paddingBottom: primitives.spacings["2"],
                minHeight: primitives.spacings["8"],
                '& [class*="MuiChip-root"]': {
                  margin: "".concat(primitives.spacings["2"], " 2px ").concat(primitives.spacings["0"])
                }
              }
            }
          },
          '&[class*="DhigCombobox--layout--grow"]': {
            '& [class*="DhigCombobox--textField"]': {
              maxHeight: "212px",
              '& [class*="MuiInput-root"]': {
                // highly specific to override input styles, see issue #717
                '&[class*="MuiInputBase-root"]': {
                  "&.Mui-focused:not(.Mui-disabled):before": {
                    boxShadow: "none"
                  }
                },
                overflow: "auto",
                paddingRight: "46px",
                "&::before": {
                  borderBottom: "none"
                },
                "&::after": {
                  borderBottom: "none"
                },
                "&:hover": {
                  "&::before": {
                    boxShadow: "none"
                  }
                },
                '& [class*="DhigCombobox--input"]': {
                  flexBasis: "min-content",
                  padding: primitives.spacings["0"],
                  margin: "".concat(primitives.spacings["2"], " ").concat(primitives.spacings["0"]),
                  flexGrow: "1",
                  transform: "translateY(".concat(primitives.spacings["1"], ")"),
                  "&:focus": {
                    minWidth: "15ch"
                  }
                }
              }
            }
          },
          '&[class*="DhigCombobox--layout--fixed"]': {
            '& [class*="DhigCombobox--textField"]': {
              '& [class*="MuiInput-root"]': {
                flexWrap: "nowrap",
                paddingTop: primitives.spacings["2"],
                '& [class*="MuiChip-root"]': {
                  marginTop: primitives.spacings["0"]
                },
                '& [class*="DhigCombobox--input"]': {
                  padding: primitives.spacings["0"],
                  marginLeft: primitives.spacings["1"]
                }
              }
            }
          },
          '&[class*="DhigSearch"]': {},
          '& [class*="DhigSearch--textField"]': {
            backgroundColor: tokens.colors["search-field-fill"],
            borderRadius: primitives.spacings[1],
            height: "40px",
            '& [class*="MuiAutocomplete-inputRoot"]': Object.assign(Object.assign({
              borderRadius: primitives.spacings[1],
              border: "".concat(primitives.borderWidths.medium, " solid ").concat(primitives.colors.detail.transparent),
              boxShadow: "none",
              flexWrap: "nowrap",
              height: "100%"
            }, tokens.transitions["state-blur"]), {
              "&.Mui-focused": Object.assign({
                border: "1px solid ".concat(primitives.colors.accent.iris)
              }, tokens.transitions["state-activate"]),
              "&.Mui-disabled": {
                '& [class*="MuiInputAdornment-root"]': {
                  opacity: tokens.opacities.disabled
                },
                pointerEvents: "none",
                color: tokens.colors["ink-on-background"]
              },
              "&:focus, &:focus:active": Object.assign({
                border: "".concat(primitives.borderWidths.large, " solid ").concat(primitives.colors.accent.iris)
              }, tokens.transitions["state-activate"]),
              "&:active": Object.assign({
                border: "".concat(primitives.borderWidths.medium, " solid ").concat(primitives.colors.accent.iris)
              }, tokens.transitions["state-activate"]),
              "&:hover, &.Mui-focused:not(:hover)": Object.assign(Object.assign({
                backgroundColor: tokens.colors["hover-fill-subtle"]
              }, tokens.transitions["state-activate"]), {
                '&[class*="MuiInput-root"]': {
                  boxShadow: "none"
                }
              }),
              '& [class*="MuiInputAdornment-root"]': {
                width: "unset",
                paddingLeft: primitives.spacings["2"],
                paddingRight: primitives.spacings["0"],
                marginRight: primitives.spacings["0"],
                '& [class*="MuiSvgIcon-root"]': {
                  height: "24px",
                  width: "unset"
                }
              }
            }),
            '& [class*="DhigSearch--input"]': {
              padding: primitives.spacings["1"]
            },
            '& [class*="MuiAutocomplete-endAdornment"]': {
              top: "unset",
              marginRight: primitives.spacings["2"]
            }
          },
          '& [class*="DhigSearch--input"]': {},
          '& [class*="MuiTextField-root"]': {
            minHeight: "40px",
            '& [class*="MuiInput-root"]': {
              paddingBottom: primitives.spacings["0"],
              color: tokens.colors["ink-on-background"],
              '& [class*="MuiAutocomplete-endAdornment"]': Object.assign(Object.assign({
                height: primitives.spacings["6"],
                width: primitives.spacings["6"]
              }, tokens.transitions["state-blur"]), {
                '& [class*="MuiAutocomplete-clearIndicator"]': {
                  visibility: "unset",
                  opacity: 0,
                  '& [class*="MuiSvgIcon-root"]': {
                    color: tokens.colors["ink-on-background"]
                  },
                  "&:hover": Object.assign({
                    backgroundColor: tokens.colors["hover-fill-subtle"]
                  }, tokens.transitions["state-activate"]),
                  "&:active": Object.assign({
                    backgroundColor: tokens.colors["pressed-fill-subtle"]
                  }, tokens.transitions["state-activate"]),
                  "&:focus, &:focus-visible": Object.assign(Object.assign({
                    outline: "none",
                    boxShadow: tokens.effects["focus-ring-thin"]
                  }, tokens.transitions["state-activate"]), {
                    "&:hover, &:active": {
                      backgroundColor: tokens.colors["fill-elevation-0"]
                    }
                  })
                }
              })
            },
            "&:hover, &:focus-within": {
              '& [class*="MuiAutocomplete-endAdornment"]': {
                '& [class*="MuiAutocomplete-clearIndicator"]': {
                  opacity: 1
                }
              }
            }
          },
          "& [class*='MuiTextField-root']": {
            "& [class*='MuiInput-root']": {
              "& [class*='MuiAutocomplete-endAdornment']": {
                minHeight: "40px",
                top: "0",
                maxHeight: primitives.spacings["8"],
                height: "100%",
                display: "flex",
                alignItems: "center",
                "& [class*='MuiButtonBase-root']": {
                  height: primitives.spacings["6"]
                }
              }
            }
          }
        }
      }
    }
  };
};