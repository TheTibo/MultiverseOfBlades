import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import BladeCard from "./components/BladeCard";

import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/description",
        element: <BladeCard />,
        loader: () =>
          axios
            .get(`${import.meta.VITE_BACKEND_URL}/api/blade`)
            .then((response) => response.data)
            .catch((error) => console.error(error)),
      },
      { path: "/description/:id", element: <BladeCard /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
