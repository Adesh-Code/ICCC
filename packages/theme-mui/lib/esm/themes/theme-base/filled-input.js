export const makeFilledInputStyles = ({ primitives, tokens }) => ({
    MuiFilledInput: {
        styleOverrides: {
            root: {
                backgroundColor: tokens.colors.background,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                boxShadow: "none",
                "&:hover": {
                    backgroundColor: tokens.colors.background,
                    boxShadow: "none"
                },
                "&.Mui-focused": {
                    backgroundColor: tokens.colors.background,
                    boxShadow: "none"
                },
                '& + [class*="MuiFormHelperText-root"]': {
                    marginLeft: primitives.spacings["2"]
                },
                "&.Mui-error": {
                    marginLeft: 0,
                    '& div[class*="MuiFilledInput-input"]': {
                        borderRadius: `${primitives.borderRadii.medium} ${primitives.borderRadii.medium} 0 0`,
                        boxShadow: tokens.effects["field-error"],
                        padding: `calc(${primitives.spacings["3"]}/2) ${primitives.spacings["7"]} calc(${primitives.spacings["3"]}/2) ${primitives.spacings["2"]}`,
                        "&:focus": {
                            backgroundColor: tokens.colors.background
                        },
                        [`&:hover, &:active:not(.Mui-disabled), &[aria-expanded='true'][class*="MuiSelect-filled"]`]: {
                            "&:not(.Mui-disabled):not(:focus):not(:focus-visible)": {
                                borderBottom: `${primitives.borderWidths.medium} solid ${primitives.colors.detail.transparent}`,
                                "& + input + .MuiSelect-icon": {
                                    marginRight: primitives.spacings["1"]
                                }
                            }
                        }
                    }
                },
                '& [class*="MuiSelect-icon"], [class*="MuiNativeSelect-icon"]': {
                    color: tokens.colors["ink-on-background"],
                    marginRight: primitives.spacings["1"],
                    position: "absolute",
                    right: 0,
                    pointerEvents: "none"
                },
                '&:not(.Mui-disabled) [class*="MuiFilledInput-input"]:before': {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "block",
                    height: "100%",
                    content: "''",
                    position: "absolute"
                },
                '&[class*="MuiSelect-root"]:not(.Mui-disabled, .Mui-error):before': {
                    borderBottom: `${primitives.borderWidths.medium} solid ${primitives.colors.detail.transparent}`,
                    left: primitives.spacings["2"]
                },
                '&[class*="MuiSelect-root"]:hover:not(.Mui-disabled, .Mui-error):before': {
                    borderBottom: `${primitives.borderWidths.medium} solid ${tokens.colors["ink-hover"]}`
                }
            },
            input: {
                padding: `calc(${primitives.spacings["3"]}/2) ${primitives.spacings["2"]}`,
                borderBottom: `${primitives.borderWidths.medium} solid ${primitives.colors.detail.transparent}`,
                height: "auto",
                "&:focus, &:focus-visible": {
                    borderRadius: `${primitives.borderRadii.medium} ${primitives.borderRadii.medium} 0 0`,
                    boxShadow: tokens.effects["focus-ring-thin"],
                    backgroundColor: tokens.colors.background,
                    "&[aria-expanded='true']": {
                        boxShadow: "none"
                    }
                },
                "&[data-active='true']:not(.Mui-error)": {
                    borderBottom: `${primitives.borderWidths.large} solid ${tokens.colors["ink-focus"]}`
                }
            },
            underline: {
                borderBottom: 0,
                "&:hover:before": {
                    borderBottom: `${primitives.borderWidths.medium} solid ${tokens.colors["ink-hover"]}`,
                    left: primitives.spacings["2"]
                },
                "&:hover:focus-within:before": {
                    borderBottom: 0
                },
                "&:before, &:after, &.Mui-disabled:before, &.Mui-error:before, &:focus:before, &:focus-visible:before, &:active:before": {
                    borderBottom: 0
                }
            }
        }
    }
});
