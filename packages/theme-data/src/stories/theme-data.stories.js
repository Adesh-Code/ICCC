import React from "react";

import { makeThemeContextProvider, ThemeContext } from "../theme-context";
import Role from "./components/Role";

/**
 * Extract property from object given a path
 *
 * @param {*} designTokens - Design tokens
 * @param {*} path - Path to the property value
 * @returns
 */
const getDesignTokensByPath = (designTokens, path) => {
  let current = designTokens;
  for (let i = 0; i < path.length; i++) {
    current = current[path[i]];
  }
  return current;
};

const renderTokensByType = ({
  path,
  type,
  theme = "light",
  recursive = false
}) => {
  const ThemeContextProvider = makeThemeContextProvider(theme);
  return (
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {({ designTokens }) => {
          const designTokensByPath = getDesignTokensByPath(designTokens, path);
          return Object.entries(designTokensByPath).map(([key]) => {
            const isObject =
              typeof designTokensByPath[key] === "object" &&
              designTokensByPath[key] !== null;
            const name = `${path.join(".")}.${key}`;
            if (isObject && recursive) {
              return renderTokensByType({
                path: name.split("."),
                theme,
                type,
                recursive
              });
            } else {
              return (
                <Role
                  designTokens={designTokens}
                  key={name}
                  name={name}
                  type={type}
                />
              );
            }
          });
        }}
      </ThemeContext.Consumer>
    </ThemeContextProvider>
  );
};

/**
 * Primitives
 */

export const PrimitivesBorderRadii = () =>
  renderTokensByType({
    path: ["primitives", "borderRadii"],
    type: "borderRadius"
  });

export const PrimitivesBorderWidths = () =>
  renderTokensByType({
    path: ["primitives", "borderWidths"],
    type: "borderWidth"
  });

export const PrimitivesColorsAccent = () =>
  renderTokensByType({
    path: ["primitives", "colors", "accent"],
    type: "color"
  });

export const PrimitivesColorsDetail = () =>
  renderTokensByType({
    path: ["primitives", "colors", "detail"],
    type: "color"
  });

export const PrimitivesColorsPrimary = () =>
  renderTokensByType({
    path: ["primitives", "colors", "primary"],
    type: "color"
  });

export const PrimitivesColorsProduct = () =>
  renderTokensByType({
    path: ["primitives", "colors", "product"],
    type: "color"
  });

export const PrimitivesColorsTint = () =>
  renderTokensByType({
    path: ["primitives", "colors", "tint"],
    type: "color"
  });

export const PrimitivesFontFamilies = () =>
  renderTokensByType({
    path: ["primitives", "fontFamilies"],
    type: "fontFamily"
  });

export const PrimitivesFontSizes = () =>
  renderTokensByType({
    path: ["primitives", "fontSizes"],
    type: "fontSize"
  });

export const PrimitivesFontSizeFallbacks = () =>
  renderTokensByType({
    path: ["primitives", "fontSizeFallbacks"],
    type: "fontSize"
  });

export const PrimitivesFontWeights = () =>
  renderTokensByType({
    path: ["primitives", "fontWeights"],
    type: "fontWeight"
  });

export const PrimitivesGradients = () =>
  renderTokensByType({
    path: ["primitives", "gradients"],
    type: "gradient"
  });

export const PrimitivesGrid = () =>
  renderTokensByType({
    path: ["primitives", "grid"],
    type: "grid",
    recursive: true
  });

export const PrimitivesLineHeight = () =>
  renderTokensByType({
    path: ["primitives", "lineHeights"],
    type: "lineHeight"
  });

export const PrimitivesOpacity = () =>
  renderTokensByType({
    path: ["primitives", "opacities"],
    type: "opacity"
  });

export const PrimitivesSpacings = () =>
  renderTokensByType({
    path: ["primitives", "spacings"],
    type: "spacing"
  });

export const PrimitivesTransitions = () =>
  renderTokensByType({
    path: ["primitives", "transitions"],
    type: "transition",
    recursive: true
  });

/**
 * Tokens
 */

export const TokensButtonDark = () => (
  <>
    {renderTokensByType({
      path: ["tokens", "button", "contained", "defaultSize"],
      type: "buttonToken",
      theme: "dark"
    })}
    {renderTokensByType({
      path: ["tokens", "button", "contained", "dense"],
      type: "buttonToken",
      theme: "dark"
    })}
    {renderTokensByType({
      path: ["tokens", "button", "outlined", "defaultSize"],
      type: "buttonToken",
      theme: "dark"
    })}
    {renderTokensByType({
      path: ["tokens", "button", "outlined", "dense"],
      type: "buttonToken",
      theme: "dark"
    })}
    {renderTokensByType({
      path: ["tokens", "button", "text", "defaultSize"],
      type: "buttonToken",
      theme: "dark"
    })}
    {renderTokensByType({
      path: ["tokens", "button", "text", "dense"],
      type: "buttonToken",
      theme: "dark"
    })}
  </>
);

export const TokensButtonLight = () => (
  <>
    {renderTokensByType({
      path: ["tokens", "button", "contained", "defaultSize"],
      type: "buttonToken"
    })}
    {renderTokensByType({
      path: ["tokens", "button", "contained", "dense"],
      type: "buttonToken"
    })}
    {renderTokensByType({
      path: ["tokens", "button", "outlined", "defaultSize"],
      type: "buttonToken"
    })}
    {renderTokensByType({
      path: ["tokens", "button", "outlined", "dense"],
      type: "buttonToken"
    })}
    {renderTokensByType({
      path: ["tokens", "button", "text", "defaultSize"],
      type: "buttonToken"
    })}
    {renderTokensByType({
      path: ["tokens", "button", "text", "dense"],
      type: "buttonToken"
    })}
  </>
);

export const TokensColorsDark = () =>
  renderTokensByType({
    path: ["tokens", "colors"],
    type: "colorToken",
    theme: "dark"
  });

export const TokensColorsLight = () =>
  renderTokensByType({
    path: ["tokens", "colors"],
    type: "colorToken"
  });

export const TokensEffectsDark = () =>
  renderTokensByType({
    path: ["tokens", "effects"],
    type: "effectToken",
    theme: "dark"
  });

export const TokensEffectsLight = () =>
  renderTokensByType({
    path: ["tokens", "effects"],
    type: "effectToken"
  });

export const TokensGradientsDark = () =>
  renderTokensByType({
    path: ["tokens", "gradients"],
    type: "gradientToken",
    theme: "dark"
  });

export const TokensGradientsLight = () =>
  renderTokensByType({
    path: ["tokens", "gradients"],
    type: "gradientToken"
  });

export const TokensGrid = () =>
  renderTokensByType({
    path: ["tokens", "grid"],
    type: "gridToken"
  });

export const TokensOpacities = () =>
  renderTokensByType({
    path: ["tokens", "opacities"],
    type: "opacityToken"
  });

export const TokensTabDark = () =>
  renderTokensByType({
    path: ["tokens", "tab"],
    type: "tabToken",
    theme: "dark"
  });

export const TokensTabLight = () =>
  renderTokensByType({
    path: ["tokens", "tab"],
    type: "tabToken",
    theme: "light"
  });

export const TokensTabsDark = () =>
  renderTokensByType({
    path: ["tokens", "tabs"],
    type: "tabsToken",
    theme: "dark"
  });

export const TokensTabsLight = () =>
  renderTokensByType({
    path: ["tokens", "tabs"],
    type: "tabsToken"
  });

export const TokensTextLinkDark = () =>
  renderTokensByType({
    path: ["tokens", "textLink"],
    type: "textLinkToken",
    theme: "dark"
  });

export const TokensTextLinkLight = () =>
  renderTokensByType({
    path: ["tokens", "textLink"],
    type: "textLinkToken"
  });

export const TokensTransitions = () =>
  renderTokensByType({
    path: ["tokens", "transitions"],
    type: "transitionToken"
  });

export const TokensTypography = () =>
  renderTokensByType({
    path: ["tokens", "typography"],
    type: "typographyToken"
  });
