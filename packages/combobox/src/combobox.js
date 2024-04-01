import React from "react";
import PropTypes from "prop-types";
import { availableLayouts, layouts } from "./constants";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import Paper from "@mui/material/Paper";
import SvgCaretDown from "@iccc/icon/lib/build/ui-controls/caret-down";
import SvgCheckmark from "@iccc/icon/lib/build/ui-controls/checkmark";
import SvgIcon from "@mui/material/SvgIcon";
import TextField from "@mui/material/TextField";

export const comboboxWithDigitalHig = (BaseMuiAutocomplete) => {
  const Combobox = React.forwardRef(
    (
      {
        addendum,
        className,
        error,
        placeholder,
        layout,
        renderInput,
        ...otherProps
      },
      ref
    ) => {
      const DefaultTextFieldRenderer = (params) => {
        return (
          <TextField
            {...params}
            className="DhigCombobox--textField"
            InputProps={{
              ...params.InputProps
            }}
            inputProps={{
              ...params.inputProps,
              className: "DhigCombobox--input"
            }}
            error={error}
            variant="standard"
            placeholder={placeholder}
          />
        );
      };

      // API: https://mui.com/material-ui/api/autocomplete/
      const muiAutocompleteApiPresets = {
        // options
        // eslint-disable-next-line react/display-name
        // renderInput
        // autoComplete
        // autoHighlight
        // autoSelect
        // blurOnSelect
        // ChipProps
        // classes
        // clearIcon
        // clearOnBlur
        // clearOnEscape
        // clearText
        // closeText
        // componentsProps
        // defaultValue
        disableClearable: false,
        // disableCloseOnSelect
        // disabled
        // disabledItemsFocusable
        // disableListWrap
        // disablePortal
        // filterOptions
        // filterSelectedOptions
        // forcePopupIcon,
        // freeSolo
        // fullWidth
        // getLimitTagsText
        // getOptionDisabled
        getOptionLabel: (option) => option.label ?? option, // reference https://mui.com/material-ui/api/autocomplete/#autocomplete-prop-getOptionLabel
        // groupBy
        // handleHomeEndKeys
        // id
        // includeInputInList
        // inputValue
        // isOptionEqualToValue
        // limitTags
        // ListboxComponent
        // ListboxProps
        // loading
        // loadingText
        // multiple
        // noOptionsText
        // onChange
        // onClose
        // onHighlightChange
        // onInputChange
        // onOpen
        // open
        // openOnFocus
        // openText
        // PaperComponent
        // PopperComponent
        popupIcon: (
          <SvgIcon fontSize="small" tabIndex="0">
            <SvgCaretDown />
          </SvgIcon>
        ),
        // readOnly
        // renderGroup
        // eslint-disable-next-line react/display-name
        renderOption: (props, option, state, ownerState) => (
          <div component="li" {...props} key={option}>
            {otherProps.multiple && <Checkbox checked={state.selected} />}
            {ownerState.getOptionLabel(option)}
            {!otherProps.multiple && state.selected && (
              <SvgIcon className="DhigCombobox--checkedIcon">
                <SvgCheckmark />
              </SvgIcon>
            )}
          </div>
        )
        // renderTags
        // selectOnFocus
        // size
        // slotProps
        // sx
        // value
      };

      let classnames = (className && className.split(" ")) || [];
      classnames.push(`DhigCombobox`);

      let multiSelectProps = {};

      if (otherProps.multiple) {
        classnames.push("DhigCombobox--multiple");
        classnames.push("DhigCombobox--layout--grow");
        multiSelectProps = {
          disableClearable: true,
          disableCloseOnSelect: true
        };
        if (layout === layouts.FIXED) {
          classnames.push("DhigCombobox--layout--fixed");
          classnames = classnames.filter(
            (value) => value !== "DhigCombobox--layout--grow"
          );
          multiSelectProps = {
            ...multiSelectProps,
            limitTags: 1,
            getLimitTagsText: (more) => null
          };
        }
      }

      // eslint-disable-next-line react/prop-types
      const PaperWithAddendum = ({ children, classes, ...otherPaperProps }) => (
        <Paper classes={classes} {...otherPaperProps}>
          {children}
          {addendum && <div className="DhigCombobox--addendum">{addendum}</div>}
        </Paper>
      );

      return (
        <BaseMuiAutocomplete
          {...muiAutocompleteApiPresets}
          className={classnames.join(" ")}
          PaperComponent={addendum ? PaperWithAddendum : null}
          {...multiSelectProps}
          {...otherProps}
          renderInput={otherProps.renderInput || DefaultTextFieldRenderer}
        />
      );
    }
  );

  Combobox.displayName = "Combobox";

  Combobox.propTypes = {
    addendum: PropTypes.string,
    className: PropTypes.string,
    layout: PropTypes.oneOf(availableLayouts),
    error: PropTypes.bool,
    placeholder: PropTypes.string,
    renderInput: PropTypes.func
  };

  Combobox.defaultProps = {
    disabled: false,
    error: false,
    placeholder: ""
  };

  return Combobox;
};

const Combobox = comboboxWithDigitalHig(Autocomplete);

export default Combobox;
