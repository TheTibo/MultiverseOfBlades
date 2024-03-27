import React from "react";
import PropTypes from "prop-types";

export default function BladeList({ blade }) {
  console.info({ blade });
  return (
    <div>
      <h3>{blade.name}</h3>
    </div>
  );
}

BladeList.propTypes = {
  blade: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
