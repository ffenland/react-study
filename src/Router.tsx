import { createBrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Root from "./Root";
import NotFound from "./pages/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import Nomad from "./pages/nomad/Nomad";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home />, errorElement: <ErrorComponent /> },
      { path: "about", element: <About /> },
      {
        path: "nomad",
        element: <Nomad />,
        children: [{ path: "movie", element }],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
