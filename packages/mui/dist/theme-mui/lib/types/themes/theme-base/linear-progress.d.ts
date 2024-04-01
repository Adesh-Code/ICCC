import type { ThemeData } from "../../types";
export declare const makeLinearProgressStyles: ({ primitives, tokens }: ThemeData) => {
    MuiLinearProgress: {
        defaultProps: {
            variant: string;
            value: number;
        };
        styleOverrides: {
            root: {
                height: string;
                "&.DhigLinearProgress--size--small": {
                    height: string;
                };
                "& + .DhigLinearProgressLabel": {
                    display: string;
                    justifyContent: string;
                    marginTop: string;
                };
            };
            colorPrimary: {
                backgroundColor: string;
            };
            barColorPrimary: {
                backgroundColor: string;
            };
            bar1Indeterminate: {
                animation: string;
            };
            bar2Indeterminate: {
                animation: string;
                opacity: number;
            };
        };
    };
};
//# sourceMappingURL=linear-progress.d.ts.map