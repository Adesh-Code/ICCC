import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MuiTabs from "@mui/material/Tabs";
import {
  availableOrientations,
  availableStyleVariants,
  styleVariants
} from "./constants";

export const TabsWithDigitalHig = (BaseMuiTabs) => {
  const Tabs = React.forwardRef(
    (
      {
        children,
        className,
        onChange,
        styleVariant,
        value,
        extendedUnderline,
        ...otherProps
      },
      ref
    ) => {
      const muiTabsPresets = {
        // action
        // allowScrollButtonsMobile
        // aria-label
        // aria-labelledby
        // centered
        // children
        // classes
        // component
        // indicatorColor
        // onChange,
        // orientation
        // ScrollButtonComponent
        // scrollButtons
        // selectionFollowsFocus
        // sx
        // TabIndicatorProps
        // TabScrollButtonProps
        // textColor
        // value
        variant: "scrollable"
        // visibleScrollbar
      };

      const [selectedValue, setSelectedValue] = useState(value);

      const handleChange = (event, newValue) => {
        setSelectedValue(newValue);
        if (onChange) {
          onChange(event, newValue);
        }
      };

      const classnames = (className && className.split(" ")) || [];
      classnames.push(`DhigTabs--styleVariant--${styleVariant}`);
      if (styleVariant === styleVariants.QUIET && extendedUnderline) {
        classnames.push(`DhigTabs--extendedUnderline`);
      }

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        /* istanbul ignore next */
        if (value !== selectedValue) {
          setSelectedValue(value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [value]);

      return (
        <BaseMuiTabs
          {...muiTabsPresets}
          {...otherProps}
          classes={{ root: classnames.join(" ") }}
          onChange={handleChange}
          ref={ref}
          value={selectedValue}
        >
          {children}
        </BaseMuiTabs>
      );
    }
  );

  Tabs.displayName = "Tabs";

  Tabs.defaultProps = {
    extendedUnderline: false,
    orientation: "horizontal",
    styleVariant: "default",
    value: 0
  };

  Tabs.propTypes = {
    ...MuiTabs.propTypes,
    children: PropTypes.any.isRequired,
    extendedUnderline: PropTypes.bool,
    orientation: PropTypes.oneOf(availableOrientations),
    styleVariant: PropTypes.oneOf(availableStyleVariants)
  };

  return Tabs;
};

const Tabs = TabsWithDigitalHig(MuiTabs);

export default Tabs;
