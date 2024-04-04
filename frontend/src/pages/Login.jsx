import { React, useState, useContext } from "react";
import axios from "axios";

import UserContext from "../services/UserContext";

import "../styles/Login.css";

export default function Login() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    axios
      .post(
        `${URL}/api/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setUser({
          id: response.data.id,
          email: response.data.email,
          username: response.data.username,
        });
        console.info("Je suis bieng connectée - Axo ", response);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="loginContainer">
      <h1>Se connecter</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="email">Email :</label>
        <input type="email" onChange={handleChangeEmail} />
        <label htmlFor="password">Password :</label>
        <input type="password" onChange={handleChangePassword} />
        <input type="submit" />
      </form>
    </div>
  );
}
