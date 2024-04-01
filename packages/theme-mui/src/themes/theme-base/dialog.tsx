import React from "react";
import type { Breakpoints } from "@mui/material/styles";
import type { ThemeData, PaletteMode } from "../../types";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { TransitionProps } from '@mui/material/transitions';

export const makeDialogStyles = ({
  breakpoints,
  paletteMode,
  primitives,
  tokens
}: ThemeData & { breakpoints: Breakpoints } & { paletteMode: PaletteMode }) => {
  const filterColor = paletteMode === "light" ? `invert(0%)` : `invert(100%)`;

  const { spacings } = primitives;

  const closeButtonDimensions = {
    sm: {
      iconSize: spacings["6"],
      distanceToEdge: spacings["4"]
    },
    md: {
      iconSize: spacings["7"],
      distanceToEdge: spacings["5"]
    },
    lg: {
      iconSize: spacings["8"],
      distanceToEdge: spacings["6"]
    },
    xl: {
      iconSize: spacings["8"],
      distanceToEdge: spacings["7"]
    },
    horizontalPadding: spacings["3"],
    verticalPadding: spacings["2"]
  };

  const paperMargin = (breakpoint: string, axis: string) =>
    parseInt(closeButtonDimensions[breakpoint].iconSize, 10) +
    parseInt(closeButtonDimensions[`${axis}Padding`], 10) * 2 +
    parseInt(closeButtonDimensions[breakpoint].distanceToEdge, 10) * 2 +
    "px";

  const closeButtonStyles = {
    color: tokens.colors["fill-primary"],
    backgroundColor: primitives.colors.detail.transparent,
    borderRadius: primitives.borderRadii.medium,
    padding: `${closeButtonDimensions.verticalPadding} ${closeButtonDimensions.horizontalPadding}`,
    position: "absolute",
    top: closeButtonDimensions.sm.distanceToEdge,
    right: closeButtonDimensions.sm.distanceToEdge,
    "&:hover": {
      backgroundColor: tokens.colors["hover-fill-subtle"]
    },
    "&:focus": {
      boxShadow: tokens.effects["focus-ring"]
    },
    "&:focus:active": {
      backgroundColor: tokens.colors["pressed-fill-subtle"],
      boxShadow: "none"
    },
    "&:active": {
      backgroundColor: tokens.colors["pressed-fill-subtle"]
    },
    "& svg": {
      height: closeButtonDimensions.sm.iconSize,
      width: closeButtonDimensions.sm.iconSize
    }
  };
  return {
    MuiBackdrop: {
      defaultProps: {
        TransitionComponent: React.forwardRef(function Transition(
          props: TransitionProps & {
            children: React.ReactElement<any, any>;
          },
          ref: React.Ref<unknown>
        ) {
          return (
            <Fade
              ref={ref}
              {...props}
              easing={primitives.transitions.easing.smooth}
              timeout={parseFloat(primitives.transitions.duration["3"])}
            />
          );
        })
      },
      styleOverrides: {
        root: {
          "&.DhigModal--backdrop--light": {
            backgroundColor: tokens.colors["backdrop-60"]
          },
          "&.DhigModal--backdrop--default": {
            backgroundColor: tokens.colors["backdrop-85"]
          }
        }
      }
    },
    MuiDialog: {
      defaultProps: {
        TransitionComponent: React.forwardRef(function Transitions(
          props: TransitionProps & {
            children: React.ReactElement<any, any>;
          },
          ref: React.Ref<unknown>
        ) {
          return (
            <Slide
              ref={ref}
              {...props}
              easing={primitives.transitions.easing["slow-down"]}
              timeout={parseFloat(primitives.transitions.duration["2"])}
              onEntering={(node) => {
                const transform = `translateY(${primitives.spacings["4"]})`;
                node.style.transform = transform;
              }}
              onExiting={(node) => {
                const transform = `translateY(-${primitives.spacings["4"]})`;
                node.style.transform = transform;
              }}
              direction="up"
            >
              <div>
                <Fade
                  ref={ref}
                  {...props}
                  easing={primitives.transitions.easing["slow-down"]}
                  timeout={parseFloat(primitives.transitions.duration["2"])}
                  style={{
                    transitionDelay: primitives.transitions.duration["1"]
                  }}
                />
              </div>
            </Slide>
          );
        })
      },
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          '& [class*="MuiPaper-root"]': {
            color: `${tokens.colors["ink-on-background"]}`
          },
          "& > [role='presentation']": {
            [breakpoints.down(breakpoints.values.md)]: {
              width: "100%",
              height: "100%"
            }
          }
        },
        paper: {
          background: tokens.colors["fill-elevation-1"],
          borderRadius: primitives.borderRadii.large,
          boxShadow: tokens.effects["elevation-1"],
          [breakpoints.down(breakpoints.values.md)]: {
            marginBottom: paperMargin("sm", "vertical"),
            marginTop: paperMargin("sm", "vertical")
          },
          [breakpoints.up(breakpoints.values.md)]: {
            marginLeft: paperMargin("md", "horizontal"),
            marginRight: paperMargin("md", "horizontal")
          },
          [breakpoints.up(breakpoints.values.lg)]: {
            marginLeft: paperMargin("lg", "horizontal"),
            marginRight: paperMargin("lg", "horizontal")
          },
          [breakpoints.up(breakpoints.values.xl)]: {
            marginLeft: paperMargin("xl", "horizontal"),
            marginRight: paperMargin("xl", "horizontal")
          },
          "&.DhigModal--type--alert": {
            '& [class*="MuiDialogContent-root"]': {
              padding: spacings["6"],
              "& img": {
                marginBottom: spacings["4"],
                height: spacings["8"],
                width: spacings["8"]
              },
              "& [class*='MuiSvgIcon-root']": {
                height: spacings["8"],
                paddingBottom: "1em",
                width: spacings["8"]
              }
            }
          },
          "&.DhigModal--type--lightbox": {
            backgroundColor: tokens.colors["fade-gradient-transparent"],
            borderRadius: primitives.borderRadii.none,
            boxShadow: tokens.effects["container-0-outside"],
            maxWidth: "unset",
            [breakpoints.down(breakpoints.values.lg)]: {
              marginLeft: spacings["4"],
              marginRight: spacings["4"],
              maxHeight: `calc(100% - calc(${paperMargin(
                "sm",
                "vertical"
              )} * 2))`
            },
            [breakpoints.up(breakpoints.values.lg)]: {
              margin: `${paperMargin("lg", "vertical")} 11.25%`
            },
            '& [class*="MuiDialogContent-root"]': {
              borderRadius: primitives.borderRadii.large,
              padding: spacings["0"],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              marginBottom: spacings["4"],
              "& :first-of-type": {
                maxWidth: "100%",
                maxHeight: "100%",
                overflow: "hidden"
              },
              "& ~ *": {
                color: tokens.colors["ink-on-dark"]
              }
            }
          },
          "&.DhigModal--type--modal": {
            [breakpoints.down(breakpoints.values.md)]: {
              position: "fixed",
              bottom: primitives.spacings["4"],
              margin: 0,
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
              boxShadow: "none",
              borderTop: `1px solid ${tokens.colors["ink-on-background"]}`
            }
          },
          "&.DhigModal--styleVariant--subdivision": {
            '& [class*="MuiDialogTitle-root"]': {
              boxShadow: tokens.effects["divider-0-bottom"],
              paddingBottom: primitives.spacings["4"]
            },
            '& [class*="MuiDialogActions-root"]': {
              boxShadow: tokens.effects["divider-0-top"]
            },
            '& [class*="MuiDialogContent-root"]': {
              padding: `${spacings["6"]} ${spacings["7"]}`
            }
          },
          '& .DhigModal--closeButton--default ~ [class*="MuiDialogTitle-root"]':
            {
              paddingRight: spacings["9"]
            },
          "& .DhigModal--closeButton--default": closeButtonStyles,
          "& .DhigModal--closeButton--outside": {
            ...closeButtonStyles,
            position: "fixed",
            "& [class*='MuiSvgIcon-root'] svg": {
              color: tokens.colors["ink-on-dark"],
              height: closeButtonDimensions.sm.iconSize,
              width: closeButtonDimensions.sm.iconSize
            },
            [breakpoints.up(breakpoints.values.md)]: {
              top: closeButtonDimensions.md.distanceToEdge,
              right: closeButtonDimensions.md.distanceToEdge,
              "& svg": {
                height: closeButtonDimensions.md.iconSize,
                width: closeButtonDimensions.md.iconSize
              }
            },
            [breakpoints.up(breakpoints.values.lg)]: {
              top: closeButtonDimensions.lg.distanceToEdge,
              right: closeButtonDimensions.lg.distanceToEdge,
              "& svg": {
                height: closeButtonDimensions.lg.iconSize,
                width: closeButtonDimensions.lg.iconSize
              }
            },
            [breakpoints.up(breakpoints.values.xl)]: {
              top: closeButtonDimensions.xl.distanceToEdge,
              right: closeButtonDimensions.xl.distanceToEdge,
              "& svg": {
                height: closeButtonDimensions.xl.iconSize,
                width: closeButtonDimensions.xl.iconSize
              }
            }
          }
        },
        paperWidthXs: {
          maxWidth: 342
        },
        paperWidthSm: {
          maxWidth: 586
        },
        paperWidthMd: {
          maxWidth: 830
        },
        paperWidthLg: {
          maxWidth: 1074
        },
        paperWidthXl: {
          maxWidth: 1318
        },
        paperScrollPaper: {
          [breakpoints.down(breakpoints.values.md)]: {
            maxHeight: `calc(100% - calc(${paperMargin("sm", "vertical")} * 2))`
          }
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          ...tokens.typography["headline-small"],
          padding: `${spacings["6"]} ${spacings["7"]} ${spacings["0"]}`,
          "& .DhigModal--logo": {
            filter: filterColor,
            height: spacings["6"],
            width: "148px"
          }
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: `${spacings["6"]} ${spacings["7"]}`,
          marginRight: "1px"
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: `${spacings["6"]} ${spacings["7"]}`
        }
      }
    }
  };
};
