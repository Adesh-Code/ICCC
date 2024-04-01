import React from "react";
import PropTypes from "prop-types";
import { PageContainer, Paragraph } from "../common";

export const HtmlComponents = ({ theme }) => (
  <PageContainer additionalClassnames={theme.classname}>
    <h3 className="dhig-typography-headline-medium dhig-mt-0">
      HTML components set over a {theme.name} background
    </h3>
    <Paragraph>Button</Paragraph>
    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained">
      <span className="MuiButton-label">Contained</span>
    </button>{" "}
    <button
      className="MuiButtonBase-root MuiButton-root MuiButton-contained"
      tabIndex="0"
      type="button"
    >
      <span className="MuiButton-label">
        <span className="MuiButton-startIcon MuiButton-iconSizeMedium">
          <svg
            className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="false"
          >
            <use xlinkHref="#dhig--icons--sync" className="dhig--icons--sync" />
          </svg>
        </span>
        Leading icon
      </span>
    </button>{" "}
    <button
      className="MuiButtonBase-root MuiButton-root MuiButton-contained"
      tabIndex="0"
      type="button"
    >
      <span className="MuiButton-label">
        Trailing icon
        <span className="MuiButton-endIcon MuiButton-iconSizeMedium">
          <svg
            className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="false"
          >
            <use xlinkHref="#dhig--icons--sync" className="dhig--icons--sync" />
          </svg>
        </span>
      </span>
    </button>
    <p />
    <button className="MuiButtonBase-root MuiButton-root MuiButton-outlined">
      <span className="MuiButton-label">Outlined</span>
    </button>{" "}
    <button
      className="MuiButtonBase-root MuiButton-root MuiButton-outlined"
      tabIndex="0"
      type="button"
    >
      <span className="MuiButton-label">
        <span className="MuiButton-startIcon MuiButton-iconSizeMedium">
          <svg
            className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="false"
          >
            <use xlinkHref="#dhig--icons--sync" className="dhig--icons--sync" />
          </svg>
        </span>
        Leading icon
      </span>
    </button>{" "}
    <button
      className="MuiButtonBase-root MuiButton-root MuiButton-outlined"
      tabIndex="0"
      type="button"
    >
      <span className="MuiButton-label">
        Trailing icon
        <span className="MuiButton-endIcon MuiButton-iconSizeMedium">
          <svg
            className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="false"
          >
            <use xlinkHref="#dhig--icons--sync" className="dhig--icons--sync" />
          </svg>
        </span>
      </span>
    </button>
    <p />
    <button className="MuiButtonBase-root MuiButton-root MuiButton-text">
      <span className="MuiButton-label">Text</span>
    </button>{" "}
    <button
      className="MuiButtonBase-root MuiButton-root MuiButton-text"
      tabIndex="0"
      type="button"
    >
      <span className="MuiButton-label">
        <span className="MuiButton-startIcon MuiButton-iconSizeMedium">
          <svg
            className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="false"
          >
            <use xlinkHref="#dhig--icons--sync" className="dhig--icons--sync" />
          </svg>
        </span>
        Leading icon
      </span>
    </button>{" "}
    <button
      className="MuiButtonBase-root MuiButton-root MuiButton-text"
      tabIndex="0"
      type="button"
    >
      <span className="MuiButton-label">
        Trailing icon
        <span className="MuiButton-endIcon MuiButton-iconSizeMedium">
          <svg
            className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="false"
          >
            <use xlinkHref="#dhig--icons--sync" className="dhig--icons--sync" />
          </svg>
        </span>
      </span>
    </button>
    <Paragraph>Icon button</Paragraph>
    <button
      className="MuiButtonBase-root MuiIconButton-root DhigIconButton--layout--hug DhigIconButton--size--defaultSize DhigIconButton--variant--contained"
      tabIndex="0"
      type="button"
    >
      <span className="MuiIconButton-label">
        <svg
          className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--inherit"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="false"
        >
          <use xlinkHref="#dhig--icons--sync" className="dhig--icons--sync" />
        </svg>
      </span>
    </button>{" "}
    <button
      className="MuiButtonBase-root MuiIconButton-root DhigIconButton--layout--hug DhigIconButton--size--defaultSize DhigIconButton--variant--outlined"
      tabIndex="0"
      type="button"
    >
      <span className="MuiIconButton-label">
        <svg
          className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--inherit"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="false"
        >
          <use xlinkHref="#dhig--icons--sync" className="dhig--icons--sync" />
        </svg>
      </span>
    </button>{" "}
    <button
      className="MuiButtonBase-root MuiIconButton-root DhigIconButton--layout--hug DhigIconButton--size--defaultSize DhigIconButton--variant--text"
      tabIndex="0"
      type="button"
    >
      <span className="MuiIconButton-label">
        <svg
          className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--inherit"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="false"
        >
          <use xlinkHref="#dhig--icons--sync" className="dhig--icons--sync" />
        </svg>
      </span>
    </button>
    <Paragraph>Text link</Paragraph>
    <a
      className="MuiTypography-root MuiLink-root MuiLink-underlineHover"
      href="#0"
    >
      Text link
    </a>
    <Paragraph>Divider</Paragraph>
    <hr className="MuiDivider-root MuiDivider-light"></hr>
    <Paragraph>Strong divider</Paragraph>
    <hr className="MuiDivider-root"></hr>
    <Paragraph>Tabs</Paragraph>
    <div className="MuiTabs-root default">
      <div className="MuiTabs-scroller MuiTabs-scrollable">
        <div
          aria-label="DHIG tabs"
          className="MuiTabs-flexContainer"
          role="tablist"
        >
          <button
            aria-controls="tabpanel-0"
            aria-selected="true"
            className="MuiButtonBase-root MuiTab-root default MuiTab-textColorInherit Mui-selected MuiTab-wrapped"
            id="tab-0"
            role="tab"
            tabIndex="0"
            type="button"
          >
            <span className="MuiTab-wrapper">Tab 1</span>
          </button>
          <button
            aria-controls="tabpanel-1"
            aria-selected="false"
            className="MuiButtonBase-root MuiTab-root default MuiTab-textColorInherit MuiTab-wrapped"
            id="tab-1"
            role="tab"
            tabIndex="-1"
            type="button"
          >
            <span className="MuiTab-wrapper">Tab 2</span>
          </button>
          <button
            aria-controls="tabpanel-2"
            aria-selected="false"
            className="MuiButtonBase-root MuiTab-root default MuiTab-textColorInherit MuiTab-wrapped"
            id="tab-2"
            role="tab"
            tabIndex="-1"
            type="button"
          >
            <span className="MuiTab-wrapper">Tab 3</span>
          </button>
          <button
            aria-controls="tabpanel-3"
            aria-selected="false"
            className="MuiButtonBase-root MuiTab-root default MuiTab-textColorInherit MuiTab-wrapped Mui-disabled"
            disabled
            id="tab-3"
            role="tab"
            tabIndex="-1"
            type="button"
          >
            <span className="MuiTab-wrapper">Tab 4 (disabled)</span>
          </button>
        </div>
      </div>
    </div>
    <Paragraph>Card</Paragraph>
    <div className="dhig-grid dhig-grid-cols-1 md:dhig-grid-cols-2">
      <div className="MuiPaper-root MuiCard-root DhigCard--appearance--default MuiPaper-elevation0 MuiPaper-rounded">
        <img
          alt="Alt text"
          className="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img"
          src="https://swc.autodesk.com/pharmacopeia/img/placeholders/960x640.png"
        />
        <div className="MuiCardContent-root">
          <p
            className="MuiTypography-root dhig-typography-eyebrow"
            style={{ marginBottom: "0.75rem" }}
          >
            Eyebrow
          </p>
          <p
            className="MuiTypography-root dhig-typography-headline-medium"
            style={{ marginBottom: "0.75rem" }}
          >
            Headline ut risus sed risus pellentesque at.
          </p>
          <p className="MuiTypography-root dhig-typography-body-copy-medium">
            Sit nulla leo eu vestibulum fermentum aliquam suspendisse tortor.
            Egestas amet aliquam euismod lobortis ac eget placerat.
          </p>
        </div>
        <div className="DhigCardDivider">
          <hr className="MuiDivider-root MuiDivider-light" />
        </div>
        <div className="MuiCardActions-root MuiCardActions-spacing">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="MuiTypography-root MuiLink-root MuiLink-underlineHover">
            <svg
              className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="false"
            >
              <use
                xlinkHref="#dhig--icons--cta-arrow-right"
                className="dhig--icons--cta-arrow-right"
              />
            </svg>
            Text link
          </a>
        </div>
      </div>
    </div>
    <Paragraph>Default modal (open state)</Paragraph>
    <div
      className="MuiDialog-root"
      role="presentation"
      style={{ zIndex: 1300 }}
    >
      <div
        className="MuiDialog-container MuiDialog-scrollPaper"
        role="none presentation"
        tabIndex="-1"
      >
        <div
          aria-describedby="dhig-modal-description"
          aria-labelledby="dhig-modal-title"
          className="MuiPaper-root DhigModal--styleVariant--default DhigModal--type--modal MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded"
          role="dialog"
        >
          <button
            aria-label="close"
            className="MuiButtonBase-root MuiIconButton-root DhigModal--closeButton--default"
            tabIndex="0"
            type="button"
          >
            <span className="MuiIconButton-label">
              <svg
                className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--inherit"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <use
                  xlinkHref="#dhig--icons--cross"
                  className="dhig--icons--cross"
                />
              </svg>
            </span>
          </button>
          <div className="MuiDialogTitle-root DhigModal--styleVariant--default DhigModal--type--modal">
            Default modal
          </div>
          <div className="MuiDialogContent-root DhigModal--styleVariant--default DhigModal--type--modal">
            <p className="MuiTypography-root dhig-typography-body-copy-medium">
              Feugiat elementum ut amet in. Commodo, placerat sagittis, laoreet
              sagittis arcu id. Fringilla sit amet a fermentum lacus mi mauris
              lectus. Ipsum posuere eu velit id malesuada volutpat sapien
              montes, nisl. Quisque tortor diam ut eu tempor tincidunt mi. Etiam
              lacinia massa molestie ornare cursus enim. Aliquet dignissim
              mauris, diam aliquam. Odio at eros, parturient felis dui feugiat
              at.
            </p>
          </div>
          <div className="MuiDialogActions-root DhigModal--styleVariant--default DhigModal--type--modal MuiDialogActions-spacing">
            <div>
              <span className="dhig-mr-5">
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-text"
                  tabIndex="0"
                  type="button"
                >
                  <span className="MuiButton-label">Secondary</span>
                </button>
              </span>
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-contained"
                tabIndex="0"
                type="button"
              >
                <span className="MuiButton-label">Primary action</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Paragraph>Alert modal (open state)</Paragraph>
    <div
      role="presentation"
      className="MuiDialog-root"
      style={{ zIndex: 1300 }}
    >
      <div
        className="MuiDialog-container MuiDialog-scrollPaper"
        role="none presentation"
        tabIndex="-1"
      >
        <div
          className="MuiPaper-root DhigModal--styleVariant--default DhigModal--type--alert MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded"
          role="dialog"
        >
          <div className="MuiDialogContent-root DhigModal--styleVariant--default DhigModal--type--alert">
            <svg
              className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--type--display-icon DhigSvgIcon--size--medium"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ height: "48px", paddingBottom: "1em", width: "48px" }}
            >
              <use
                xlinkHref="#dhig--display-icons--complete"
                className="dhig--display-icons--complete"
              />
            </svg>
            <p
              className="MuiTypography-root dhig-typography-headline-small"
              style={{ marginBottom: "0.5rem" }}
            >
              Alert
            </p>
            <p className="MuiTypography-root dhig-typography-body-copy-medium">
              Feugiat elementum ut amet in. Commodo, placerat sagittis, laoreet
              sagittis arcu id. Fringilla sit amet a fermentum lacus mi mauris
              lectus. Ipsum posuere eu velit id malesuada volutpat sapien
              montes, nisl. Quisque tortor diam ut eu tempor tincidunt mi. Etiam
              lacinia massa molestie ornare cursus enim. Aliquet dignissim
              mauris, diam aliquam. Odio at eros, parturient felis dui feugiat
              at.
            </p>
          </div>
          <div className="MuiDialogActions-root DhigModal--styleVariant--default DhigModal--type--alert MuiDialogActions-spacing">
            <div>
              <span className="dhig-mr-5">
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-text"
                  tabIndex="0"
                  type="button"
                >
                  <span className="MuiButton-label">Secondary</span>
                </button>
              </span>
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-contained"
                tabIndex="0"
                type="button"
              >
                <span className="MuiButton-label">Primary action</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Paragraph>Lightbox modal (open state, close button not shown)</Paragraph>
    <div
      role="presentation"
      className="MuiDialog-root"
      style={{ zIndex: 1300 }}
    >
      <div
        className="MuiDialog-container MuiDialog-scrollPaper"
        role="none presentation"
        tabIndex="-1"
      >
        <div
          className="MuiPaper-root DhigModal--styleVariant--default DhigModal--type--lightbox MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiDialog-paperFullWidth MuiPaper-elevation24 MuiPaper-rounded"
          role="dialog"
          aria-describedby="dhig-modal-description"
          aria-labelledby="dhig-modal-title"
        >
          <div className="MuiDialogContent-root DhigModal--styleVariant--default DhigModal--type--lightbox">
            <img
              src="https://swc.autodesk.com/pharmacopeia/img/placeholders/960x640.png"
              alt="placeholder"
            />
          </div>
        </div>
      </div>
    </div>
    <Paragraph>Text Input</Paragraph>
    <div className="MuiFormControl-root MuiFormControl-fullWidth">
      <label
        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink"
        data-shrink="true"
        htmlFor="undefined-label"
        id="undefined-label-label"
      >
        Text input label
      </label>
      <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
        <input
          aria-invalid="false"
          type="text"
          className="MuiInputBase-input MuiInput-input"
          value=""
          onChange={() => {}}
        />
      </div>
    </div>
    <Paragraph>Checkbox</Paragraph>
    <fieldset className="MuiFormControl-root">
      <legend
        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"
        data-shrink="false"
      >
        Label
      </legend>
      <div className="MuiFormGroup-root">
        <label className="MuiFormControlLabel-root">
          <span
            className="MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-1 MuiCheckbox-root MuiCheckbox-colorSecondary DhigCheckbox--size--medium MuiIconButton-colorSecondary"
            aria-disabled="false"
          >
            <span className="MuiIconButton-label">
              <input
                className="PrivateSwitchBase-input-4"
                type="checkbox"
                data-indeterminate="false"
                value=""
                checked=""
                onChange={() => {}}
              />
              <svg
                className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--inherit"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="false"
              >
                <use xlinkHref="#" className="" />
              </svg>
            </span>
          </span>
          <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">
            Unchecked
          </span>
        </label>
        <label className="MuiFormControlLabel-root">
          <span
            className="MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-1 MuiCheckbox-root MuiCheckbox-colorSecondary DhigCheckbox--size--medium PrivateSwitchBase-checked-2 Mui-checked MuiIconButton-colorSecondary"
            aria-disabled="false"
          >
            <span className="MuiIconButton-label">
              <input
                className="PrivateSwitchBase-input-4"
                type="checkbox"
                data-indeterminate="false"
                value=""
                checked=""
                onChange={() => {}}
              />
              <svg
                className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--type--ui-control-icon DhigSvgIcon--size--small"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="false"
              >
                <use
                  xlinkHref="#dhig--ui-controls--checkmark"
                  className="dhig--ui-controls--checkmark"
                />
              </svg>
            </span>
          </span>
          <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">
            Checked
          </span>
        </label>
        <label className="MuiFormControlLabel-root">
          <span
            className="MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-1 MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-indeterminate DhigCheckbox--size--medium MuiIconButton-colorSecondary"
            aria-disabled="false"
          >
            <span className="MuiIconButton-label">
              <input
                className="PrivateSwitchBase-input-4"
                type="checkbox"
                data-indeterminate="true"
                value=""
                onChange={() => {}}
              />
              <svg
                className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--type--ui-control-icon DhigSvgIcon--size--small"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="false"
              >
                <use
                  xlinkHref="#dhig--ui-controls--indeterminate"
                  className="dhig--ui-controls--indeterminate"
                />
              </svg>
            </span>
          </span>
          <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">
            Indeterminate
          </span>
        </label>
        <label className="MuiFormControlLabel-root">
          <span
            className="MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-1 MuiCheckbox-root MuiCheckbox-colorSecondary DhigCheckbox--error DhigCheckbox--size--medium MuiIconButton-colorSecondary"
            aria-disabled="false"
          >
            <span className="MuiIconButton-label">
              <input
                className="PrivateSwitchBase-input-4"
                type="checkbox"
                data-indeterminate="false"
                value=""
                onChange={() => {}}
              />
              <svg
                className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--inherit"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="false"
              >
                <use xlinkHref="#" className="" />
              </svg>
            </span>
          </span>
          <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">
            Error
          </span>
        </label>
        <label className="MuiFormControlLabel-root Mui-disabled">
          <span
            className="MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-1 MuiCheckbox-root MuiCheckbox-colorSecondary DhigCheckbox--size--medium PrivateSwitchBase-disabled-3 Mui-disabled MuiIconButton-colorSecondary Mui-disabled Mui-disabled"
            tabIndex="-1"
            aria-disabled="true"
          >
            <span className="MuiIconButton-label">
              <input
                className="PrivateSwitchBase-input-4"
                disabled=""
                type="checkbox"
                data-indeterminate="false"
                value=""
                onChange={() => {}}
              />
              <svg
                className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--inherit"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="false"
              >
                <use xlinkHref="#" className="" />
              </svg>
            </span>
          </span>
          <span className="MuiTypography-root MuiFormControlLabel-label Mui-disabled MuiTypography-body1">
            Disabled
          </span>
        </label>
      </div>
    </fieldset>
    <Paragraph>Radio</Paragraph>
    <fieldset className="MuiFormControl-root">
      <legend
        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"
        data-shrink="false"
      >
        Radio group
      </legend>
      <div className="MuiFormGroup-root" role="radiogroup">
        <label className="MuiFormControlLabel-root">
          <span
            className="MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-1 MuiRadio-root MuiRadio-colorSecondary MuiIconButton-colorSecondary"
            aria-disabled="false"
          >
            <span className="MuiIconButton-label">
              <input
                className="PrivateSwitchBase-input-4"
                type="radio"
                value="one"
                onChange={() => {}}
                name="mui-48729"
              />
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="9.5"
                  fill="white"
                ></rect>
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="9.5"
                  stroke="black"
                ></rect>
              </svg>
            </span>
          </span>
          <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">
            One
          </span>
        </label>
        <label className="MuiFormControlLabel-root">
          <span
            className="MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-1 MuiRadio-root MuiRadio-colorSecondary MuiIconButton-colorSecondary"
            aria-disabled="false"
          >
            <span className="MuiIconButton-label">
              <input
                className="PrivateSwitchBase-input-4"
                type="radio"
                value="two"
                onChange={() => {}}
                name="mui-48729"
              />
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="9.5"
                  fill="white"
                ></rect>
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="9.5"
                  stroke="black"
                ></rect>
              </svg>
            </span>
          </span>
          <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">
            Two
          </span>
        </label>
        <label className="MuiFormControlLabel-root">
          <span
            className="MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-1 MuiRadio-root MuiRadio-colorSecondary MuiIconButton-colorSecondary"
            aria-disabled="false"
          >
            <span className="MuiIconButton-label">
              <input
                className="PrivateSwitchBase-input-4"
                type="radio"
                value="three"
                onChange={() => {}}
                name="mui-48729"
              />
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="9.5"
                  fill="white"
                ></rect>
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="9.5"
                  stroke="black"
                ></rect>
              </svg>
            </span>
          </span>
          <span className="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">
            Three
          </span>
        </label>
      </div>
    </fieldset>
    <Paragraph>Select</Paragraph>
    <div>
      <div className="MuiFormControl-root MuiFormControl-fullWidth">
        <label
          className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
          data-shrink="false"
          htmlFor="select-id-placeholder"
          id="select-id-placeholder-label"
        >
          Placeholder text
          <span className="DhigInputLabel--hintText">(optional)</span>
        </label>
        <div
          className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
          data-active="false"
        >
          <div
            aria-haspopup="listbox"
            aria-labelledby="select-id-placeholder"
            className="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input"
            id="select-id-placeholder"
            role="button"
            tabIndex="0"
          >
            <em>Select...</em>
            <svg
              aria-hidden="false"
              className="MuiSvgIcon-root MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--inherit DhigSelect--checkedIcon DhigSvgIcon DhigSvgIcon--type--ui-control-icon DhigSvgIcon--size--small"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <use
                className="dhig--ui-controls--checkmark"
                xlinkHref="#dhig--ui-controls--checkmark"
              />
              <title>Selected</title>
            </svg>
          </div>
          <input
            aria-hidden="true"
            className="MuiSelect-nativeInput"
            tabIndex="-1"
            value=""
            onChange={() => {}}
          />
          <svg
            aria-hidden="false"
            className="MuiSvgIcon-root MuiSelect-icon DhigSvgIcon DhigSvgIcon--type--ui-control-icon DhigSvgIcon--size--small"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <use
              className="dhig--ui-controls--caret-down"
              xlinkHref="#dhig--ui-controls--caret-down"
            />
            <title>Toggle</title>
          </svg>
        </div>
        <p
          className="MuiFormHelperText-root MuiFormHelperText-contained"
          id="select-id-placeholder-helper-text"
        >
          Helper text
        </p>
      </div>
      <div className="dhig-mb-6" />
      <div className="MuiFormControl-root">
        <label
          className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-filled MuiFormLabel-filled"
          data-shrink="true"
          htmlFor="select"
        >
          Select label
          <span className="DhigInputLabel--hintText">(optional)</span>
        </label>
        <div
          className="MuiInputBase-root MuiFilledInput-root MuiFilledInput-underline MuiInputBase-formControl"
          data-active="false"
        >
          <div
            aria-haspopup="listbox"
            className="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-filled MuiInputBase-input MuiFilledInput-input"
            role="button"
            tabIndex="0"
          >
            Carbon-negative rubber
            <svg
              aria-hidden="false"
              className="MuiSvgIcon-root MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--inherit DhigSelect--checkedIcon DhigSvgIcon DhigSvgIcon--type--ui-control-icon DhigSvgIcon--size--small"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <use
                className="dhig--ui-controls--checkmark"
                xlinkHref="#dhig--ui-controls--checkmark"
              />
              <title>Selected</title>
            </svg>
          </div>
          <input
            aria-hidden="true"
            className="MuiSelect-nativeInput"
            tabIndex="-1"
            value="2"
            onChange={() => {}}
            id="select"
          />
          <svg
            aria-hidden="false"
            className="MuiSvgIcon-root MuiSelect-icon DhigSvgIcon DhigSvgIcon--type--ui-control-icon DhigSvgIcon--size--small"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <use
              className="dhig--ui-controls--caret-down"
              xlinkHref="#dhig--ui-controls--caret-down"
            />
            <title>Toggle</title>
          </svg>
        </div>
        <p className="MuiFormHelperText-root MuiFormHelperText-contained MuiFormHelperText-filled">
          Helper text
        </p>
      </div>
      <div className="dhig-mb-6" />
      <div
        className="MuiPaper-root MuiMenu-paper MuiPopover-paper MuiPaper-elevation0 MuiPaper-rounded"
        style={{
          minWidth: "220px",
          opacity: 1,
          transform: "none"
        }}
        tabIndex="-1"
      >
        <ul
          className="MuiList-root MuiMenu-list MuiList-padding"
          role="listbox"
          tabIndex="-1"
        >
          <li
            aria-disabled="false"
            aria-selected="false"
            className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
            data-value="1"
            role="option"
            tabIndex="-1"
          >
            Beton brut
          </li>
          <li
            aria-disabled="false"
            aria-selected="true"
            className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root Mui-selected MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button Mui-selected"
            data-value="2"
            role="option"
            tabIndex="0"
          >
            Carbon-negative rubber
            <svg
              aria-hidden="false"
              className="MuiSvgIcon-root MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--inherit DhigSelect--checkedIcon DhigSvgIcon DhigSvgIcon--type--ui-control-icon DhigSvgIcon--size--small"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <use
                className="dhig--ui-controls--checkmark"
                xlinkHref="#dhig--ui-controls--checkmark"
              />
              <title>Selected</title>
            </svg>
          </li>
          <li
            aria-disabled="false"
            aria-selected="false"
            className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
            data-value="3"
            role="option"
            tabIndex="-1"
          >
            Dark marble
          </li>
          <li
            aria-disabled="false"
            aria-selected="false"
            className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
            data-value="4"
            role="option"
            tabIndex="-1"
          >
            Durable bamboo
          </li>
          <li
            aria-disabled="false"
            aria-selected="false"
            className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
            data-value="5"
            role="option"
            tabIndex="-1"
          >
            Frosted glass
          </li>
        </ul>
      </div>
      <div
        style={{
          height: "220px"
        }}
      />
    </div>
    <Paragraph>Progress circle</Paragraph>
    <div style={{ display: "flex" }}>
      <div
        className="MuiBox-root MuiBox-root-4927"
        style={{
          marginRight: "40px",
          width: "fit-content",
          alignItems: "center",
          flexDirection: "row",
          display: "flex"
        }}
      >
        <div className="MuiBox-root MuiBox-root-4928">
          <div
            className="MuiCircularProgress-root DhigProgress--size--small DhigProgress--background MuiCircularProgress-colorPrimary MuiCircularProgress-determinate"
            role="progressbar"
            aria-valuenow="100"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              transform: "rotate(-90deg)"
            }}
          >
            <svg className="MuiCircularProgress-svg" viewBox="22 22 44 44">
              <circle
                className="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate"
                cx="44"
                cy="44"
                r="21"
                fill="none"
                strokeWidth="2"
                style={{
                  strokeDasharray: "131.947px",
                  strokeDashoffset: "0px"
                }}
              ></circle>
            </svg>
          </div>
          <div
            className="MuiCircularProgress-root DhigProgress--size--small DhigProgress--foreground MuiCircularProgress-colorPrimary MuiCircularProgress-determinate"
            role="progressbar"
            aria-valuenow="25"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              transform: "rotate(-90deg)"
            }}
          >
            <svg className="MuiCircularProgress-svg" viewBox="22 22 44 44">
              <circle
                className="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate"
                cx="44"
                cy="44"
                r="21"
                fill="none"
                strokeWidth="2"
                style={{
                  strokeDasharray: "131.947px",
                  strokeDashoffset: "98.96px"
                }}
              ></circle>
            </svg>
          </div>
        </div>
        <div
          className="MuiBox-root MuiBox-root-4929"
          style={{ marginLeft: "8px" }}
        >
          <p
            className="MuiTypography-root"
            style={{
              fontFamily: "ArtifaktElement, Arial, sans-serif",
              fontSize: "0.875rem",
              fontWeight: "400",
              lineHeight: "1.5",
              letterSpacing: "0px"
            }}
          >
            small
          </p>
        </div>
      </div>
      <div
        className="MuiBox-root MuiBox-root-4346"
        style={{ marginRight: "40px" }}
      >
        <div className="MuiBox-root MuiBox-root-4347">
          <div
            className="MuiCircularProgress-root DhigProgress--size--medium DhigProgress--background MuiCircularProgress-colorPrimary MuiCircularProgress-determinate"
            role="progressbar"
            aria-valuenow="100"
            style={{
              width: "3rem",
              height: "3rem",
              transform: "rotate(-90deg)"
            }}
          >
            <svg className="MuiCircularProgress-svg" viewBox="22 22 44 44">
              <circle
                className="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate"
                cx="44"
                cy="44"
                r="20.5"
                fill="none"
                strokeWidth="3"
                style={{
                  strokeDasharray: "128.805px",
                  strokeDashoffset: "0px"
                }}
              ></circle>
            </svg>
          </div>
          <div
            className="MuiCircularProgress-root DhigProgress--size--medium DhigProgress--foreground MuiCircularProgress-colorPrimary MuiCircularProgress-determinate"
            role="progressbar"
            aria-valuenow="25"
            style={{
              width: "3rem",
              height: "3rem",
              transform: "rotate(-90deg)"
            }}
          >
            <svg className="MuiCircularProgress-svg" viewBox="22 22 44 44">
              <circle
                className="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate"
                cx="44"
                cy="44"
                r="20.5"
                fill="none"
                strokeWidth="3"
                style={{
                  strokeDasharray: "128.805px",
                  strokeDashoffset: "96.604px"
                }}
              ></circle>
            </svg>
          </div>
          <div className="MuiBox-root MuiBox-root-4348"></div>
        </div>
        <div
          className="MuiBox-root MuiBox-root-4349"
          style={{ marginTop: "12px" }}
        >
          <p
            className="MuiTypography-root"
            style={{
              fontFamily: "ArtifaktElement, Arial, sans-serif",
              fontSize: "0.875rem",
              fontWeight: "400",
              lineHeight: "1.5",
              letterSpacing: "0px"
            }}
          >
            medium
          </p>
        </div>
      </div>
      <div className="MuiBox-root MuiBox-root-2443">
        <div className="MuiBox-root MuiBox-root-2444">
          <div
            className="MuiCircularProgress-root DhigProgress--size--large DhigProgress--background MuiCircularProgress-colorPrimary MuiCircularProgress-determinate"
            role="progressbar"
            aria-valuenow="100"
            style={{
              width: "112px",
              height: "112px",
              transform: "rotate(-90deg)"
            }}
          >
            <svg className="MuiCircularProgress-svg" viewBox="22 22 44 44">
              <circle
                className="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate"
                cx="44"
                cy="44"
                r="20.5"
                fill="none"
                strokeWidth="3"
                style={{
                  strokeDasharray: "128.805px",
                  strokeDashoffset: "0px"
                }}
              ></circle>
            </svg>
          </div>
          <div
            className="MuiCircularProgress-root DhigProgress--size--large DhigProgress--foreground MuiCircularProgress-colorPrimary MuiCircularProgress-determinate"
            role="progressbar"
            aria-valuenow="23"
            style={{
              width: "112px",
              height: "112px",
              transform: "rotate(-90deg)",
              top: "0"
            }}
          >
            <svg className="MuiCircularProgress-svg" viewBox="22 22 44 44">
              <circle
                className="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate"
                cx="44"
                cy="44"
                r="20.5"
                fill="none"
                strokeWidth="3"
                style={{
                  strokeDasharray: "128.805px",
                  strokeDashoffset: "99.18px"
                }}
              ></circle>
            </svg>
          </div>
          <div
            className="MuiBox-root MuiBox-root-2445"
            style={{
              width: "70px",
              display: "flex",
              position: "absolute",
              wordBreak: "break-word",
              flexDirection: "column"
            }}
          >
            <p
              className="MuiTypography-root MuiTypography-alignCenter"
              style={{
                fontFamily: "ArtifaktElement, Arial, sans-serif",
                fontSize: "0.875rem",
                fontWeight: "400",
                lineHeight: "1.5",
                letterSpacing: "0px"
              }}
            >
              large
            </p>
          </div>
        </div>
      </div>
    </div>
    <Paragraph>Progress bar</Paragraph>
    <div>
      <div
        className="MuiLinearProgress-root MuiLinearProgress-colorPrimary DhigProgress--size--medium MuiLinearProgress-determinate"
        role="progressbar"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate"
          style={{ transform: "translateX(-75%)" }}
        ></div>
      </div>
      <div className="MuiBox-root MuiBox-root-3835">
        <p
          className="MuiTypography-root"
          style={{
            fontFamily: "ArtifaktElement, Arial, sans-serif",
            fontSize: "1rem",
            fontWeight: "400",
            lineHeight: "1.5",
            letterSpacing: "0px"
          }}
        >
          medium
        </p>
      </div>
    </div>
    <Paragraph>Typography</Paragraph>
    <p className="dhig-typography-display dhig-m-0">Variant: display</p>
    <p className="dhig-typography-headline-medium dhig-m-0">
      Variant: headline-medium
    </p>
    <p className="dhig-typography-pull-quote-medium dhig-m-0">
      Variant: pull-quote-medium
    </p>
    <p className="dhig-typography-short-copy-small dhig-m-0">
      Variant: short-copy-small
    </p>
    <p className="dhig-typography-eyebrow dhig-m-0">Variant: eyebrow</p>
    <p
      className="dhig-typography-body-copy-medium dhig-m-0"
      style={{ color: "rgb(0, 0, 0)" }}
    >
      Color: ink-on-background
    </p>
    <p
      className="dhig-typography-body-copy-medium dhig-m-0"
      style={{ color: "rgb(195, 73, 34)" }}
    >
      Color: ink-error
    </p>
    <p
      className="dhig-typography-body-copy-medium dhig-m-0"
      style={{ color: "rgba(0, 0, 0, 0.6)" }}
    >
      Color: ink-on-background-60
    </p>
    <p
      className="dhig-typography-body-copy-medium dhig-m-0"
      style={{ color: "rgb(108, 109, 255)" }}
    >
      Color: text-link-loud
    </p>
    <p
      className="dhig-typography-body-copy-medium dhig-m-0"
      style={{ color: "rgb(92, 93, 249)" }}
    >
      Color: text-link-loud-hover
    </p>
    <p
      className="dhig-typography-body-copy-medium dhig-m-0"
      style={{ color: "rgb(44, 44, 140)" }}
    >
      Color: text-link-loud-pressed
    </p>
  </PageContainer>
);

HtmlComponents.propTypes = {
  theme: PropTypes.any
};
