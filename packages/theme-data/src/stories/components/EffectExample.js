import React from "react";
import PropTypes from "prop-types";
import Effect from "./Effect";

const EffectExample = ({ designTokens, name, value }) => {
  const inverted =
    name === "tokens.effects.divider-0-bottom-on-fill-primary" ||
    name === "tokens.effects.tab-highlight-bottom-on-fill-primary";

  const background = inverted
    ? designTokens.tokens.colors["ink-on-background"]
    : designTokens.tokens.colors.background;

  return (
    <>
      <Effect boxShadow={value} background={background} />
      <div style={{ fontSize: designTokens.primitives.fontSizes[1] }}>
        <strong>box-shadow: </strong>
        {value}
      </div>
    </>
  );
};

EffectExample.propTypes = {
  designTokens: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.any
};

export default EffectExample;
