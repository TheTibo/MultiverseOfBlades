import { React } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../styles/BladeList.css";
import "../styles/EditAndDelete.css";

export default function BladeList({ blade, refreshPage }) {
  const deleteBlade = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/blade/${blade.id}`)
      .then(() => refreshPage())
      .catch((error) => console.error(error));
  };

  return (
    <div className="BladeCardContainer">
      <div className="BladeCardPicture">
        <img src={blade.picture} alt="bladePicture" />
      </div>
      <div className="BladeName">
        <h1>{blade.name}</h1>
      </div>
      <div className="EditAndDelete">
        <Link to="/editBlade">
          <button type="button">Edit</button>
        </Link>
        <button type="button" onClick={deleteBlade}>
          Delete
        </button>
      </div>
    </div>
  );
}

BladeList.propTypes = {
  blade: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
  }).isRequired,
  refreshPage: PropTypes.func.isRequired,
};
