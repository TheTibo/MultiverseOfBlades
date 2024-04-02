import { React, useState } from "react";
import axios from "axios";

import "../styles/AddBlade.css";

export default function AddBlade() {
  const [form, setForm] = useState({
    name: "",
    origin: "",
    picture: "",
    userId: 1,
  });
  const handleChangeForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submitArticle = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/blade/`, form)
      .then((response) => console.info(response))
      .catch((err) => console.error(err));
  };
  return (
    <div className="addContainer">
      <h1>Ajoute ton article :</h1>
      <form onSubmit={submitArticle}>
        <label htmlFor="name">Nom de l'épee :</label>
        <input type="text" name="name" onChange={handleChangeForm} id="name" />

        <label htmlFor="origin">Origin :</label>
        <textarea name="origin" onChange={handleChangeForm} id="origin" />

        <label htmlFor="picture">Lien de l'image ( PNJ, JPEG ):</label>
        <input
          type="text"
          name="picture"
          onChange={handleChangeForm}
          id="picture"
        />

        <input type="submit" />
      </form>
    </div>
  );
}
