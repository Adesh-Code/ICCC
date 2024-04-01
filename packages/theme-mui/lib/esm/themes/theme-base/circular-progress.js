export const makeCircularProgressStyles = ({ primitives, tokens }) => ({
    MuiCircularProgress: {
        defaultProps: {
            variant: "indeterminate",
            value: 0
        },
        styleOverrides: {
            root: {
                "&.DhigCircularProgress--background": {
                    color: tokens.colors["detail-1-40-transparent"]
                },
                "&.DhigCircularProgress--foreground": {
                    color: tokens.colors["ink-on-background"],
                    position: "absolute",
                    left: 0
                },
                "&.DhigCircularProgress--size--x-small": {
                    width: "14px",
                    height: "14px",
                    '& svg [class*="MuiCircularProgress-circle"]': {
                        strokeWidth: "4.4"
                    }
                },
                "&.DhigCircularProgress--size--small": {
                    width: primitives.spacings["6"],
                    height: primitives.spacings["6"],
                    '& svg [class*="MuiCircularProgress-circle"]': {
                        strokeWidth: "3.5"
                    }
                },
                "&.DhigCircularProgress--size--medium": {
                    width: primitives.spacings["8"],
                    height: primitives.spacings["8"],
                    '& svg [class*="MuiCircularProgress-circle"]': {
                        strokeWidth: "2.6"
                    }
                },
                "&.DhigCircularProgress--size--large": {
                    width: "112px",
                    height: "112px",
                    '& svg [class*="MuiCircularProgress-circle"]': {
                        strokeWidth: "1.2"
                    }
                }
            },
            circleIndeterminate: {
                animation: `MuiCircularProgress-keyframes-circular-dash 7200ms ease-in-out infinite`
            },
            indeterminate: {
                animation: `MuiCircularProgress-keyframes-circular-rotate 2.4s linear infinite`
            }
        }
    }
});
