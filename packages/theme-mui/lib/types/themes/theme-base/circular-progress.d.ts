import type { ThemeData } from "../../types";
export declare const makeCircularProgressStyles: ({ primitives, tokens }: ThemeData) => {
    MuiCircularProgress: {
        defaultProps: {
            variant: string;
            value: number;
        };
        styleOverrides: {
            root: {
                "&.DhigCircularProgress--background": {
                    color: string;
                };
                "&.DhigCircularProgress--foreground": {
                    color: string;
                    position: string;
                    left: number;
                };
                "&.DhigCircularProgress--size--x-small": {
                    width: string;
                    height: string;
                    '& svg [class*="MuiCircularProgress-circle"]': {
                        strokeWidth: string;
                    };
                };
                "&.DhigCircularProgress--size--small": {
                    width: string;
                    height: string;
                    '& svg [class*="MuiCircularProgress-circle"]': {
                        strokeWidth: string;
                    };
                };
                "&.DhigCircularProgress--size--medium": {
                    width: string;
                    height: string;
                    '& svg [class*="MuiCircularProgress-circle"]': {
                        strokeWidth: string;
                    };
                };
                "&.DhigCircularProgress--size--large": {
                    width: string;
                    height: string;
                    '& svg [class*="MuiCircularProgress-circle"]': {
                        strokeWidth: string;
                    };
                };
            };
            circleIndeterminate: {
                animation: string;
            };
            indeterminate: {
                animation: string;
            };
        };
    };
};
//# sourceMappingURL=circular-progress.d.ts.map