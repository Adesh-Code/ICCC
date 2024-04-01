export const makeSnackbarStyles = ({ primitives, tokens }) => ({
    MuiSnackbar: {
        defaultProps: {
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "center"
            }
        },
        styleOverrides: {
            anchorOriginBottomCenter: {
                [`@media (min-width: ${primitives.grid.scale["0"]})`]: {
                    bottom: primitives.spacings["0"]
                }
            },
            anchorOriginTopRight: {
                [`@media (min-width: ${primitives.grid.scale["0"]})`]: {
                    top: primitives.spacings["0"],
                    right: primitives.spacings["0"]
                }
            }
        }
    },
    MuiSnackbarContent: {
        styleOverrides: {
            root: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: tokens.colors["fill-elevation-0"],
                backgroundImage: "none",
                boxShadow: tokens.effects["elevation-0-popover"],
                padding: `${primitives.spacings["2"]} ${primitives.spacings["2"]} ${primitives.spacings["2"]} ${primitives.spacings["3"]}`,
                minWidth: "320px",
                minHeight: "36px",
                margin: `${primitives.spacings["2"]} ${primitives.spacings["2"]} ${primitives.spacings["4"]}`,
                // Not addding theming for breakpoints; this is only to override the MUI default.
                [`@media (min-width: ${primitives.grid.scale["3"]})`]: {
                    minWidth: "320px"
                }
            },
            message: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: `${primitives.spacings["0"]}px`,
                marginRight: primitives.spacings["6"],
                '& [class*="MuiSvgIcon-root"]': {
                    marginRight: primitives.spacings["4"],
                    fontSize: primitives.fontSizeFallbacks["5"]
                },
                '& > [class*="MuiTypography-root"]': {
                    minWidth: "140px",
                    maxWidth: "250px",
                    '& [class*="MuiLink"]': {
                        cursor: "pointer"
                    }
                },
                '& > [class*="MuiContainer-root"]': {
                    display: "flex",
                    padding: `${primitives.spacings["0"]}px`,
                    '& [class*="MuiContainer-root"]': {
                        minWidth: "140px",
                        maxWidth: "250px",
                        padding: `${primitives.spacings["0"]}px`,
                        marginLeft: primitives.spacings["0"],
                        '& [class*="MuiTypography-root"] + [class*="MuiTypography-root"]': {
                            cursor: "pointer",
                            marginTop: primitives.spacings["2"]
                        }
                    }
                },
                [`@media (max-width: ${primitives.grid.scale["3"]})`]: {
                    minWidth: "320px",
                    justifyContent: "flex-start"
                }
            },
            action: {
                margin: "unset",
                padding: "unset",
                alignSelf: "flex-start",
                '&:not(:has( > [class*="MuiSvgIcon-root"]))': {
                    marginRight: primitives.spacings["2"],
                    alignSelf: "center"
                },
                [`@media (max-width: ${primitives.grid.scale["3"]})`]: {
                    paddingLeft: "40px"
                },
                '& [class*="MuiSvgIcon-root"]': Object.assign(Object.assign({ backgroundColor: tokens.colors["fill-elevation-0"], boxShadow: "none", cursor: "pointer", fontSize: primitives.fontSizeFallbacks["4"] }, tokens.transitions["state-blur"]), { padding: `6px`, borderRadius: primitives.borderRadii["medium"], border: `${primitives.borderWidths.large} solid ${tokens.colors["fade-gradient-transparent"]}`, "&:hover": Object.assign({ backgroundColor: tokens.colors["activated-fill-subtle"] }, tokens.transitions["state-activate"]), "&:active": Object.assign({ backgroundColor: tokens.colors["activated-hover-fill-subtle"] }, tokens.transitions["state-activate"]), "&:focus": {
                        outline: "none"
                    }, "&:focus-visible": Object.assign(Object.assign({ border: `${primitives.borderWidths.large} solid ${primitives.colors.accent.iris}` }, tokens.transitions["state-activate"]), { "&:hover, &:active": {
                            backgroundColor: tokens.colors["fill-elevation-0"]
                        } }), [`@media (max-width: ${primitives.grid.scale["3"]})`]: {
                        position: "absolute",
                        right: primitives.spacings["4"],
                        top: primitives.spacings["4"]
                    } }),
                '& [class*="MuiTypography-root"] [class*="MuiLink"]': {
                    cursor: "pointer"
                },
                '& [class*="MuiTypography-root"] + [class*="MuiSvgIcon-root"]': {
                    marginLeft: primitives.spacings["3"]
                }
            }
        }
    }
});
