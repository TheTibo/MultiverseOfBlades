import { React, useState, useEffect } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import LoginAndSignin from "../components/LoginAndSignin";
import AddAndLogout from "../components/AddAndLogout";
// import BladeDescription from "./BladeDescription";
import BladeList from "../components/BladeList";
import "../styles/BladeList.css";

export default function Home() {
  const [blades, setBlades] = useState([]);
  const URL = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  const refreshPage = () => {
    navigate("/", { replace: true });
  };

  useEffect(() => {
    axios
      .get(`${URL}/api/blade`)
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
      <div className="BladeCardContainer">
        {blades.map((blade) => (
          <Link key={blade.id} to={blade.url}>
            <BladeList blade={blade} refreshPage={refreshPage} />
          </Link>
        ))}
      </div>
    </div>
  );
}
// import blade Card et Add Logout et register et log in signe in
