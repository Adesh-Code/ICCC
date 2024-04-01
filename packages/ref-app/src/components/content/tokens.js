/* eslint-disable react/display-name */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";
import { PageContainer } from "../common";

const MakeSomethingWithTokens = (themeData) => () => {
  const { primitives, tokens } = themeData;

  const Code = ({ children }) => (
    <code style={{ color: tokens.colors["ink-focus"] }}>{children}</code>
  );

  Code.propTypes = {
    children: PropTypes.node
  };

  return (
    <div
      style={{
        ...tokens.typography["body-copy-medium"],
        backgroundColor: tokens.colors.background,
        border: `${primitives.borderWidths.medium} solid ${tokens.colors["ink-success"]}`,
        padding: primitives.spacings["4"]
      }}
    >
      <p>
        This component uses <Code>background</Code> token for the background
        color, <Code>ink-focus</Code> for the code color, and{" "}
        <Code>ink-success</Code> for the border color.
      </p>
      <p>
        It also uses primitive values to define the border width (
        <Code>primitives.borderWidths.mediums</Code>) and spacings (
        <Code>primitives.spacings["4"]</Code>).
      </p>
    </div>
  );
};

export const Tokens = ({ theme }) => {
  const SomethingWithTokens = MakeSomethingWithTokens(theme.themeBase);
  return (
    <PageContainer additionalClassnames={theme.classname}>
      <h3 className="dhig-typography-headline-medium dhig-mt-0">
        HTML styled with Digital HIG tokens on {theme.name} background
      </h3>
      <SomethingWithTokens />
    </PageContainer>
  );
};

Tokens.propTypes = {
  theme: PropTypes.any
};
