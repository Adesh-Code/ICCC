import * as React from "react";
const SvgPlaybackLoop = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="av/playback-loop">
      <path
        id="stroke"
        d="M8.83333 2L13 6.16667M13 6.16667L8.83333 10.3333M13 6.16667H6C4.5 6.16667 2 7 2 10.3333V14C2 16.5 3.6 18 6 18H7.5M15.1667 22L11 17.8333M11 17.8333L15.1667 13.6667M11 17.8333H18C19.5 17.8333 22 17 22 13.6667V10C22 7.5 20.4 6 18 6H16.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgPlaybackLoop;
