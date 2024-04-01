import * as React from "react";
const SvgVisible = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="actions/visible">
      <g id="stroke">
        <path
          d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
        <path
          d="M22 12C22 12 18.8421 19 12 19C5.15789 19 2 12 2 12C2 12 5.15789 5 12 5C18.8421 5 22 12 22 12Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);
export default SvgVisible;
