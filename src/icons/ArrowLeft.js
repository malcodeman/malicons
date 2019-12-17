import React from "react";
import PropTypes from "prop-types";

function ArrowLeft(props) {
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
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

ArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowLeft.defaultProps = {
  color: "currentColor",
  size: "16"
};

export default ArrowLeft;
