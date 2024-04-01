import type { ThemeData } from "../../types";
export declare const makeSelectStyles: ({ primitives, tokens }: ThemeData) => {
    MuiSelect: {
        styleOverrides: {
            root: {
                backgroundColor: string;
                "& em": {
                    color: string;
                    fontStyle: string;
                };
                "&[aria-expanded='true'] + input + .DhigSvgIcon--type--ui-control-icon": {
                    transform: string;
                };
                "& .DhigSelect--option": {
                    overflow: string;
                    textOverflow: string;
                    whiteSpace: string;
                    "& + .DhigSelect--checkedIcon": {
                        display: string;
                    };
                };
                fontFamily: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: string;
                lineHeight: string;
                color: string;
            };
            outlined: {
                "&&": {
                    paddingRight: string;
                };
            };
            select: {
                minHeight: string;
            };
        };
    };
    MuiNativeSelect: {
        styleOverrides: {
            select: {
                "&:hover": {
                    borderBottomWidth: string;
                    boxShadow: string;
                    transitionTimingFunction: string;
                    transitionDuration: string;
                };
                "&:focus, &:focus-visible": {
                    borderBottomWidth: string;
                    borderRadius: string;
                    boxShadow: string;
                };
            };
        };
    };
};
//# sourceMappingURL=select.d.ts.map