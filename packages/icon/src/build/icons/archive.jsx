import * as React from "react";
const SvgArchive = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="actions/archive">
      <path
        id="stroke"
        d="M4 8V20H20V8M9 13.5H15M3 4H21V8H3V4Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgArchive;
