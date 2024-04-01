import type { ThemeData } from "../../types";
export declare const makeAlertStyles: ({ primitives, tokens }: ThemeData) => {
    MuiAlert: {
        defaultProps: {
            severity: string;
            variant: string;
            slots: {
                closeIcon: any;
            };
        };
        styleOverrides: {
            root: {
                padding: string;
                fontWeight: number;
                fontFamily: string;
                fontSize: string;
                letterSpacing: string;
                lineHeight: string;
                borderRadius: string;
                color: string;
            };
            standard: {
                '& [class*="MuiAlert-action"] > button > svg': {
                    color: string;
                };
                '& [class*="MuiAlert-action"] > button': {
                    "&:hover": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&:active": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    backgroundColor: string;
                };
            };
            standardInfo: {
                backgroundColor: string;
                '& [class*="MuiAlert-action"] > button': {
                    "&:focus-visible": {
                        boxShadow: string;
                    };
                };
            };
            standardError: {
                backgroundColor: string;
                '& [class*="MuiAlert-action"] > button': {
                    "&:focus-visible": {
                        boxShadow: string;
                    };
                };
            };
            standardSuccess: {
                backgroundColor: string;
                '& [class*="MuiAlert-action"] > button': {
                    "&:focus-visible": {
                        boxShadow: string;
                    };
                };
            };
            standardWarning: {
                backgroundColor: string;
                '& [class*="MuiAlert-action"] > button': {
                    "&:focus-visible": {
                        boxShadow: string;
                    };
                };
            };
            outlined: {
                padding: string;
                '& [class*="MuiAlert-action"] > button > svg': {
                    color: string;
                };
                '& [class*="MuiAlert-action"] > button': {
                    "&:hover": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&:active": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    backgroundColor: string;
                };
            };
            outlinedInfo: {
                border: string;
                backgroundColor: string;
                '& [class*="MuiAlert-action"] > button': {
                    "&:focus-visible": {
                        boxShadow: string;
                    };
                };
            };
            outlinedError: {
                border: string;
                backgroundColor: string;
                '& [class*="MuiAlert-action"] > button': {
                    "&:focus-visible": {
                        boxShadow: string;
                    };
                };
            };
            outlinedSuccess: {
                border: string;
                backgroundColor: string;
                '& [class*="MuiAlert-action"] > button': {
                    "&:focus-visible": {
                        boxShadow: string;
                    };
                };
            };
            outlinedWarning: {
                border: string;
                backgroundColor: string;
                '& [class*="MuiAlert-action"] > button': {
                    "&:focus-visible": {
                        boxShadow: string;
                    };
                };
            };
            filled: {
                '[class*="MuiAlert-icon"] svg': {
                    color: string;
                };
            };
            filledInfo: {
                backgroundColor: string;
                color: string;
                '& [class*="MuiAlert-action"] > button > svg': {
                    color: string;
                };
                '& [class*="MuiAlert-action"] > button': {
                    "&:hover": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&:active": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&:focus-visible": {
                        boxShadow: string;
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    backgroundColor: string;
                };
            };
            filledError: {
                backgroundColor: string;
                color: string;
                '& [class*="MuiAlert-action"] > button > svg': {
                    color: string;
                };
                '& [class*="MuiAlert-action"] > button': {
                    "&:hover": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&:active": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&:focus-visible": {
                        boxShadow: string;
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    backgroundColor: string;
                };
            };
            filledSuccess: {
                backgroundColor: string;
                color: string;
                '& [class*="MuiAlert-action"] > button > svg': {
                    color: string;
                };
                '& [class*="MuiAlert-action"] > button': {
                    "&:hover": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&:active": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&:focus-visible": {
                        boxShadow: string;
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    backgroundColor: string;
                };
            };
            filledWarning: {
                backgroundColor: string;
                color: string;
                '& [class*="MuiAlert-action"] > button > svg': {
                    color: string;
                };
                '& [class*="MuiAlert-action"] > button': {
                    "&:hover": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&:active": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&:focus-visible": {
                        boxShadow: string;
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    backgroundColor: string;
                };
            };
            action: {
                paddingLeft: string;
                "& button svg": {
                    height: string;
                    width: string;
                };
            };
            message: {
                lineHeight: string;
                margin: string;
                padding: string;
                paddingTop: string;
                overflow: string;
            };
            icon: {
                "& svg": {
                    height: string;
                    width: string;
                };
            };
        };
    };
    MuiAlertTitle: {
        styleOverrides: {
            root: {
                marginBottom: string;
                lineHeight: string;
                fontFamily: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: string;
                color: string;
            };
        };
    };
};
//# sourceMappingURL=alert.d.ts.map