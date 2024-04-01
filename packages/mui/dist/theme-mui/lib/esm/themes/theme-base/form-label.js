export const makeFormLabelStyles = ({ tokens }) => ({
    MuiFormLabel: {
        styleOverrides: {
            root: {
                "&.Mui-error": {
                    color: tokens.colors["ink-on-background"]
                },
                "&.Mui-disabled": {
                    color: tokens.colors["ink-on-background"]
                }
            },
            asterisk: {
                display: "none"
            }
        }
    }
});
