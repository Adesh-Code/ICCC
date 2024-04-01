export const makeFormControlStyles = ({ primitives, tokens }) => ({
    MuiFormControl: {
        styleOverrides: {
            root: {
                '& label + [class*="MuiInput-formControl"]': {
                    marginTop: 0
                },
                "& legend": {
                    marginBottom: primitives.spacings["3"],
                    fontSize: primitives.fontSizes["1"],
                    color: tokens.colors["ink-on-background"]
                },
                "& .DhigTextInput--count": {
                    color: tokens.colors["ink-on-background-60"],
                    fontSize: primitives.fontSizes["1"],
                    textAlign: "right",
                    margin: `${primitives.spacings["2"]} ${primitives.spacings["0"]}`
                },
                "& [class*='MuiFormLabel-colorSuccess'] + * + [class*='MuiFormHelperText-root']": {
                    color: tokens.colors["ink-on-background"],
                    fontWeight: primitives.fontWeights.stout
                },
                "& [class*='MuiInputLabel-root'].Mui-focused": {
                    color: tokens.colors["ink-on-background"]
                }
            }
        }
    }
});
