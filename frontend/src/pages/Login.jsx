import { React, useState } from "react";
import axios from "axios";

export default function Login() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <h1>Se connecter</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="email">Email</label>
        <input type="email" onChange={handleChangeEmail} />
        <label htmlFor="password">Password</label>
        <input type="password" onChange={handleChangePassword} />
        <input type="submit" />
      </form>
    </div>
  );
}
