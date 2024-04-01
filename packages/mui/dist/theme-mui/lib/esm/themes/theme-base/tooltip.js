const msToNumber = (ms) => parseInt(ms.slice(0, -2));
export const makeTooltipStyles = ({ primitives, tokens }) => {
    const { duration, easing } = primitives.transitions;
    return {
        MuiTooltip: {
            defaultProps: {
                TransitionProps: {
                    timeout: {
                        enter: msToNumber(duration[1]),
                        exit: msToNumber(duration[4])
                    },
                    easing: {
                        enter: easing["slow-down"],
                        exit: easing["speed-up"]
                    }
                }
            },
            styleOverrides: {
                popper: {
                    '& [class*="MuiTooltip-arrow"]': {
                        fontSize: primitives.spacings[2],
                        "&::before": {
                            backgroundColor: tokens.colors["detail-2-opaque"]
                        }
                    },
                    '& [class*="MuiTooltip-tooltip"]': Object.assign({ backgroundColor: tokens.colors["detail-2-opaque"], padding: `${primitives.spacings["2"]} ${primitives.spacings["3"]}`, color: tokens.colors["ink-on-fill-primary"], display: "flex", flexDirection: "column", alignItems: "flex-start", borderRadius: primitives.borderRadii.small, '& [class*="MuiTypography-root"]': {
                            color: tokens.colors["ink-on-fill-primary"]
                        }, ".MuiDivider-root": {
                            marginTop: primitives.spacings["2"],
                            marginBottom: primitives.spacings["2"]
                        } }, tokens.typography.smallprint)
                }
            }
        }
    };
};
