import React, { useState } from "react";
import PropTypes from "prop-types";
import Autocomplete from "@mui/material/Autocomplete";
import Grow from "@mui/material/Grow";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import SvgIcon from "@mui/material/SvgIcon";
import SvgSearch from "@iccc/icon/lib/build/icons/search";
import TextField from "@mui/material/TextField";

export const searchWithDigitalHig = (BaseMuiAutocomplete) => {
  const animatedPaperComponent = (paperProps) => (
    <Grow in style={{ transformOrigin: "0 0 0" }}>
      <Paper {...paperProps} />
    </Grow>
  );
  const Search = React.forwardRef(
    ({ className, onInputChange, placeholder, ...otherProps }, ref) => {
      // API: https://mui.com/material-ui/api/autocomplete/
      const muiAutocompleteApiPresets = {
        // options
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
        // disableClearable
        // disableCloseOnSelect
        // disabled
        // disabledItemsFocusable
        // disableListWrap
        // disablePortal
        // filterOptions
        // filterSelectedOptions
        forcePopupIcon: false,
        freeSolo: true,
        // fullWidth
        // getLimitTagsText
        // getOptionDisabled
        // getOptionLabel
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
        onInputChange,
        // onOpen
        // open
        // openOnFocus
        // openText
        PaperComponent: animatedPaperComponent
        // PopperComponent
        // popupIcon
        // readOnly
        // renderGroup
        // renderOption
        // renderTags
        // selectOnFocus
        // size
        // slotProps
        // sx
        // value
      };

      const [open, setOpen] = useState(false);
      const [inputValue, setInputValue] = useState("");

      const classnames = (className && className.split(" ")) || [];
      classnames.push(`DhigSearch`);

      return (
        <BaseMuiAutocomplete
          {...muiAutocompleteApiPresets}
          className={classnames.join(" ")}
          open={open}
          onClose={/* istanbul ignore next */ () => setOpen(false)}
          inputValue={inputValue}
          onInputChange={(event, value, reason) => {
            onInputChange(event, value, reason);
            setInputValue(value);
            setOpen(!!value);
          }}
          ref={ref}
          renderInput={(params) => (
            <TextField
              {...params}
              className="DhigSearch--textField"
              placeholder={placeholder}
              InputProps={{
                ...params.InputProps,
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon>
                      <SvgSearch />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              inputProps={{
                ...params.inputProps,
                className: "DhigSearch--input"
              }}
              variant="standard"
            />
          )}
          {...otherProps}
        />
      );
    }
  );

  Search.displayName = "Search";

  Search.defaultProps = {
    onInputChange: /* istanbul ignore next */ () => {},
    placeholder: "Search..."
  };

  Search.propTypes = {
    /**
     * Class names to apply to the search component.
     */
    className: PropTypes.string,
    /**
     * Callback fired when the input value changes.
     */
    onInputChange: PropTypes.func,
    /**
     * The short hint displayed in the input before the user enters a value.
     */
    placeholder: PropTypes.string
  };

  return Search;
};

const Search = searchWithDigitalHig(Autocomplete);

export default Search;
