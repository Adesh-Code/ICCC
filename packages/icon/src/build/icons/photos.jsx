import * as React from "react";
const SvgPhotos = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="miscellaneous/photos">
      <circle id="fill" cx={12.5} cy={11.5} r={2.5} fill="currentColor" />
      <path
        id="stroke"
        d="M5 3.76667V2H22V19H20.2333M17 22H2L2 15.75M17 22V7L2 7L2 15.75M17 22C13.3333 16.6667 7.83333 15.75 2 15.75"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgPhotos;
