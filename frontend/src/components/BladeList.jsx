import React from "react";
import PropTypes from "prop-types";
import "../styles/BladeList.css";

export default function BladeList({ blade }) {
  return (
    <div className>
      <div className="BladeCardPicture">
        <img src={blade.picture} alt="bladePicture" />
      </div>
      <div className="BladeName">
        <h2>{blade.name}</h2>
      </div>
    </div>
  );
}

BladeList.propTypes = {
  blade: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};
