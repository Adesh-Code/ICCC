import * as React from "react";
const SvgItem = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="miscellaneous/item">
      <path
        id="stroke"
        d="M7 6H17M7 10H17M7 14H17M7 18H17M21 23H3V1H21V23Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgItem;
