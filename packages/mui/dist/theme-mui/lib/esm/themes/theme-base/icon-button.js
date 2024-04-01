export const makeIconButtonStyles = ({ primitives, tokens }) => {
    const makeGetButtonStyles = ({ size }) => {
        // Overriding size tokens because we are reusing button tokens but the
        // vertical padding is slightly different
        const sizeOverrides = size === "dense"
            ? {
                paddingBottom: "5px",
                paddingTop: "5px"
            }
            : {
                paddingBottom: "7px",
                paddingTop: "7px"
            };
        return ({ fullWidth, variant }) => {
            const { button } = tokens;
            const widthOverrides = fullWidth
                ? { width: "100%" }
                : {
                    minWidth: "auto",
                    paddingLeft: primitives.spacings[3],
                    paddingRight: primitives.spacings[3]
                };
            return Object.assign(Object.assign(Object.assign(Object.assign({}, button[variant][size].default), sizeOverrides), widthOverrides), { "&:hover": Object.assign(Object.assign(Object.assign({}, button[variant][size].hover), sizeOverrides), widthOverrides), "&.Mui-disabled": Object.assign(Object.assign(Object.assign({}, button[variant][size].disabled), sizeOverrides), widthOverrides), "&:focus": Object.assign(Object.assign(Object.assign({}, button[variant][size].focus), sizeOverrides), widthOverrides), "&:focus:active": Object.assign(Object.assign(Object.assign({}, button[variant][size].pressed), sizeOverrides), widthOverrides), "&:active": Object.assign(Object.assign(Object.assign({}, button[variant][size].pressed), sizeOverrides), widthOverrides) });
        };
    };
    const getSmallButtonStyles = makeGetButtonStyles({ size: "dense" });
    const getMediumButtonStyles = makeGetButtonStyles({ size: "defaultSize" });
    return {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: primitives.borderRadii.medium,
                    "& [class*='MuiSvgIcon-root']": {
                        color: "inherit"
                    },
                    "&[class*='MuiIconButton-sizeSmall']": {
                        "& [class*='MuiSvgIcon-root']": {
                            fontSize: "20px"
                        },
                        "&.DhigIconButton--variant--contained": getSmallButtonStyles({
                            variant: "contained"
                        }),
                        "&.DhigIconButton--variant--contained.DhigIconButton--fullWidth": getSmallButtonStyles({
                            fullWidth: true,
                            variant: "contained"
                        }),
                        "&.DhigIconButton--variant--outlined": getSmallButtonStyles({
                            variant: "outlined"
                        }),
                        "&.DhigIconButton--variant--outlined.DhigIconButton--fullWidth": getSmallButtonStyles({
                            fullWidth: true,
                            variant: "outlined"
                        }),
                        "&.DhigIconButton--variant--text": getSmallButtonStyles({
                            variant: "text"
                        }),
                        "&.DhigIconButton--variant--text.DhigIconButton--fullWidth": getSmallButtonStyles({
                            fullWidth: true,
                            variant: "text"
                        })
                    },
                    "&[class*='MuiIconButton-sizeMedium']": {
                        "& [class*='MuiSvgIcon-root']": {
                            fontSize: "24px"
                        },
                        "&.DhigIconButton--variant--contained": getMediumButtonStyles({
                            variant: "contained"
                        }),
                        "&.DhigIconButton--variant--contained.DhigIconButton--fullWidth": getMediumButtonStyles({
                            fullWidth: true,
                            variant: "contained"
                        }),
                        "&.DhigIconButton--variant--outlined": getMediumButtonStyles({
                            variant: "outlined"
                        }),
                        "&.DhigIconButton--variant--outlined.DhigIconButton--fullWidth": getMediumButtonStyles({
                            fullWidth: true,
                            variant: "outlined"
                        }),
                        "&.DhigIconButton--variant--text": getMediumButtonStyles({
                            variant: "text"
                        }),
                        "&.DhigIconButton--variant--text.DhigIconButton--fullWidth": getMediumButtonStyles({
                            fullWidth: true,
                            variant: "text"
                        })
                    }
                }
            }
        }
    };
};
