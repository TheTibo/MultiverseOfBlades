import { React, useState, useParams, useEffect } from "react";
import axios from "axios";
import Link from "react-router-dom";

function DescriptionBlade() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const { id } = useParams();

  const [blade, setBlade] = useState({
    name: "",
    origin: "",
    picture: "",
  });

  const getBladeInfos = () => {
    axios
      .get(`${URL}/api/blade/${id}`)
      .then((response) => {
        setBlade(response.data[0]);
        console.info(blade);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getBladeInfos();
  }, []);

  const deleteBlade = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/blade/${blade.id}`)
      .then(() => console.info(blade)())
      .catch((error) => console.error(error));
  };
  return (
    <div>
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
      <h2>Ex</h2>
      {/* <img></img> */}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        corrupti ullam ab. Reiciendis voluptatum laudantium consectetur, facere
        distinctio libero molestias incidunt sit dolor. Deserunt illo laudantium
        dolores aut cumque doloribus.
      </p>
    </div>
  );
}

export default DescriptionBlade;

//  mettre id du jeu ici
// axios, refresh aand edit function
