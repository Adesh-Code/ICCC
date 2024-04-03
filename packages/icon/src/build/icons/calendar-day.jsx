import * as React from "react";
const SvgCalendarDay = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="miscellaneous/calendar-day">
      <path
        id="fill"
        d="M12.949 16.9143V10H11.8204L10 11L10 12.24L11.4684 11.5543V16.9143H10V18H11.4684H14.4417V16.9143H12.949Z"
        fill="currentColor"
      />
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
export default SvgCalendarDay;
