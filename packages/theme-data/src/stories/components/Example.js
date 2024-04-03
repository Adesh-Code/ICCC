import React from "react";
import PropTypes from "prop-types";

import BorderRadiusExample from "./BorderRadiusExample";
import BorderWidthExample from "./BorderWidthExample";
import ButtonExample from "./ButtonExample";
import ColorExample from "./ColorExample";
import EffectExample from "./EffectExample";
import FontFamilyExample from "./FontFamilyExample";
import FontSizeExample from "./FontSizeExample";
import FontWeightExample from "./FontWeightExample";
import GeneralExample from "./GeneralExample";
import GradientExample from "./GradientExample";
import GridExample from "./GridExample";
import OpacityExample from "./OpacityExample";
import SpacingExample from "./SpacingExample";
import TabExample from "./TabExample";
import TabsExample from "./TabsExample";
import TextLinkExample from "./TextLinkExample";
import TransitionExample from "./TransitionExample";
import TypographyExample from "./TypographyExample";

const examplesByDesignTokenType = {
  borderRadius: BorderRadiusExample,
  borderWidth: BorderWidthExample,
  buttonToken: ButtonExample,
  color: ColorExample,
  colorToken: ColorExample,
  effectToken: EffectExample,
  fontFamily: FontFamilyExample,
  fontSize: FontSizeExample,
  fontWeight: FontWeightExample,
  gradient: GradientExample,
  gradientToken: GradientExample,
  grid: GeneralExample,
  gridToken: GridExample,
  lineHeight: GeneralExample,
  opacity: OpacityExample,
  opacityToken: OpacityExample,
  spacing: SpacingExample,
  tabToken: TabExample,
  tabsToken: TabsExample,
  textLinkToken: TextLinkExample,
  transition: TransitionExample,
  transitionToken: TransitionExample,
  typographyToken: TypographyExample
};

/**
 
 * @param designTokens
 * @param roleString
 */
const getDesignTokenValue = (designTokens, roleString) => {
  const parts = roleString.split(".");

  return parts.reduce((acc, item) => {
    const nested = acc[item];
    return nested;
  }, designTokens);
};

const Example = (props) => {
  const ExampleByType = examplesByDesignTokenType[props.type];

  if (!ExampleByType) {
    throw new Error(`Unrecognized design token type ${props.type}`);
  }

  const designTokenValue = getDesignTokenValue(props.designTokens, props.name);

  return <ExampleByType {...props} value={designTokenValue} />;
};

Example.propTypes = {
  designTokens: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any
};

export default Example;
