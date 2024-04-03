import React from "react";
import { Link } from "react-router-dom";

import "../styles/LoginAndSignin.css";

export default function LoginAndSignin() {
  return (
    <div className="LogSignContainer">
      <Link to="/login">
        <button type="button">Log in</button>
      </Link>
      <Link to="/register">
        <button type="button">Sign in</button>
      </Link>
    </div>
  );
}
