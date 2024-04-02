import { React, useState, useEffect } from "react";

import axios from "axios";

import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import "../styles/BladeList.css";

export default function BladeList({ blade }) {
  const { id } = useParams();
  const [description, setDescription] = useState([]);
  const URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${URL}/api/blade:id`, {
        params: {
          id,
        },
      })
      .then((response) => {
        setDescription(response.data);
        console.info(description);
      })
      .catch((error) => {
        console.error("Error fetching blades:", error);
      });
  }, []);

  return (
    <div className>
      <Link to={`/description/${blade.id}`}>
        <div className="BladeCardPicture">
          <img src={blade.picture} alt="bladePicture" />
        </div>
        <div className="BladeName">
          <h2>{blade.name}</h2>
        </div>
      </Link>
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
