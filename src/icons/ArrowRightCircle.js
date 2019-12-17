import React from "react";
import PropTypes from "prop-types";

function ArrowRightCircle(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 16 16 12 12 8" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

ArrowRightCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRightCircle.defaultProps = {
  color: "currentColor",
  size: "16"
};

export default ArrowRightCircle;
