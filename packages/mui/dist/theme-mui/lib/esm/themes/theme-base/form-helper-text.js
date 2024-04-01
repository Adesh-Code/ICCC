export const makeFormHelperTextStyles = ({ primitives, tokens }) => ({
    MuiFormHelperText: {
        styleOverrides: {
            root: Object.assign(Object.assign({ marginTop: primitives.spacings["1"], color: tokens.colors["ink-on-background-60"] }, tokens.typography["short-copy-small"]), { display: "flex", alignItems: "flex-start", "& > svg": {
                    paddingRight: primitives.spacings["1"]
                }, "&.Mui-error": {
                    fontWeight: primitives.fontWeights.stout,
                    opacity: 1
                } }),
            contained: {
                marginLeft: 0,
                marginRight: 0
            }
        }
    }
});
