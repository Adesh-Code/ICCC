import type { ThemeData } from "../../types";
export declare const makeBadgeStyles: ({ primitives, tokens }: ThemeData) => {
    MuiBadge: {
        styleOverrides: {
            root: {
                "& [class*='MuiBadge-standard'], [class*='MuiBadge-inline']": {
                    fontSize: string;
                    borderRadius: string;
                    fontWeight: number;
                    padding: string;
                    boxSizing: string;
                    minWidth: string;
                    minHeight: string;
                    "&:has([class*='MuiSvgIcon'])": {
                        padding: string;
                    };
                    "& [class*='MuiSvgIcon-root']": {
                        color: string;
                    };
                };
                "& [class*='MuiBadge-dot']": {
                    padding: number;
                    minHeight: string;
                    minWidth: string;
                    borderRadius: string;
                };
                "& [class*='MuiBadge-colorUrgency']": {
                    backgroundColor: string;
                    color: string;
                };
                "& [class*='MuiBadge-colorSuccess']": {
                    backgroundColor: string;
                    color: string;
                };
                "& [class*='MuiBadge-colorAttention']": {
                    backgroundColor: string;
                    color: string;
                };
                "& [class*='MuiBadge-colorNeutral']": {
                    backgroundColor: string;
                    color: string;
                };
            };
            badge: {
                backgroundColor: string;
                color: string;
            };
            inline: {
                position: string;
                transform: string;
                transformOrigin: string;
            };
        };
    };
};
//# sourceMappingURL=badge.d.ts.map