export const makeFormGroupStyles = ({ primitives }) => ({
    MuiFormGroup: {
        styleOverrides: {
            root: {
                "& label": {
                    marginBottom: primitives.spacings[1]
                }
            }
        }
    }
});
