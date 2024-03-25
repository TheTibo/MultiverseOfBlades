import React from "react";

import "../styles/Header.css";

export default function Header() {
  return (
    <div className="HeaderContainer">
      <img
        src="http://localhost:3310/public/assets/images/SwordHeader.jpg"
        alt="Banner"
      />
      <h1 className="ImageTitle">Multiverse Of Blades</h1>
    </div>
  );
}
