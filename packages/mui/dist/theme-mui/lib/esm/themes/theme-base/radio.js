export const makeRadioStyles = ({ primitives, tokens }) => ({
    MuiRadio: {
        styleOverrides: {
            root: {
                fontSize: "inherit",
                padding: `${primitives.spacings["0"]}px`,
                margin: `${primitives.spacings["2"]} 0`,
                borderRadius: primitives.borderRadii.round,
                "&:hover": {
                    outline: `${primitives.borderWidths.medium} solid ${tokens.colors["ink-hover"]}`
                },
                "&:focus, &.Mui-focusVisible": {
                    outline: `${primitives.borderWidths.large} solid ${tokens.colors["ink-focus"]}`,
                    outlineOffset: primitives.borderWidths.medium
                },
                "&:active": {
                    outline: `${primitives.borderWidths.large} solid ${tokens.colors["fill-success"]}`
                },
                '& + [class*="MuiFormControlLabel-label"]': {
                    color: tokens.colors["ink-on-background"],
                    paddingLeft: primitives.spacings["3"],
                    fontSize: primitives.fontSizes["3"],
                    lineHeight: "1.25" //primitives.lineHeights.compact
                },
                '& [class*="MuiSvgIcon-root"]': {
                    width: "20px",
                    height: "20px",
                    color: tokens.colors["ink-on-background"]
                },
                "& .DhigRadio--icon--inner": {
                    width: "10px",
                    height: "10px",
                    position: "absolute"
                },
                '&[class*="MuiRadio-colorSecondary"]:hover, &[class*="MuiRadio-colorSecondary"].Mui-checked:hover': {
                    backgroundColor: tokens.colors.background
                }
            }
        }
    }
});
