import type { ThemeData } from "../../types";
export declare const makeToggleButtonGroupStyles: ({ primitives, tokens }: ThemeData) => {
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: {
                backgroundColor: string;
                outline: string;
                outlineOffset: string;
                borderRadius: string;
                padding: number;
                '& [class*="MuiToggleButtonGroup-grouped"]': {
                    textTransform: string;
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    "&:not(:last-of-type)": {
                        marginLeft: number;
                        border: string;
                        borderRadius: string;
                        "&:after": {
                            content: string;
                            borderLeft: string;
                            height: string;
                            position: string;
                            right: string;
                            zIndex: number;
                        };
                        "&:focus-visible": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            border: string;
                            "&:after": {
                                height: number;
                                borderLeft: string;
                            };
                        };
                        "&:active": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            "&:after": {
                                borderLeft: string;
                                height: string;
                            };
                        };
                        "&:hover": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                        };
                        "&.Mui-selected": {
                            borderRadius: string;
                            boxShadow: string;
                            border: string;
                            "&:after": {
                                height: number;
                                borderLeft: string;
                            };
                            "&:focus-visible": {
                                transitionTimingFunction: string;
                                transitionDuration: string;
                                boxShadow: string;
                            };
                            "&:active": {
                                transitionTimingFunction: string;
                                transitionDuration: string;
                                boxShadow: string;
                            };
                        };
                    };
                    "&:not(:first-of-type)": {
                        marginLeft: number;
                        border: string;
                        borderRadius: string;
                        "&:focus-visible": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            border: string;
                            "&:after": {
                                height: number;
                                borderLeft: string;
                            };
                        };
                        "&:active": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            "&:after": {
                                borderLeft: string;
                                height: string;
                            };
                        };
                        "&:hover": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                        };
                        "&.Mui-selected": {
                            borderRadius: string;
                            boxShadow: string;
                            border: string;
                            "&:after": {
                                height: number;
                                borderLeft: string;
                            };
                            "&:focus-visible": {
                                transitionTimingFunction: string;
                                transitionDuration: string;
                                boxShadow: string;
                            };
                            "&:active": {
                                transitionTimingFunction: string;
                                transitionDuration: string;
                                boxShadow: string;
                            };
                        };
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=toggle-button-group.d.ts.map