import * as React from "react";
const SvgHamburgerMenu = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="navigation/hamburger-menu">
      <path
        id="stroke"
        d="M3 5H21M3 12H21M3 19H21"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgHamburgerMenu;
