import React from 'react';
import "@iccc/theme-data/lib/build/css/iccc-tw-components.css";

export default {
  title: "ICCC/CSS and SASS/Component CSS/Button",
  parameters: {
    disableThemeMui: true,
    renderHTML: true
  }
};

export const Spacer = ({ height = "8px" }) => <div style={{ height }} />;

export const Light = () => (
  <div className="iccc-theme-light">
    <button className="iccc-button iccc-button-contained iccc-button-medium iccc-typography-button-label">
      Contained
    </button>
    <Spacer />
    <button className="iccc-button iccc-button-outlined iccc-button-medium iccc-typography-button-label">
      Outlined
    </button>
    <Spacer />
    <button className="iccc-button iccc-button-text iccc-button-medium iccc-typography-button-label">
      Text
    </button>
    <Spacer />
    {/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/no-noninteractive-tabindex */}
    <a
      className="iccc-button iccc-button-link iccc-button-medium iccc-typography-button-label"
      tabIndex={0}
    >
      <span
        className="iccc-button-icon iccc-button-icon-start"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <svg className="iccc-svg-icon" viewBox="0 0 24 24" fill="none">
          <use xlinkHref="#iccc--icons--cta-arrow-right" />
        </svg>
      </span>
      Link
    </a>
    <Spacer />
    <button className="iccc-button iccc-button-contained iccc-button-small iccc-typography-button-label-dense">
      Contained
    </button>
    <Spacer />
    <button className="iccc-button iccc-button-outlined iccc-button-small iccc-typography-button-label-dense">
      Outlined
    </button>
    <Spacer />
    <button className="iccc-button iccc-button-text iccc-button-small iccc-typography-button-label-dense">
      Text
    </button>
    <Spacer />
    {/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/no-noninteractive-tabindex */}
    <a
      className="iccc-button iccc-button-link iccc-button-small iccc-typography-button-label-dense"
      tabIndex={0}
    >
      <span
        className="iccc-button-icon iccc-button-icon-start"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <svg className="iccc-svg-icon" viewBox="0 0 24 24" fill="none">
          <use xlinkHref="#iccc--icons--cta-arrow-right" />
        </svg>
      </span>
      Link
    </a>
  </div>
);
