import { createBrowserRouter } from "react-router";
import Error from "../pages/Error";
import Destination from "../pages/Destination/Destination";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DestinationMap from "../pages/DestinationMap/DestinationMap";
import News from "../pages/News/News";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import HomeLayout from "../pages/Home/HomeLayout";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/news",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/destination",
        element: (
          <PrivateRoute>
            <Destination />
          </PrivateRoute>
        ),
      },
      {
        path: "destination-map",
        Component: DestinationMap,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },

  {
    path: "/*",
    Component: Error,
  },
]);
