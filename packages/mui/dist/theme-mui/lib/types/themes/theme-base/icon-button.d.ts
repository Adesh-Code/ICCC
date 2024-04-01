import type { ThemeData } from "../../types";
export declare const makeIconButtonStyles: ({ primitives, tokens }: ThemeData) => {
    MuiIconButton: {
        styleOverrides: {
            root: {
                borderRadius: string;
                "& [class*='MuiSvgIcon-root']": {
                    color: string;
                };
                "&[class*='MuiIconButton-sizeSmall']": {
                    "& [class*='MuiSvgIcon-root']": {
                        fontSize: string;
                    };
                    "&.DhigIconButton--variant--contained": any;
                    "&.DhigIconButton--variant--contained.DhigIconButton--fullWidth": any;
                    "&.DhigIconButton--variant--outlined": any;
                    "&.DhigIconButton--variant--outlined.DhigIconButton--fullWidth": any;
                    "&.DhigIconButton--variant--text": any;
                    "&.DhigIconButton--variant--text.DhigIconButton--fullWidth": any;
                };
                "&[class*='MuiIconButton-sizeMedium']": {
                    "& [class*='MuiSvgIcon-root']": {
                        fontSize: string;
                    };
                    "&.DhigIconButton--variant--contained": any;
                    "&.DhigIconButton--variant--contained.DhigIconButton--fullWidth": any;
                    "&.DhigIconButton--variant--outlined": any;
                    "&.DhigIconButton--variant--outlined.DhigIconButton--fullWidth": any;
                    "&.DhigIconButton--variant--text": any;
                    "&.DhigIconButton--variant--text.DhigIconButton--fullWidth": any;
                };
            };
        };
    };
};
//# sourceMappingURL=icon-button.d.ts.map