import * as React from "react";
const SvgPaste = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="actions/paste">
      <path
        id="stroke"
        d="M22 13.1425L18.1818 9.5M22 13.1425H18.1818V9.5M22 13.1425V22.5H10V9.5H18.1818M16.5273 7V3.5H15.0864M7.5 20H1V3.5H2.44092M5 2H12.5V5H5V2Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgPaste;
