import React from "react";
import PropTypes from "prop-types";
import Cross from "@iccc/icon/lib/build/icons/cross";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@iccc/typography";

import {
  availableBackdropVariants,
  availableMaxWidths,
  availableStyleVariants,
  availableTypes,
  backdropVariants,
  maxWidths,
  styleVariants,
  types
} from "./constants";

const CloseButton = ({
  accessibleLabel,
  handleClose,
  onClick,
  outsideButton
}) => (
  <IconButton
    aria-label={accessibleLabel}
    classes={{
      root: `DhigModal--closeButton--${outsideButton ? "outside" : "default"}`
    }}
    onClick={(event) => {
      /* istanbul ignore next */
      onClick(event);
      /* istanbul ignore next */
      handleClose(event);
    }}
  >
    <SvgIcon>
      <Cross />
    </SvgIcon>
  </IconButton>
);

CloseButton.defaultProps = {
  accessibleLabel: "close",
  onClick: /* istanbul ignore next */ () => {}
};

CloseButton.propTypes = {
  /**
   * Accessible label
   */
  accessibleLabel: PropTypes.string,
  /**
   * Close action callback
   */
  handleClose: PropTypes.func,
  /**
   * On click of close button callback
   */
  onClick: PropTypes.func,
  /**
   * Whether the button should render relative to dialog or to screen
   */
  outsideButton: PropTypes.bool
};

export const modalWithDigitalHig = (BaseMuiDialog) => {
  const Modal = React.forwardRef(
    (
      {
        actions,
        backdropVariant,
        closeButtonDisplay,
        closeButtonOutside,
        CloseButtonProps,
        caption,
        content,
        DialogContentProps,
        disableCloseFromOutside,
        displayLogo,
        handleClose,
        maxWidth,
        styleVariant,
        title,
        type,
        AlertIcon,
        ...otherProps
      },
      ref
    ) => {
      const muiModalPresets = {
        // open,
        // aria-describedby,
        // aria-labelledby,
        // backdropComponent,
        // children,
        // classes,
        // disableEscapeKeyDown,
        // fullScreen,
        // fullWidth,
        // maxWidth
        // onBackdropClick,
        // onClose,
        // PaperComponent,
        // PaperProps,
        // scroll,
        // sx,
        // TransitionComponent,
        // TransitionDuration,
        // TransitionProps
      };

      const backdropClassName = `DhigModal--backdrop--${backdropVariant}`;
      const className = `DhigModal--styleVariant--${styleVariant} DhigModal--type--${type}`;
      const outsideButton = closeButtonOutside || type === types.LIGHTBOX;

      const logo = (
        <img
          className="DhigModal--logo"
          src="https://swc.autodesk.com/pharmacopeia/svg/logo/v0/logo.svg"
          alt="Autodesk logo"
        />
      );

      const defaultContent = (
        <>
          {(displayLogo || title) && (
            <DialogTitle>{displayLogo ? logo : title}</DialogTitle>
          )}
          <DialogContent {...DialogContentProps}>{content}</DialogContent>
          {actions && <DialogActions>{actions}</DialogActions>}
        </>
      );

      const alertContent = (
        <>
          <DialogContent {...DialogContentProps}>
            {AlertIcon && (
              <SvgIcon>
                <AlertIcon />
              </SvgIcon>
            )}
            {title && (
              <Typography sx={{ mb: "2" }} variant="headline-small">
                {title}
              </Typography>
            )}
            <Typography>{content}</Typography>
          </DialogContent>
          {actions && <DialogActions>{actions}</DialogActions>}
        </>
      );

      const lightboxContent = (
        <>
          <DialogContent {...DialogContentProps}>{content}</DialogContent>
          {caption &&
            (typeof caption === "string" ? (
              <Typography variant="caption">{caption}</Typography>
            ) : (
              caption
            ))}
        </>
      );

      const renderContent = () => {
        switch (type) {
          case types.ALERT:
            return alertContent;
          case types.LIGHTBOX:
            return lightboxContent;
          default:
            return defaultContent;
        }
      };

      return (
        <BaseMuiDialog
          {...muiModalPresets}
          disableEscapeKeyDown={!closeButtonDisplay || type === types.ALERT}
          maxWidth={maxWidth}
          onClose={
            /* istanbul ignore next */
            (event, reason) => {
              if (
                !closeButtonDisplay ||
                disableCloseFromOutside ||
                type === types.ALERT
              ) {
                if (reason === "backdropClick") {
                  return;
                }
              }
              handleClose(event, reason);
            }
          }
          PaperProps={{ classes: { root: className } }}
          ref={ref}
          slotProps={{
            backdrop: {
              classes: { root: backdropClassName }
            }
          }}
          {...otherProps}
        >
          {closeButtonDisplay && type !== types.ALERT && (
            <CloseButton
              handleClose={handleClose}
              outsideButton={outsideButton}
              {...CloseButtonProps}
            />
          )}
          {renderContent()}
        </BaseMuiDialog>
      );
    }
  );

  Modal.displayName = "Modal";

  Modal.defaultProps = {
    backdropVariant: backdropVariants.DEFAULT,
    closeButtonDisplay: true,
    closeButtonOutside: false,
    disableCloseFromOutside: false,
    displayLogo: false,
    maxWidth: maxWidths.SM,
    styleVariant: styleVariants.DEFAULT,
    type: types.MODAL
  };

  Modal.propTypes = {
    actions: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
    AlertIcon: PropTypes.elementType,
    backdropVariant: PropTypes.oneOf(availableBackdropVariants),
    closeButtonDisplay: PropTypes.bool,
    closeButtonOutside: PropTypes.bool,
    CloseButtonProps: PropTypes.object,
    caption: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node,
      PropTypes.string
    ]),
    content: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node,
      PropTypes.string
    ]),
    DialogContentProps: PropTypes.object,
    disableCloseFromOutside: PropTypes.bool,
    displayLogo: PropTypes.bool,
    handleClose: PropTypes.func,
    maxWidth: PropTypes.oneOf(availableMaxWidths),
    styleVariant: PropTypes.oneOf(availableStyleVariants),
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node,
      PropTypes.string
    ]),
    type: PropTypes.oneOf(availableTypes)
  };

  return Modal;
};

const Modal = modalWithDigitalHig(Dialog);

export default Modal;
