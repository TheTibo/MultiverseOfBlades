import { React, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

export default function Register() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${URL}/api/user`, {
        email,
        password,
        username,
      })
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <h1>Page de register</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={handleChangeEmail} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={handleChangePassword} />
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={handleChangeUsername} />
        <input type="submit" />
      </form>

      <Link to="/login">
        <button type="button">Log in</button>{" "}
      </Link>
    </div>
  );
}
