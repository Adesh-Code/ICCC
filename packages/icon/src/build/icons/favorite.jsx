import * as React from "react";
const SvgFavorite = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="utility/favorite">
      <path
        id="stroke"
        d="M15.2993 8.29405L12.0291 2L8.75867 8.29405H2L6.8853 13.9785L4.68307 21.0672L12.0291 17.2248L19.2472 21.0672L17.045 13.9785L22 8.29405H15.2993Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgFavorite;
