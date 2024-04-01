export const makeTextFieldStyles = ({ primitives, tokens }) => ({
    MuiTextField: {
        styleOverrides: {
            root: {
                "& [class*='MuiInputBase-root'][class*='MuiOutlinedInput-root']": Object.assign(Object.assign({ border: "1px solid transparent", borderRadius: 0, paddingRight: primitives.spacings["0"] }, tokens.transitions["state-activate"]), { "&.Mui-focused": {
                        border: `1px solid ${tokens.colors["ink-hover"]}`,
                        boxShadow: `0px -1px 0px 0px ${tokens.colors["ink-on-background"]} inset, 0px 0px 0px 1px ${tokens.colors["ink-hover"]} inset`
                    }, "&:hover": {
                        borderBottom: `1px solid ${tokens.colors["ink-hover"]}`
                    }, "&:focus-within": {
                        border: `1px solid ${tokens.colors["ink-hover"]}`,
                        boxShadow: `0px -1px 0px 0px ${tokens.colors["ink-on-background"]} inset, 0px 0px 0px 1px ${tokens.colors["ink-hover"]} inset`
                    }, "&.Mui-error": {
                        boxShadow: tokens.effects["field-error"],
                        border: `1px solid ${primitives.colors.detail.transparent}`,
                        "&:hover": {
                            borderBottomColor: primitives.colors.detail.transparent,
                            "&.Mui-focused": {
                                boxShadow: tokens.effects["field-error"],
                                border: `1px solid ${primitives.colors.detail.transparent}`
                            }
                        }
                    }, "&.Mui-disabled": {
                        borderBottomColor: primitives.colors.detail.transparent
                    }, "& [class*='MuiOutlinedInput-input']": Object.assign(Object.assign({ padding: `${primitives.spacings["2"]} ${primitives.spacings["0"]} ${primitives.spacings["2"]} ${primitives.spacings["3"]}` }, tokens.typography["input-value"]), { "&::placeholder": Object.assign({}, tokens.typography["short-copy-medium"]), "&.Mui-disabled": {
                            WebkitTextFillColor: tokens.colors["ink-on-background"]
                        }, "&::selection": {
                            background: tokens.colors["activated-hover-fill-subtle"]
                        }, "&::-moz-selection": {
                            background: tokens.colors["activated-hover-fill-subtle"]
                        } }), '& [class*="MuiInputAdornment-positionEnd"]': {
                        marginLeft: primitives.spacings["1"],
                        marginRight: primitives.spacings["1"],
                        "& [class*='MuiButtonBase-root'][class*='MuiIconButton-root']": {
                            "&:active": {
                                backgroundColor: tokens.colors["pressed-fill-subtle"]
                            },
                            "&.Mui-focusVisible": {
                                boxShadow: tokens.effects["focus-ring-thin"]
                            },
                            height: primitives.spacings["7"],
                            marginRight: primitives.spacings["0"],
                            padding: primitives.spacings["0"],
                            width: primitives.spacings["7"],
                            "& svg": {
                                color: tokens.colors["fill-primary"],
                                height: primitives.spacings["5"],
                                width: primitives.spacings["5"]
                            }
                        }
                    } })
            }
        }
    }
});
