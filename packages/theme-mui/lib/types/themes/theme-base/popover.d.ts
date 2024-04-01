import type { ThemeData } from "../../types";
export declare const makePopoverStyles: ({ primitives, tokens }: ThemeData) => {
    MuiPopover: {
        styleOverrides: {
            root: {
                '& [class*="MuiPaper-root"]': {
                    borderRadius: string;
                    marginTop: string;
                    boxShadow: string;
                    scrollbarWidth: string;
                    backgroundColor: string;
                    '& [class*="MuiList-root"]': {
                        "& [class*='MuiListSubheader-root']": {
                            background: string;
                            marginLeft: string;
                            marginRight: string;
                            "&:not(:first-of-type)": {
                                borderTop: string;
                            };
                        };
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=popover.d.ts.map