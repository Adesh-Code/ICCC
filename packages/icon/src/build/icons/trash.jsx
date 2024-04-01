import * as React from "react";
const SvgTrash = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="actions/trash">
      <path
        id="stroke"
        d="M15.7059 5.92647V3.94647C15.7363 3.32634 15.2663 2.79525 14.647 2.75H9.35293C8.74149 2.81073 8.28003 3.33219 8.29411 3.94647V5.92647M15.7059 5.92647H18.3529M15.7059 5.92647H8.29411M8.29411 5.92647H5.64705M5.64705 5.92647H4M5.64705 5.92647V20.75H18.3529V5.92647M20 5.92647H18.3529M12 10.25V16.25M14.647 10.25V16.25M9.35293 10.25V16.25"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgTrash;
