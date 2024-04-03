import * as React from "react";
const SvgSupport = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="actions/support">
      <path
        id="stroke"
        d="M5 9C5.61607 5.56459 8.25219 3 12 3C15.7477 3 18.2042 5.56459 19 9M5 9C2.79086 9 1 10.7909 1 13C1 15.2091 2.79086 17 5 17V9ZM19 9C21.2091 9 23 10.7909 23 13C23 15.2091 21.2091 17 19 17M19 9V17M19 17C18.0909 18 16.0545 20 13 20M13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgSupport;
