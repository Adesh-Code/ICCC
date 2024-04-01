import type { ThemeData } from "../../types";
export declare const makePopperStyles: ({ primitives, tokens }: ThemeData) => {
    MuiPopper: {
        styleOverrides: {
            root: {
                "&.DhigFlyout": {
                    background: string;
                    "&[class*='MuiTooltip-popper'][data-popper-placement*='top'] [class*='MuiTooltip-arrow']:before": {
                        boxShadow: string;
                    };
                    "&[class*='MuiTooltip-popper'][data-popper-placement*='top'] [class*='MuiTooltip-arrow']": {
                        marginBottom: string;
                        bottom: string;
                    };
                    "&[class*='MuiTooltip-popper'][data-popper-placement*='bottom'] [class*='MuiTooltip-arrow']": {
                        top: string;
                        marginTop: string;
                    };
                    "& [class*='MuiTooltip-tooltip']": {
                        background: string;
                        boxShadow: string;
                        padding: string;
                        borderRadius: string;
                        "& [class*='MuiTooltip-arrow']": {
                            fontSize: string;
                        };
                        "& [class*='MuiTooltip-arrow']:before": {
                            backgroundColor: string;
                            boxShadow: string;
                        };
                        "& [class*='MuiPaper-root']": {
                            boxShadow: string;
                            '& [class*="MuiList-root"][role="menu"]': {
                                outline: string;
                            };
                        };
                        "& [class*='MuiMenuItem-root']": {
                            padding: string;
                            "&:focus": {
                                backgroundColor: string;
                                padding: string;
                                "&.Mui-selected": {
                                    backgroundColor: string;
                                };
                            };
                            "& [class*='MuiSvgIcon-root']": {
                                position: string;
                                right: string;
                            };
                        };
                        "& [class*='MuiMenuItem-root']:active": {
                            background: string;
                        };
                    };
                };
                '&[class*="MuiAutocomplete-popper"]': {
                    '& [class*="MuiPaper-root"]': {
                        color: string;
                        boxShadow: string;
                        borderRadius: string;
                        margin: string;
                        backgroundColor: string;
                        '& [class*="MuiAutocomplete-noOptions"]': {
                            color: string;
                        };
                        '& [class*="MuiAutocomplete-listbox"]': {
                            '& [class*="MuiAutocomplete-option"]': {
                                '&[aria-selected="true"]': {
                                    backgroundColor: string;
                                };
                                '&[aria-disabled="true"]': {
                                    opacity: string;
                                    pointerEvents: string;
                                };
                                "&.Mui-focused:hover": {
                                    transitionTimingFunction: string;
                                    transitionDuration: string;
                                    backgroundColor: string;
                                };
                                "&.Mui-focused:active, &:active": {
                                    transitionTimingFunction: string;
                                    transitionDuration: string;
                                    backgroundColor: string;
                                };
                                "&.Mui-focused.Mui-focusVisible": {
                                    transitionTimingFunction: string;
                                    transitionDuration: string;
                                    boxShadow: string;
                                };
                                '& [class*="DhigCombobox--checkedIcon"]': {
                                    position: string;
                                    right: string;
                                };
                                '& [class*="MuiCheckbox-root"]': {
                                    marginRight: string;
                                };
                                transitionTimingFunction: string;
                                transitionDuration: string;
                                cursor: string;
                                display: string;
                                boxSizing: string;
                                alignItems: string;
                                padding: string;
                                justifyContent: string;
                            };
                            "& li": {
                                '[class*="MuiListSubheader-root"]': {
                                    borderTop: string;
                                    marginLeft: string;
                                    marginRight: string;
                                    background: string;
                                };
                                '&:first-of-type [class*="MuiListSubheader-root"]': {
                                    borderTop: string;
                                };
                            };
                        };
                        '& [class*="MuiListSubheader-root"]': {
                            backgroundColor: string;
                        };
                        '& [class*="DhigCombobox--addendum"]': {
                            padding: string;
                            fontFamily: string;
                            fontSize: string;
                            fontWeight: number;
                            letterSpacing: string;
                            lineHeight: string;
                            color: string;
                        };
                        fontFamily: string;
                        fontSize: string;
                        fontWeight: number;
                        letterSpacing: string;
                        lineHeight: string;
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=popper.d.ts.map