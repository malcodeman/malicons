import React from "react";
import PropTypes from "prop-types";

function ArrowDownRight(props) {
  const { color, size } = props;

  return (
    <svg
      {...props}
      width={size}
      height={size}
      stroke={color}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="7" x2="17" y2="17" />
      <polyline points="17 7 17 17 7 17" />
    </svg>
  );
}

ArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownRight.defaultProps = {
  color: "currentColor",
  size: "16"
};

export default ArrowDownRight;
