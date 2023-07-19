import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/main.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../src/routes/root";
import ErrorPage from "./error-page";
import About from "./routes/about/About";
import Goodie from "./routes/goodie/Goodie";
import Gallery from "./routes/gallery/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Gallery /> },
      {
        
        path: "gallery/:logementId",
        element: <Goodie />,
      },
      {
        path: "about/",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
