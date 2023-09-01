import { lazy, FC } from "react";
import { useRoutes, RouteObject } from "react-router-dom";
import Login from "../pages/Login";
import Welcome from "../pages/Welcome";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import Settings from "../pages/Settings";
import FirstSelection from "../pages/Input";
import Output from "../pages/Output";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import NewUser from "../pages/NewUser";

const NotFound = lazy(() => import("../pages/404"));

const routeList: RouteObject[] = [
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/beleptetes",
    element: <FirstSelection />,
  },
  {
    path: "/kileptetes",
    element: <Output />,
  },
  {
    path: "/statisztika",
    element: <Statistics />,
  },
  {
    path: "/new_user",
    element: <NewUser />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;
