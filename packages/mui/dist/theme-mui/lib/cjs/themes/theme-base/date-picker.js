"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDatePickerStyles = void 0;
var _calendar = _interopRequireDefault(require("@iccc/icon/lib/build/icons/calendar"));
var _caretDown = _interopRequireDefault(require("@iccc/icon/lib/build/icons/caret-down"));
var _caretLeft = _interopRequireDefault(require("@iccc/icon/lib/build/icons/caret-left"));
var _caretRight = _interopRequireDefault(require("@iccc/icon/lib/build/icons/caret-right"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* TODO: [Typescript] remove ignores once icon is migrated */
// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

var makeDatePickerStyles = exports.makeDatePickerStyles = function makeDatePickerStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiDatePicker: {
      defaultProps: {
        reduceAnimations: true,
        slots: {
          openPickerIcon: _calendar.default,
          leftArrowIcon: _caretLeft.default,
          rightArrowIcon: _caretRight.default,
          switchViewIcon: _caretDown.default
        },
        slotProps: {
          field: {
            shouldRespectLeadingZeros: true,
            sx: {
              "& [class*='MuiOutlinedInput-input']": {
                color: tokens.colors["ink-on-background"],
                "&::placeholder": {
                  color: tokens.colors["ink-on-background-60"]
                }
              }
            }
          },
          desktopTransition: {
            easing: primitives.transitions.easing["slow-down"],
            timeout: parseFloat(primitives.transitions.duration["3"])
          }
        }
      }
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          "& [class*='MuiButtonBase-root']": {
            "&:active": {
              backgroundColor: tokens.colors["pressed-fill-subtle"]
            },
            borderRadius: "50%",
            "& svg": {
              color: tokens.colors["ink-on-background"],
              height: primitives.spacings["5"],
              width: primitives.spacings["5"]
            }
          },
          "& [class*='MuiPickersArrowSwitcher-button']": {
            "&:focus-visible": {
              boxShadow: tokens.effects["focus-ring-thin"]
            },
            "&.Mui-disabled": {
              opacity: tokens.opacities["disabled"]
            }
          },
          "& [class*='MuiPickersArrowSwitcher-spacer']": {
            width: primitives.spacings["7"]
          },
          marginTop: primitives.spacings["6"],
          paddingRight: primitives.spacings["6"]
        },
        label: {
          fontWeight: primitives.fontWeights.stout
        },
        labelContainer: {
          padding: primitives.spacings["1"]
        },
        switchViewButton: {
          "&:focus-visible": {
            boxShadow: tokens.effects["focus-ring-thin"]
          }
        }
      }
    },
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          height: "unset",
          maxHeight: "fit-content"
        }
      }
    },
    MuiDayCalendar: {
      styleOverrides: {
        header: {
          paddingLeft: primitives.spacings["6"],
          paddingRight: primitives.spacings["6"]
        },
        monthContainer: {
          position: "relative",
          "&[class*='slideExit']": {
            display: "none"
          }
        },
        weekContainer: {
          padding: "0 ".concat(primitives.spacings["6"]),
          margin: "".concat(primitives.spacings["1"], " 0"),
          "&:last-of-type": {
            marginBottom: primitives.spacings["0"],
            paddingBottom: primitives.spacings["6"]
          }
        },
        weekDayLabel: Object.assign({
          color: tokens.colors["ink-on-background-60"],
          margin: "".concat(primitives.spacings["1"], " 2px 0px 0px")
        }, tokens.typography["short-copy-medium"]),
        slideTransition: {
          overflowX: "unset",
          minHeight: "unset"
        }
      }
    },
    MuiPickersDay: {
      styleOverrides: {
        root: Object.assign(Object.assign({
          color: tokens.colors["ink-on-background"]
        }, tokens.typography["short-copy-medium"]), {
          margin: "2px",
          marginLeft: "".concat(primitives.spacings["0"]),
          "&.Mui-selected": {
            fontWeight: primitives.fontWeights.default,
            boxShadow: tokens.effects["focus-ring-reverse"],
            "&:focus": {
              boxShadow: tokens.effects["focus-ring-reverse"]
            },
            "&:not(:focus)": {
              boxShadow: "none"
            },
            "&:hover": {
              boxShadow: tokens.effects["halo-hover"]
            },
            "&:active:focus": {
              boxShadow: tokens.effects["halo-pressed"],
              backgroundColor: tokens.colors["fill-primary"]
            }
          },
          "&:focus": {
            backgroundColor: primitives.colors.detail.transparent,
            boxShadow: tokens.effects["focus-ring-thin"]
          },
          "&:focus:active": {
            backgroundColor: tokens.colors["pressed-fill-subtle"],
            boxShadow: "none"
          }
        }),
        today: {
          border: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["ink-on-background"]),
          "&:not(.Mui-selected)": {
            border: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["ink-on-background"]),
            "&:focus": {
              boxShadow: tokens.effects["focus-ring-reverse"],
              backgroundColor: "transparent"
            },
            "&:focus:active": {
              backgroundColor: tokens.colors["pressed-fill-subtle"],
              boxShadow: "none"
            }
          }
        }
      }
    },
    MuiPickersYear: {
      styleOverrides: {
        yearButton: {
          "&.Mui-selected": {
            "&:focus-visible": {
              boxShadow: tokens.effects["focus-ring-reverse"]
            },
            "&:active:focus": {
              boxShadow: tokens.effects["halo-pressed"]
            },
            "&:hover": {
              boxShadow: tokens.effects["halo-hover"]
            }
          },
          "&:not(.Mui-selected)": {
            "&:focus": {
              backgroundColor: primitives.colors.detail.transparent,
              boxShadow: tokens.effects["focus-ring-thin"]
            },
            "&:active": {
              backgroundColor: tokens.colors["pressed-fill-subtle"],
              boxShadow: "none"
            }
          },
          "&.Mui-disabled": {
            color: tokens.colors["ink-on-background-disabled"]
          }
        }
      }
    },
    MuiPickersPopper: {
      styleOverrides: {
        root: {
          borderTopLeftRadius: primitives.borderRadii.none,
          borderTopRightRadius: primitives.borderRadii.none,
          borderBottomLeftRadius: primitives.borderRadii.medium,
          borderBottomRightRadius: primitives.borderRadii.medium
        },
        paper: {
          color: tokens.colors["ink-on-background"],
          marginTop: primitives.spacings["1"],
          borderTopLeftRadius: primitives.borderRadii.none,
          borderTopRightRadius: primitives.borderRadii.none,
          boxShadow: tokens.effects["elevation-0-dropdown"]
        }
      }
    },
    MuiPickersLayout: {
      styleOverrides: {
        root: {
          "& [class*='MuiPickersLayout-contentWrapper']": {
            overflowX: "clip"
          },
          "& [class*='MuiPickersArrowSwitcher-button']": {
            color: tokens.colors["ink-on-background"],
            borderRadius: "100vmax"
          },
          "& [class*='MuiPickersLayout-toolbar']": {
            "& [class*='MuiTypography-root']": {
              color: tokens.colors["ink-on-background"]
            },
            padding: "".concat(primitives.spacings["6"], " ").concat(primitives.spacings["6"], " ").concat(primitives.spacings["2"], " ").concat(primitives.spacings["6"])
          },
          "& [class*='MuiPickersLayout-actionBar']": {
            padding: "".concat(primitives.spacings["0"], " ").concat(primitives.spacings["6"], " ").concat(primitives.spacings["6"]),
            "& [class*='MuiButtonBase-root']:first-of-type": Object.assign(Object.assign({}, tokens.button["outlined"]["defaultSize"].default), {
              "&:hover": Object.assign({}, tokens.button["outlined"]["defaultSize"].hover),
              "&:focus": Object.assign({}, tokens.button["outlined"]["defaultSize"].focus),
              "&:focus:active": Object.assign({}, tokens.button["outlined"]["defaultSize"].pressed),
              "&:active": Object.assign({}, tokens.button["outlined"]["defaultSize"].pressed)
            })
          },
          margin: "2px"
        }
      }
    },
    MuiDateRangeCalendar: {
      styleOverrides: {
        monthContainer: {
          "& [class*='MuiDayCalendar-header']": {
            justifyContent: "space-between"
          }
        }
      }
    },
    MuiDateRangePickerDay: {
      styleOverrides: {
        rangeIntervalDayHighlight: {
          backgroundColor: tokens.colors["activated-fill-subtle"]
        },
        outsideCurrentMonth: {
          backgroundColor: primitives.colors.detail.transparent
        }
      }
    }
  };
};