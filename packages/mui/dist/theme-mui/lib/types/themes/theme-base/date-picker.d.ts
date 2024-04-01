import type { ThemeData } from "../../types";
export declare const makeDatePickerStyles: ({ primitives, tokens }: ThemeData) => {
    MuiDatePicker: {
        defaultProps: {
            reduceAnimations: boolean;
            slots: {
                openPickerIcon: any;
                leftArrowIcon: any;
                rightArrowIcon: any;
                switchViewIcon: any;
            };
            slotProps: {
                field: {
                    shouldRespectLeadingZeros: boolean;
                    sx: {
                        "& [class*='MuiOutlinedInput-input']": {
                            color: string;
                            "&::placeholder": {
                                color: string;
                            };
                        };
                    };
                };
                desktopTransition: {
                    easing: string;
                    timeout: number;
                };
            };
        };
    };
    MuiPickersCalendarHeader: {
        styleOverrides: {
            root: {
                "& [class*='MuiButtonBase-root']": {
                    "&:active": {
                        backgroundColor: string;
                    };
                    borderRadius: string;
                    "& svg": {
                        color: string;
                        height: string;
                        width: string;
                    };
                };
                "& [class*='MuiPickersArrowSwitcher-button']": {
                    "&:focus-visible": {
                        boxShadow: string;
                    };
                    "&.Mui-disabled": {
                        opacity: number;
                    };
                };
                "& [class*='MuiPickersArrowSwitcher-spacer']": {
                    width: string;
                };
                marginTop: string;
                paddingRight: string;
            };
            label: {
                fontWeight: number;
            };
            labelContainer: {
                padding: string;
            };
            switchViewButton: {
                "&:focus-visible": {
                    boxShadow: string;
                };
            };
        };
    };
    MuiDateCalendar: {
        styleOverrides: {
            root: {
                height: string;
                maxHeight: string;
            };
        };
    };
    MuiDayCalendar: {
        styleOverrides: {
            header: {
                paddingLeft: string;
                paddingRight: string;
            };
            monthContainer: {
                position: string;
                "&[class*='slideExit']": {
                    display: string;
                };
            };
            weekContainer: {
                padding: string;
                margin: string;
                "&:last-of-type": {
                    marginBottom: string;
                    paddingBottom: string;
                };
            };
            weekDayLabel: {
                fontFamily: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: string;
                lineHeight: string;
                color: string;
                margin: string;
            };
            slideTransition: {
                overflowX: string;
                minHeight: string;
            };
        };
    };
    MuiPickersDay: {
        styleOverrides: {
            root: {
                margin: string;
                marginLeft: string;
                "&.Mui-selected": {
                    fontWeight: number;
                    boxShadow: string;
                    "&:focus": {
                        boxShadow: string;
                    };
                    "&:not(:focus)": {
                        boxShadow: string;
                    };
                    "&:hover": {
                        boxShadow: string;
                    };
                    "&:active:focus": {
                        boxShadow: string;
                        backgroundColor: string;
                    };
                };
                "&:focus": {
                    backgroundColor: string;
                    boxShadow: string;
                };
                "&:focus:active": {
                    backgroundColor: string;
                    boxShadow: string;
                };
                fontFamily: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: string;
                lineHeight: string;
                color: string;
            };
            today: {
                border: string;
                "&:not(.Mui-selected)": {
                    border: string;
                    "&:focus": {
                        boxShadow: string;
                        backgroundColor: string;
                    };
                    "&:focus:active": {
                        backgroundColor: string;
                        boxShadow: string;
                    };
                };
            };
        };
    };
    MuiPickersYear: {
        styleOverrides: {
            yearButton: {
                "&.Mui-selected": {
                    "&:focus-visible": {
                        boxShadow: string;
                    };
                    "&:active:focus": {
                        boxShadow: string;
                    };
                    "&:hover": {
                        boxShadow: string;
                    };
                };
                "&:not(.Mui-selected)": {
                    "&:focus": {
                        backgroundColor: string;
                        boxShadow: string;
                    };
                    "&:active": {
                        backgroundColor: string;
                        boxShadow: string;
                    };
                };
                "&.Mui-disabled": {
                    color: string;
                };
            };
        };
    };
    MuiPickersPopper: {
        styleOverrides: {
            root: {
                borderTopLeftRadius: string;
                borderTopRightRadius: string;
                borderBottomLeftRadius: string;
                borderBottomRightRadius: string;
            };
            paper: {
                color: string;
                marginTop: string;
                borderTopLeftRadius: string;
                borderTopRightRadius: string;
                boxShadow: string;
            };
        };
    };
    MuiPickersLayout: {
        styleOverrides: {
            root: {
                "& [class*='MuiPickersLayout-contentWrapper']": {
                    overflowX: string;
                };
                "& [class*='MuiPickersArrowSwitcher-button']": {
                    color: string;
                    borderRadius: string;
                };
                "& [class*='MuiPickersLayout-toolbar']": {
                    "& [class*='MuiTypography-root']": {
                        color: string;
                    };
                    padding: string;
                };
                "& [class*='MuiPickersLayout-actionBar']": {
                    padding: string;
                    "& [class*='MuiButtonBase-root']:first-of-type": any;
                };
                margin: string;
            };
        };
    };
    MuiDateRangeCalendar: {
        styleOverrides: {
            monthContainer: {
                "& [class*='MuiDayCalendar-header']": {
                    justifyContent: string;
                };
            };
        };
    };
    MuiDateRangePickerDay: {
        styleOverrides: {
            rangeIntervalDayHighlight: {
                backgroundColor: string;
            };
            outsideCurrentMonth: {
                backgroundColor: string;
            };
        };
    };
};
//# sourceMappingURL=date-picker.d.ts.map