import type { ThemeData } from "../../types";
export declare const makeButtonStyles: ({ primitives, tokens }: ThemeData) => {
    MuiButtonBase: {
        defaultProps: {
            disableRipple: boolean;
        };
    };
    MuiButton: {
        defaultProps: {
            variant: string;
        };
        styleOverrides: {
            outlined: any;
            outlinedSizeSmall: any;
            contained: any;
            containedSizeSmall: any;
            text: any;
            textSizeSmall: any;
            startIcon: {
                "& svg": {
                    color: string;
                };
            };
            endIcon: {
                "& svg": {
                    color: string;
                };
            };
            iconSizeMedium: {
                "& > *:first-of-type": {
                    fontSize: string;
                };
            };
            root: {
                '& [class*="MuiTouchRipple-root"]': {
                    display: string;
                };
                "&:has([class*='MuiButton-endIcon'])": {
                    textAlign: string;
                };
                "&:has([class*='MuiButton-startIcon'])": {
                    textAlign: string;
                };
                "&[class*='MuiButton-link-button']": any;
                "&[class*='MuiButton-link-buttonSizeSmall']": any;
            };
        };
    };
    MuiLoadingButton: {
        defaultProps: {
            loadingPosition: string;
            variant: string;
        };
        styleOverrides: {
            root: {
                textAlign: string;
                "&[class*='MuiLoadingButton-loading']": {
                    opacity: string;
                };
                "&[class*='MuiButton-link-button'].Mui-disabled": {
                    padding: string;
                    opacity: string;
                };
                "&:has([class*='MuiLoadingButton-loadingIndicatorEnd'])": {
                    textAlign: string;
                };
                '& [class*="MuiLoadingButton-loadingIndicator"]': {
                    '& [class*="DhigCircularProgress--foreground"]': {
                        color: string;
                    };
                };
            };
            loadingIndicator: {
                position: string;
                marginTop: string;
                "& svg": {
                    color: string;
                };
            };
            loadingIndicatorStart: {
                marginRight: string;
                marginLeft: string;
            };
            loadingIndicatorEnd: {
                marginRight: string;
                marginLeft: string;
            };
        };
    };
};
//# sourceMappingURL=button.d.ts.map