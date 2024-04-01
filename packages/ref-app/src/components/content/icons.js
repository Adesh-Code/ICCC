import React from "react";
import PropTypes from "prop-types";
import { CodeSnippet, PageContainer, Paragraph } from "../common";
import "external-svg-loader";

export const Icons = ({ theme }) => (
  <PageContainer additionalClassnames={theme.classname}>
    <h3 className="dhig-typography-headline-medium">Digital HIG icons</h3>
    <Paragraph>
      Note: The icons displayed below are only for collection documentation
      purposes. This document is not intended to serve as implementation
      reference.
      <br />
      <b>
        All available icons can be seen in{" "}
        <a href="https://storybook.digital-help-stg.autodesk.com/iccc/current/index.html?path=/docs/components-icon--basic-usage">
          the Digital HIG Storybook
        </a>
        .
      </b>
    </Paragraph>
    <h3 className="dhig-typography-headline-medium">
      Implementation reference
    </h3>
    <h4 className="dhig-typography-headline-smaller">
      How to consume icons in HTML/CSS
    </h4>
    <CodeSnippet
      language="javascript"
      code={`!function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://swc.autodesk.com/pharmacopeia/svg/v0/[YOUR_ICON_PATH].svg");
  xhr.onload = function() {
      document.getElementById("svg-container").innerHTML += xhr.responseText;
  }
  xhr.send();
  // In this example, the script is appending the results to the svg-container div in the body tag.
  // As the function is self-executing, it is not necessary to call it.
}();`}
    />
    <br />
    <b>Basic Syntax:</b>
    <CodeSnippet
      language="html"
      code={`<svg>
  <use xlink:href="#svg_icon_id" />
</svg>`}
    />
    <Paragraph>
      <b>Examples:</b>
      <br />
      Please note that Material-UI specific CSS classes are used to style the
      icons.
    </Paragraph>
    <CodeSnippet
      language="html"
      code={`<svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium">
  <use xlink:href="#dhig--icons--add-folder" />
</svg>
<svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium">
  <use xlink:href="#dhig--icons--add-support-call" />
</svg>
<svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium">
  <use xlink:href="#dhig--icons--upload" />
</svg>`}
    />
    <Paragraph>
      <svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium">
        <use xlinkHref="#dhig--icons--add-folder" />
      </svg>
      <svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium">
        <use xlinkHref="#dhig--icons--support-call" />
      </svg>
      <svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium">
        <use xlinkHref="#dhig--icons--upload" />
      </svg>
    </Paragraph>
    <Paragraph>
      <b>Display icons:</b>
      <br />
      Display icons have no small size, and default to medium. They use the{" "}
      <code>DhigSvgIcon--type--display-icon</code> class.{" "}
    </Paragraph>
    <CodeSnippet
      language="html"
      code={`// Medium display icons (default)
<svg class="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--type--display-icon DhigSvgIcon--size--medium">
  <use xlink:href="#dhig--display-icons--alert" />
</svg>
<svg class="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--type--display-icon DhigSvgIcon--size--medium">
  <use xlink:href="#dhig--display-icons--complete" />
</svg>
<svg class="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--type--display-icon DhigSvgIcon--size--medium">
  <use xlink:href="#dhig--display-icons--info" />
</svg>`}
    />
    <Paragraph>
      <svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--type--display-icon DhigSvgIcon--size--medium">
        <use xlinkHref="#dhig--display-icons--alert" />
      </svg>
      <svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--type--display-icon DhigSvgIcon--size--medium">
        <use xlinkHref="#dhig--display-icons--complete" />
      </svg>
      <svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--type--display-icon DhigSvgIcon--size--medium">
        <use xlinkHref="#dhig--display-icons--info" />
      </svg>
    </Paragraph>
    <CodeSnippet
      language="html"
      code={`// Large display icons
<svg class="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--type--display-icon DhigSvgIcon--size--large">
  <use xlink:href="#dhig--display-icons--alert" />
</svg>
<svg class="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--type--display-icon DhigSvgIcon--size--large">
  <use xlink:href="#dhig--display-icons--complete" />
</svg>
<svg class="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--type--display-icon DhigSvgIcon--size--large">
  <use xlink:href="#dhig--display-icons--info" />
</svg>
`}
    />
    <Paragraph>
      <svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--type--display-icon DhigSvgIcon--size--large">
        <use xlinkHref="#dhig--display-icons--alert" />
      </svg>
      <svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--type--display-icon DhigSvgIcon--size--large">
        <use xlinkHref="#dhig--display-icons--complete" />
      </svg>
      <svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--type--display-icon DhigSvgIcon--size--large">
        <use xlinkHref="#dhig--display-icons--info" />
      </svg>
    </Paragraph>
    <Paragraph>
      <b>Icon sizes:</b>
    </Paragraph>
    <CodeSnippet
      language="html"
      code={`// Small
<svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--small">
  <use xlink:href="#dhig--icons--sort" />
</svg>
// Medium
<svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium">
  <use xlink:href="#dhig--icons--sort" />
</svg>
// Large
<svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--large">
 <use xlink:href="#dhig--icons--sort" />
</svg>
`}
    />
    <Paragraph>
      <svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--small">
        <use xlinkHref="#dhig--icons--sort" />
      </svg>
      <svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium">
        <use xlinkHref="#dhig--icons--sort" />
      </svg>
      <svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--large">
        <use xlinkHref="#dhig--icons--sort" />
      </svg>
    </Paragraph>
    <Paragraph>
      <b>Inheriting size:</b>
      <br />
      Icons can inherit size by using the{" "}
      <code>DhigSvgIcon--size--inherit</code> class.
    </Paragraph>
    <CodeSnippet
      language="html"
      code={`<svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--inherit">
  <use xlink:href="#dhig--icons--pin" />
</svg> Sample text `}
    />
    <Paragraph>
      <svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--inherit">
        <use xlinkHref="#dhig--icons--pin" />
      </svg>{" "}
      Sample text
    </Paragraph>
    <Paragraph>
      <b>Decorative icons:</b>
    </Paragraph>
    The <code>aria-hidden</code> attribute can be used for icons intended as
    decorative elements, i.e. visible only to screen readers.
    <CodeSnippet
      language="html"
      code={`<svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium " aria-hidden="true">
  <use xlink:href="#dhig--icons--unpin" />
</svg>`}
    />
    <Paragraph>
      <svg
        className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium"
        aria-hidden="true"
      >
        <use xlinkHref="#dhig--icons--unpin" />
      </svg>
    </Paragraph>
    <Paragraph>
      <b>Dark theme</b>
    </Paragraph>
    <CodeSnippet
      language="html"
      code={`// Using the "dhig-theme--dark" class on an outer div.
<div className="dhig-theme--dark">
  <svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium">
    <use xlink:href="#dhig--icons--forums" />
  </svg>
</div>`}
    />
    <div className="dhig-theme--dark">
      <svg className="MuiSvgIcon-root DhigSvgIcon DhigSvgIcon--size--medium">
        <use xlinkHref="#dhig--icons--forums" />
      </svg>
    </div>
    <h3 className="dhig-typography-headline-medium">React icons</h3>
    <a href="https://storybook.digital-help-stg.autodesk.com/iccc/current/index.html?path=/docs/components-icon--display-icons">
      Digital HIG Storybook: how to use React icons guide
    </a>
  </PageContainer>
);

Icons.propTypes = {
  theme: PropTypes.any
};
