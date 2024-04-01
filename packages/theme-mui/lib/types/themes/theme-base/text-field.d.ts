import type { ThemeData } from "../../types";
export declare const makeTextFieldStyles: ({ primitives, tokens }: ThemeData) => {
    MuiTextField: {
        styleOverrides: {
            root: {
                "& [class*='MuiInputBase-root'][class*='MuiOutlinedInput-root']": {
                    "&.Mui-focused": {
                        border: string;
                        boxShadow: string;
                    };
                    "&:hover": {
                        borderBottom: string;
                    };
                    "&:focus-within": {
                        border: string;
                        boxShadow: string;
                    };
                    "&.Mui-error": {
                        boxShadow: string;
                        border: string;
                        "&:hover": {
                            borderBottomColor: string;
                            "&.Mui-focused": {
                                boxShadow: string;
                                border: string;
                            };
                        };
                    };
                    "&.Mui-disabled": {
                        borderBottomColor: string;
                    };
                    "& [class*='MuiOutlinedInput-input']": {
                        "&::placeholder": {
                            fontFamily: string;
                            fontSize: string;
                            fontWeight: number;
                            letterSpacing: string;
                            lineHeight: string;
                        };
                        "&.Mui-disabled": {
                            WebkitTextFillColor: string;
                        };
                        "&::selection": {
                            background: string;
                        };
                        "&::-moz-selection": {
                            background: string;
                        };
                        fontFamily: string;
                        fontSize: string;
                        fontWeight: number;
                        letterSpacing: string;
                        lineHeight: string;
                        padding: string;
                    };
                    '& [class*="MuiInputAdornment-positionEnd"]': {
                        marginLeft: string;
                        marginRight: string;
                        "& [class*='MuiButtonBase-root'][class*='MuiIconButton-root']": {
                            "&:active": {
                                backgroundColor: string;
                            };
                            "&.Mui-focusVisible": {
                                boxShadow: string;
                            };
                            height: string;
                            marginRight: string;
                            padding: string;
                            width: string;
                            "& svg": {
                                color: string;
                                height: string;
                                width: string;
                            };
                        };
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    border: string;
                    borderRadius: number;
                    paddingRight: string;
                };
            };
        };
    };
};
//# sourceMappingURL=text-field.d.ts.map