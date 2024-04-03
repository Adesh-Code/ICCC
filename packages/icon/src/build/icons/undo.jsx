import * as React from "react";
const SvgUndo = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="utility/undo">
      <path
        id="stroke"
        d="M7.97 17L2 11M2 11L7.97 5M2 11C2 11 6.62139 11 13 11C17 11 21 12 22 16.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgUndo;
