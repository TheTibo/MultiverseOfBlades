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
    <div>
      <div className="BladeCardPicture">
        <img src={blade.picture} alt="bladePicture" />
      </div>
      <div className="BladeName">
        <Link to={`/editBlade/${blade.id}`}>
          <button type="button" className="EditBtn">
            <img
              src="http://localhost:3310/public/assets/images/update.png"
              alt="bladePicture"
            />
          </button>
        </Link>
        <h1>{blade.name}</h1>
        <button type="button" className="DeleteBtn" onClick={deleteBlade}>
          <img
            src="http://localhost:3310/public/assets/images/bin.png"
            alt="bladePicture"
          />
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
