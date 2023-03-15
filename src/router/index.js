import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home"
import Login from "../pages/login"

export default createBrowserRouter(
  [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]
  // {
  //   basename: "/w001",
  // }
)
