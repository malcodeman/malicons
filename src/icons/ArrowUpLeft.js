import React from "react";
import PropTypes from "prop-types";

function ArrowUpLeft(props) {
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
      <line x1="17" y1="17" x2="7" y2="7" />
      <polyline points="7 17 7 7 17 7" />
    </svg>
  );
}

ArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpLeft.defaultProps = {
  color: "currentColor",
  size: "16"
};

export default ArrowUpLeft;
