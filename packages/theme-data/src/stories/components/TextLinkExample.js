import React from "react";
import PropTypes from "prop-types";

const ListItems = ({ token }) => {
  const deprecatedProperties = [
    "underlineColor",
    "underlineOffset",
    "underlineThickness"
  ];

  return Object.entries(token)
    .filter(([key]) => !deprecatedProperties.includes(key))
    .map(([key, value]) => (
      <li key={key}>
        {key}: <strong>{value}</strong>
      </li>
    ));
};

const TextLinkExample = ({ value }) => {
  const darkThemeColorValues = ["rgb(255, 255, 255)", "rgb(170, 170, 170)"];
  return (
    <>
      <div
        className="iccc-p-4"
        style={{
          background: darkThemeColorValues.includes(value.color)
            ? "black"
            : "white"
        }}
      >
        <span style={value}>
          The quick, brown fox jumped over the lazy dog.
        </span>
      </div>
      <ul style={{ fontSize: ".75rem" }}>
        <ListItems token={value} />
      </ul>
    </>
  );
};

TextLinkExample.propTypes = {
  value: PropTypes.shape({
    color: PropTypes.string,
    outlineColor: PropTypes.string,
    outlineOffset: PropTypes.string,
    outlineStyle: PropTypes.string,
    outlineWidth: PropTypes.string,
    textDecoration: PropTypes.string,
    textDecorationColor: PropTypes.string,
    textDecorationThickness: PropTypes.string,
    textUnderlineOffset: PropTypes.string,
    underlineColor: PropTypes.string,
    underlineOffset: PropTypes.string,
    underlineThickness: PropTypes.string
  })
};

export default TextLinkExample;
