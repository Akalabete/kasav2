import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/main.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from '../src/routes/root'
import ErrorPage from "./error-page";
import About from "../src/components/about/About"
import Gallery from "../src/components/gallery/Gallery"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    
    children: [
      {
        path: "about",
        element: <About />,/*about */
      },
      {
        path: "gallery",
        element: <Gallery />
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

