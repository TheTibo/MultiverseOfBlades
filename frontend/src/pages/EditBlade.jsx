import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "../styles/EditBladePage.css";

export default function EditBlade() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const { id } = useParams();

  const [blade, setBlade] = useState({
    name: "",
    origin: "",
    picture: "",
  });

  const handleChangeForm = (event) => {
    setBlade({
      ...blade,
      [event.target.name]: event.target.value,
    });
  };

  const getBladeInfos = () => {
    axios
      .get(`${URL}/api/blade/${id}`)
      .then((response) => {
        setBlade(response.data[0]);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getBladeInfos();
  }, []);

  const submitArticle = (event) => {
    event.preventDefault();
    axios
      .put(`${URL}/api/blade/${id}`, blade)
      .then((response) => console.info(response))
      .catch((err) => console.error(err));
  };

  return (
    <div className="EditBladeContainer">
      <h1>Modifie l'article :</h1>
      <form onSubmit={submitArticle}>
        <label htmlFor="name">Nom de l'épee :</label>
        <input
          type="text"
          name="name"
          onChange={handleChangeForm}
          id="name"
          value={blade.name}
        />

        <label htmlFor="origin">Origin :</label>
        <textarea
          name="origin"
          onChange={handleChangeForm}
          id="origin"
          value={blade.origin}
        />

        <label htmlFor="picture">Lien de l'image ( PNJ, JPEG ):</label>
        <input
          type="text"
          name="picture"
          onChange={handleChangeForm}
          id="picture"
          value={blade.picture}
        />

        <input type="submit" value="Modifier" />
      </form>
    </div>
  );
}
