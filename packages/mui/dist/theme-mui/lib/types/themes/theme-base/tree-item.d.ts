import type { ThemeData } from "../../types";
export declare const makeTreeItemStyles: ({ primitives, tokens }: ThemeData) => {
    MuiTreeItem: {
        styleOverrides: {
            root: {
                color: string;
            };
            content: {
                "&:hover": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    background: string;
                };
                "&.Mui-selected": {
                    "&:hover": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        background: string;
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    background: string;
                };
                "&.Mui-focused": {
                    boxShadow: string;
                    background: string;
                    "&:active": {
                        boxShadow: string;
                        background: string;
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                };
                "&.Mui-selected.Mui-focused": {
                    background: string;
                    "&:active": {
                        boxShadow: string;
                        background: string;
                    };
                };
                "&.Mui-disabled": {
                    background: string;
                };
                "&:active": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    boxShadow: string;
                    background: string;
                };
                transitionTimingFunction: string;
                transitionDuration: string;
                width: string;
                padding: string;
                position: string;
                borderRadius: string;
                zIndex: number;
            };
            group: {
                margin: string;
                position: string;
                padding: string;
                "&:before": {
                    background: string;
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    content: string;
                    position: string;
                    height: string;
                    width: string;
                    bottom: number;
                    zIndex: number;
                };
                '&[class*="MuiCollapse-entered"]:before': {
                    height: string;
                };
                '& [class*="MuiTreeItem-root"]': {
                    marginLeft: string;
                };
            };
            label: {
                paddingRight: string;
            };
        };
    };
};
//# sourceMappingURL=tree-item.d.ts.map