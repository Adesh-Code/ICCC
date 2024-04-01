import * as React from "react";
const SvgSelectNone = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="actions/select-none">
      <path
        id="stroke"
        d="M18.5 8.5L21 8.5L21 21.5L8 21.5L8 18.5M16 16V3H3V16H16Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgSelectNone;
