import React from "react";
import PropTypes from "prop-types";

function ArrowDownLeft(props) {
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
      <line x1="17" y1="7" x2="7" y2="17" />
      <polyline points="17 17 7 17 7 7" />
    </svg>
  );
}

ArrowDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownLeft.defaultProps = {
  color: "currentColor",
  size: "16"
};

export default ArrowDownLeft;
