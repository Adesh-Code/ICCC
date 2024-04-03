import React from "react";
import PropTypes from "prop-types";
import lightDesignTokens from "./build/json/light/design-tokens.json";
import lightComponentTokens from "./build/json/light/component-tokens.json";
import darkDesignTokens from "./build/json/dark/design-tokens.json";
import darkComponentTokens from "./build/json/dark/component-tokens.json";

const ThemeContext = React.createContext();

/**
 * makeThemeContextProvider
 */
const makeThemeContextProvider = (theme = "light") => {
  const value =
    theme === "light"
      ? {
          designTokens: {
            ...lightDesignTokens,
            tokens: {
              ...lightDesignTokens.tokens,
              ...lightComponentTokens.tokens
            }
          }
        }
      : {
          designTokens: {
            ...darkDesignTokens,
            tokens: {
              ...darkDesignTokens.tokens,
              ...darkComponentTokens.tokens
            }
          }
        };

  const ThemeContextProvider = ({ children }) => (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );

  ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired
  };

  return ThemeContextProvider;
};

export { makeThemeContextProvider, ThemeContext };
