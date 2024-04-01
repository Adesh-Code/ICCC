import type { ThemeData } from "../../types";
export declare const makeToolbarStyles: ({ primitives, tokens }: ThemeData) => {
    MuiToolbar: {
        styleOverrides: {
            root: {
                backgroundColor: string;
                borderRadius: string;
                color: string;
                padding: string;
                boxSizing: string;
                justifyContent: string;
                minHeight: string;
                '& [class*="MuiIconButton-root"]': {
                    marginRight: string;
                };
                '& button[class*="MuiButton-root"]': {
                    backgroundColor: string;
                    borderColor: string;
                    color: string;
                    whiteSpace: string;
                };
                '& button[class*="MuiButton-root"]:focus:active': {
                    color: string;
                };
                '& [class*="MuiTypography-root"]': {
                    whiteSpace: string;
                    overflow: string;
                    textOverflow: string;
                    marginRight: string;
                };
                "@media (min-width: 600px)": {
                    padding: string;
                    minHeight: string;
                };
                "@media (min-width: 0px) and (orientation: landscape)": {
                    minHeight: string;
                };
                fontFamily: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: string;
                lineHeight: string;
                boxShadow: string;
            };
        };
    };
};
//# sourceMappingURL=toolbar.d.ts.map