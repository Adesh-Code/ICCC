import * as React from "react";
const SvgFilter = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="actions/filter">
      <path
        id="stroke"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5.25V7.58L10 13.25V21.25L14 19.25V13.25L21 7.71V5.25H3Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgFilter;
