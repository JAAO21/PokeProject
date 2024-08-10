import { Outlet } from "react-router-dom";
import { Home, Login, ForgotPassword } from "../../Views/Public";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const PATH_ROUTE_PUBLICS = {
  home: "/home",
  login: "/login",
  forgotPassword: "/ForgotPassword",
  default: "*",
};

export const dataRoute = [
  {
    path: PATH_ROUTE_PUBLICS.home,
    element: <Home />,
    icon: HomeIcon,
  },
  {
    path: PATH_ROUTE_PUBLICS.login,
    element: <Login />,
    icon: AccountCircleIcon,
  },

  {
    path: PATH_ROUTE_PUBLICS.forgotPassword,
    element: <ForgotPassword />,
    icon: null,
  },
  {
    path: PATH_ROUTE_PUBLICS.default,
    element: <Outlet />,
    icon: null,
  },
];
