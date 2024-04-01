import React from "react";
import PropTypes from "prop-types";
import CaretDown from "@iccc/icon/lib/build/ui-controls/caret-down";
import MenuItem from "@mui/material/MenuItem";
import MuiSelect from "@mui/material/Select";
import OptionContent from "./option-content";
import SvgIcon from "@mui/material/SvgIcon";

export const selectWithDigitalHig = (BaseMuiSelect) => {
  const Select = React.forwardRef(
    (
      { children, MenuProps, options, style, value, width, ...otherProps },
      ref
    ) => {
      // API: https://mui.com/material-ui/api/select/
      const muiApiPresets = {
        // autoWidth
        // children,
        // classes,
        // defaultOpen,
        // defaultValue,
        // displayEmpty,
        // eslint-disable-next-line react/display-name
        IconComponent: (props) => (
          <SvgIcon {...props}>
            <CaretDown />
          </SvgIcon>
        ),
        // id,
        // input,
        // inputProps,
        // label,
        // labelId,
        MenuProps: {
          anchorOrigin: { horizontal: "left", vertical: "bottom" },
          elevation: 0,
          transformOrigin: {
            horizontal: "left",
            vertical: "top"
          },
          ...MenuProps
        }
        // multiple,
        // native,
        // onChange,
        // onClose,
        // onOpen,
        // open,
        // renderValue,
        // SelectDisplayProps,
        // sx,
        // value,
        // variant
      };

      if (!options) {
        return null;
      }

      const selectWidth = width ? width : "";
      const menuWidth = width ? `calc(${width} - 4px)` : "";

      return (
        <BaseMuiSelect
          {...muiApiPresets}
          {...otherProps}
          style={{ ...style, width: selectWidth }}
          value={value}
          ref={ref}
        >
          {children ||
            options.map(
              ({ children, value: optionValue, ...otherOptionProps }) => (
                <MenuItem
                  key={optionValue}
                  value={optionValue}
                  style={{ width: menuWidth }}
                  {...otherOptionProps}
                >
                  <OptionContent isSelected={value === optionValue}>
                    {children}
                  </OptionContent>
                </MenuItem>
              )
            )}
        </BaseMuiSelect>
      );
    }
  );

  const defaultProps = {
    options: []
  };

  Select.displayName = "Select";

  Select.defaultProps = {
    ...defaultProps
  };

  Select.propTypes = {
    /**
     * Select children content
     */
    children: PropTypes.node,
    /**
     * MUI MenuProps object.
     */
    MenuProps: PropTypes.object,
    /**
     * The object used to create the list of options in the select dropdown. See https://mui.com/material-ui/api/menu-item/ for full set of options.
     */
    options: PropTypes.array,
    /**
     * Additional styles
     */
    style: PropTypes.object,
    /**
     * MUI Select value.
     */
    value: PropTypes.any,
    /**
     * Fixed width value.
     */
    width: PropTypes.string
  };

  return Select;
};

const SelectDhig = selectWithDigitalHig(MuiSelect);

export default SelectDhig;
