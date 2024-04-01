import type { ThemeData } from "../../types";

export const makeTableStyles = ({
  primitives,
  tokens
}: ThemeData) => ({
  MuiTable: {
    styleOverrides: {
      root: {
        "&.DhigTable--verticalAlignment--center tbody tr td": {
          verticalAlign: "middle"
        },
        "&.DhigTable--verticalAlignment--top tbody tr td": {
          verticalAlign: "top"
        },
        "&.DhigTable--zebra": {
          "& tbody tr:nth-of-type(odd)": {
            backgroundColor: tokens.colors["background-panel"]
          },
          "& tbody tr:hover": {
            backgroundColor: tokens.colors["row-hover-zebra"]
          }
        },
        "& tbody tr:last-child": {
          borderBottom: "none"
        },
        "&.DhigTable--loud": {
          "& tr.DhigTableRow--enableInteractions": {
            position: "relative",
            borderBottom: `${primitives.borderWidths.medium} solid ${tokens.colors["row-divider"]}`,
            "&:hover": {
              borderRadius: primitives.borderRadii.medium,
              background: tokens.gradients["row-hover-loud-reverse"],
              backgroundAttachment: "fixed",
              boxShadow: tokens.effects["hover-halo-inwards"]
            },
            "&:active": {
              borderRadius: primitives.borderRadii.medium,
              background: tokens.gradients["row-pressed-loud-reverse"],
              backgroundAttachment: "fixed",
              boxShadow: `${tokens.effects["halo-pressed"]} inset`
            },
            "& td.MuiTableCell-root": {
              lineHeight: "1.25" //primitives.lineHeights.compact
            },
            "& td.MuiTableCell-root > *": {
              lineHeight: "1.25" //primitives.lineHeights.compact
            },
            '& td.MuiTableCell-root:not([class*="MuiTableCell-paddingCheckbox"])':
              {
                padding: primitives.spacings["4"]
              },
            '& td.MuiTableCell-sizeSmall:not([class*="MuiTableCell-paddingCheckbox"])':
              {
                padding: `10px ${primitives.spacings["4"]}`
              }
          },
          "&.DhigTableRow--activated.Mui-selected": {
            backgroundAttachment: "fixed",
            background: tokens.gradients["row-activated-loud-reverse"]
          },
          "& tr.Mui-selected": {
            backgroundColor: tokens.colors["row-selected-loud"]
          },
          "& tr.Mui-selected.DhigTableRow--enableInteractions": {
            "&:hover": {
              borderRadius: primitives.borderRadii.medium,
              background: tokens.gradients["row-selected-hover-loud"],
              backgroundAttachment: "fixed",
              boxShadow: tokens.effects["hover-halo-inwards"]
            },
            "&:active": {
              borderRadius: primitives.borderRadii.medium,
              background: tokens.gradients["row-selected-pressed-loud"],
              backgroundAttachment: "fixed",
              boxShadow: `${tokens.effects["halo-pressed"]} inset`
            }
          },
          "& [class*='MuiAvatar-root']": {
            height: "36px",
            width: "36px"
          },
          "& tr.DhigTableRow--highlighted": {
            backgroundColor: tokens.colors["row-highlighted"]
          },
          "& tr.DhigTableRow--highlighted.DhigTableRow--enableInteractions": {
            "&:hover": {
              backgroundAttachment: "fixed",
              background: tokens.gradients["row-highlighted-hover-loud"],
              borderRadius: primitives.borderRadii.medium,
              boxShadow: tokens.effects["hover-halo-inwards"]
            },
            "&:active": {
              backgroundAttachment: "fixed",
              background: tokens.gradients["row-highlighted-pressed-loud"],
              borderRadius: primitives.borderRadii.medium,
              boxShadow: `${tokens.effects["halo-pressed"]} inset`
            }
          },
          "& tr.Mui-selected.DhigTableRow--highlighted": {
            backgroundColor: tokens.colors["row-highlighted-selected-loud"]
          },
          "& tr.Mui-selected.DhigTableRow--highlighted.DhigTableRow--enableInteractions":
            {
              "&:hover": {
                backgroundAttachment: "fixed",
                background:
                  tokens.gradients["row-highlighted-selected-hover-loud"],
                borderRadius: primitives.borderRadii.medium,
                boxShadow: tokens.effects["hover-halo-inwards"]
              },
              "&:active": {
                backgroundAttachment: "fixed",
                background:
                  tokens.gradients["row-highlighted-selected-pressed-loud"],
                borderRadius: primitives.borderRadii.medium,
                boxShadow: `${tokens.effects["halo-pressed"]} inset`
              }
            }
        },
        "&.DhigTable--bordered": {
          background: tokens.colors["fill-elevation-0"],
          boxShadow: tokens.effects["container-1"],
          borderRadius: primitives.borderRadii.large,
          "& tbody tr td:last-of-type": {
            padding: `${primitives.spacings[4]} ${primitives.spacings[3]} ${primitives.spacings[4]} 0`,
            width: primitives.spacings[6],
            textAlign: "right",
            "& svg": {
              fontSize: primitives.fontSizes[5]
            }
          },
          '& tbody tr td[class*="MuiTableCell-sizeSmall"]:last-of-type': {
            width: primitives.spacings[5],
            "& svg": {
              fontSize: primitives.fontSizes[4]
            }
          }
        }
      }
    }
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        position: "relative",
        border: 0,
        borderBottom: `${primitives.borderWidths.medium} solid ${tokens.colors["row-divider"]}`,
        "&.DhigTableRow--enableInteractions": {
          cursor: "pointer",
          "&:hover": {
            backgroundColor: tokens.colors["row-hover"],
            '& [class*="MuiTableCell-isEditing"] [class*="MuiInputBase-root"].Mui-disabled':
              {
                background: tokens.colors["fade-gradient-transparent"]
              }
          },
          "&:active": {
            backgroundColor: tokens.colors["row-pressed"]
          },
          "&:focus-visible": {
            boxShadow: `inset ${tokens.effects["focus-ring-thin"]}`
          },
          '&:hover:has(label[class*="MuiFormControlLabel-root"]:hover)': {
            boxShadow: "none",
            background: "initial"
          }
        },
        "&.DhigTableRow--highlighted": {
          backgroundColor: tokens.colors["row-highlighted"]
        },
        "&.DhigTableRow--highlighted.DhigTableRow--enableInteractions": {
          "&:hover": {
            backgroundColor: tokens.colors["row-highlighted-hover"]
          },
          "&:active": {
            backgroundColor: tokens.colors["row-highlighted-pressed"]
          }
        },
        "&.Mui-selected": {
          backgroundColor: tokens.colors["row-selected"],
          "&:hover": {
            backgroundColor: tokens.colors["row-selected"]
          }
        },
        "&.Mui-selected.DhigTableRow--enableInteractions": {
          "&:hover": {
            backgroundColor: tokens.colors["row-selected-hover"]
          },
          "&:active": {
            backgroundColor: tokens.colors["row-selected-pressed"]
          }
        },
        "&.Mui-selected.DhigTableRow--highlighted": {
          backgroundColor: tokens.colors["row-selected-highlighted"]
        },
        "&.Mui-selected.DhigTableRow--highlighted.DhigTableRow--enableInteractions":
          {
            "&:hover": {
              backgroundColor: tokens.colors["row-selected-highlighted-hover"]
            },
            "&:active": {
              backgroundColor:
                tokens.colors["row-highlighted-selected-pressed"]
            }
          },
        "&.DhigTableRow--activated": {
          background: tokens.gradients["row-activated-loud-reverse"],
          backgroundAttachment: "fixed",
          pointerEvents: "none",
          cursor: "default",
          '&:hover:has(label[class*="MuiFormControlLabel-root"]:hover)': {
            boxShadow: "none",
            background: tokens.gradients["row-activated-loud-reverse"],
            backgroundAttachment: "fixed"
          },
          "& td:last-of-type": {
            position: "relative",
            "&:after": {
              content: "''",
              background: tokens.colors["ink-on-background"],
              position: "absolute",
              right: primitives.spacings["0"],
              top: primitives.spacings["0"],
              bottom: primitives.spacings["0"],
              width: primitives.borderWidths["large"],
              display: "inline-block"
            }
          },
          '& > [class*="MuiTableCell-root"] > [class*="MuiCheckbox-root"], & > [class*="MuiTableCell-root"] > [class*="MuiFormControlLabel-root"]':
            {
              pointerEvents: "auto",
              cursor: "pointer"
            }
        },
        "&.DhigTableRow--activated.Mui-highlighted": {
          backgroundAttachment: "fixed",
          background:
            tokens.gradients["row-highlighted-activated-loud-reverse"]
        },
        "&.DhigTableRow--activated.Mui-selected": {
          background: tokens.gradients["row-selected-activated-loud-reverse"],
          backgroundAttachment: "fixed",
          '&:hover:has(label[class*="MuiFormControlLabel-root"]:hover)': {
            boxShadow: "none",
            background:
              tokens.gradients["row-selected-activated-loud-reverse"],
            backgroundAttachment: "fixed"
          }
        },
        "&.DhigTableRow--activated.Mui-selected.DhigTableRow--highlighted": {
          background:
            tokens.gradients[
              "row-highlighted-selected-activated-loud-reverse"
            ],
          backgroundAttachment: "fixed"
        }
      },
      head: {
        "&:hover": {
          backgroundColor: primitives.colors.detail.transparent
        }
      }
    }
  },
  MuiTableCell: {
    defaultProps: {
      tabIndex: 0
    },
    styleOverrides: {
      root: {
        lineHeight: primitives.spacings[5],
        fontSize: primitives.fontSizes[3],
        borderBottom: "none",
        color: tokens.colors["ink-on-background"],
        '&[class*="MuiTableCell-isEditing"]': {
          padding: "1px",
          '& .Mui-error[class*="MuiInput-underline"]:hover:not(.Mui-disabled):before':
            {
              boxShadow: tokens.effects["field-error"]
            },
          '& [class*="MuiFormHelperText-root"]': {
            marginBottom: primitives.spacings[1],
            "&.Mui-error": {
              display: "flex",
              alignItems: "center"
            }
          },
          "& [class*='MuiInputBase-root'][class*='MuiOutlinedInput-root']": {
            border: "1px solid transparent",
            "&:hover": {
              border: `1px solid ${tokens.colors["ink-hover"]}`
            },
            boxShadow: "none",
            background: tokens.colors["field-fill"],
            margin: "0",
            padding: "0",
            "& input[class*='MuiOutlinedInput']": {
              color: tokens.colors["ink-on-background"],
              fontSize: primitives.fontSizes[3],
              fontWeight: primitives.fontWeights.default,
              lineHeight: primitives.lineHeights.tight,
              height: primitives.spacings["5"],
              padding: primitives.spacings["4"],
              "&:focus, &:focus-visible": {
                boxShadow: `inset 0px 0px 0px 2px ${primitives.colors.accent.iris}`,
                outline: "none"
              }
            },
            "& input:active": {
              boxShadow: "none"
            },
            "&.Mui-error": {
              borderColor: "transparent",
              margin: 0,
              boxShadow: tokens.effects["field-error"],
              "& input:focus-visible": {
                boxShadow: `inset 0px 0px 0px 2px ${primitives.colors.accent.clay}`
              }
            },
            "&.Mui-disabled": {
              borderColor: "transparent"
            }
          },
          '& [class*="MuiInput-underline"]:before': {
            borderBottom: "none",
            top: primitives.spacings["0"],
            bottom: "-1px"
          },
          '& [class*="MuiInput-underline"]:after': {
            display: "none"
          },
          '& [class*="MuiInput-underline"]:hover:not(.Mui-disabled):before': {
            boxShadow: tokens.effects["hover-halo-inwards"]
          }
        },
        '&[class*="MuiTableCell-isEditing"][class*="MuiTableCell-alignRight"]':
          {
            '& [class*="MuiInputBase-input"]': {
              textAlign: "right"
            },
            '& [class*="MuiFormHelperText-root"]': {
              "&.Mui-error": {
                alignSelf: "end"
              }
            }
          },
        '&[class*="MuiTableCell-sizeSmall"]': {
          fontSize: primitives.fontSizes[2],
          '& [class*="MuiTableSortLabel-root"]': {
            fontSize: primitives.fontSizes[2]
          },
          "& [class*='MuiAvatar-root']": {
            height: primitives.spacings["7"],
            width: primitives.spacings["7"]
          }
        },
        '&[class*="MuiTableCell-head"]': {
          whiteSpace: "nowrap",
          lineHeight: primitives.spacings[5]
        },
        "&:focus-visible": {
          boxShadow: `0px 0px 0px 1px inset ${primitives.colors.accent.iris}`,
          outline: "none"
        }
      },
      paddingCheckbox: {
        padding: primitives.spacings["0"],
        backgroundAttachment: "fixed",
        '& label[class*="MuiFormControlLabel-root"]': {
          margin: primitives.spacings["0"],
          position: "relative",
          zIndex: 2,
          '& [class*="MuiCheckbox-root"] [class*="MuiSvgIcon-root"]': {
            margin: `${primitives.spacings["2"]} ${primitives.spacings["4"]}`
          },
          '& [class*="MuiFormControlLabel-label"]': {
            display: "none"
          }
        }
      }
    }
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        "& tr": {
          borderBottom: `${primitives.borderWidths.medium} solid ${tokens.colors["divider-1"]}`,
          "&:hover": {
            background: primitives.colors.detail.transparent
          },
          '& th.DhigTableHead--cell[class*="MuiTableCell-sizeSmall"]': {
            padding: `${primitives.spacings[3]} ${primitives.spacings[4]}`
          },
          '& th.DhigTableHead--cell--sort[class*="MuiTableCell-alignRight"]':
            {
              '& [class*="MuiTableSortLabel-root"]': {
                "& svg[class*='MuiSvgIcon-root']": {
                  paddingLeft: primitives.spacings["0"],
                  paddingRight: "2px"
                }
              }
            },
          "& th.DhigTableHead--cell--sort": {
            position: "relative",
            border: 0,
            cursor: "pointer",
            "&::before": {
              display: "block",
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              content: '""'
            },
            "&:hover": {
              backgroundColor: tokens.colors["hover-fill-subtle"],
              '& [class*="MuiTableSortLabel-root"]': {
                "& svg[class*='MuiSvgIcon-root']": {
                  opacity: tokens.opacities.disabled
                }
              },
              '& [class*="MuiTableSortLabel-root"][class*="Mui-active"]': {
                "& svg[class*='MuiSvgIcon-root']": {
                  opacity: tokens.opacities.default
                }
              }
            },
            "&:active": {
              backgroundColor: tokens.colors["pressed-fill-subtle"]
            },
            "&:focus-within": {
              "&::before": {
                boxShadow: `inset ${tokens.effects["focus-ring-thin"]}`
              }
            }
          },
          "& th.DhigTableHead--cell--enableSelect": {
            padding: primitives.spacings["0"],
            "& label.DhigTableHead--checkbox": {
              margin: primitives.spacings["0"],
              '& [class*="MuiCheckbox-root"]': {
                margin: primitives.spacings["4"]
              },
              '& [class*="MuiFormControlLabel-label"]': {
                display: "none"
              }
            }
          },
          "& th.DhigTableHead--cell": {
            padding: `18px ${primitives.spacings["4"]}`,
            '& [class*="MuiTableSortLabel-root"]': {
              cursor: "default",
              "& svg[class*='MuiSvgIcon-root']": {
                opacity: tokens.opacities.hidden
              }
            }
          }
        }
      }
    }
  },
  MuiTableSortLabel: {
    styleOverrides: {
      root: {
        ...tokens.typography["headline-smaller"],
        color: tokens.colors["ink-on-background"],
        pointerEvents: "none",
        "&:hover, :focus": {
          color: tokens.colors["ink-on-background"]
        },
        "&:hover": {
          "& svg[class*='MuiSvgIcon-root']": {
            opacity: tokens.opacities.disabled
          }
        },
        "&.Mui-active": {
          color: tokens.colors["ink-on-background"],
          "& svg[class*='MuiSvgIcon-root']": {
            opacity: tokens.opacities.default
          }
        },
        "& svg[class*='MuiSvgIcon-root']": {
          fontSize: primitives.fontSizes[4],
          paddingLeft: "2px",
          opacity: tokens.opacities.hidden
        }
      }
    }
  }
});
