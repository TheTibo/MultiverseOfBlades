import { React, useState, useParams, useEffect } from "react";
import axios from "axios";

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
  return (
    <div>
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
