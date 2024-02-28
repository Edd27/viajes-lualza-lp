import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import "./index.css";
import Travels from "./routes/travels";
import { ThemeProvider } from "./components/theme-provider";
import TravelDetail from "./routes/travel-detail";
import Gallery from "./routes/gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/viajes",
    element: <Travels />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/viajes/:id",
    element: <TravelDetail />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/galeria",
    element: <Gallery />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(<React.StrictMode>
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
</React.StrictMode>);
