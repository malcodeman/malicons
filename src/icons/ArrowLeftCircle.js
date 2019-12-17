import React from "react";
import PropTypes from "prop-types";

function ArrowLeftCircle(props) {
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
      <polyline points="12 8 8 12 12 16" />
      <line x1="16" y1="12" x2="8" y2="12" />
    </svg>
  );
}

ArrowLeftCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowLeftCircle.defaultProps = {
  color: "currentColor",
  size: "16"
};

export default ArrowLeftCircle;
