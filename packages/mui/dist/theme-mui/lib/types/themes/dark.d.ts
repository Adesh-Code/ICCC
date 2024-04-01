/// <reference types="react" />
import type { PaletteMode } from "../types";
declare const theme: {
    breakpoints: import("@mui/system").Breakpoints;
    direction: string;
    palette: {
        mode: PaletteMode;
        common: {
            black: string;
            white: string;
        };
        primary: {
            main: string;
        };
        error: {
            main: string;
        };
        success: {
            main: string;
        };
        urgency: {
            main: string;
        };
        attention: {
            main: string;
        };
        neutral: {
            main: string;
        };
        text: {
            primary: string;
            secondary: string;
        };
        divider: string;
        background: {
            paper: string;
            default: string;
        };
    };
    typography: {
        fontFamily: string;
        fontWeightLight: number;
        fontWeightRegular: number;
        fontWeightMedium: number;
        fontWeightBold: number;
        body1: {
            fontFamily: string;
            fontSize: string;
            fontWeight: number;
            letterSpacing: string;
            lineHeight: string;
        };
    };
    spacing: string[];
    transitions: {
        duration: {};
        easing: {};
    };
    zIndex: {};
    primitives: import("../types").Primitives;
    tokens: import("../types").Tokens;
    components: {
        MuiTypography: {
            defaultProps: {
                component: string;
            };
            styleOverrides: {
                root: {
                    color: string;
                };
                colorPrimary: {
                    color: string;
                };
                colorError: {
                    color: string;
                };
            };
        };
        MuiTreeView: {
            defaultProps: {
                defaultCollapseIcon: import("react").JSX.Element;
                defaultExpandIcon: import("react").JSX.Element;
            };
            styleOverrides: {
                root: {
                    position: string;
                    "&.DhigTreeView--variant--flat": {
                        borderBottom: string;
                        borderTop: string;
                        '& [class*="MuiTreeItem-root"]:first-of-type > div.DhigTreeItem': {
                            hr: {
                                display: string;
                            };
                        };
                        "& hr": {
                            position: string;
                            left: string;
                            width: string;
                            zIndex: number;
                        };
                    };
                    "&.DhigTreeView--size--dense": {
                        '& [class*="MuiTreeItem-content"]': {
                            padding: string;
                        };
                        '& [class*="MuiTreeItem-label"]': {
                            fontFamily: string;
                            fontSize: string;
                            fontWeight: number;
                            letterSpacing: string;
                            lineHeight: string;
                        };
                    };
                };
            };
        };
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
        MuiTooltip: {
            defaultProps: {
                TransitionProps: {
                    timeout: {
                        enter: number;
                        exit: number;
                    };
                    easing: {
                        enter: string;
                        exit: string;
                    };
                };
            };
            styleOverrides: {
                popper: {
                    '& [class*="MuiTooltip-arrow"]': {
                        fontSize: string;
                        "&::before": {
                            backgroundColor: string;
                        };
                    };
                    '& [class*="MuiTooltip-tooltip"]': {
                        fontFamily: string;
                        fontSize: string;
                        fontWeight: number;
                        letterSpacing: string;
                        lineHeight: string;
                        backgroundColor: string;
                        padding: string;
                        color: string;
                        display: string;
                        flexDirection: string;
                        alignItems: string;
                        borderRadius: string;
                        '& [class*="MuiTypography-root"]': {
                            color: string;
                        };
                        ".MuiDivider-root": {
                            marginTop: string;
                            marginBottom: string;
                        };
                    };
                };
            };
        };
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
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    color: string;
                    fontWeight: number;
                    padding: string;
                    border: string;
                    boxSizing: string;
                    "&:hover": {
                        backgroundColor: string;
                    };
                    "&:active": {
                        backgroundColor: string;
                        border: string;
                    };
                    "&.Mui-selected": {
                        backgroundColor: string;
                        color: string;
                        "&:hover": {
                            backgroundColor: string;
                        };
                    };
                    "&.Mui-disabled": {
                        border: string;
                        color: string;
                    };
                    fontFamily: string;
                    fontSize: string;
                    letterSpacing: string;
                    lineHeight: string;
                };
                sizeSmall: {
                    fontSize: string;
                    padding: string;
                };
            };
        };
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    backgroundColor: string;
                    outline: string;
                    outlineOffset: string;
                    borderRadius: string;
                    padding: number;
                    '& [class*="MuiToggleButtonGroup-grouped"]': {
                        textTransform: string;
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        "&:not(:last-of-type)": {
                            marginLeft: number;
                            border: string;
                            borderRadius: string;
                            "&:after": {
                                content: string;
                                borderLeft: string;
                                height: string;
                                position: string;
                                right: string;
                                zIndex: number;
                            };
                            "&:focus-visible": {
                                transitionTimingFunction: string;
                                transitionDuration: string;
                                border: string;
                                "&:after": {
                                    height: number;
                                    borderLeft: string;
                                };
                            };
                            "&:active": {
                                transitionTimingFunction: string;
                                transitionDuration: string;
                                "&:after": {
                                    borderLeft: string;
                                    height: string;
                                };
                            };
                            "&:hover": {
                                transitionTimingFunction: string;
                                transitionDuration: string;
                            };
                            "&.Mui-selected": {
                                borderRadius: string;
                                boxShadow: string;
                                border: string;
                                "&:after": {
                                    height: number;
                                    borderLeft: string;
                                };
                                "&:focus-visible": {
                                    transitionTimingFunction: string;
                                    transitionDuration: string;
                                    boxShadow: string;
                                };
                                "&:active": {
                                    transitionTimingFunction: string;
                                    transitionDuration: string;
                                    boxShadow: string;
                                };
                            };
                        };
                        "&:not(:first-of-type)": {
                            marginLeft: number;
                            border: string;
                            borderRadius: string;
                            "&:focus-visible": {
                                transitionTimingFunction: string;
                                transitionDuration: string;
                                border: string;
                                "&:after": {
                                    height: number;
                                    borderLeft: string;
                                };
                            };
                            "&:active": {
                                transitionTimingFunction: string;
                                transitionDuration: string;
                                "&:after": {
                                    borderLeft: string;
                                    height: string;
                                };
                            };
                            "&:hover": {
                                transitionTimingFunction: string;
                                transitionDuration: string;
                            };
                            "&.Mui-selected": {
                                borderRadius: string;
                                boxShadow: string;
                                border: string;
                                "&:after": {
                                    height: number;
                                    borderLeft: string;
                                };
                                "&:focus-visible": {
                                    transitionTimingFunction: string;
                                    transitionDuration: string;
                                    boxShadow: string;
                                };
                                "&:active": {
                                    transitionTimingFunction: string;
                                    transitionDuration: string;
                                    boxShadow: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& [class*='MuiInputBase-root'][class*='MuiOutlinedInput-root']": {
                        "&.Mui-focused": {
                            border: string;
                            boxShadow: string;
                        };
                        "&:hover": {
                            borderBottom: string;
                        };
                        "&:focus-within": {
                            border: string;
                            boxShadow: string;
                        };
                        "&.Mui-error": {
                            boxShadow: string;
                            border: string;
                            "&:hover": {
                                borderBottomColor: string;
                                "&.Mui-focused": {
                                    boxShadow: string;
                                    border: string;
                                };
                            };
                        };
                        "&.Mui-disabled": {
                            borderBottomColor: string;
                        };
                        "& [class*='MuiOutlinedInput-input']": {
                            "&::placeholder": {
                                fontFamily: string;
                                fontSize: string;
                                fontWeight: number;
                                letterSpacing: string;
                                lineHeight: string;
                            };
                            "&.Mui-disabled": {
                                WebkitTextFillColor: string;
                            };
                            "&::selection": {
                                background: string;
                            };
                            "&::-moz-selection": {
                                background: string;
                            };
                            fontFamily: string;
                            fontSize: string;
                            fontWeight: number;
                            letterSpacing: string;
                            lineHeight: string;
                            padding: string;
                        };
                        '& [class*="MuiInputAdornment-positionEnd"]': {
                            marginLeft: string;
                            marginRight: string;
                            "& [class*='MuiButtonBase-root'][class*='MuiIconButton-root']": {
                                "&:active": {
                                    backgroundColor: string;
                                };
                                "&.Mui-focusVisible": {
                                    boxShadow: string;
                                };
                                height: string;
                                marginRight: string;
                                padding: string;
                                width: string;
                                "& svg": {
                                    color: string;
                                    height: string;
                                    width: string;
                                };
                            };
                        };
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        border: string;
                        borderRadius: number;
                        paddingRight: string;
                    };
                };
            };
        };
        MuiTabs: {
            defaultProps: {
                slots: {
                    StartScrollButtonIcon: () => import("react").JSX.Element;
                    EndScrollButtonIcon: () => import("react").JSX.Element;
                };
            };
            styleOverrides: {
                root: {
                    position: string;
                    "&.DhigTabs--styleVariant--default": any;
                    "&.DhigTabs--styleVariant--quiet": any;
                    "& [class*='MuiTabs-scroller'] + [class*='MuiTabScrollButton-root']": {
                        background: string;
                        right: string;
                        left: string;
                    };
                };
                indicator: {
                    left: string;
                    top: string;
                    display: string;
                    alignItems: string;
                    justifyContent: string;
                };
            };
        };
        MuiTab: {
            defaultProps: {
                wrapped: boolean;
                tabIndex: number;
            };
            styleOverrides: {
                root: {
                    border: string;
                    minWidth: string;
                };
            };
        };
        MuiTabScrollButton: {
            styleOverrides: {
                root: {
                    color: string;
                    height: string;
                    width: string;
                    position: string;
                    zIndex: number;
                    background: string;
                    left: string;
                    '& [class*="MuiSvgIcon"]': {
                        display: string;
                    };
                    "&:hover": {
                        '& [class*="MuiSvgIcon"]': {
                            display: string;
                        };
                    };
                    "@media (max-width: 599.95px)": {
                        "&[class*=\"MuiTabs-scrollButtonsDesktop\"]": {
                            display: string;
                        };
                    };
                };
            };
        };
        MuiTable: {
            styleOverrides: {
                root: {
                    "&.DhigTable--verticalAlignment--center tbody tr td": {
                        verticalAlign: string;
                    };
                    "&.DhigTable--verticalAlignment--top tbody tr td": {
                        verticalAlign: string;
                    };
                    "&.DhigTable--zebra": {
                        "& tbody tr:nth-of-type(odd)": {
                            backgroundColor: string;
                        };
                        "& tbody tr:hover": {
                            backgroundColor: string;
                        };
                    };
                    "& tbody tr:last-child": {
                        borderBottom: string;
                    };
                    "&.DhigTable--loud": {
                        "& tr.DhigTableRow--enableInteractions": {
                            position: string;
                            borderBottom: string;
                            "&:hover": {
                                borderRadius: string;
                                background: string;
                                backgroundAttachment: string;
                                boxShadow: string;
                            };
                            "&:active": {
                                borderRadius: string;
                                background: string;
                                backgroundAttachment: string;
                                boxShadow: string;
                            };
                            "& td.MuiTableCell-root": {
                                lineHeight: string;
                            };
                            "& td.MuiTableCell-root > *": {
                                lineHeight: string;
                            };
                            '& td.MuiTableCell-root:not([class*="MuiTableCell-paddingCheckbox"])': {
                                padding: string;
                            };
                            '& td.MuiTableCell-sizeSmall:not([class*="MuiTableCell-paddingCheckbox"])': {
                                padding: string;
                            };
                        };
                        "&.DhigTableRow--activated.Mui-selected": {
                            backgroundAttachment: string;
                            background: string;
                        };
                        "& tr.Mui-selected": {
                            backgroundColor: string;
                        };
                        "& tr.Mui-selected.DhigTableRow--enableInteractions": {
                            "&:hover": {
                                borderRadius: string;
                                background: string;
                                backgroundAttachment: string;
                                boxShadow: string;
                            };
                            "&:active": {
                                borderRadius: string;
                                background: string;
                                backgroundAttachment: string;
                                boxShadow: string;
                            };
                        };
                        "& [class*='MuiAvatar-root']": {
                            height: string;
                            width: string;
                        };
                        "& tr.DhigTableRow--highlighted": {
                            backgroundColor: string;
                        };
                        "& tr.DhigTableRow--highlighted.DhigTableRow--enableInteractions": {
                            "&:hover": {
                                backgroundAttachment: string;
                                background: string;
                                borderRadius: string;
                                boxShadow: string;
                            };
                            "&:active": {
                                backgroundAttachment: string;
                                background: string;
                                borderRadius: string;
                                boxShadow: string;
                            };
                        };
                        "& tr.Mui-selected.DhigTableRow--highlighted": {
                            backgroundColor: string;
                        };
                        "& tr.Mui-selected.DhigTableRow--highlighted.DhigTableRow--enableInteractions": {
                            "&:hover": {
                                backgroundAttachment: string;
                                background: string;
                                borderRadius: string;
                                boxShadow: string;
                            };
                            "&:active": {
                                backgroundAttachment: string;
                                background: string;
                                borderRadius: string;
                                boxShadow: string;
                            };
                        };
                    };
                    "&.DhigTable--bordered": {
                        background: string;
                        boxShadow: string;
                        borderRadius: string;
                        "& tbody tr td:last-of-type": {
                            padding: string;
                            width: string;
                            textAlign: string;
                            "& svg": {
                                fontSize: string;
                            };
                        };
                        '& tbody tr td[class*="MuiTableCell-sizeSmall"]:last-of-type': {
                            width: string;
                            "& svg": {
                                fontSize: string;
                            };
                        };
                    };
                };
            };
        };
        MuiTableRow: {
            styleOverrides: {
                root: {
                    position: string;
                    border: number;
                    borderBottom: string;
                    "&.DhigTableRow--enableInteractions": {
                        cursor: string;
                        "&:hover": {
                            backgroundColor: string;
                            '& [class*="MuiTableCell-isEditing"] [class*="MuiInputBase-root"].Mui-disabled': {
                                background: string;
                            };
                        };
                        "&:active": {
                            backgroundColor: string;
                        };
                        "&:focus-visible": {
                            boxShadow: string;
                        };
                        '&:hover:has(label[class*="MuiFormControlLabel-root"]:hover)': {
                            boxShadow: string;
                            background: string;
                        };
                    };
                    "&.DhigTableRow--highlighted": {
                        backgroundColor: string;
                    };
                    "&.DhigTableRow--highlighted.DhigTableRow--enableInteractions": {
                        "&:hover": {
                            backgroundColor: string;
                        };
                        "&:active": {
                            backgroundColor: string;
                        };
                    };
                    "&.Mui-selected": {
                        backgroundColor: string;
                        "&:hover": {
                            backgroundColor: string;
                        };
                    };
                    "&.Mui-selected.DhigTableRow--enableInteractions": {
                        "&:hover": {
                            backgroundColor: string;
                        };
                        "&:active": {
                            backgroundColor: string;
                        };
                    };
                    "&.Mui-selected.DhigTableRow--highlighted": {
                        backgroundColor: string;
                    };
                    "&.Mui-selected.DhigTableRow--highlighted.DhigTableRow--enableInteractions": {
                        "&:hover": {
                            backgroundColor: string;
                        };
                        "&:active": {
                            backgroundColor: string;
                        };
                    };
                    "&.DhigTableRow--activated": {
                        background: string;
                        backgroundAttachment: string;
                        pointerEvents: string;
                        cursor: string;
                        '&:hover:has(label[class*="MuiFormControlLabel-root"]:hover)': {
                            boxShadow: string;
                            background: string;
                            backgroundAttachment: string;
                        };
                        "& td:last-of-type": {
                            position: string;
                            "&:after": {
                                content: string;
                                background: string;
                                position: string;
                                right: string;
                                top: string;
                                bottom: string;
                                width: string;
                                display: string;
                            };
                        };
                        '& > [class*="MuiTableCell-root"] > [class*="MuiCheckbox-root"], & > [class*="MuiTableCell-root"] > [class*="MuiFormControlLabel-root"]': {
                            pointerEvents: string;
                            cursor: string;
                        };
                    };
                    "&.DhigTableRow--activated.Mui-highlighted": {
                        backgroundAttachment: string;
                        background: string;
                    };
                    "&.DhigTableRow--activated.Mui-selected": {
                        background: string;
                        backgroundAttachment: string;
                        '&:hover:has(label[class*="MuiFormControlLabel-root"]:hover)': {
                            boxShadow: string;
                            background: string;
                            backgroundAttachment: string;
                        };
                    };
                    "&.DhigTableRow--activated.Mui-selected.DhigTableRow--highlighted": {
                        background: string;
                        backgroundAttachment: string;
                    };
                };
                head: {
                    "&:hover": {
                        backgroundColor: string;
                    };
                };
            };
        };
        MuiTableCell: {
            defaultProps: {
                tabIndex: number;
            };
            styleOverrides: {
                root: {
                    lineHeight: string;
                    fontSize: string;
                    borderBottom: string;
                    color: string;
                    '&[class*="MuiTableCell-isEditing"]': {
                        padding: string;
                        '& .Mui-error[class*="MuiInput-underline"]:hover:not(.Mui-disabled):before': {
                            boxShadow: string;
                        };
                        '& [class*="MuiFormHelperText-root"]': {
                            marginBottom: string;
                            "&.Mui-error": {
                                display: string;
                                alignItems: string;
                            };
                        };
                        "& [class*='MuiInputBase-root'][class*='MuiOutlinedInput-root']": {
                            border: string;
                            "&:hover": {
                                border: string;
                            };
                            boxShadow: string;
                            background: string;
                            margin: string;
                            padding: string;
                            "& input[class*='MuiOutlinedInput']": {
                                color: string;
                                fontSize: string;
                                fontWeight: number;
                                lineHeight: string;
                                height: string;
                                padding: string;
                                "&:focus, &:focus-visible": {
                                    boxShadow: string;
                                    outline: string;
                                };
                            };
                            "& input:active": {
                                boxShadow: string;
                            };
                            "&.Mui-error": {
                                borderColor: string;
                                margin: number;
                                boxShadow: string;
                                "& input:focus-visible": {
                                    boxShadow: string;
                                };
                            };
                            "&.Mui-disabled": {
                                borderColor: string;
                            };
                        };
                        '& [class*="MuiInput-underline"]:before': {
                            borderBottom: string;
                            top: string;
                            bottom: string;
                        };
                        '& [class*="MuiInput-underline"]:after': {
                            display: string;
                        };
                        '& [class*="MuiInput-underline"]:hover:not(.Mui-disabled):before': {
                            boxShadow: string;
                        };
                    };
                    '&[class*="MuiTableCell-isEditing"][class*="MuiTableCell-alignRight"]': {
                        '& [class*="MuiInputBase-input"]': {
                            textAlign: string;
                        };
                        '& [class*="MuiFormHelperText-root"]': {
                            "&.Mui-error": {
                                alignSelf: string;
                            };
                        };
                    };
                    '&[class*="MuiTableCell-sizeSmall"]': {
                        fontSize: string;
                        '& [class*="MuiTableSortLabel-root"]': {
                            fontSize: string;
                        };
                        "& [class*='MuiAvatar-root']": {
                            height: string;
                            width: string;
                        };
                    };
                    '&[class*="MuiTableCell-head"]': {
                        whiteSpace: string;
                        lineHeight: string;
                    };
                    "&:focus-visible": {
                        boxShadow: string;
                        outline: string;
                    };
                };
                paddingCheckbox: {
                    padding: string;
                    backgroundAttachment: string;
                    '& label[class*="MuiFormControlLabel-root"]': {
                        margin: string;
                        position: string;
                        zIndex: number;
                        '& [class*="MuiCheckbox-root"] [class*="MuiSvgIcon-root"]': {
                            margin: string;
                        };
                        '& [class*="MuiFormControlLabel-label"]': {
                            display: string;
                        };
                    };
                };
            };
        };
        MuiTableHead: {
            styleOverrides: {
                root: {
                    "& tr": {
                        borderBottom: string;
                        "&:hover": {
                            background: string;
                        };
                        '& th.DhigTableHead--cell[class*="MuiTableCell-sizeSmall"]': {
                            padding: string;
                        };
                        '& th.DhigTableHead--cell--sort[class*="MuiTableCell-alignRight"]': {
                            '& [class*="MuiTableSortLabel-root"]': {
                                "& svg[class*='MuiSvgIcon-root']": {
                                    paddingLeft: string;
                                    paddingRight: string;
                                };
                            };
                        };
                        "& th.DhigTableHead--cell--sort": {
                            position: string;
                            border: number;
                            cursor: string;
                            "&::before": {
                                display: string;
                                position: string;
                                left: number;
                                right: number;
                                top: number;
                                bottom: number;
                                content: string;
                            };
                            "&:hover": {
                                backgroundColor: string;
                                '& [class*="MuiTableSortLabel-root"]': {
                                    "& svg[class*='MuiSvgIcon-root']": {
                                        opacity: number;
                                    };
                                };
                                '& [class*="MuiTableSortLabel-root"][class*="Mui-active"]': {
                                    "& svg[class*='MuiSvgIcon-root']": {
                                        opacity: number;
                                    };
                                };
                            };
                            "&:active": {
                                backgroundColor: string;
                            };
                            "&:focus-within": {
                                "&::before": {
                                    boxShadow: string;
                                };
                            };
                        };
                        "& th.DhigTableHead--cell--enableSelect": {
                            padding: string;
                            "& label.DhigTableHead--checkbox": {
                                margin: string;
                                '& [class*="MuiCheckbox-root"]': {
                                    margin: string;
                                };
                                '& [class*="MuiFormControlLabel-label"]': {
                                    display: string;
                                };
                            };
                        };
                        "& th.DhigTableHead--cell": {
                            padding: string;
                            '& [class*="MuiTableSortLabel-root"]': {
                                cursor: string;
                                "& svg[class*='MuiSvgIcon-root']": {
                                    opacity: number;
                                };
                            };
                        };
                    };
                };
            };
        };
        MuiTableSortLabel: {
            styleOverrides: {
                root: {
                    color: string;
                    pointerEvents: string;
                    "&:hover, :focus": {
                        color: string;
                    };
                    "&:hover": {
                        "& svg[class*='MuiSvgIcon-root']": {
                            opacity: number;
                        };
                    };
                    "&.Mui-active": {
                        color: string;
                        "& svg[class*='MuiSvgIcon-root']": {
                            opacity: number;
                        };
                    };
                    "& svg[class*='MuiSvgIcon-root']": {
                        fontSize: string;
                        paddingLeft: string;
                        opacity: number;
                    };
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: number;
                    letterSpacing: string;
                    lineHeight: string;
                };
            };
        };
        MuiSvgIcon: {
            defaultProps: {
                fontSize: string;
            };
            styleOverrides: {
                root: {
                    color: string;
                    display: string;
                    fontSize: string;
                    verticalAlign: string;
                    height: string;
                    width: string;
                    "&[class*='MuiSvgIcon-fontSizeExtra-large']": {
                        height: string;
                        width: string;
                    };
                    "& g#error": {
                        fill: string;
                        color: string;
                    };
                    "& g#lock": {
                        fill: string;
                    };
                    "& use.dhig--icons--edit-marker-left": {
                        stroke: string;
                        color: string;
                    };
                    "& use.dhig--icons--edit-marker-right": {
                        stroke: string;
                        color: string;
                    };
                    "& use.dhig--display-icons--error": {
                        fill: string;
                        color: string;
                    };
                    "& use.dhig--ui-controls--error": {
                        fill: string;
                        color: string;
                    };
                    "& use.dhig--ui-controls--manual-width--error": {
                        fill: string;
                        color: string;
                    };
                    "& use.dhig--display-icons--lock": {
                        fill: string;
                    };
                };
                fontSizeSmall: {
                    height: string;
                    width: string;
                };
                fontSizeMedium: {
                    height: string;
                    width: string;
                };
                fontSizeLarge: {
                    height: string;
                    width: string;
                };
            };
        };
        MuiStep: {
            styleOverrides: {
                root: {
                    padding: string;
                    '&[class*="Mui-completed"]': {
                        '& + [class*="MuiStepConnector-vertical"]': {
                            marginLeft: string;
                            '& [class*="MuiStepConnector-line"]': {
                                borderColor: string;
                                borderWidth: string;
                            };
                        };
                        '& + [class*="MuiStep-root"]': {
                            '& [class*="MuiStepConnector-horizontal"]': {
                                '& [class*="MuiStepConnector-line"]': {
                                    borderColor: string;
                                    borderWidth: string;
                                    top: string;
                                };
                            };
                        };
                    };
                };
                alternativeLabel: {
                    '& [class*="MuiStepButton-root"]': {
                        alignItems: string;
                        justifyContent: string;
                    };
                    '& [class*="MuiStepConnector-lineHorizontal"]': {
                        position: string;
                        top: string;
                        left: string;
                        right: string;
                    };
                };
                vertical: {
                    '& [class*="MuiStepContent-root"]': {
                        marginLeft: string;
                        borderLeft: string;
                        paddingLeft: string;
                        paddingTop: string;
                    };
                };
            };
        };
        MuiStepButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        '& [class*="MuiStepLabel-iconContainer"]': {
                            outline: string;
                        };
                        '& [class*="Mui-error"]': {
                            '& [class*="MuiStepLabel-iconContainer"]': {
                                outline: string;
                            };
                        };
                    };
                    "&:active": {
                        '& [class*="MuiStepLabel-iconContainer"]': {
                            outline: string;
                        };
                        '& [class*="Mui-error"]': {
                            '& [class*="MuiStepLabel-iconContainer"]': {
                                outline: string;
                            };
                        };
                    };
                    "&:focus-visible": {
                        '& [class*="MuiStepLabel-iconContainer"]': {
                            outline: string;
                            outlineOffset: string;
                        };
                    };
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: number;
                    letterSpacing: string;
                    lineHeight: string;
                };
            };
        };
        MuiStepConnector: {
            styleOverrides: {
                vertical: {
                    marginLeft: string;
                };
                lineHorizontal: {
                    borderTop: string;
                };
                lineVertical: {
                    borderLeft: string;
                };
            };
        };
        MuiStepLabel: {
            styleOverrides: {
                root: {
                    padding: string;
                    '&[class*="alternativeLabel"]': {
                        flexDirection: string;
                        alignItems: string;
                        '& [class*="MuiStepLabel-label"]': {
                            marginLeft: string;
                            marginTop: string;
                        };
                        '& [class*="MuiStepLabel-labelContainer"]': {
                            textAlign: string;
                            margin: string;
                        };
                    };
                };
                iconContainer: {
                    zIndex: number;
                    height: string;
                    width: string;
                    borderRadius: string;
                    boxShadow: string;
                    paddingRight: string;
                    marginRight: string;
                    '&[class*="Mui-active"]': {
                        boxShadow: string;
                        '& [class*="MuiSvgIcon"]': {
                            "& text": {
                                fontWeight: number;
                            };
                        };
                    };
                    '&[class*="Mui-completed"]': {
                        boxShadow: string;
                        backgroundColor: string;
                    };
                    '&[class*="Mui-completed"][class*="Mui-active"]': {
                        boxShadow: string;
                        backgroundColor: string;
                    };
                    '&[class*="Mui-error"]': {
                        boxShadow: string;
                        backgroundColor: string;
                        '& [class*="MuiSvgIcon"]': {
                            color: string;
                        };
                    };
                    '&[class*="Mui-error"][class*="Mui-active"]': {
                        boxShadow: string;
                        backgroundColor: string;
                        '& [class*="MuiSvgIcon"]': {
                            color: string;
                        };
                    };
                    '&[class*="Mui-disabled"]': {
                        boxShadow: string;
                        backgroundColor: string;
                        '& [class*="MuiSvgIcon"]': {
                            "& text": {
                                fill: string;
                            };
                        };
                    };
                    '& [class*="MuiSvgIcon"]': {
                        height: string;
                        width: string;
                        "& text": {
                            fontSize: string;
                            fill: string;
                        };
                    };
                };
                horizontal: {
                    '& [class*="MuiStepLabel-iconContainer"]': {
                        padding: string;
                    };
                };
                label: {
                    fontSize: string;
                    color: string;
                    '&[class*="Mui-active"]': {
                        fontWeight: number;
                        color: string;
                    };
                    '&[class*="Mui-completed"]': {
                        color: string;
                    };
                    '&[class*="Mui-disabled"]': {
                        color: string;
                    };
                };
            };
        };
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    "& circle": {
                        display: string;
                    };
                };
            };
        };
        MuiSnackbar: {
            defaultProps: {
                anchorOrigin: {
                    vertical: string;
                    horizontal: string;
                };
            };
            styleOverrides: {
                anchorOriginBottomCenter: {
                    [x: string]: {
                        bottom: string;
                    };
                };
                anchorOriginTopRight: {
                    [x: string]: {
                        top: string;
                        right: string;
                    };
                };
            };
        };
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    [x: string]: string | {
                        minWidth: string;
                    };
                    display: string;
                    justifyContent: string;
                    alignItems: string;
                    backgroundColor: string;
                    backgroundImage: string;
                    boxShadow: string;
                    padding: string;
                    minWidth: string;
                    minHeight: string;
                    margin: string;
                };
                message: {
                    [x: string]: string | {
                        marginRight: string;
                        fontSize: string;
                        minWidth?: undefined;
                        maxWidth?: undefined;
                        '& [class*="MuiLink"]'?: undefined;
                        display?: undefined;
                        padding?: undefined;
                        '& [class*="MuiContainer-root"]'?: undefined;
                        justifyContent?: undefined;
                    } | {
                        minWidth: string;
                        maxWidth: string;
                        '& [class*="MuiLink"]': {
                            cursor: string;
                        };
                        marginRight?: undefined;
                        fontSize?: undefined;
                        display?: undefined;
                        padding?: undefined;
                        '& [class*="MuiContainer-root"]'?: undefined;
                        justifyContent?: undefined;
                    } | {
                        display: string;
                        padding: string;
                        '& [class*="MuiContainer-root"]': {
                            minWidth: string;
                            maxWidth: string;
                            padding: string;
                            marginLeft: string;
                            '& [class*="MuiTypography-root"] + [class*="MuiTypography-root"]': {
                                cursor: string;
                                marginTop: string;
                            };
                        };
                        marginRight?: undefined;
                        fontSize?: undefined;
                        minWidth?: undefined;
                        maxWidth?: undefined;
                        '& [class*="MuiLink"]'?: undefined;
                        justifyContent?: undefined;
                    } | {
                        minWidth: string;
                        justifyContent: string;
                        marginRight?: undefined;
                        fontSize?: undefined;
                        maxWidth?: undefined;
                        '& [class*="MuiLink"]'?: undefined;
                        display?: undefined;
                        padding?: undefined;
                        '& [class*="MuiContainer-root"]'?: undefined;
                    };
                    display: string;
                    alignItems: string;
                    justifyContent: string;
                    padding: string;
                    marginRight: string;
                    '& [class*="MuiSvgIcon-root"]': {
                        marginRight: string;
                        fontSize: string;
                    };
                    '& > [class*="MuiTypography-root"]': {
                        minWidth: string;
                        maxWidth: string;
                        '& [class*="MuiLink"]': {
                            cursor: string;
                        };
                    };
                    '& > [class*="MuiContainer-root"]': {
                        display: string;
                        padding: string;
                        '& [class*="MuiContainer-root"]': {
                            minWidth: string;
                            maxWidth: string;
                            padding: string;
                            marginLeft: string;
                            '& [class*="MuiTypography-root"] + [class*="MuiTypography-root"]': {
                                cursor: string;
                                marginTop: string;
                            };
                        };
                    };
                };
                action: {
                    [x: string]: string | {
                        marginRight: string;
                        alignSelf: string;
                        paddingLeft?: undefined;
                        cursor?: undefined;
                        marginLeft?: undefined;
                    } | {
                        paddingLeft: string;
                        marginRight?: undefined;
                        alignSelf?: undefined;
                        cursor?: undefined;
                        marginLeft?: undefined;
                    } | {
                        padding: string;
                        borderRadius: string;
                        border: string;
                        "&:hover": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        "&:active": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        "&:focus": {
                            outline: string;
                        };
                        "&:focus-visible": {
                            "&:hover, &:active": {
                                backgroundColor: string;
                            };
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            border: string;
                        };
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                        boxShadow: string;
                        cursor: string;
                        fontSize: string;
                        marginRight?: undefined;
                        alignSelf?: undefined;
                        paddingLeft?: undefined;
                        marginLeft?: undefined;
                    } | {
                        cursor: string;
                        marginRight?: undefined;
                        alignSelf?: undefined;
                        paddingLeft?: undefined;
                        marginLeft?: undefined;
                    } | {
                        marginLeft: string;
                        marginRight?: undefined;
                        alignSelf?: undefined;
                        paddingLeft?: undefined;
                        cursor?: undefined;
                    };
                    margin: string;
                    padding: string;
                    alignSelf: string;
                    '&:not(:has( > [class*="MuiSvgIcon-root"]))': {
                        marginRight: string;
                        alignSelf: string;
                    };
                    '& [class*="MuiSvgIcon-root"]': {
                        padding: string;
                        borderRadius: string;
                        border: string;
                        "&:hover": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        "&:active": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        "&:focus": {
                            outline: string;
                        };
                        "&:focus-visible": {
                            "&:hover, &:active": {
                                backgroundColor: string;
                            };
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            border: string;
                        };
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                        boxShadow: string;
                        cursor: string;
                        fontSize: string;
                    };
                    '& [class*="MuiTypography-root"] [class*="MuiLink"]': {
                        cursor: string;
                    };
                    '& [class*="MuiTypography-root"] + [class*="MuiSvgIcon-root"]': {
                        marginLeft: string;
                    };
                };
            };
        };
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    backgroundColor: string;
                };
            };
        };
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
        MuiRadio: {
            styleOverrides: {
                root: {
                    fontSize: string;
                    padding: string;
                    margin: string;
                    borderRadius: string;
                    "&:hover": {
                        outline: string;
                    };
                    "&:focus, &.Mui-focusVisible": {
                        outline: string;
                        outlineOffset: string;
                    };
                    "&:active": {
                        outline: string;
                    };
                    '& + [class*="MuiFormControlLabel-label"]': {
                        color: string;
                        paddingLeft: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                    '& [class*="MuiSvgIcon-root"]': {
                        width: string;
                        height: string;
                        color: string;
                    };
                    "& .DhigRadio--icon--inner": {
                        width: string;
                        height: string;
                        position: string;
                    };
                    '&[class*="MuiRadio-colorSecondary"]:hover, &[class*="MuiRadio-colorSecondary"].Mui-checked:hover': {
                        backgroundColor: string;
                    };
                };
            };
        };
        MuiPopper: {
            styleOverrides: {
                root: {
                    "&.DhigFlyout": {
                        background: string;
                        "&[class*='MuiTooltip-popper'][data-popper-placement*='top'] [class*='MuiTooltip-arrow']:before": {
                            boxShadow: string;
                        };
                        "&[class*='MuiTooltip-popper'][data-popper-placement*='top'] [class*='MuiTooltip-arrow']": {
                            marginBottom: string;
                            bottom: string;
                        };
                        "&[class*='MuiTooltip-popper'][data-popper-placement*='bottom'] [class*='MuiTooltip-arrow']": {
                            top: string;
                            marginTop: string;
                        };
                        "& [class*='MuiTooltip-tooltip']": {
                            background: string;
                            boxShadow: string;
                            padding: string;
                            borderRadius: string;
                            "& [class*='MuiTooltip-arrow']": {
                                fontSize: string;
                            };
                            "& [class*='MuiTooltip-arrow']:before": {
                                backgroundColor: string;
                                boxShadow: string;
                            };
                            "& [class*='MuiPaper-root']": {
                                boxShadow: string;
                                '& [class*="MuiList-root"][role="menu"]': {
                                    outline: string;
                                };
                            };
                            "& [class*='MuiMenuItem-root']": {
                                padding: string;
                                "&:focus": {
                                    backgroundColor: string;
                                    padding: string;
                                    "&.Mui-selected": {
                                        backgroundColor: string;
                                    };
                                };
                                "& [class*='MuiSvgIcon-root']": {
                                    position: string;
                                    right: string;
                                };
                            };
                            "& [class*='MuiMenuItem-root']:active": {
                                background: string;
                            };
                        };
                    };
                    '&[class*="MuiAutocomplete-popper"]': {
                        '& [class*="MuiPaper-root"]': {
                            color: string;
                            boxShadow: string;
                            borderRadius: string;
                            margin: string;
                            backgroundColor: string;
                            '& [class*="MuiAutocomplete-noOptions"]': {
                                color: string;
                            };
                            '& [class*="MuiAutocomplete-listbox"]': {
                                '& [class*="MuiAutocomplete-option"]': {
                                    '&[aria-selected="true"]': {
                                        backgroundColor: string;
                                    };
                                    '&[aria-disabled="true"]': {
                                        opacity: string;
                                        pointerEvents: string;
                                    };
                                    "&.Mui-focused:hover": {
                                        transitionTimingFunction: string;
                                        transitionDuration: string;
                                        backgroundColor: string;
                                    };
                                    "&.Mui-focused:active, &:active": {
                                        transitionTimingFunction: string;
                                        transitionDuration: string;
                                        backgroundColor: string;
                                    };
                                    "&.Mui-focused.Mui-focusVisible": {
                                        transitionTimingFunction: string;
                                        transitionDuration: string;
                                        boxShadow: string;
                                    };
                                    '& [class*="DhigCombobox--checkedIcon"]': {
                                        position: string;
                                        right: string;
                                    };
                                    '& [class*="MuiCheckbox-root"]': {
                                        marginRight: string;
                                    };
                                    transitionTimingFunction: string;
                                    transitionDuration: string;
                                    cursor: string;
                                    display: string;
                                    boxSizing: string;
                                    alignItems: string;
                                    padding: string;
                                    justifyContent: string;
                                };
                                "& li": {
                                    '[class*="MuiListSubheader-root"]': {
                                        borderTop: string;
                                        marginLeft: string;
                                        marginRight: string;
                                        background: string;
                                    };
                                    '&:first-of-type [class*="MuiListSubheader-root"]': {
                                        borderTop: string;
                                    };
                                };
                            };
                            '& [class*="MuiListSubheader-root"]': {
                                backgroundColor: string;
                            };
                            '& [class*="DhigCombobox--addendum"]': {
                                padding: string;
                                fontFamily: string;
                                fontSize: string;
                                fontWeight: number;
                                letterSpacing: string;
                                lineHeight: string;
                                color: string;
                            };
                            fontFamily: string;
                            fontSize: string;
                            fontWeight: number;
                            letterSpacing: string;
                            lineHeight: string;
                        };
                    };
                };
            };
        };
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
        MuiPagination: {
            defaultProps: {
                shape: string;
                variant: string;
            };
            styleOverrides: {
                root: {
                    '& + [class*="MuiTypography-root"]': {
                        lineHeight: string;
                        paddingTop: string;
                    };
                    '&[single="true"]': {
                        "& .Mui-selected, & .Mui-selected.Mui-disabled": {
                            backgroundColor: string;
                            border: number;
                            color: string;
                            opacity: number;
                        };
                    };
                };
                ul: {
                    justifyContent: string;
                    "& li": {
                        margin: string;
                        "&:focus-visible": {
                            outline: string;
                        };
                    };
                };
            };
        };
        MuiPaginationItem: {
            defaultProps: {
                shape: string;
                slots: {
                    previous: () => import("react").JSX.Element;
                    next: () => import("react").JSX.Element;
                };
                variant: string;
            };
            styleOverrides: {
                root: {
                    color: string;
                    "&:hover": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&:active": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&:focus-visible": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                        boxShadow: string;
                    };
                    "&.Mui-selected": {
                        "&:hover": {
                            backgroundColor: string;
                        };
                        "&:focus-visible": {
                            backgroundColor: string;
                        };
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                        border: string;
                    };
                    "&.Mui-disabled": {
                        border: number;
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    lineHeight: string;
                    minWidth: string;
                    maxWidth: string;
                    height: string;
                    margin: number;
                    borderRadius: string;
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: number;
                    letterSpacing: string;
                    border: string;
                    padding: string;
                };
                previousNext: {
                    borderRadius: string;
                    minWidth: string;
                    maxWidth: string;
                    height: string;
                    padding: string;
                };
                ellipsis: {
                    cursor: string;
                    "&:hover, &:active, &:focus-visible": {
                        backgroundColor: string;
                    };
                };
                rounded: {
                    borderRadius: string;
                };
            };
        };
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    boxShadow: string;
                    borderRadius: string;
                    outline: string;
                    '&:not(.Mui-disabled) [class*="MuiOutlinedInput-input"]:before': {
                        left: number;
                        right: number;
                        bottom: number;
                        display: string;
                        height: string;
                        content: string;
                        position: string;
                    };
                    '& [class*="MuiSelect-icon"], [class*="MuiNativeSelect-icon"]': {
                        color: string;
                        marginRight: string;
                    };
                    "&.Mui-error": {
                        boxShadow: string;
                        '&:hover, & [class*="MuiOutlinedInput-input"]:focus-visible:before': {
                            boxShadow: string;
                        };
                        "&.Mui-focused": {
                            boxShadow: string;
                        };
                    };
                    "&.Mui-disabled": {
                        opacity: number;
                        "& .MuiSvgIcon-root": {
                            color: string;
                        };
                    };
                };
                input: {
                    padding: string;
                    height: string;
                    "&.Mui-error": {
                        "&:focus:before": {
                            boxShadow: string;
                        };
                        "&:hover:before": {
                            boxShadow: string;
                        };
                    };
                    "&[aria-expanded='true']": {
                        borderBottomWidth: string;
                        borderRadius: string;
                        boxShadow: string;
                        "&:before": {
                            boxShadow: string;
                        };
                        "&.Mui-error": {
                            boxShadow: string;
                            "&:before": {
                                boxShadow: string;
                            };
                        };
                    };
                    "&:hover:before": {
                        borderBottomWidth: string;
                        boxShadow: string;
                        transitionTimingFunction: string;
                        transitionDuration: string;
                    };
                    "&:focus:before, &:focus-visible:before": {
                        borderBottomWidth: string;
                        borderRadius: string;
                        boxShadow: string;
                    };
                };
                notchedOutline: {
                    border: number;
                    borderRadius: string;
                };
            };
        };
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
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    backgroundColor: string;
                    color: string;
                    padding: string;
                    fontSize: string;
                    fontWeight: number;
                    lineHeight: string;
                    margin: string;
                };
                gutters: {
                    paddingLeft: string;
                    paddingRight: string;
                };
            };
        };
        MuiLink: {
            styleOverrides: {
                root: any;
                underlineNone: {
                    textDecoration: string;
                };
            };
        };
        MuiLinearProgress: {
            defaultProps: {
                variant: string;
                value: number;
            };
            styleOverrides: {
                root: {
                    height: string;
                    "&.DhigLinearProgress--size--small": {
                        height: string;
                    };
                    "& + .DhigLinearProgressLabel": {
                        display: string;
                        justifyContent: string;
                        marginTop: string;
                    };
                };
                colorPrimary: {
                    backgroundColor: string;
                };
                barColorPrimary: {
                    backgroundColor: string;
                };
                bar1Indeterminate: {
                    animation: string;
                };
                bar2Indeterminate: {
                    animation: string;
                    opacity: number;
                };
            };
        };
        MuiInput: {
            styleOverrides: {
                root: {
                    fontWeight: number;
                };
                input: {
                    "&::placeholder": {
                        fontWeight: number;
                    };
                };
                underline: {
                    '&[class*="MuiInputBase-root"]': {
                        marginTop: string;
                        padding: string;
                        "&:before": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            height: string;
                        };
                        "&:after": {
                            borderBottom: string;
                        };
                        "&.Mui-error:before": {
                            borderBottomWidth: string;
                        };
                        "&.Mui-error:after": {
                            borderBottomWidth: string;
                        };
                        "&.Mui-disabled": {
                            opacity: number;
                            pointerEvents: string;
                        };
                        "&:hover": {
                            '&[class*="MuiFilledInput-underline"]': {
                                boxShadow: string;
                            };
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            boxShadow: string;
                        };
                        "&:hover:not(.Mui-disabled):before": {
                            borderBottomWidth: string;
                            boxShadow: string;
                        };
                        "&.Mui-error, &.Mui-error:hover, &.Mui-focused.Mui-error": {
                            boxShadow: string;
                            '&[class*="MuiFilledInput-underline"]': {
                                boxShadow: string;
                            };
                        };
                        "&.Mui-error:hover:not(.Mui-disabled):before": {
                            boxShadow: string;
                        };
                        "&.Mui-focused, &:focus, &:focus-visible": {
                            boxShadow: string;
                            outline: string;
                            '&[class*="MuiFilledInput-underline"]': {
                                boxShadow: string;
                            };
                        };
                        "&.Mui-focused:not(.Mui-disabled):before, &:focus:not(.Mui-disabled):before, &:focus-visible:not(.Mui-disabled):before": {
                            borderBottomWidth: string;
                            boxShadow: string;
                        };
                        "&.Mui-error.Mui-focused:not(.Mui-disabled):before, &.Mui-error:focus:not(.Mui-disabled):before, &.Mui-error:focus-visible:not(.Mui-disabled):before": {
                            borderBottomWidth: string;
                            boxShadow: string;
                        };
                        '& + .DhigTextInput--count + [class*="MuiFormHelperText-root"]': {
                            marginTop: string;
                            paddingRight: string;
                        };
                        "&.Mui-error + .DhigTextInput--count": {
                            color: string;
                        };
                        "& + .DhigTextInput--count + .Mui-error": {
                            position: string;
                            paddingLeft: string;
                            '& [class*="MuiSvgIcon-root"]': {
                                position: string;
                                left: string;
                            };
                        };
                        "& + .Mui-error": {
                            position: string;
                            paddingLeft: string;
                            "& [class*='MuiSvgIcon-root']": {
                                position: string;
                                left: string;
                            };
                        };
                        '& [class*="MuiSelect-icon"]': {
                            color: string;
                            marginRight: string;
                            top: string;
                        };
                        '& [class*="MuiInputAdornment-root"]': {
                            width: string;
                            paddingLeft: number;
                            paddingRight: number;
                            "button svg[class*='MuiSvgIcon-root']": {
                                width: string;
                                height: string;
                                color: string;
                            };
                            '&[class*="MuiInputAdornment-positionStart"]': {
                                marginLeft: string;
                                marginRight: string;
                            };
                            '&[class*="MuiInputAdornment-positionEnd"]': {
                                marginLeft: string;
                                marginRight: string;
                                "& [class*='MuiButtonBase-root']": {
                                    width: string;
                                    height: string;
                                };
                            };
                        };
                        '&[class*="MuiInputBase-multiline"]': {
                            padding: string;
                        };
                        '& [class*="MuiInputBase-input"]': {
                            '&[class*="MuiInputBase-inputMultiline"]': {
                                padding: string;
                            };
                            '&[class*="MuiInputBase-inputAdornedStart"]': {
                                paddingLeft: string;
                                marginLeft: string;
                            };
                            '&[class*="MuiInputBase-inputAdornedEnd"]': {
                                paddingRight: string;
                                marginRight: string;
                            };
                            fontFamily: string;
                            fontSize: string;
                            fontWeight: number;
                            letterSpacing: string;
                            lineHeight: string;
                            padding: string;
                            color: string;
                            height: string;
                        };
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        boxShadow: string;
                        color: string;
                    };
                    "&.DhigNumberInput": {
                        paddingRight: string;
                        "& [type='number']": {
                            minWidth: string;
                            paddingRight: string;
                            marginRight: string;
                            appearance: string;
                            "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
                                appearance: string;
                            };
                            '& ~ [class*="MuiInputAdornment-root"][class*="MuiInputAdornment-positionEnd"]': {
                                borderRadius: string;
                                cursor: string;
                                height: string;
                                margin: string;
                                padding: string;
                                width: string;
                                "&:hover": {
                                    backgroundColor: string;
                                };
                                "&:active": {
                                    backgroundColor: string;
                                };
                                "&:focus-visible": {
                                    boxShadow: string;
                                    outline: string;
                                    backgroundColor: string;
                                };
                                '[class*="MuiSvgIcon-root"]': {
                                    cursor: string;
                                    height: string;
                                    width: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    maxWidth: string;
                    "& .DhigInputLabel--hintText, &:not(.Mui-required) > [class*='MuiTypography']": {
                        paddingLeft: string;
                        color: string;
                    };
                    "&.Mui-error": {
                        color: string;
                    };
                    "&.Mui-disabled": {
                        opacity: number;
                    };
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: number;
                    letterSpacing: string;
                    lineHeight: string;
                    marginBottom: string;
                    color: string;
                };
                formControl: {
                    "&[class*='MuiInputLabel-root']": {
                        position: string;
                        left: string;
                        top: string;
                        transform: string;
                    };
                };
                shrink: {
                    transform: string;
                    transformOrigin: string;
                };
                filled: {
                    transform: string;
                    '&[class*="MuiInputLabel-shrink"]': {
                        transform: string;
                    };
                    marginLeft: string;
                };
                outlined: {
                    transform: string;
                    '&[class*="MuiInputLabel-shrink"]': {
                        transform: string;
                    };
                };
            };
        };
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
        MuiGrid: {
            styleOverrides: {
                root: {
                    "&[class*='MuiGrid-container']": {
                        maxWidth: string;
                    };
                };
            };
        };
        MuiGrid2: {
            defaultProps: {
                spacing: {
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
            };
        };
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    "&.Mui-error": {
                        color: string;
                    };
                    "&.Mui-disabled": {
                        color: string;
                    };
                };
                asterisk: {
                    display: string;
                };
            };
        };
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    display: string;
                    alignItems: string;
                    "& > svg": {
                        paddingRight: string;
                    };
                    "&.Mui-error": {
                        fontWeight: number;
                        opacity: number;
                    };
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: number;
                    letterSpacing: string;
                    lineHeight: string;
                    marginTop: string;
                    color: string;
                };
                contained: {
                    marginLeft: number;
                    marginRight: number;
                };
            };
        };
        MuiFormGroup: {
            styleOverrides: {
                root: {
                    "& label": {
                        marginBottom: string;
                    };
                };
            };
        };
        MuiFormControl: {
            styleOverrides: {
                root: {
                    '& label + [class*="MuiInput-formControl"]': {
                        marginTop: number;
                    };
                    "& legend": {
                        marginBottom: string;
                        fontSize: string;
                        color: string;
                    };
                    "& .DhigTextInput--count": {
                        color: string;
                        fontSize: string;
                        textAlign: string;
                        margin: string;
                    };
                    "& [class*='MuiFormLabel-colorSuccess'] + * + [class*='MuiFormHelperText-root']": {
                        color: string;
                        fontWeight: number;
                    };
                    "& [class*='MuiInputLabel-root'].Mui-focused": {
                        color: string;
                    };
                };
            };
        };
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    marginLeft: number;
                    "&.Mui-disabled": {
                        opacity: number;
                        '& [class*="MuiCheckbox-root"]': {
                            "&.Mui-disabled": {
                                opacity: number;
                            };
                        };
                    };
                    "&.Mui-error": {
                        '& [class*="MuiFormControlLabel-label"]': {
                            color: string;
                        };
                        '& [class*="MuiCheckbox-root"]': {
                            "& > svg": {
                                outline: string;
                                outlineOffset: string;
                                borderRadius: string;
                            };
                        };
                    };
                    '& [class*="MuiFormControlLabel-label"][class*="MuiTypography-smallprint"]': {
                        fontSize: string;
                    };
                };
                label: {
                    "&.Mui-disabled": {
                        color: string;
                    };
                };
            };
        };
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: string;
                    borderTopLeftRadius: number;
                    borderTopRightRadius: number;
                    boxShadow: string;
                    "&:hover": {
                        backgroundColor: string;
                        boxShadow: string;
                    };
                    "&.Mui-focused": {
                        backgroundColor: string;
                        boxShadow: string;
                    };
                    '& + [class*="MuiFormHelperText-root"]': {
                        marginLeft: string;
                    };
                    "&.Mui-error": {
                        marginLeft: number;
                        '& div[class*="MuiFilledInput-input"]': {
                            borderRadius: string;
                            boxShadow: string;
                            padding: string;
                            "&:focus": {
                                backgroundColor: string;
                            };
                            "&:hover, &:active:not(.Mui-disabled), &[aria-expanded='true'][class*=\"MuiSelect-filled\"]": {
                                "&:not(.Mui-disabled):not(:focus):not(:focus-visible)": {
                                    borderBottom: string;
                                    "& + input + .MuiSelect-icon": {
                                        marginRight: string;
                                    };
                                };
                            };
                        };
                    };
                    '& [class*="MuiSelect-icon"], [class*="MuiNativeSelect-icon"]': {
                        color: string;
                        marginRight: string;
                        position: string;
                        right: number;
                        pointerEvents: string;
                    };
                    '&:not(.Mui-disabled) [class*="MuiFilledInput-input"]:before': {
                        left: number;
                        right: number;
                        bottom: number;
                        display: string;
                        height: string;
                        content: string;
                        position: string;
                    };
                    '&[class*="MuiSelect-root"]:not(.Mui-disabled, .Mui-error):before': {
                        borderBottom: string;
                        left: string;
                    };
                    '&[class*="MuiSelect-root"]:hover:not(.Mui-disabled, .Mui-error):before': {
                        borderBottom: string;
                    };
                };
                input: {
                    padding: string;
                    borderBottom: string;
                    height: string;
                    "&:focus, &:focus-visible": {
                        borderRadius: string;
                        boxShadow: string;
                        backgroundColor: string;
                        "&[aria-expanded='true']": {
                            boxShadow: string;
                        };
                    };
                    "&[data-active='true']:not(.Mui-error)": {
                        borderBottom: string;
                    };
                };
                underline: {
                    borderBottom: number;
                    "&:hover:before": {
                        borderBottom: string;
                        left: string;
                    };
                    "&:hover:focus-within:before": {
                        borderBottom: number;
                    };
                    "&:before, &:after, &.Mui-disabled:before, &.Mui-error:before, &:focus:before, &:focus-visible:before, &:active:before": {
                        borderBottom: number;
                    };
                };
            };
        };
        MuiDivider: {
            defaultProps: {
                light: boolean;
            };
            styleOverrides: {
                root: {
                    backgroundColor: string;
                };
                light: {
                    backgroundColor: string;
                };
            };
        };
        MuiBackdrop: {
            defaultProps: {
                TransitionComponent: import("react").ForwardRefExoticComponent<import("@mui/material/transitions").TransitionProps & {
                    children: import("react").ReactElement<any, any>;
                } & import("react").RefAttributes<unknown>>;
            };
            styleOverrides: {
                root: {
                    "&.DhigModal--backdrop--light": {
                        backgroundColor: string;
                    };
                    "&.DhigModal--backdrop--default": {
                        backgroundColor: string;
                    };
                };
            };
        };
        MuiDialog: {
            defaultProps: {
                TransitionComponent: import("react").ForwardRefExoticComponent<import("@mui/material/transitions").TransitionProps & {
                    children: import("react").ReactElement<any, any>;
                } & import("react").RefAttributes<unknown>>;
            };
            styleOverrides: {
                root: {
                    display: string;
                    alignItems: string;
                    justifyContent: string;
                    '& [class*="MuiPaper-root"]': {
                        color: string;
                    };
                    "& > [role='presentation']": {
                        [x: string]: {
                            width: string;
                            height: string;
                        };
                    };
                };
                paper: {
                    [x: string]: string | {
                        color: string;
                        backgroundColor: string;
                        borderRadius: string;
                        padding: string;
                        position: string;
                        top: string;
                        right: string;
                        "&:hover": {
                            backgroundColor: string;
                        };
                        "&:focus": {
                            boxShadow: string;
                        };
                        "&:focus:active": {
                            backgroundColor: string;
                            boxShadow: string;
                        };
                        "&:active": {
                            backgroundColor: string;
                        };
                        "& svg": {
                            height: string;
                            width: string;
                        };
                    } | {
                        marginBottom: string;
                        marginTop: string;
                        marginLeft?: undefined;
                        marginRight?: undefined;
                        '& [class*="MuiDialogContent-root"]'?: undefined;
                        backgroundColor?: undefined;
                        borderRadius?: undefined;
                        boxShadow?: undefined;
                        maxWidth?: undefined;
                        '& [class*="MuiDialogTitle-root"]'?: undefined;
                        '& [class*="MuiDialogActions-root"]'?: undefined;
                        paddingRight?: undefined;
                    } | {
                        marginLeft: string;
                        marginRight: string;
                        marginBottom?: undefined;
                        marginTop?: undefined;
                        '& [class*="MuiDialogContent-root"]'?: undefined;
                        backgroundColor?: undefined;
                        borderRadius?: undefined;
                        boxShadow?: undefined;
                        maxWidth?: undefined;
                        '& [class*="MuiDialogTitle-root"]'?: undefined;
                        '& [class*="MuiDialogActions-root"]'?: undefined;
                        paddingRight?: undefined;
                    } | {
                        '& [class*="MuiDialogContent-root"]': {
                            padding: string;
                            "& img": {
                                marginBottom: string;
                                height: string;
                                width: string;
                            };
                            "& [class*='MuiSvgIcon-root']": {
                                height: string;
                                paddingBottom: string;
                                width: string;
                            };
                            borderRadius?: undefined;
                            display?: undefined;
                            alignItems?: undefined;
                            justifyContent?: undefined;
                            overflow?: undefined;
                            marginBottom?: undefined;
                            "& :first-of-type"?: undefined;
                            "& ~ *"?: undefined;
                        };
                        marginBottom?: undefined;
                        marginTop?: undefined;
                        marginLeft?: undefined;
                        marginRight?: undefined;
                        backgroundColor?: undefined;
                        borderRadius?: undefined;
                        boxShadow?: undefined;
                        maxWidth?: undefined;
                        '& [class*="MuiDialogTitle-root"]'?: undefined;
                        '& [class*="MuiDialogActions-root"]'?: undefined;
                        paddingRight?: undefined;
                    } | {
                        [x: string]: string | {
                            marginLeft: string;
                            marginRight: string;
                            maxHeight: string;
                            margin?: undefined;
                            borderRadius?: undefined;
                            padding?: undefined;
                            display?: undefined;
                            alignItems?: undefined;
                            justifyContent?: undefined;
                            overflow?: undefined;
                            marginBottom?: undefined;
                            "& :first-of-type"?: undefined;
                            "& ~ *"?: undefined;
                        } | {
                            margin: string;
                            marginLeft?: undefined;
                            marginRight?: undefined;
                            maxHeight?: undefined;
                            borderRadius?: undefined;
                            padding?: undefined;
                            display?: undefined;
                            alignItems?: undefined;
                            justifyContent?: undefined;
                            overflow?: undefined;
                            marginBottom?: undefined;
                            "& :first-of-type"?: undefined;
                            "& ~ *"?: undefined;
                        } | {
                            borderRadius: string;
                            padding: string;
                            display: string;
                            alignItems: string;
                            justifyContent: string;
                            overflow: string;
                            marginBottom: string;
                            "& :first-of-type": {
                                maxWidth: string;
                                maxHeight: string;
                                overflow: string;
                            };
                            "& ~ *": {
                                color: string;
                            };
                            marginLeft?: undefined;
                            marginRight?: undefined;
                            maxHeight?: undefined;
                            margin?: undefined;
                        };
                        backgroundColor: string;
                        borderRadius: string;
                        boxShadow: string;
                        maxWidth: string;
                        '& [class*="MuiDialogContent-root"]': {
                            borderRadius: string;
                            padding: string;
                            display: string;
                            alignItems: string;
                            justifyContent: string;
                            overflow: string;
                            marginBottom: string;
                            "& :first-of-type": {
                                maxWidth: string;
                                maxHeight: string;
                                overflow: string;
                            };
                            "& ~ *": {
                                color: string;
                            };
                            "& img"?: undefined;
                            "& [class*='MuiSvgIcon-root']"?: undefined;
                        };
                        marginBottom?: undefined;
                        marginTop?: undefined;
                        marginLeft?: undefined;
                        marginRight?: undefined;
                        '& [class*="MuiDialogTitle-root"]'?: undefined;
                        '& [class*="MuiDialogActions-root"]'?: undefined;
                        paddingRight?: undefined;
                    } | {
                        [x: string]: {
                            position: string;
                            bottom: string;
                            margin: number;
                            borderBottomLeftRadius: string;
                            borderBottomRightRadius: string;
                            boxShadow: string;
                            borderTop: string;
                        };
                        marginBottom?: undefined;
                        marginTop?: undefined;
                        marginLeft?: undefined;
                        marginRight?: undefined;
                        '& [class*="MuiDialogContent-root"]'?: undefined;
                        backgroundColor?: undefined;
                        borderRadius?: undefined;
                        boxShadow?: undefined;
                        maxWidth?: undefined;
                        '& [class*="MuiDialogTitle-root"]'?: undefined;
                        '& [class*="MuiDialogActions-root"]'?: undefined;
                        paddingRight?: undefined;
                    } | {
                        '& [class*="MuiDialogTitle-root"]': {
                            boxShadow: string;
                            paddingBottom: string;
                        };
                        '& [class*="MuiDialogActions-root"]': {
                            boxShadow: string;
                        };
                        '& [class*="MuiDialogContent-root"]': {
                            padding: string;
                            "& img"?: undefined;
                            "& [class*='MuiSvgIcon-root']"?: undefined;
                            borderRadius?: undefined;
                            display?: undefined;
                            alignItems?: undefined;
                            justifyContent?: undefined;
                            overflow?: undefined;
                            marginBottom?: undefined;
                            "& :first-of-type"?: undefined;
                            "& ~ *"?: undefined;
                        };
                        marginBottom?: undefined;
                        marginTop?: undefined;
                        marginLeft?: undefined;
                        marginRight?: undefined;
                        backgroundColor?: undefined;
                        borderRadius?: undefined;
                        boxShadow?: undefined;
                        maxWidth?: undefined;
                        paddingRight?: undefined;
                    } | {
                        paddingRight: string;
                        marginBottom?: undefined;
                        marginTop?: undefined;
                        marginLeft?: undefined;
                        marginRight?: undefined;
                        '& [class*="MuiDialogContent-root"]'?: undefined;
                        backgroundColor?: undefined;
                        borderRadius?: undefined;
                        boxShadow?: undefined;
                        maxWidth?: undefined;
                        '& [class*="MuiDialogTitle-root"]'?: undefined;
                        '& [class*="MuiDialogActions-root"]'?: undefined;
                    } | {
                        position: string;
                        "& [class*='MuiSvgIcon-root'] svg": {
                            color: string;
                            height: string;
                            width: string;
                        };
                        color: string;
                        backgroundColor: string;
                        borderRadius: string;
                        padding: string;
                        top: string;
                        right: string;
                        "&:hover": {
                            backgroundColor: string;
                        };
                        "&:focus": {
                            boxShadow: string;
                        };
                        "&:focus:active": {
                            backgroundColor: string;
                            boxShadow: string;
                        };
                        "&:active": {
                            backgroundColor: string;
                        };
                        "& svg": {
                            height: string;
                            width: string;
                        };
                        marginBottom?: undefined;
                        marginTop?: undefined;
                        marginLeft?: undefined;
                        marginRight?: undefined;
                        '& [class*="MuiDialogContent-root"]'?: undefined;
                        boxShadow?: undefined;
                        maxWidth?: undefined;
                        '& [class*="MuiDialogTitle-root"]'?: undefined;
                        '& [class*="MuiDialogActions-root"]'?: undefined;
                        paddingRight?: undefined;
                    };
                    background: string;
                    borderRadius: string;
                    boxShadow: string;
                    "&.DhigModal--type--alert": {
                        '& [class*="MuiDialogContent-root"]': {
                            padding: string;
                            "& img": {
                                marginBottom: string;
                                height: string;
                                width: string;
                            };
                            "& [class*='MuiSvgIcon-root']": {
                                height: string;
                                paddingBottom: string;
                                width: string;
                            };
                        };
                    };
                    "&.DhigModal--type--lightbox": {
                        [x: string]: string | {
                            marginLeft: string;
                            marginRight: string;
                            maxHeight: string;
                            margin?: undefined;
                            borderRadius?: undefined;
                            padding?: undefined;
                            display?: undefined;
                            alignItems?: undefined;
                            justifyContent?: undefined;
                            overflow?: undefined;
                            marginBottom?: undefined;
                            "& :first-of-type"?: undefined;
                            "& ~ *"?: undefined;
                        } | {
                            margin: string;
                            marginLeft?: undefined;
                            marginRight?: undefined;
                            maxHeight?: undefined;
                            borderRadius?: undefined;
                            padding?: undefined;
                            display?: undefined;
                            alignItems?: undefined;
                            justifyContent?: undefined;
                            overflow?: undefined;
                            marginBottom?: undefined;
                            "& :first-of-type"?: undefined;
                            "& ~ *"?: undefined;
                        } | {
                            borderRadius: string;
                            padding: string;
                            display: string;
                            alignItems: string;
                            justifyContent: string;
                            overflow: string;
                            marginBottom: string;
                            "& :first-of-type": {
                                maxWidth: string;
                                maxHeight: string;
                                overflow: string;
                            };
                            "& ~ *": {
                                color: string;
                            };
                            marginLeft?: undefined;
                            marginRight?: undefined;
                            maxHeight?: undefined;
                            margin?: undefined;
                        };
                        backgroundColor: string;
                        borderRadius: string;
                        boxShadow: string;
                        maxWidth: string;
                        '& [class*="MuiDialogContent-root"]': {
                            borderRadius: string;
                            padding: string;
                            display: string;
                            alignItems: string;
                            justifyContent: string;
                            overflow: string;
                            marginBottom: string;
                            "& :first-of-type": {
                                maxWidth: string;
                                maxHeight: string;
                                overflow: string;
                            };
                            "& ~ *": {
                                color: string;
                            };
                        };
                    };
                    "&.DhigModal--type--modal": {
                        [x: string]: {
                            position: string;
                            bottom: string;
                            margin: number;
                            borderBottomLeftRadius: string;
                            borderBottomRightRadius: string;
                            boxShadow: string;
                            borderTop: string;
                        };
                    };
                    "&.DhigModal--styleVariant--subdivision": {
                        '& [class*="MuiDialogTitle-root"]': {
                            boxShadow: string;
                            paddingBottom: string;
                        };
                        '& [class*="MuiDialogActions-root"]': {
                            boxShadow: string;
                        };
                        '& [class*="MuiDialogContent-root"]': {
                            padding: string;
                        };
                    };
                    '& .DhigModal--closeButton--default ~ [class*="MuiDialogTitle-root"]': {
                        paddingRight: string;
                    };
                    "& .DhigModal--closeButton--default": {
                        color: string;
                        backgroundColor: string;
                        borderRadius: string;
                        padding: string;
                        position: string;
                        top: string;
                        right: string;
                        "&:hover": {
                            backgroundColor: string;
                        };
                        "&:focus": {
                            boxShadow: string;
                        };
                        "&:focus:active": {
                            backgroundColor: string;
                            boxShadow: string;
                        };
                        "&:active": {
                            backgroundColor: string;
                        };
                        "& svg": {
                            height: string;
                            width: string;
                        };
                    };
                    "& .DhigModal--closeButton--outside": {
                        position: string;
                        "& [class*='MuiSvgIcon-root'] svg": {
                            color: string;
                            height: string;
                            width: string;
                        };
                        color: string;
                        backgroundColor: string;
                        borderRadius: string;
                        padding: string;
                        top: string;
                        right: string;
                        "&:hover": {
                            backgroundColor: string;
                        };
                        "&:focus": {
                            boxShadow: string;
                        };
                        "&:focus:active": {
                            backgroundColor: string;
                            boxShadow: string;
                        };
                        "&:active": {
                            backgroundColor: string;
                        };
                        "& svg": {
                            height: string;
                            width: string;
                        };
                    };
                };
                paperWidthXs: {
                    maxWidth: number;
                };
                paperWidthSm: {
                    maxWidth: number;
                };
                paperWidthMd: {
                    maxWidth: number;
                };
                paperWidthLg: {
                    maxWidth: number;
                };
                paperWidthXl: {
                    maxWidth: number;
                };
                paperScrollPaper: {
                    [x: string]: {
                        maxHeight: string;
                    };
                };
            };
        };
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: string;
                    "& .DhigModal--logo": {
                        filter: string;
                        height: string;
                        width: string;
                    };
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: number;
                    letterSpacing: string;
                    lineHeight: string;
                };
            };
        };
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: string;
                    marginRight: string;
                };
            };
        };
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: string;
                };
            };
        };
        MuiDatePicker: {
            defaultProps: {
                reduceAnimations: boolean;
                slots: {
                    openPickerIcon: any;
                    leftArrowIcon: any;
                    rightArrowIcon: any;
                    switchViewIcon: any;
                };
                slotProps: {
                    field: {
                        shouldRespectLeadingZeros: boolean;
                        sx: {
                            "& [class*='MuiOutlinedInput-input']": {
                                color: string;
                                "&::placeholder": {
                                    color: string;
                                };
                            };
                        };
                    };
                    desktopTransition: {
                        easing: string;
                        timeout: number;
                    };
                };
            };
        };
        MuiPickersCalendarHeader: {
            styleOverrides: {
                root: {
                    "& [class*='MuiButtonBase-root']": {
                        "&:active": {
                            backgroundColor: string;
                        };
                        borderRadius: string;
                        "& svg": {
                            color: string;
                            height: string;
                            width: string;
                        };
                    };
                    "& [class*='MuiPickersArrowSwitcher-button']": {
                        "&:focus-visible": {
                            boxShadow: string;
                        };
                        "&.Mui-disabled": {
                            opacity: number;
                        };
                    };
                    "& [class*='MuiPickersArrowSwitcher-spacer']": {
                        width: string;
                    };
                    marginTop: string;
                    paddingRight: string;
                };
                label: {
                    fontWeight: number;
                };
                labelContainer: {
                    padding: string;
                };
                switchViewButton: {
                    "&:focus-visible": {
                        boxShadow: string;
                    };
                };
            };
        };
        MuiDateCalendar: {
            styleOverrides: {
                root: {
                    height: string;
                    maxHeight: string;
                };
            };
        };
        MuiDayCalendar: {
            styleOverrides: {
                header: {
                    paddingLeft: string;
                    paddingRight: string;
                };
                monthContainer: {
                    position: string;
                    "&[class*='slideExit']": {
                        display: string;
                    };
                };
                weekContainer: {
                    padding: string;
                    margin: string;
                    "&:last-of-type": {
                        marginBottom: string;
                        paddingBottom: string;
                    };
                };
                weekDayLabel: {
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: number;
                    letterSpacing: string;
                    lineHeight: string;
                    color: string;
                    margin: string;
                };
                slideTransition: {
                    overflowX: string;
                    minHeight: string;
                };
            };
        };
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    margin: string;
                    marginLeft: string;
                    "&.Mui-selected": {
                        fontWeight: number;
                        boxShadow: string;
                        "&:focus": {
                            boxShadow: string;
                        };
                        "&:not(:focus)": {
                            boxShadow: string;
                        };
                        "&:hover": {
                            boxShadow: string;
                        };
                        "&:active:focus": {
                            boxShadow: string;
                            backgroundColor: string;
                        };
                    };
                    "&:focus": {
                        backgroundColor: string;
                        boxShadow: string;
                    };
                    "&:focus:active": {
                        backgroundColor: string;
                        boxShadow: string;
                    };
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: number;
                    letterSpacing: string;
                    lineHeight: string;
                    color: string;
                };
                today: {
                    border: string;
                    "&:not(.Mui-selected)": {
                        border: string;
                        "&:focus": {
                            boxShadow: string;
                            backgroundColor: string;
                        };
                        "&:focus:active": {
                            backgroundColor: string;
                            boxShadow: string;
                        };
                    };
                };
            };
        };
        MuiPickersYear: {
            styleOverrides: {
                yearButton: {
                    "&.Mui-selected": {
                        "&:focus-visible": {
                            boxShadow: string;
                        };
                        "&:active:focus": {
                            boxShadow: string;
                        };
                        "&:hover": {
                            boxShadow: string;
                        };
                    };
                    "&:not(.Mui-selected)": {
                        "&:focus": {
                            backgroundColor: string;
                            boxShadow: string;
                        };
                        "&:active": {
                            backgroundColor: string;
                            boxShadow: string;
                        };
                    };
                    "&.Mui-disabled": {
                        color: string;
                    };
                };
            };
        };
        MuiPickersPopper: {
            styleOverrides: {
                root: {
                    borderTopLeftRadius: string;
                    borderTopRightRadius: string;
                    borderBottomLeftRadius: string;
                    borderBottomRightRadius: string;
                };
                paper: {
                    color: string;
                    marginTop: string;
                    borderTopLeftRadius: string;
                    borderTopRightRadius: string;
                    boxShadow: string;
                };
            };
        };
        MuiPickersLayout: {
            styleOverrides: {
                root: {
                    "& [class*='MuiPickersLayout-contentWrapper']": {
                        overflowX: string;
                    };
                    "& [class*='MuiPickersArrowSwitcher-button']": {
                        color: string;
                        borderRadius: string;
                    };
                    "& [class*='MuiPickersLayout-toolbar']": {
                        "& [class*='MuiTypography-root']": {
                            color: string;
                        };
                        padding: string;
                    };
                    "& [class*='MuiPickersLayout-actionBar']": {
                        padding: string;
                        "& [class*='MuiButtonBase-root']:first-of-type": any;
                    };
                    margin: string;
                };
            };
        };
        MuiDateRangeCalendar: {
            styleOverrides: {
                monthContainer: {
                    "& [class*='MuiDayCalendar-header']": {
                        justifyContent: string;
                    };
                };
            };
        };
        MuiDateRangePickerDay: {
            styleOverrides: {
                rangeIntervalDayHighlight: {
                    backgroundColor: string;
                };
                outsideCurrentMonth: {
                    backgroundColor: string;
                };
            };
        };
        MuiContainer: {
            styleOverrides: {
                root: {
                    "&.DhigSplitButton--wrapper": {
                        position: string;
                        width: string;
                        margin: string;
                    };
                    "&.DhigCircularProgress--wrapper": {
                        width: string;
                        margin: string;
                        padding: string;
                        "& .DhigCircularProgress--container": {
                            justifyContent: string;
                            position: string;
                            padding: string;
                            width: string;
                            "& .DhigCircularProgress--label": {
                                display: string;
                                position: string;
                                wordBreak: string;
                                "&.DhigCircularProgress--label--medium": {
                                    width: string;
                                };
                                "&.DhigCircularProgress--label--large": {
                                    width: string;
                                };
                            };
                        };
                        "& .DhigCircularProgress--label--determinate": {
                            justifyContent: string;
                            padding: string;
                            "&.DhigCircularProgress--label--determinate--medium": {
                                marginTop: string;
                                marginLeft: string;
                            };
                            "&.DhigCircularProgress--label--determinate--notMedium": {
                                marginTop: string;
                                marginLeft: string;
                            };
                        };
                    };
                };
            };
        };
        MuiCircularProgress: {
            defaultProps: {
                variant: string;
                value: number;
            };
            styleOverrides: {
                root: {
                    "&.DhigCircularProgress--background": {
                        color: string;
                    };
                    "&.DhigCircularProgress--foreground": {
                        color: string;
                        position: string;
                        left: number;
                    };
                    "&.DhigCircularProgress--size--x-small": {
                        width: string;
                        height: string;
                        '& svg [class*="MuiCircularProgress-circle"]': {
                            strokeWidth: string;
                        };
                    };
                    "&.DhigCircularProgress--size--small": {
                        width: string;
                        height: string;
                        '& svg [class*="MuiCircularProgress-circle"]': {
                            strokeWidth: string;
                        };
                    };
                    "&.DhigCircularProgress--size--medium": {
                        width: string;
                        height: string;
                        '& svg [class*="MuiCircularProgress-circle"]': {
                            strokeWidth: string;
                        };
                    };
                    "&.DhigCircularProgress--size--large": {
                        width: string;
                        height: string;
                        '& svg [class*="MuiCircularProgress-circle"]': {
                            strokeWidth: string;
                        };
                    };
                };
                circleIndeterminate: {
                    animation: string;
                };
                indeterminate: {
                    animation: string;
                };
            };
        };
        MuiChip: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&.DhigChip--selected": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                        color: string;
                    };
                    "&:has(svg:hover), &:has(svg:focus-visible)": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        boxShadow: string;
                        backgroundColor: string;
                    };
                    '& [class*="MuiChip-avatar"]': {
                        margin: string;
                        height: string;
                        width: string;
                        color: string;
                    };
                    '& [class*="MuiChip-icon"]': {
                        margin: string;
                        fontSize: string;
                        color: string;
                        height: string;
                        width: string;
                    };
                    '& [class*="MuiChip-deleteIcon"]': {
                        "&:hover, &:focus:not(:focus-visible):hover": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            color: string;
                            backgroundColor: string;
                        };
                        "&:focus-visible": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            boxShadow: string;
                            outline: string;
                        };
                        "&:focus:not(:focus-visible)": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            boxShadow: string;
                            outline: string;
                        };
                        "&:active, &:focus:not(:focus-visible):active": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        tabIndex: number;
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        color: string;
                        fontSize: string;
                        outlineOffset: string;
                        borderRadius: string;
                        margin: string;
                        display: string;
                        position: string;
                        zIndex: number;
                        padding: string;
                    };
                    "&.Mui-disabled": {
                        opacity: number;
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    fontWeight: number;
                    width: string;
                    padding: string;
                    backgroundColor: string;
                    color: string;
                    fontFamily: string;
                    fontSize: string;
                    letterSpacing: string;
                    lineHeight: string;
                };
                clickable: {
                    "&:hover": {
                        boxShadow: string;
                        color: string;
                    };
                    "&:focus-visible": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        boxShadow: string;
                        backgroundColor: string;
                    };
                    "&:active": {
                        boxShadow: string;
                    };
                };
                deletable: {
                    "&:focus-visible": {
                        boxShadow: string;
                        backgroundColor: string;
                    };
                };
                colorError: {
                    backgroundColor: string;
                    color: string;
                    border: string;
                    "&.DhigChip--selected": {
                        backgroundColor: string;
                        color: string;
                    };
                };
                label: {
                    padding: string;
                };
            };
        };
        MuiCheckbox: {
            defaultProps: {
                checkedIcon: import("react").JSX.Element;
                icon: import("react").JSX.Element;
                indeterminateIcon: import("react").JSX.Element;
            };
            styleOverrides: {
                root: {
                    padding: string;
                    margin: string;
                    outlineOffset: number;
                    '& [class*="MuiSvgIcon-fontSizeSmall"]': {
                        height: string;
                        width: string;
                    };
                    "&.Mui-disabled": {
                        opacity: number;
                        color: string;
                    };
                    "&:hover": {
                        backgroundColor: string;
                    };
                    "&:hover > svg": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        outline: string;
                    };
                    "&:focus, &.Mui-focusVisible, &:focus-visible > svg": {
                        outline: string;
                        outlineOffset: string;
                        borderRadius: string;
                        transition: string;
                    };
                    "&:active > svg": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        outline: string;
                    };
                    '&.Mui-checked:not([class*="MuiCheckbox-indeterminate"])': {
                        "& > svg": {
                            color: string;
                            background: string;
                        };
                        "& span": {
                            background: string;
                        };
                    };
                    "& > svg": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        height: string;
                        width: string;
                        padding: string;
                        border: string;
                        borderRadius: string;
                        boxSizing: string;
                    };
                    "& + [class*=\"MuiFormControlLabel-label\"]": {
                        color: string;
                        paddingLeft: string;
                        fontSize: string;
                        lineHeight: string;
                    };
                };
                colorSecondary: {
                    color: string;
                };
            };
        };
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
        MuiButtonBase: {
            defaultProps: {
                disableRipple: boolean;
            };
        };
        MuiButton: {
            defaultProps: {
                variant: string;
            };
            styleOverrides: {
                outlined: any;
                outlinedSizeSmall: any;
                contained: any;
                containedSizeSmall: any;
                text: any;
                textSizeSmall: any;
                startIcon: {
                    "& svg": {
                        color: string;
                    };
                };
                endIcon: {
                    "& svg": {
                        color: string;
                    };
                };
                iconSizeMedium: {
                    "& > *:first-of-type": {
                        fontSize: string;
                    };
                };
                root: {
                    '& [class*="MuiTouchRipple-root"]': {
                        display: string;
                    };
                    "&:has([class*='MuiButton-endIcon'])": {
                        textAlign: string;
                    };
                    "&:has([class*='MuiButton-startIcon'])": {
                        textAlign: string;
                    };
                    "&[class*='MuiButton-link-button']": any;
                    "&[class*='MuiButton-link-buttonSizeSmall']": any;
                };
            };
        };
        MuiLoadingButton: {
            defaultProps: {
                loadingPosition: string;
                variant: string;
            };
            styleOverrides: {
                root: {
                    textAlign: string;
                    "&[class*='MuiLoadingButton-loading']": {
                        opacity: string;
                    };
                    "&[class*='MuiButton-link-button'].Mui-disabled": {
                        padding: string;
                        opacity: string;
                    };
                    "&:has([class*='MuiLoadingButton-loadingIndicatorEnd'])": {
                        textAlign: string;
                    };
                    '& [class*="MuiLoadingButton-loadingIndicator"]': {
                        '& [class*="DhigCircularProgress--foreground"]': {
                            color: string;
                        };
                    };
                };
                loadingIndicator: {
                    position: string;
                    marginTop: string;
                    "& svg": {
                        color: string;
                    };
                };
                loadingIndicatorStart: {
                    marginRight: string;
                    marginLeft: string;
                };
                loadingIndicatorEnd: {
                    marginRight: string;
                    marginLeft: string;
                };
            };
        };
        MuiButtonGroup: {
            defaultProps: {
                disableElevation: boolean;
                variant: string;
            };
            styleOverrides: {
                root: {
                    '& [class*="MuiButton-root"]': {
                        '& [class*="MuiSvgIcon-root"]': {
                            height: string;
                            width: string;
                        };
                        "&:hover, &:focus, &:active, &:focus-visible": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            minWidth: string;
                        };
                        "&:first-of-type": {
                            borderTopRightRadius: string;
                            borderBottomRightRadius: string;
                        };
                        "&:last-of-type": {
                            borderTopLeftRadius: string;
                            borderBottomLeftRadius: string;
                        };
                        "&:not(:first-of-type)": {
                            "&:hover, &:focus, &:active": {
                                minWidth: string;
                            };
                        };
                        "&:not(:last-of-type)": {
                            "&:hover, &:focus, &:active": {
                                minWidth: string;
                            };
                        };
                        "&:not(:first-of-type):not(:last-of-type)": {
                            borderRadius: string;
                        };
                        '&[class*="MuiButton-sizeSmall"]': {
                            padding: string;
                        };
                        '&[class*="MuiButton-sizeMedium"]': {
                            padding: string;
                        };
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        alignItems: string;
                    };
                    '& [class*="MuiButtonGroup-grouped"]': {
                        minWidth: string;
                        "&:hover": {
                            boxShadow: string;
                        };
                        "&:focus": {
                            boxShadow: string;
                        };
                        "&:focus:focus-visible": {
                            boxShadow: string;
                        };
                        "&:active, &:focus:active": {
                            boxShadow: string;
                        };
                        "&:not(:last-of-type):hover": {
                            borderRight: string;
                        };
                    };
                    '& + [class*="MuiPopper-root"]': {
                        zIndex: number;
                        '& [class*="MuiPaper-root"]': {
                            marginTop: string;
                            boxShadow: string;
                            backgroundColor: string;
                            '& [class*="MuiList-root"]': {
                                padding: string;
                            };
                        };
                    };
                };
                contained: {
                    '& [class*="MuiButton-root"]': {
                        "& svg": {
                            color: string;
                        };
                        "&:not(:last-of-type)": {
                            marginRight: string;
                        };
                    };
                };
                outlined: {
                    '& [class*="MuiButton-root"]': {
                        "& svg": {
                            color: string;
                        };
                        "&:not(:last-of-type)": {
                            borderRightColor: string;
                        };
                    };
                };
            };
        };
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
        MuiAutocomplete: {
            defaultProps: {
                clearIcon: import("react").JSX.Element;
                componentsProps: {
                    clearIndicator: {
                        tabIndex: number;
                    };
                };
            };
            styleOverrides: {
                root: {
                    '&[class*="DhigCombobox"]': {
                        '&[class*="MuiAutocomplete-hasPopupIcon"]': {
                            '& [class*="MuiAutocomplete-inputRoot"]': {
                                paddingRight: string;
                            };
                        };
                        '& [class*="DhigCombobox--textField"]': {
                            '& [class*="DhigCombobox--input"][class*="MuiInputBase-inputAdornedEnd"]': {
                                padding: string;
                            };
                        };
                    };
                    '& [class*="DhigCombobox--textField"]': {
                        '& [class*="MuiInput-root"]': {
                            display: string;
                            flexWrap: string;
                            paddingRight: string;
                        };
                        '& [class*="MuiAutocomplete-endAdornment"]': {
                            display: string;
                            flexDirection: string;
                            marginRight: string;
                            top: string;
                            right: string;
                            minWidth: string;
                            gap: string;
                            "& button": {
                                color: string;
                            };
                        };
                    };
                    '& [class*="DhigCombobox--input"]': {};
                    '&[class*="DhigCombobox--multiple"]': {
                        '& [class*="DhigCombobox--textField"]': {
                            '& [class*="MuiInput-root"]': {
                                paddingLeft: string;
                                paddingBottom: string;
                                minHeight: string;
                                '& [class*="MuiChip-root"]': {
                                    margin: string;
                                };
                            };
                        };
                    };
                    '&[class*="DhigCombobox--layout--grow"]': {
                        '& [class*="DhigCombobox--textField"]': {
                            maxHeight: string;
                            '& [class*="MuiInput-root"]': {
                                '&[class*="MuiInputBase-root"]': {
                                    "&.Mui-focused:not(.Mui-disabled):before": {
                                        boxShadow: string;
                                    };
                                };
                                overflow: string;
                                paddingRight: string;
                                "&::before": {
                                    borderBottom: string;
                                };
                                "&::after": {
                                    borderBottom: string;
                                };
                                "&:hover": {
                                    "&::before": {
                                        boxShadow: string;
                                    };
                                };
                                '& [class*="DhigCombobox--input"]': {
                                    flexBasis: string;
                                    padding: string;
                                    margin: string;
                                    flexGrow: string;
                                    transform: string;
                                    "&:focus": {
                                        minWidth: string;
                                    };
                                };
                            };
                        };
                    };
                    '&[class*="DhigCombobox--layout--fixed"]': {
                        '& [class*="DhigCombobox--textField"]': {
                            '& [class*="MuiInput-root"]': {
                                flexWrap: string;
                                paddingTop: string;
                                '& [class*="MuiChip-root"]': {
                                    marginTop: string;
                                };
                                '& [class*="DhigCombobox--input"]': {
                                    padding: string;
                                    marginLeft: string;
                                };
                            };
                        };
                    };
                    '&[class*="DhigSearch"]': {};
                    '& [class*="DhigSearch--textField"]': {
                        backgroundColor: string;
                        borderRadius: string;
                        height: string;
                        '& [class*="MuiAutocomplete-inputRoot"]': {
                            "&.Mui-focused": {
                                transitionTimingFunction: string;
                                transitionDuration: string;
                                border: string;
                            };
                            "&.Mui-disabled": {
                                '& [class*="MuiInputAdornment-root"]': {
                                    opacity: number;
                                };
                                pointerEvents: string;
                                color: string;
                            };
                            "&:focus, &:focus:active": {
                                transitionTimingFunction: string;
                                transitionDuration: string;
                                border: string;
                            };
                            "&:active": {
                                transitionTimingFunction: string;
                                transitionDuration: string;
                                border: string;
                            };
                            "&:hover, &.Mui-focused:not(:hover)": {
                                '&[class*="MuiInput-root"]': {
                                    boxShadow: string;
                                };
                                transitionTimingFunction: string;
                                transitionDuration: string;
                                backgroundColor: string;
                            };
                            '& [class*="MuiInputAdornment-root"]': {
                                width: string;
                                paddingLeft: string;
                                paddingRight: string;
                                marginRight: string;
                                '& [class*="MuiSvgIcon-root"]': {
                                    height: string;
                                    width: string;
                                };
                            };
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            borderRadius: string;
                            border: string;
                            boxShadow: string;
                            flexWrap: string;
                            height: string;
                        };
                        '& [class*="DhigSearch--input"]': {
                            padding: string;
                        };
                        '& [class*="MuiAutocomplete-endAdornment"]': {
                            top: string;
                            marginRight: string;
                        };
                    };
                    '& [class*="DhigSearch--input"]': {};
                    '& [class*="MuiTextField-root"]': {
                        minHeight: string;
                        '& [class*="MuiInput-root"]': {
                            paddingBottom: string;
                            color: string;
                            '& [class*="MuiAutocomplete-endAdornment"]': {
                                '& [class*="MuiAutocomplete-clearIndicator"]': {
                                    visibility: string;
                                    opacity: number;
                                    '& [class*="MuiSvgIcon-root"]': {
                                        color: string;
                                    };
                                    "&:hover": {
                                        transitionTimingFunction: string;
                                        transitionDuration: string;
                                        backgroundColor: string;
                                    };
                                    "&:active": {
                                        transitionTimingFunction: string;
                                        transitionDuration: string;
                                        backgroundColor: string;
                                    };
                                    "&:focus, &:focus-visible": {
                                        "&:hover, &:active": {
                                            backgroundColor: string;
                                        };
                                        transitionTimingFunction: string;
                                        transitionDuration: string;
                                        outline: string;
                                        boxShadow: string;
                                    };
                                };
                                transitionTimingFunction: string;
                                transitionDuration: string;
                                height: string;
                                width: string;
                            };
                        };
                        "&:hover, &:focus-within": {
                            '& [class*="MuiAutocomplete-endAdornment"]': {
                                '& [class*="MuiAutocomplete-clearIndicator"]': {
                                    opacity: number;
                                };
                            };
                        };
                    };
                    "& [class*='MuiTextField-root']": {
                        "& [class*='MuiInput-root']": {
                            "& [class*='MuiAutocomplete-endAdornment']": {
                                minHeight: string;
                                top: string;
                                maxHeight: string;
                                height: string;
                                display: string;
                                alignItems: string;
                                "& [class*='MuiButtonBase-root']": {
                                    height: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        MuiAlert: {
            defaultProps: {
                severity: string;
                variant: string;
                slots: {
                    closeIcon: any;
                };
            };
            styleOverrides: {
                root: {
                    padding: string;
                    fontWeight: number;
                    fontFamily: string;
                    fontSize: string;
                    letterSpacing: string;
                    lineHeight: string;
                    borderRadius: string;
                    color: string;
                };
                standard: {
                    '& [class*="MuiAlert-action"] > button > svg': {
                        color: string;
                    };
                    '& [class*="MuiAlert-action"] > button': {
                        "&:hover": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        "&:active": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                };
                standardInfo: {
                    backgroundColor: string;
                    '& [class*="MuiAlert-action"] > button': {
                        "&:focus-visible": {
                            boxShadow: string;
                        };
                    };
                };
                standardError: {
                    backgroundColor: string;
                    '& [class*="MuiAlert-action"] > button': {
                        "&:focus-visible": {
                            boxShadow: string;
                        };
                    };
                };
                standardSuccess: {
                    backgroundColor: string;
                    '& [class*="MuiAlert-action"] > button': {
                        "&:focus-visible": {
                            boxShadow: string;
                        };
                    };
                };
                standardWarning: {
                    backgroundColor: string;
                    '& [class*="MuiAlert-action"] > button': {
                        "&:focus-visible": {
                            boxShadow: string;
                        };
                    };
                };
                outlined: {
                    padding: string;
                    '& [class*="MuiAlert-action"] > button > svg': {
                        color: string;
                    };
                    '& [class*="MuiAlert-action"] > button': {
                        "&:hover": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        "&:active": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                };
                outlinedInfo: {
                    border: string;
                    backgroundColor: string;
                    '& [class*="MuiAlert-action"] > button': {
                        "&:focus-visible": {
                            boxShadow: string;
                        };
                    };
                };
                outlinedError: {
                    border: string;
                    backgroundColor: string;
                    '& [class*="MuiAlert-action"] > button': {
                        "&:focus-visible": {
                            boxShadow: string;
                        };
                    };
                };
                outlinedSuccess: {
                    border: string;
                    backgroundColor: string;
                    '& [class*="MuiAlert-action"] > button': {
                        "&:focus-visible": {
                            boxShadow: string;
                        };
                    };
                };
                outlinedWarning: {
                    border: string;
                    backgroundColor: string;
                    '& [class*="MuiAlert-action"] > button': {
                        "&:focus-visible": {
                            boxShadow: string;
                        };
                    };
                };
                filled: {
                    '[class*="MuiAlert-icon"] svg': {
                        color: string;
                    };
                };
                filledInfo: {
                    backgroundColor: string;
                    color: string;
                    '& [class*="MuiAlert-action"] > button > svg': {
                        color: string;
                    };
                    '& [class*="MuiAlert-action"] > button': {
                        "&:hover": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        "&:active": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        "&:focus-visible": {
                            boxShadow: string;
                        };
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                };
                filledError: {
                    backgroundColor: string;
                    color: string;
                    '& [class*="MuiAlert-action"] > button > svg': {
                        color: string;
                    };
                    '& [class*="MuiAlert-action"] > button': {
                        "&:hover": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        "&:active": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        "&:focus-visible": {
                            boxShadow: string;
                        };
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                };
                filledSuccess: {
                    backgroundColor: string;
                    color: string;
                    '& [class*="MuiAlert-action"] > button > svg': {
                        color: string;
                    };
                    '& [class*="MuiAlert-action"] > button': {
                        "&:hover": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        "&:active": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        "&:focus-visible": {
                            boxShadow: string;
                        };
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                };
                filledWarning: {
                    backgroundColor: string;
                    color: string;
                    '& [class*="MuiAlert-action"] > button > svg': {
                        color: string;
                    };
                    '& [class*="MuiAlert-action"] > button': {
                        "&:hover": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        "&:active": {
                            transitionTimingFunction: string;
                            transitionDuration: string;
                            backgroundColor: string;
                        };
                        "&:focus-visible": {
                            boxShadow: string;
                        };
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                };
                action: {
                    paddingLeft: string;
                    "& button svg": {
                        height: string;
                        width: string;
                    };
                };
                message: {
                    lineHeight: string;
                    margin: string;
                    padding: string;
                    paddingTop: string;
                    overflow: string;
                };
                icon: {
                    "& svg": {
                        height: string;
                        width: string;
                    };
                };
            };
        };
        MuiAlertTitle: {
            styleOverrides: {
                root: {
                    marginBottom: string;
                    lineHeight: string;
                    fontFamily: string;
                    fontSize: string;
                    fontWeight: number;
                    letterSpacing: string;
                    color: string;
                };
            };
        };
        MuiAccordion: {
            defaultProps: {
                elevation: number;
            };
            styleOverrides: {
                root: {
                    "&::before": {
                        background: string;
                    };
                    margin: string;
                    '& [class*="MuiAccordionSummary-root"]': {
                        padding: string;
                    };
                    '& [class*="MuiAccordionDetails-root"]': {
                        padding: string;
                    };
                    "&.Mui-expanded": {
                        margin: string;
                        "&:hover": {
                            background: string;
                        };
                        "&:active": {
                            background: string;
                        };
                    };
                    "&:first-of-type": {
                        marginTop: string;
                    };
                    "&:last-child": {
                        marginBottom: string;
                    };
                    "&:focus, &:focus-visible, &:focus-within": {
                        zIndex: number;
                    };
                    "&.Mui-disabled": {
                        backgroundColor: string;
                        "&:hover": {
                            background: string;
                        };
                        "&:focus, &:focus-visible, &:focus-within": {
                            boxShadow: string;
                        };
                        "&:active": {
                            background: string;
                        };
                    };
                    "&.DhigAccordion--density--dense": {
                        '& [class*="MuiAccordionSummary-root"]': {
                            padding: string;
                        };
                        '& [class*="MuiAccordionDetails-root"]': {
                            padding: string;
                        };
                    };
                    "&.DhigAccordion--variant--individualPanel": {
                        boxShadow: string;
                        "&:focus, &:focus-visible, &:focus-within": {
                            '& [class*="MuiAccordionSummary-root"]': {
                                borderRadius: string;
                            };
                        };
                    };
                    "&.DhigAccordion--variant--individualPanel.Mui-expanded": {
                        boxShadow: string;
                        "&:focus, &:focus-visible": {
                            border: string;
                        };
                    };
                    "&.DhigAccordion--variant--flat:first-of-type": {
                        borderTop: string;
                    };
                    "&.DhigAccordion--variant--flat": {
                        borderBottom: string;
                        margin: number;
                        '& [class*="MuiAccordionSummary-root"]': {
                            paddingLeft: string;
                            paddingRight: string;
                            "&::before, &::after": {
                                borderRadius: string;
                            };
                        };
                        '& [class*="MuiAccordionDetails-root"]': {
                            paddingLeft: string;
                            paddingRight: string;
                        };
                        "&:not(:focus):not(:focus-visible):not(:focus-within)": {
                            '& [class*="MuiAccordionSummary-root"]': {
                                paddingLeft: string;
                                paddingRight: string;
                            };
                            '& [class*="MuiAccordionDetails-root"]': {
                                paddingLeft: string;
                            };
                        };
                        "&:focus-within": {
                            '& [class*="MuiAccordionSummary-root"]:focus:not(:focus-visible)': {
                                paddingLeft: string;
                            };
                            '& [class*="MuiAccordionSummary-root"]:focus:not(:focus-visible) ~ [class*="MuiCollapse-root"] [class*="MuiAccordionDetails-root"]': {
                                paddingLeft: string;
                            };
                        };
                    };
                    "&.DhigAccordion--variant--mergedPanel:last-of-type": {
                        borderBottomLeftRadius: string;
                        borderBottomRightRadius: string;
                        borderBottom: string;
                    };
                    "&.DhigAccordion--variant--mergedPanel:first-of-type": {
                        borderTopLeftRadius: string;
                        borderTopRightRadius: string;
                    };
                    "&.DhigAccordion--variant--mergedPanel": {
                        border: string;
                        borderBottom: string;
                        borderRadius: string;
                        margin: string;
                        "&:focus, &:focus-visible, &:focus-within": {
                            '& [class*="MuiAccordionSummary-root"]': {
                                borderRadius: string;
                            };
                        };
                        "&:active": {
                            background: string;
                        };
                        "&.Mui-expanded:active": {
                            backgroundImage: string;
                        };
                        '& [class*="MuiAccordionDetails-root"]': {
                            background: string;
                            borderBottomLeftRadius: string;
                            borderBottomRightRadius: string;
                            marginLeft: string;
                            marginRight: string;
                        };
                    };
                    "&.DhigAccordion--variant--minimal": {
                        border: string;
                        margin: string;
                        '& [class*="MuiAccordionSummary-root"]': {
                            paddingLeft: string;
                            paddingRight: string;
                            "&::before, &::after": {
                                borderRadius: string;
                            };
                        };
                        '& [class*="MuiAccordionDetails-root"]': {
                            paddingLeft: string;
                            paddingRight: string;
                        };
                        "&:not(:focus):not(:focus-visible):not(:focus-within)": {
                            '& [class*="MuiAccordionSummary-root"]': {
                                paddingLeft: string;
                                paddingRight: string;
                            };
                        };
                        "&:focus-within": {
                            '& [class*="MuiAccordionSummary-root"]:focus:not(:focus-visible)': {
                                paddingLeft: string;
                            };
                            '& [class*="MuiAccordionSummary-root"]:focus:not(:focus-visible) ~ [class*="MuiCollapse-root"] [class*="MuiAccordionDetails-root"]': {
                                paddingLeft: string;
                            };
                        };
                        "&.Mui-disabled": {
                            boxShadow: string;
                        };
                    };
                    "&.DhigAccordion--type--stepper": {
                        '& [class*="MuiAccordionSummary-root"]': {
                            "&::before, &::after": {
                                borderRadius: string;
                            };
                        };
                        '& [class*="MuiAccordionSummary-content"]': {
                            "& svg": {
                                fontSize: string;
                                marginRight: string;
                            };
                            '& [class*="MuiTypography-root"]:first-of-type': {
                                marginTop: string;
                            };
                        };
                        '& [class*="MuiAccordionSummary-expandIconWrapper"]': {
                            transform: string;
                            "& button": {
                                padding: string;
                                minWidth: string;
                                fontSize: string;
                                height: string;
                            };
                        };
                    };
                    "&.DhigAccordion--size--normal.DhigAccordion--type--stepper": {
                        '& [class*="MuiAccordionDetails-root"]': {
                            paddingLeft: string;
                            background: string;
                        };
                    };
                    "&.DhigAccordion--size--dense.DhigAccordion--type--stepper": {
                        '& [class*="MuiAccordionDetails-root"]': {
                            paddingLeft: string;
                            background: string;
                        };
                    };
                };
                rounded: {
                    borderRadius: string;
                    "&:first-of-type": {
                        borderTopLeftRadius: string;
                        borderTopRightRadius: string;
                    };
                    "&:last-child": {
                        borderBottomLeftRadius: string;
                        borderBottomRightRadius: string;
                    };
                };
            };
        };
        MuiAccordionSummary: {
            defaultProps: {
                expandIcon: import("react").JSX.Element;
            };
            styleOverrides: {
                root: {
                    zIndex: number;
                    "&::before, &::after": {
                        borderRadius: string;
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        content: string;
                        position: string;
                        top: number;
                        right: number;
                        bottom: number;
                        left: number;
                        zIndex: string;
                        opacity: number;
                    };
                    "&::before": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        background: string;
                    };
                    "&::after": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        background: string;
                    };
                    "&.Mui-expanded": {
                        backgroundColor: string;
                        minHeight: string;
                    };
                    "&:hover:not(:active)::before": {
                        opacity: number;
                    };
                    "&:focus": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        boxShadow: string;
                    };
                    "&:focus:not(:focus-visible)": {
                        boxShadow: string;
                    };
                    "&:focus-visible": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        boxShadow: string;
                    };
                    "&:active::after": {
                        opacity: number;
                    };
                    "&.Mui-focused, &.Mui-focusVisible": {
                        backgroundColor: string;
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    minHeight: string;
                    backgroundColor: string;
                };
                content: {
                    margin: string;
                    "&.Mui-expanded": {
                        margin: string;
                    };
                };
                expandIconWrapper: {
                    '& [class*="MuiSvgIcon-root"]': {
                        color: string;
                        fontSize: string;
                    };
                };
            };
        };
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    flexDirection: string;
                    color: string;
                };
            };
        };
    };
};
export default theme;
//# sourceMappingURL=dark.d.ts.map