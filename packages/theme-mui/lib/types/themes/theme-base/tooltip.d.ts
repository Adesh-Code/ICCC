import type { ThemeData } from "../../types";
export declare const makeTooltipStyles: ({ primitives, tokens }: ThemeData) => {
    MuiTooltip: {
        defaultProps: {
            TransitionProps: {
                timeout: {
                    enter: number;
                    exit: number;
                };
                easing: {
                    enter: string;
                    exit: string;
                };
            };
        };
        styleOverrides: {
            popper: {
                '& [class*="MuiTooltip-arrow"]': {
                    fontSize: string;
                    "&::before": {
                        backgroundColor: string;
                    };
                };
                '& [class*="MuiTooltip-tooltip"]': {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: number;
                    letterSpacing: string;
                    lineHeight: string;
                    backgroundColor: string;
                    padding: string;
                    color: string;
                    display: string;
                    flexDirection: string;
                    alignItems: string;
                    borderRadius: string;
                    '& [class*="MuiTypography-root"]': {
                        color: string;
                    };
                    ".MuiDivider-root": {
                        marginTop: string;
                        marginBottom: string;
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=tooltip.d.ts.map