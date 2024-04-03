import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";

import App from "./App";
import AddBlade from "./pages/AddBlade";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BladeCard from "./components/BladeCard";
import EditBlade from "./pages/EditBlade";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: `/description/:id`, element: <BladeCard /> },
      { path: "/addBlade", element: <AddBlade /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/editBlade", element: <EditBlade /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
