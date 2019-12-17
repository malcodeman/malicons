import React from "react";
import PropTypes from "prop-types";

function ArrowDownCircle(props) {
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
      <polyline points="8 12 12 16 16 12" />
      <line x1="12" y1="8" x2="12" y2="16" />
    </svg>
  );
}

ArrowDownCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownCircle.defaultProps = {
  color: "currentColor",
  size: "16"
};

export default ArrowDownCircle;
