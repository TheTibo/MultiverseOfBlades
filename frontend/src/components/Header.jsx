import React from "react";

import { Link } from "react-router-dom";

import "../styles/Header.css";

export default function Header() {
  return (
    <div className="HeaderContainer">
      <Link to="/">
        <img
          src="http://localhost:3310/public/assets/images/SwordHeader.jpg"
          alt="Banner"
        />

        <h1 className="ImageTitle">Multiverse Of Blades</h1>
      </Link>
    </div>
  );
}
