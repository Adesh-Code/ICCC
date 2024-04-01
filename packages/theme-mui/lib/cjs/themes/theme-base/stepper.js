"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStepperStyles = void 0;
var makeStepperStyles = exports.makeStepperStyles = function makeStepperStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiStep: {
      styleOverrides: {
        root: {
          padding: primitives.spacings["0"],
          '&[class*="Mui-completed"]': {
            '& + [class*="MuiStepConnector-vertical"]': {
              marginLeft: "14px",
              '& [class*="MuiStepConnector-line"]': {
                borderColor: tokens.colors["fill-success"],
                borderWidth: primitives.spacings["1"]
              }
            },
            '& + [class*="MuiStep-root"]': {
              '& [class*="MuiStepConnector-horizontal"]': {
                '& [class*="MuiStepConnector-line"]': {
                  borderColor: tokens.colors["fill-success"],
                  borderWidth: primitives.spacings["1"],
                  top: primitives.spacings["1"]
                }
              }
            }
          }
        },
        alternativeLabel: {
          '& [class*="MuiStepButton-root"]': {
            alignItems: "flex-start",
            justifyContent: "flex-start"
          },
          '& [class*="MuiStepConnector-lineHorizontal"]': {
            position: "absolute",
            top: "5px",
            left: "-53%",
            right: "50%"
          }
        },
        vertical: {
          '& [class*="MuiStepContent-root"]': {
            marginLeft: "15.5px",
            borderLeft: "1.5px solid ".concat(tokens.colors["detail-1-transparent"]),
            paddingLeft: primitives.spacings["7"],
            paddingTop: primitives.spacings["5"]
          }
        }
      }
    },
    MuiStepButton: {
      styleOverrides: {
        root: Object.assign(Object.assign({}, tokens.typography["body-copy-medium"]), {
          "&:hover": {
            '& [class*="MuiStepLabel-iconContainer"]': {
              outline: "".concat(primitives.borderWidths.medium, " solid ").concat(primitives.colors.tint["iris-400"])
            },
            '& [class*="Mui-error"]': {
              '& [class*="MuiStepLabel-iconContainer"]': {
                outline: "".concat(primitives.borderWidths.medium, " solid ").concat(primitives.colors.tint["clay-300"])
              }
            }
          },
          "&:active": {
            '& [class*="MuiStepLabel-iconContainer"]': {
              outline: "".concat(primitives.borderWidths.large, " solid ").concat(primitives.colors.accent.plant)
            },
            '& [class*="Mui-error"]': {
              '& [class*="MuiStepLabel-iconContainer"]': {
                outline: "".concat(primitives.borderWidths.large, " solid ").concat(primitives.colors.tint["clay-300"])
              }
            }
          },
          "&:focus-visible": {
            '& [class*="MuiStepLabel-iconContainer"]': {
              outline: "".concat(primitives.borderWidths.large, " solid ").concat(tokens.colors["ink-focus"]),
              outlineOffset: "1px"
            }
          }
        })
      }
    },
    MuiStepConnector: {
      styleOverrides: {
        vertical: {
          marginLeft: "15.5px"
        },
        lineHorizontal: {
          borderTop: "1.5px solid ".concat(tokens.colors["detail-1-transparent"])
        },
        lineVertical: {
          borderLeft: "1.5px solid ".concat(tokens.colors["detail-1-transparent"])
        }
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          padding: primitives.spacings["0"],
          '&[class*="alternativeLabel"]': {
            flexDirection: "column",
            alignItems: "start",
            '& [class*="MuiStepLabel-label"]': {
              marginLeft: primitives.spacings["2"],
              marginTop: primitives.spacings["1"]
            },
            '& [class*="MuiStepLabel-labelContainer"]': {
              textAlign: "left",
              margin: primitives.spacings["0"]
            }
          }
        },
        iconContainer: {
          zIndex: 1,
          height: primitives.spacings["7"],
          width: primitives.spacings["7"],
          borderRadius: "50%",
          boxShadow: "".concat(tokens.colors["ink-on-background"], " 0 0 0 1.5px inset"),
          paddingRight: primitives.spacings["0"],
          marginRight: primitives.spacings["2"],
          '&[class*="Mui-active"]': {
            boxShadow: "".concat(tokens.colors["ink-on-background"], " 0 0 0 2px inset"),
            '& [class*="MuiSvgIcon"]': {
              "& text": {
                fontWeight: primitives.fontWeights.emphasized
              }
            }
          },
          '&[class*="Mui-completed"]': {
            boxShadow: "none",
            backgroundColor: tokens.colors["fill-success"]
          },
          '&[class*="Mui-completed"][class*="Mui-active"]': {
            boxShadow: " ".concat(tokens.colors["ink-on-background"], " 0 0 0 2px inset"),
            backgroundColor: primitives.colors.detail.transparent
          },
          '&[class*="Mui-error"]': {
            boxShadow: "none",
            backgroundColor: tokens.colors["fill-error"],
            '& [class*="MuiSvgIcon"]': {
              color: tokens.colors.background
            }
          },
          '&[class*="Mui-error"][class*="Mui-active"]': {
            boxShadow: "".concat(tokens.colors["ink-error"], " 0 0 0 2px inset"),
            backgroundColor: primitives.colors.detail.transparent,
            '& [class*="MuiSvgIcon"]': {
              color: tokens.colors["ink-error"]
            }
          },
          '&[class*="Mui-disabled"]': {
            boxShadow: "".concat(tokens.colors["detail-1-transparent"], " 0 0 0 1.5px inset"),
            backgroundColor: tokens.colors["detail-1-40-transparent"],
            '& [class*="MuiSvgIcon"]': {
              "& text": {
                fill: tokens.colors["ink-on-background-60"]
              }
            }
          },
          '& [class*="MuiSvgIcon"]': {
            height: primitives.spacings["7"],
            width: primitives.spacings["7"],
            "& text": {
              fontSize: primitives.fontSizes["2"],
              fill: tokens.colors["ink-on-background"]
            }
          }
        },
        horizontal: {
          '& [class*="MuiStepLabel-iconContainer"]': {
            padding: primitives.spacings["0"]
          }
        },
        label: {
          fontSize: primitives.fontSizes["3"],
          color: tokens.colors["ink-on-background"],
          '&[class*="Mui-active"]': {
            fontWeight: primitives.fontWeights.emphasized,
            color: tokens.colors["ink-on-background"]
          },
          '&[class*="Mui-completed"]': {
            color: tokens.colors["ink-on-background"]
          },
          '&[class*="Mui-disabled"]': {
            color: tokens.colors["ink-on-background-60"]
          }
        }
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "& circle": {
            display: "none"
          }
        }
      }
    }
  };
};