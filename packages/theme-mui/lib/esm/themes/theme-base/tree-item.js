export const makeTreeItemStyles = ({ primitives, tokens }) => ({
    MuiTreeItem: {
        styleOverrides: {
            root: {
                color: tokens.colors["ink-on-background"]
            },
            content: Object.assign(Object.assign({ width: "unset", padding: primitives.spacings["4"], position: "relative", borderRadius: primitives.borderRadii.medium, zIndex: 1 }, tokens.transitions["state-blur"]), { "&:hover": Object.assign({ background: tokens.gradients["row-highlighted-hover-loud-reverse"] }, tokens.transitions["state-activate"]), "&.Mui-selected": Object.assign(Object.assign({ background: "none" }, tokens.transitions["state-activate"]), { "&:hover": Object.assign({ background: tokens.gradients["row-highlighted-hover-loud-reverse"] }, tokens.transitions["state-activate"]) }), "&.Mui-focused": Object.assign(Object.assign({}, tokens.transitions["state-activate"]), { boxShadow: tokens.effects["focus-ring-thin"], background: "none", "&:active": {
                        boxShadow: "none",
                        background: tokens.gradients["row-highlighted-pressed-loud-reverse"]
                    } }), "&.Mui-selected.Mui-focused": {
                    background: "none",
                    "&:active": {
                        boxShadow: "none",
                        background: tokens.gradients["row-highlighted-pressed-loud-reverse"]
                    }
                }, "&.Mui-disabled": {
                    background: "none"
                }, "&:active": Object.assign({ boxShadow: "none", background: tokens.gradients["row-highlighted-pressed-loud-reverse"] }, tokens.transitions["state-activate"]) }),
            group: {
                margin: "0",
                position: "relative",
                padding: "0",
                "&:before": Object.assign(Object.assign({ content: '""', position: "absolute", height: "100%", width: "100%", bottom: 0, zIndex: 2 }, tokens.transitions["state-blur"]), { background: `linear-gradient(0deg, ${tokens.colors["fade-gradient-opaque"]} 0%, ${tokens.colors["fade-gradient-transparent"]} 100%)` }),
                '&[class*="MuiCollapse-entered"]:before': {
                    height: "0%"
                },
                '& [class*="MuiTreeItem-root"]': {
                    marginLeft: primitives.spacings["4"]
                }
            },
            label: {
                paddingRight: primitives.spacings["4"]
            }
        }
    }
});
