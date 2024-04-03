import * as React from "react";
const SvgCalendar = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="utility/calendar">
      <path
        id="stroke"
        d="M22 8V2.81829H17.5M22 8V21H2V8M22 8H2M2 8V2.81829H6.5M10 4.63634V1M14 4.63634V1"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgCalendar;
