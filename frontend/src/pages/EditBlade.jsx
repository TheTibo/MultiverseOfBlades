import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditBlade() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const { id } = useParams();
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

  useEffect(() => {
    axios
      .get(`${URL}/api/blade/${id}`)
      .then((response) => {
        setForm(response.data);
        console.info("Ici  l'id du blade", response.data[0]);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const submitArticle = (event) => {
    event.preventDefault();
    axios
      .put(`${URL}/api/blade/${id}`, form)
      .then((response) => console.info(response))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h1>Modifie l'article :</h1>
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

        <input type="submit" value="Modifier" />
      </form>
    </div>
  );
}
