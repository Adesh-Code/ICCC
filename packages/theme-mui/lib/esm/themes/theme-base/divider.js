export const makeDividerStyles = ({ tokens }) => ({
    MuiDivider: {
        defaultProps: {
            light: true
        },
        styleOverrides: {
            root: {
                backgroundColor: tokens.colors["divider-1"]
            },
            light: {
                backgroundColor: tokens.colors["divider-0"]
            }
        }
    }
});
