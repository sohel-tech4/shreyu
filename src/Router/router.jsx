import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);

  export default router