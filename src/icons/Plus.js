import React from "react";
import PropTypes from "prop-types";

function Plus(props) {
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
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Plus.defaultProps = {
  color: "currentColor",
  size: "16"
};

export default Plus;
