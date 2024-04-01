import type { ThemeData } from "../../types";
export declare const makeInputStyles: ({ primitives, tokens }: ThemeData) => {
    MuiInput: {
        styleOverrides: {
            root: {
                fontWeight: number;
            };
            input: {
                "&::placeholder": {
                    fontWeight: number;
                };
            };
            underline: {
                '&[class*="MuiInputBase-root"]': {
                    marginTop: string;
                    padding: string;
                    "&:before": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        height: string;
                    };
                    "&:after": {
                        borderBottom: string;
                    };
                    "&.Mui-error:before": {
                        borderBottomWidth: string;
                    };
                    "&.Mui-error:after": {
                        borderBottomWidth: string;
                    };
                    "&.Mui-disabled": {
                        opacity: number;
                        pointerEvents: string;
                    };
                    "&:hover": {
                        '&[class*="MuiFilledInput-underline"]': {
                            boxShadow: string;
                        };
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        boxShadow: string;
                    };
                    "&:hover:not(.Mui-disabled):before": {
                        borderBottomWidth: string;
                        boxShadow: string;
                    };
                    "&.Mui-error, &.Mui-error:hover, &.Mui-focused.Mui-error": {
                        boxShadow: string;
                        '&[class*="MuiFilledInput-underline"]': {
                            boxShadow: string;
                        };
                    };
                    "&.Mui-error:hover:not(.Mui-disabled):before": {
                        boxShadow: string;
                    };
                    "&.Mui-focused, &:focus, &:focus-visible": {
                        boxShadow: string;
                        outline: string;
                        '&[class*="MuiFilledInput-underline"]': {
                            boxShadow: string;
                        };
                    };
                    "&.Mui-focused:not(.Mui-disabled):before, &:focus:not(.Mui-disabled):before, &:focus-visible:not(.Mui-disabled):before": {
                        borderBottomWidth: string;
                        boxShadow: string;
                    };
                    "&.Mui-error.Mui-focused:not(.Mui-disabled):before, &.Mui-error:focus:not(.Mui-disabled):before, &.Mui-error:focus-visible:not(.Mui-disabled):before": {
                        borderBottomWidth: string;
                        boxShadow: string;
                    };
                    '& + .DhigTextInput--count + [class*="MuiFormHelperText-root"]': {
                        marginTop: string;
                        paddingRight: string;
                    };
                    "&.Mui-error + .DhigTextInput--count": {
                        color: string;
                    };
                    "& + .DhigTextInput--count + .Mui-error": {
                        position: string;
                        paddingLeft: string;
                        '& [class*="MuiSvgIcon-root"]': {
                            position: string;
                            left: string;
                        };
                    };
                    "& + .Mui-error": {
                        position: string;
                        paddingLeft: string;
                        "& [class*='MuiSvgIcon-root']": {
                            position: string;
                            left: string;
                        };
                    };
                    '& [class*="MuiSelect-icon"]': {
                        color: string;
                        marginRight: string;
                        top: string;
                    };
                    '& [class*="MuiInputAdornment-root"]': {
                        width: string;
                        paddingLeft: number;
                        paddingRight: number;
                        "button svg[class*='MuiSvgIcon-root']": {
                            width: string;
                            height: string;
                            color: string;
                        };
                        '&[class*="MuiInputAdornment-positionStart"]': {
                            marginLeft: string;
                            marginRight: string;
                        };
                        '&[class*="MuiInputAdornment-positionEnd"]': {
                            marginLeft: string;
                            marginRight: string;
                            "& [class*='MuiButtonBase-root']": {
                                width: string;
                                height: string;
                            };
                        };
                    };
                    '&[class*="MuiInputBase-multiline"]': {
                        padding: string;
                    };
                    '& [class*="MuiInputBase-input"]': {
                        '&[class*="MuiInputBase-inputMultiline"]': {
                            padding: string;
                        };
                        '&[class*="MuiInputBase-inputAdornedStart"]': {
                            paddingLeft: string;
                            marginLeft: string;
                        };
                        '&[class*="MuiInputBase-inputAdornedEnd"]': {
                            paddingRight: string;
                            marginRight: string;
                        };
                        fontFamily: string;
                        fontSize: string;
                        fontWeight: number;
                        letterSpacing: string;
                        lineHeight: string;
                        padding: string;
                        color: string;
                        height: string;
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    boxShadow: string;
                    color: string;
                };
                "&.DhigNumberInput": {
                    paddingRight: string;
                    "& [type='number']": {
                        minWidth: string;
                        paddingRight: string;
                        marginRight: string;
                        appearance: string;
                        "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
                            appearance: string;
                        };
                        '& ~ [class*="MuiInputAdornment-root"][class*="MuiInputAdornment-positionEnd"]': {
                            borderRadius: string;
                            cursor: string;
                            height: string;
                            margin: string;
                            padding: string;
                            width: string;
                            "&:hover": {
                                backgroundColor: string;
                            };
                            "&:active": {
                                backgroundColor: string;
                            };
                            "&:focus-visible": {
                                boxShadow: string;
                                outline: string;
                                backgroundColor: string;
                            };
                            '[class*="MuiSvgIcon-root"]': {
                                cursor: string;
                                height: string;
                                width: string;
                            };
                        };
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=input.d.ts.map