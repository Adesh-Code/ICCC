import React from "react";
import PropTypes from "prop-types";
import MuiIconButton from "@mui/material/IconButton";
import {
  availableSizes,
  availableVariants,
  sizes,
  variants
} from "./constants";

export const iconButtonWithDigitalHig = (BaseMuiIconButton) => {
  const IconButton = React.forwardRef(
    ({ children, className, variant, fullWidth, ...otherProps }, ref) => {
      const muiIconButtonApiPresets = {
        // children
        // classes
        // color
        // disabled
        // disableRipple
        // disableFocusRipple
        // edge
        // size
        // sx
      };

      const classnames = (className && className.split(" ")) || [];
      fullWidth && classnames.push("DhigIconButton--fullWidth");
      classnames.push(`DhigIconButton--variant--${variant}`);

      return (
        <BaseMuiIconButton
          {...muiIconButtonApiPresets}
          {...otherProps}
          className={classnames.join(" ")}
          ref={ref}
        >
          {children}
        </BaseMuiIconButton>
      );
    }
  );

  IconButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    sizes: PropTypes.oneOf(availableSizes),
    variant: PropTypes.oneOf(availableVariants)
  };

  IconButton.defaultProps = {
    disabled: false,
    fullWidth: false,
    size: sizes.MEDIUM,
    variant: variants.CONTAINED
  };

  IconButton.displayName = "IconButton";

  return IconButton;
};

const IconButton = iconButtonWithDigitalHig(MuiIconButton);

export default IconButton;
