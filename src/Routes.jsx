import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import AboutUs from "pages/AboutUs";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "aboutus",
      element: <AboutUs />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
