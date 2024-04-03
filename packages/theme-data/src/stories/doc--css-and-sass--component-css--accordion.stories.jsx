import React from 'react';
import { Meta, Story, Canvas } from "@storybook/addon-docs";
import "@iccc/theme-data/lib/build/css/iccc-tw-components.css";

export default {
  title: "ICCC/CSS and SASS/Component CSS/Accordion",
  parameters: {
    disableThemeMui: true,
    renderHTML: true
  }
};

export const Light = () => (
  <div className="iccc-theme-light">
    <details className="iccc-accordion">
      <summary
        className="iccc-accordion-summary"
        id="accordion-list"
        aria-controls="accordion-list-content"
      >
        <div className="iccc-accordion-summary-content">
          <span className="iccc-typography-headline-smaller">Accordion</span>
        </div>
        <div className="iccc-accordion-summary-content-icon-wrapper">
          <svg
            className="iccc-svg-icon"
            focusable="false"
            aria-hidden="false"
            viewBox="0 0 24 24"
          >
            <use xlinkHref="#iccc--ui-controls--caret-down-small" />
          </svg>
        </div>
      </summary>
      <div
        className="iccc-accordion-details"
        aria-labelledby="accordion-list"
        id="accordion-list-content"
        role="region"
      >
        <span className="iccc-typography-body-copy-medium">
          Accordion content
        </span>
      </div>
    </details>
  </div>
);

export const Dark = () => (
  <div className="iccc-theme-dark">
    <details className="iccc-accordion">
      <summary
        className="iccc-accordion-summary"
        id="accordion-list"
        aria-controls="accordion-list-content"
      >
        <div className="iccc-accordion-summary-content">
          <span className="iccc-typography-headline-smaller">Accordion</span>
        </div>
        <div className="iccc-accordion-summary-content-icon-wrapper">
          <svg
            className="iccc-svg-icon"
            focusable="false"
            aria-hidden="false"
            viewBox="0 0 24 24"
          >
            <use xlinkHref="#iccc--ui-controls--caret-down-small" />
          </svg>
        </div>
      </summary>
      <div
        className="iccc-accordion-details"
        aria-labelledby="accordion-list"
        id="accordion-list-content"
        role="region"
      >
        <span className="iccc-typography-body-copy-medium">
          Accordion content
        </span>
      </div>
    </details>
  </div>
);
