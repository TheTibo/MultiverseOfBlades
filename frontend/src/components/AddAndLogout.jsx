import React from "react";
import { Link } from "react-router-dom";

import "../styles/AddAndLogout.css";

export default function AddAndLogout() {
  return (
    <div className="AddAndLogout">
      <Link to="/addBlade">
        <button type="button">Add</button>
      </Link>
      <button type="button">Log out</button>
    </div>
  );
}
