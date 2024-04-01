import type { ThemeData } from "../../types";
export declare const makeMenuItemStyles: ({ primitives, tokens }: ThemeData) => {
    MuiMenuItem: {
        styleOverrides: {
            root: {
                "&:hover, &:active, &:focus-visible": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                };
                "&:active": {
                    backgroundColor: string;
                    boxShadow: string;
                };
                "&.DhigSplitButton--menuItem--focused": {
                    backgroundColor: string;
                    "&:hover": {
                        backgroundColor: string;
                    };
                    "&:active": {
                        backgroundColor: string;
                    };
                };
                '& [class*="MuiSvgIcon-root"]': {
                    paddingRight: string;
                };
                "& .DhigSplitButton--icon--checkmark": {
                    paddingLeft: string;
                    paddingRight: string;
                    marginLeft: string;
                    width: string;
                };
                "& .MuiTypography-root": {
                    color: string;
                };
                transitionTimingFunction: string;
                transitionDuration: string;
                "&:hover": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    backgroundColor: string;
                };
                "&:focus, &:focus-visible": {
                    boxShadow: string;
                    backgroundColor: string;
                };
                "&.Mui-selected": {
                    backgroundColor: string;
                    "&.Mui-focusVisible, &:focus, &:focus-visible": {
                        backgroundColor: string;
                        "&:hover": {
                            backgroundColor: string;
                        };
                        "&:active": {
                            backgroundColor: string;
                        };
                    };
                };
                display: string;
                flexDirection: string;
                justifyContent: string;
                padding: string;
                border: string;
                "& .DhigSelect--checkedIcon": {
                    position: string;
                    right: string;
                };
                "& .DhigSelect--option": {
                    marginRight: string;
                    width: string;
                };
                fontFamily: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: string;
                lineHeight: string;
                boxShadow: string;
                color: string;
                minHeight: string;
                paddingTop: string;
                paddingBottom: string;
                position: string;
                whiteSpace: string;
                marginLeft: string;
                marginRight: string;
                paddingLeft: string;
            };
        };
    };
};
//# sourceMappingURL=menu-item.d.ts.map