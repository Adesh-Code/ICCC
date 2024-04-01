import type { Theme } from "@mui/material/styles";
export type DhigTheme = ThemeData & Theme;
export type ThemeData = {
    primitives: Primitives;
    tokens: Tokens;
};
export type Primitives = {
    borderRadii: {
        [key: string]: string;
    };
    borderWidths: {
        [key: string]: string;
    };
    colors: {
        accent: {
            [key: string]: string;
        };
        detail: {
            [key: string]: string;
        };
        primary: {
            [key: string]: string;
        };
        product: {
            [key: string]: string;
        };
        tint: {
            [key: string]: string;
        };
    };
    fontFamilies: {
        [key: string]: string;
    };
    fontSizes: {
        [key: string]: string;
    };
    fontSizeFallbacks: {
        [key: string]: string;
    };
    fontWeights: {
        [key: string]: number;
    };
    grid: {
        scale: {
            [key: string]: string;
        };
        gutter: {
            [key: string]: string;
        };
        "max-width": string;
        margins: {
            [key: string]: string;
        };
    };
    gradients: {
        [key: string]: string;
    };
    letterSpacings: {
        [key: string]: string;
    };
    lineHeights: {
        [key: string]: string;
    };
    opacities: {
        [key: string]: number;
    };
    spacings: {
        [key: string]: string;
    };
    transitions: {
        duration: {
            [key: string]: string;
        };
        easing: {
            [key: string]: string;
        };
    };
};
export type Tokens = {
    colors: {
        [key: string]: string;
    };
    effects: {
        [key: string]: string;
    };
    gradients: {
        [key: string]: string;
    };
    grid: {
        xs: {
            [key: string]: string;
        };
        sm: {
            [key: string]: string;
        };
        md: {
            [key: string]: string;
        };
        lg: {
            [key: string]: string;
        };
        xl: {
            [key: string]: string;
        };
    };
    opacities: {
        [key: string]: number;
    };
    transitions: {
        [key: string]: {
            transitionTimingFunction: string;
            transitionDuration: string;
        };
    };
    typography: {
        [key: string]: {
            fontFamily: string;
            fontSize: string;
            fontWeight: number;
            letterSpacing: string;
            lineHeight: string;
        };
    };
    button: any;
    tab: any;
    tabs: any;
    textLink: any;
};
export type PaletteMode = "light" | "dark";
//# sourceMappingURL=types.d.ts.map