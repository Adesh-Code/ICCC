import React from "react";
import type { ThemeData } from "../../types";
export declare const makeAccordionStyles: ({ primitives, tokens }: ThemeData) => {
    MuiAccordion: {
        defaultProps: {
            elevation: number;
        };
        styleOverrides: {
            root: {
                "&::before": {
                    background: string;
                };
                margin: string;
                '& [class*="MuiAccordionSummary-root"]': {
                    padding: string;
                };
                '& [class*="MuiAccordionDetails-root"]': {
                    padding: string;
                };
                "&.Mui-expanded": {
                    margin: string;
                    "&:hover": {
                        background: string;
                    };
                    "&:active": {
                        background: string;
                    };
                };
                "&:first-of-type": {
                    marginTop: string;
                };
                "&:last-child": {
                    marginBottom: string;
                };
                "&:focus, &:focus-visible, &:focus-within": {
                    zIndex: number;
                };
                "&.Mui-disabled": {
                    backgroundColor: string;
                    "&:hover": {
                        background: string;
                    };
                    "&:focus, &:focus-visible, &:focus-within": {
                        boxShadow: string;
                    };
                    "&:active": {
                        background: string;
                    };
                };
                "&.DhigAccordion--density--dense": {
                    '& [class*="MuiAccordionSummary-root"]': {
                        padding: string;
                    };
                    '& [class*="MuiAccordionDetails-root"]': {
                        padding: string;
                    };
                };
                "&.DhigAccordion--variant--individualPanel": {
                    boxShadow: string;
                    "&:focus, &:focus-visible, &:focus-within": {
                        '& [class*="MuiAccordionSummary-root"]': {
                            borderRadius: string;
                        };
                    };
                };
                "&.DhigAccordion--variant--individualPanel.Mui-expanded": {
                    boxShadow: string;
                    "&:focus, &:focus-visible": {
                        border: string;
                    };
                };
                "&.DhigAccordion--variant--flat:first-of-type": {
                    borderTop: string;
                };
                "&.DhigAccordion--variant--flat": {
                    borderBottom: string;
                    margin: number;
                    '& [class*="MuiAccordionSummary-root"]': {
                        paddingLeft: string;
                        paddingRight: string;
                        "&::before, &::after": {
                            borderRadius: string;
                        };
                    };
                    '& [class*="MuiAccordionDetails-root"]': {
                        paddingLeft: string;
                        paddingRight: string;
                    };
                    "&:not(:focus):not(:focus-visible):not(:focus-within)": {
                        '& [class*="MuiAccordionSummary-root"]': {
                            paddingLeft: string;
                            paddingRight: string;
                        };
                        '& [class*="MuiAccordionDetails-root"]': {
                            paddingLeft: string;
                        };
                    };
                    "&:focus-within": {
                        '& [class*="MuiAccordionSummary-root"]:focus:not(:focus-visible)': {
                            paddingLeft: string;
                        };
                        '& [class*="MuiAccordionSummary-root"]:focus:not(:focus-visible) ~ [class*="MuiCollapse-root"] [class*="MuiAccordionDetails-root"]': {
                            paddingLeft: string;
                        };
                    };
                };
                "&.DhigAccordion--variant--mergedPanel:last-of-type": {
                    borderBottomLeftRadius: string;
                    borderBottomRightRadius: string;
                    borderBottom: string;
                };
                "&.DhigAccordion--variant--mergedPanel:first-of-type": {
                    borderTopLeftRadius: string;
                    borderTopRightRadius: string;
                };
                "&.DhigAccordion--variant--mergedPanel": {
                    border: string;
                    borderBottom: string;
                    borderRadius: string;
                    margin: string;
                    "&:focus, &:focus-visible, &:focus-within": {
                        '& [class*="MuiAccordionSummary-root"]': {
                            borderRadius: string;
                        };
                    };
                    "&:active": {
                        background: string;
                    };
                    "&.Mui-expanded:active": {
                        backgroundImage: string;
                    };
                    '& [class*="MuiAccordionDetails-root"]': {
                        background: string;
                        borderBottomLeftRadius: string;
                        borderBottomRightRadius: string;
                        marginLeft: string;
                        marginRight: string;
                    };
                };
                "&.DhigAccordion--variant--minimal": {
                    border: string;
                    margin: string;
                    '& [class*="MuiAccordionSummary-root"]': {
                        paddingLeft: string;
                        paddingRight: string;
                        "&::before, &::after": {
                            borderRadius: string;
                        };
                    };
                    '& [class*="MuiAccordionDetails-root"]': {
                        paddingLeft: string;
                        paddingRight: string;
                    };
                    "&:not(:focus):not(:focus-visible):not(:focus-within)": {
                        '& [class*="MuiAccordionSummary-root"]': {
                            paddingLeft: string;
                            paddingRight: string;
                        };
                    };
                    "&:focus-within": {
                        '& [class*="MuiAccordionSummary-root"]:focus:not(:focus-visible)': {
                            paddingLeft: string;
                        };
                        '& [class*="MuiAccordionSummary-root"]:focus:not(:focus-visible) ~ [class*="MuiCollapse-root"] [class*="MuiAccordionDetails-root"]': {
                            paddingLeft: string;
                        };
                    };
                    "&.Mui-disabled": {
                        boxShadow: string;
                    };
                };
                "&.DhigAccordion--type--stepper": {
                    '& [class*="MuiAccordionSummary-root"]': {
                        "&::before, &::after": {
                            borderRadius: string;
                        };
                    };
                    '& [class*="MuiAccordionSummary-content"]': {
                        "& svg": {
                            fontSize: string;
                            marginRight: string;
                        };
                        '& [class*="MuiTypography-root"]:first-of-type': {
                            marginTop: string;
                        };
                    };
                    '& [class*="MuiAccordionSummary-expandIconWrapper"]': {
                        transform: string;
                        "& button": {
                            padding: string;
                            minWidth: string;
                            fontSize: string;
                            height: string;
                        };
                    };
                };
                "&.DhigAccordion--size--normal.DhigAccordion--type--stepper": {
                    '& [class*="MuiAccordionDetails-root"]': {
                        paddingLeft: string;
                        background: string;
                    };
                };
                "&.DhigAccordion--size--dense.DhigAccordion--type--stepper": {
                    '& [class*="MuiAccordionDetails-root"]': {
                        paddingLeft: string;
                        background: string;
                    };
                };
            };
            rounded: {
                borderRadius: string;
                "&:first-of-type": {
                    borderTopLeftRadius: string;
                    borderTopRightRadius: string;
                };
                "&:last-child": {
                    borderBottomLeftRadius: string;
                    borderBottomRightRadius: string;
                };
            };
        };
    };
    MuiAccordionSummary: {
        defaultProps: {
            expandIcon: React.JSX.Element;
        };
        styleOverrides: {
            root: {
                zIndex: number;
                "&::before, &::after": {
                    borderRadius: string;
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    content: string;
                    position: string;
                    top: number;
                    right: number;
                    bottom: number;
                    left: number;
                    zIndex: string;
                    opacity: number;
                };
                "&::before": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    background: string;
                };
                "&::after": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    background: string;
                };
                "&.Mui-expanded": {
                    backgroundColor: string;
                    minHeight: string;
                };
                "&:hover:not(:active)::before": {
                    opacity: number;
                };
                "&:focus": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    boxShadow: string;
                };
                "&:focus:not(:focus-visible)": {
                    boxShadow: string;
                };
                "&:focus-visible": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    boxShadow: string;
                };
                "&:active::after": {
                    opacity: number;
                };
                "&.Mui-focused, &.Mui-focusVisible": {
                    backgroundColor: string;
                };
                transitionTimingFunction: string;
                transitionDuration: string;
                minHeight: string;
                backgroundColor: string;
            };
            content: {
                margin: string;
                "&.Mui-expanded": {
                    margin: string;
                };
            };
            expandIconWrapper: {
                '& [class*="MuiSvgIcon-root"]': {
                    color: string;
                    fontSize: string;
                };
            };
        };
    };
    MuiAccordionDetails: {
        styleOverrides: {
            root: {
                flexDirection: string;
                color: string;
            };
        };
    };
};
//# sourceMappingURL=accordion.d.ts.map