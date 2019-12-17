import React from "react";
import PropTypes from "prop-types";

function ArrowUpCircle(props) {
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
      <polyline points="16 12 12 8 8 12" />
      <line x1="12" y1="16" x2="12" y2="8" />
    </svg>
  );
}

ArrowUpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpCircle.defaultProps = {
  color: "currentColor",
  size: "16"
};

export default ArrowUpCircle;
