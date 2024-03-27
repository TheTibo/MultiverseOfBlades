import { React, useState, useEffect } from "react";
import axios from "axios";

import LoginAndSignin from "../components/LoginAndSignin";
import AddAndLogout from "../components/AddAndLogout";
// import BladeDescription from "./BladeDescription";
import BladeList from "../components/BladeList";

export default function Home() {
  const [blades, setBlades] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.VITE_BACKEND_URL}/api/blade`)
      .then((response) => {
        setBlades(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blades:", error);
      });
  }, []);

  return (
    <div>
      <LoginAndSignin />
      <AddAndLogout />
      {/* <BladeDescription /> */}
      {blades.map((blade) => (
        <BladeList key={blade.id} blade={blade} />
      ))}
    </div>
  );
}
// import blade Card et Add Logout et register et log in signe in
