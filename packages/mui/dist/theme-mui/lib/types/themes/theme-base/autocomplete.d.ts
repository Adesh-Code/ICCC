import React from "react";
import type { ThemeData } from "../../types";
export declare const makeAutocompleteStyles: ({ primitives, tokens }: ThemeData) => {
    MuiAutocomplete: {
        defaultProps: {
            clearIcon: React.JSX.Element;
            componentsProps: {
                clearIndicator: {
                    tabIndex: number;
                };
            };
        };
        styleOverrides: {
            root: {
                '&[class*="DhigCombobox"]': {
                    '&[class*="MuiAutocomplete-hasPopupIcon"]': {
                        '& [class*="MuiAutocomplete-inputRoot"]': {
                            paddingRight: string;
                        };
                    };
                    '& [class*="DhigCombobox--textField"]': {
                        '& [class*="DhigCombobox--input"][class*="MuiInputBase-inputAdornedEnd"]': {
                            padding: string;
                        };
                    };
                };
                '& [class*="DhigCombobox--textField"]': {
                    '& [class*="MuiInput-root"]': {
                        display: string;
                        flexWrap: string;
                        paddingRight: string;
                    };
                    '& [class*="MuiAutocomplete-endAdornment"]': {
                        display: string;
                        flexDirection: string;
                        marginRight: string;
                        top: string;
                        right: string;
                        minWidth: string;
                        gap: string;
                        "& button": {
                            color: string;
                        };
                    };
                };
                '& [class*="DhigCombobox--input"]': {};
                '&[class*="DhigCombobox--multiple"]': {
                    '& [class*="DhigCombobox--textField"]': {
                        '& [class*="MuiInput-root"]': {
                            paddingLeft: string;
                            paddingBottom: string;
                            minHeight: string;
                            '& [class*="MuiChip-root"]': {
                                margin: string;
                            };
                        };
                    };
                };
                '&[class*="DhigCombobox--layout--grow"]': {
                    '& [class*="DhigCombobox--textField"]': {
                        maxHeight: string;
                        '& [class*="MuiInput-root"]': {
                            '&[class*="MuiInputBase-root"]': {
                                "&.Mui-focused:not(.Mui-disabled):before": {
                                    boxShadow: string;
                                };
                            };
                            overflow: string;
                            paddingRight: string;
                            "&::before": {
                                borderBottom: string;
                            };
                            "&::after": {
                                borderBottom: string;
                            };
                            "&:hover": {
                                "&::before": {
                                    boxShadow: string;
                                };
                            };
                            '& [class*="DhigCombobox--input"]': {
                                flexBasis: string;
                                padding: string;
                                margin: string;
                                flexGrow: string;
                                transform: string;
                                "&:focus": {
                                    minWidth: string;
                                };
                            };
                        };
                    };
                };
                '&[class*="DhigCombobox--layout--fixed"]': {
                    '& [class*="DhigCombobox--textField"]': {
                        '& [class*="MuiInput-root"]': {
                            flexWrap: string;
                            paddingTop: string;
                            '& [class*="MuiChip-root"]': {
                                marginTop: string;
                            };
                            '& [class*="DhigCombobox--input"]': {
                                padding: string;
                                marginLeft: string;
                            };
                        };
                    };
                };
                '&[class*="DhigSearch"]': {};
                '& [class*="DhigSearch--textField"]': {
                    backgroundColor: string;
                    borderRadius: string;
                    height: string;
                    '& [class*="MuiAutocomplete-inputRoot"]': {
                        "&.Mui-focused": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            border: string;
                        };
                        "&.Mui-disabled": {
                            '& [class*="MuiInputAdornment-root"]': {
                                opacity: number;
                            };
                            pointerEvents: string;
                            color: string;
                        };
                        "&:focus, &:focus:active": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            border: string;
                        };
                        "&:active": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            border: string;
                        };
                        "&:hover, &.Mui-focused:not(:hover)": {
                            '&[class*="MuiInput-root"]': {
                                boxShadow: string;
                            };
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        '& [class*="MuiInputAdornment-root"]': {
                            width: string;
                            paddingLeft: string;
                            paddingRight: string;
                            marginRight: string;
                            '& [class*="MuiSvgIcon-root"]': {
                                height: string;
                                width: string;
                            };
                        };
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        borderRadius: string;
                        border: string;
                        boxShadow: string;
                        flexWrap: string;
                        height: string;
                    };
                    '& [class*="DhigSearch--input"]': {
                        padding: string;
                    };
                    '& [class*="MuiAutocomplete-endAdornment"]': {
                        top: string;
                        marginRight: string;
                    };
                };
                '& [class*="DhigSearch--input"]': {};
                '& [class*="MuiTextField-root"]': {
                    minHeight: string;
                    '& [class*="MuiInput-root"]': {
                        paddingBottom: string;
                        color: string;
                        '& [class*="MuiAutocomplete-endAdornment"]': {
                            '& [class*="MuiAutocomplete-clearIndicator"]': {
                                visibility: string;
                                opacity: number;
                                '& [class*="MuiSvgIcon-root"]': {
                                    color: string;
                                };
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
                                "&:focus, &:focus-visible": {
                                    "&:hover, &:active": {
                                        backgroundColor: string;
                                    };
                                    transitionTimingFunction: string;
                                    transitionDuration: string;
                                    outline: string;
                                    boxShadow: string;
                                };
                            };
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            height: string;
                            width: string;
                        };
                    };
                    "&:hover, &:focus-within": {
                        '& [class*="MuiAutocomplete-endAdornment"]': {
                            '& [class*="MuiAutocomplete-clearIndicator"]': {
                                opacity: number;
                            };
                        };
                    };
                };
                "& [class*='MuiTextField-root']": {
                    "& [class*='MuiInput-root']": {
                        "& [class*='MuiAutocomplete-endAdornment']": {
                            minHeight: string;
                            top: string;
                            maxHeight: string;
                            height: string;
                            display: string;
                            alignItems: string;
                            "& [class*='MuiButtonBase-root']": {
                                height: string;
                            };
                        };
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=autocomplete.d.ts.map