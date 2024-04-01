import type { ThemeData } from "../../types";
export declare const makeStepperStyles: ({ primitives, tokens }: ThemeData) => {
    MuiStep: {
        styleOverrides: {
            root: {
                padding: string;
                '&[class*="Mui-completed"]': {
                    '& + [class*="MuiStepConnector-vertical"]': {
                        marginLeft: string;
                        '& [class*="MuiStepConnector-line"]': {
                            borderColor: string;
                            borderWidth: string;
                        };
                    };
                    '& + [class*="MuiStep-root"]': {
                        '& [class*="MuiStepConnector-horizontal"]': {
                            '& [class*="MuiStepConnector-line"]': {
                                borderColor: string;
                                borderWidth: string;
                                top: string;
                            };
                        };
                    };
                };
            };
            alternativeLabel: {
                '& [class*="MuiStepButton-root"]': {
                    alignItems: string;
                    justifyContent: string;
                };
                '& [class*="MuiStepConnector-lineHorizontal"]': {
                    position: string;
                    top: string;
                    left: string;
                    right: string;
                };
            };
            vertical: {
                '& [class*="MuiStepContent-root"]': {
                    marginLeft: string;
                    borderLeft: string;
                    paddingLeft: string;
                    paddingTop: string;
                };
            };
        };
    };
    MuiStepButton: {
        styleOverrides: {
            root: {
                "&:hover": {
                    '& [class*="MuiStepLabel-iconContainer"]': {
                        outline: string;
                    };
                    '& [class*="Mui-error"]': {
                        '& [class*="MuiStepLabel-iconContainer"]': {
                            outline: string;
                        };
                    };
                };
                "&:active": {
                    '& [class*="MuiStepLabel-iconContainer"]': {
                        outline: string;
                    };
                    '& [class*="Mui-error"]': {
                        '& [class*="MuiStepLabel-iconContainer"]': {
                            outline: string;
                        };
                    };
                };
                "&:focus-visible": {
                    '& [class*="MuiStepLabel-iconContainer"]': {
                        outline: string;
                        outlineOffset: string;
                    };
                };
                fontFamily: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: string;
                lineHeight: string;
            };
        };
    };
    MuiStepConnector: {
        styleOverrides: {
            vertical: {
                marginLeft: string;
            };
            lineHorizontal: {
                borderTop: string;
            };
            lineVertical: {
                borderLeft: string;
            };
        };
    };
    MuiStepLabel: {
        styleOverrides: {
            root: {
                padding: string;
                '&[class*="alternativeLabel"]': {
                    flexDirection: string;
                    alignItems: string;
                    '& [class*="MuiStepLabel-label"]': {
                        marginLeft: string;
                        marginTop: string;
                    };
                    '& [class*="MuiStepLabel-labelContainer"]': {
                        textAlign: string;
                        margin: string;
                    };
                };
            };
            iconContainer: {
                zIndex: number;
                height: string;
                width: string;
                borderRadius: string;
                boxShadow: string;
                paddingRight: string;
                marginRight: string;
                '&[class*="Mui-active"]': {
                    boxShadow: string;
                    '& [class*="MuiSvgIcon"]': {
                        "& text": {
                            fontWeight: number;
                        };
                    };
                };
                '&[class*="Mui-completed"]': {
                    boxShadow: string;
                    backgroundColor: string;
                };
                '&[class*="Mui-completed"][class*="Mui-active"]': {
                    boxShadow: string;
                    backgroundColor: string;
                };
                '&[class*="Mui-error"]': {
                    boxShadow: string;
                    backgroundColor: string;
                    '& [class*="MuiSvgIcon"]': {
                        color: string;
                    };
                };
                '&[class*="Mui-error"][class*="Mui-active"]': {
                    boxShadow: string;
                    backgroundColor: string;
                    '& [class*="MuiSvgIcon"]': {
                        color: string;
                    };
                };
                '&[class*="Mui-disabled"]': {
                    boxShadow: string;
                    backgroundColor: string;
                    '& [class*="MuiSvgIcon"]': {
                        "& text": {
                            fill: string;
                        };
                    };
                };
                '& [class*="MuiSvgIcon"]': {
                    height: string;
                    width: string;
                    "& text": {
                        fontSize: string;
                        fill: string;
                    };
                };
            };
            horizontal: {
                '& [class*="MuiStepLabel-iconContainer"]': {
                    padding: string;
                };
            };
            label: {
                fontSize: string;
                color: string;
                '&[class*="Mui-active"]': {
                    fontWeight: number;
                    color: string;
                };
                '&[class*="Mui-completed"]': {
                    color: string;
                };
                '&[class*="Mui-disabled"]': {
                    color: string;
                };
            };
        };
    };
    MuiStepIcon: {
        styleOverrides: {
            root: {
                "& circle": {
                    display: string;
                };
            };
        };
    };
};
//# sourceMappingURL=stepper.d.ts.map