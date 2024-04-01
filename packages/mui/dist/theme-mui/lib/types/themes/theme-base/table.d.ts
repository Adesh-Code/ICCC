import type { ThemeData } from "../../types";
export declare const makeTableStyles: ({ primitives, tokens }: ThemeData) => {
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
};
//# sourceMappingURL=table.d.ts.map