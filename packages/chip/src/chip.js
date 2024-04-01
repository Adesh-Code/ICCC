import React from "react";
import PropTypes from "prop-types";
import {
  availableColors,
  availableVariants,
  colors,
  variants
} from "./constants";
import CrossIcon from "@iccc/icon/lib/build/icons/cross";
import MuiChip from "@mui/material/Chip";
import SvgIcon from "@mui/material/SvgIcon";

export const ChipWithDigitalHig = (BaseMuiChip) => {
  const Chip = React.forwardRef(
    ({ className, disabled, selected, ...otherProps }, ref) => {
      const muiChipPresets = {
        // avatar,
        // children,
        // classes,
        // clickable,
        // color,
        // component,
        deleteIcon: (
          <SvgIcon tabIndex={disabled ? -1 : 0}>
            <CrossIcon />
          </SvgIcon>
        ),
        // disabled,
        // icon,
        // label,
        // onDelete,
        // size,
        skipFocusWhenDisabled: true
        // sx,
        // variant
      };

      const classnames = (className && className.split(" ")) || [];
      selected && classnames.push("DhigChip--selected");
      return (
        <BaseMuiChip
          {...muiChipPresets}
          className={classnames.join(" ")}
          disabled={disabled}
          {...otherProps}
          ref={ref}
        />
      );
    }
  );

  Chip.displayName = "Chip";

  Chip.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(availableColors),
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    variant: PropTypes.oneOf(availableVariants)
  };

  Chip.defaultProps = {
    color: colors.DEFAULT,
    disabled: false,
    selected: false,
    variant: variants.FILLED
  };

  return Chip;
};

const Chip = ChipWithDigitalHig(MuiChip);

export default Chip;
