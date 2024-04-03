import * as React from "react";
const SvgNotification = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="actions/notification">
      <path
        id="stroke"
        d="M15 18.0064H21C20.4838 16.7243 19.5312 15.6658 18.3103 15.0179L17.7471 14.673V7.7765C17.7471 7.7765 12.6517 0.362708 6.25287 7.7765V14.673L5.68966 15.0179C4.46883 15.6658 3.51621 16.7243 3 18.0064H9M15 18.0064C15 18.0064 15 21.0064 12 21.0064C9 21.0064 9 18.0064 9 18.0064M15 18.0064H9M13 3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgNotification;
