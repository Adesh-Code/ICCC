import * as React from "react";
const SvgFavoriteHalf = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="utility/favorite-half">
      <path
        id="stroke"
        d="M11.8882 2.5L15.1584 8.79405H21.8591L16.904 14.4785L19.1063 21.5672L11.8882 17.7248"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="fill"
        d="M4.5 22.5L11.8881 18.5V2H11.359L7.859 8H1.50099C1.06511 8 0.837939 8.51885 1.13359 8.83914L6.359 14.5L3.79518 21.8914C3.64375 22.3204 4.09757 22.7123 4.5 22.5Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
export default SvgFavoriteHalf;
