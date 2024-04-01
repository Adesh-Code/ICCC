import type { ThemeData } from "../../types";
export declare const makeContainerStyles: ({ primitives }: Pick<ThemeData, "primitives">) => {
    MuiContainer: {
        styleOverrides: {
            root: {
                "&.DhigSplitButton--wrapper": {
                    position: string;
                    width: string;
                    margin: string;
                };
                "&.DhigCircularProgress--wrapper": {
                    width: string;
                    margin: string;
                    padding: string;
                    "& .DhigCircularProgress--container": {
                        justifyContent: string;
                        position: string;
                        padding: string;
                        width: string;
                        "& .DhigCircularProgress--label": {
                            display: string;
                            position: string;
                            wordBreak: string;
                            "&.DhigCircularProgress--label--medium": {
                                width: string;
                            };
                            "&.DhigCircularProgress--label--large": {
                                width: string;
                            };
                        };
                    };
                    "& .DhigCircularProgress--label--determinate": {
                        justifyContent: string;
                        padding: string;
                        "&.DhigCircularProgress--label--determinate--medium": {
                            marginTop: string;
                            marginLeft: string;
                        };
                        "&.DhigCircularProgress--label--determinate--notMedium": {
                            marginTop: string;
                            marginLeft: string;
                        };
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=container.d.ts.map