import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/main.scss';
import {
  createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";
import Root from "../src/routes/root";
import ErrorPage from "./error-page";
import About from "./routes/about/About";
import Gallery from "./routes/gallery/Gallery";
import Goodie from "./routes/goodie/Goodie";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "gallery",
        element: <Gallery />
      },
      {
        path: "gallery/:logementId",
        element: <Goodie />
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
