import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import BladeDescription from "./pages/BladeDescription";
import BladeCard from "./components/BladeCard";

import App from "./App";
import AddBlade from "./pages/AddBlade";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/description",
        element: <BladeDescription />,
        loader: () =>
          axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/blade`, {
              withCredentials: true,
            })
            .then((response) => response.data)
            .catch((error) => console.error(error)),
      },
      { path: "/description/:id", element: <BladeCard /> },
      { path: "/addBlade", element: <AddBlade /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
