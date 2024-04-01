import type { ThemeData } from "../../types";
export declare const makeCardStyles: ({ primitives, tokens }: ThemeData) => {
    MuiCard: {
        defaultProps: {
            elevation: number;
        };
        styleOverrides: {
            root: {
                '&[class*="MuiPaper-root"]': {
                    backgroundColor: string;
                    color: string;
                };
                backgroundColor: string;
                boxShadow: string;
                opacity: number;
                "& .DhigCard--divider": {
                    padding: string;
                    margin: string;
                };
                "&.MuiCard--quiet": {
                    backgroundColor: string;
                    boxShadow: string;
                    '& > [class*="MuiCardMedia-root"]': {
                        borderRadius: string;
                    };
                    '& > [class*="MuiCardContent-root"]': {
                        paddingBottom: string;
                        paddingTop: string;
                        paddingLeft: string;
                        paddingRight: string;
                    };
                    '& > [class*="MuiCardActions-root"]': {
                        padding: string;
                    };
                    "& .DhigCard--divider": {
                        padding: string;
                    };
                    "&.MuiCard--framed": {
                        padding: string;
                        '& > [class*="MuiCardMedia-root"]': {
                            boxShadow: string;
                            padding: string;
                            boxSizing: string;
                        };
                        '& > [class*="MuiCardContent-root"]': {
                            paddingBottom: string;
                            paddingLeft: string;
                            paddingRight: string;
                            paddingTop: string;
                        };
                        '& > [class*="MuiCardActions-root"]': {
                            paddingBottom: string;
                            paddingLeft: string;
                            paddingRight: string;
                            paddingTop: string;
                        };
                        "& .DhigCard--divider": {
                            padding: string;
                        };
                    };
                };
                "&.MuiCard--framed": {
                    paddingBottom: string;
                    paddingLeft: string;
                    paddingRight: string;
                    paddingTop: string;
                };
                "&.MuiCard--twoColumns": {
                    display: string;
                    flexWrap: string;
                    height: string;
                    "& > div": {
                        display: string;
                        flexDirection: string;
                    };
                    '& [class*="MuiCardMedia-root"]': {
                        flex: string;
                        objectFit: string;
                        width: string;
                    };
                };
                "&.DhigCard--appearance--default, &.DhigCard--appearance--framed": {
                    '&[class*="MuiPaper-rounded"]': {
                        borderRadius: string;
                    };
                };
            };
        };
    };
    MuiCardActionArea: {
        styleOverrides: {
            root: {
                backgroundColor: string;
                height: string;
                width: string;
                "&:has([class*='MuiPaper-rounded'])": {
                    borderRadius: string;
                };
                '&:hover [class*="MuiCard-root"]': {
                    background: string;
                };
                '&:focus-visible [class*="MuiCard-root"]': {
                    boxShadow: string;
                    outline: string;
                    outlineOffset: string;
                };
                '&:active [class*="MuiCard-root"]': {
                    background: string;
                    outline: string;
                };
                '&:active [class*="MuiCard-root"] button svg': {
                    outline: string;
                };
                '&:active:focus [class*="MuiCard-root"]': {
                    background: string;
                    boxShadow: string;
                    outline: string;
                };
                "&.Mui-disabled": {
                    opacity: number;
                    '& [class*="MuiButton-link"].Mui-disabled': {
                        opacity: number;
                    };
                };
            };
            focusHighlight: {
                display: string;
            };
        };
    };
    MuiCardActions: {
        styleOverrides: {
            root: {
                paddingBottom: string;
                paddingLeft: string;
                paddingRight: string;
                paddingTop: string;
                flexDirection: string;
                alignItems: string;
            };
            spacing: {
                "& > :not(:first-of-type)": {
                    marginLeft: string;
                };
            };
        };
    };
    MuiCardContent: {
        styleOverrides: {
            root: {
                paddingBottom: string;
                paddingLeft: string;
                paddingRight: string;
                paddingTop: string;
            };
        };
    };
};
//# sourceMappingURL=card.d.ts.map