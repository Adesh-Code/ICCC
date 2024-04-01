import React from "react";
import Circle from "@iccc/icon/lib/build/icons/circle";
import CircleFull from "@iccc/icon/lib/build/icons/circle-full";
import MuiRadio from "@mui/material/Radio";
import SvgIcon from "@mui/material/SvgIcon";

export const RadioWithDigitalHig = (BaseMuiRadio) => {
  const Radio = React.forwardRef(({ ...otherProps }, ref) => {
    const CheckedIcon = () => {
      return (
        <>
          <SvgIcon>
            <Circle />
          </SvgIcon>
          <SvgIcon className="DhigRadio--icon--inner">
            <CircleFull />
          </SvgIcon>
        </>
      );
    };

    const muiRadioApiPresets = {
      // checked,
      checkedIcon: <CheckedIcon />,
      // classes,
      // color,
      // disabled,
      // disableRipple (already disabled at theme level)
      icon: (
        <SvgIcon>
          <Circle />
        </SvgIcon>
      )
      // id,
      // inputProps,
      // inputRef,
      // name
      // onChange,
      // required,
      // size
      // sx
      // value
    };

    return <BaseMuiRadio {...muiRadioApiPresets} {...otherProps} ref={ref} />;
  });

  Radio.displayName = "Radio";

  return Radio;
};

const Radio = RadioWithDigitalHig(MuiRadio);

export default Radio;
