import { Outlet } from "react-router-dom";
import { Home, Login } from "../../Views/Public";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const PATH_ROUTE_PUBLICS = {
  home: "/home",
  register: "/register",
  login: "/login",
  forgotPassword: "forgotPassword",
  sendEmailForgotPassword: "sendEmailForgotPassword",
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
  /*
  {
    path: PATH_ROUTE_PUBLICS.register,
    element: <Register />,
    icon: null,
  },
  {
    path: PATH_ROUTE_PUBLICS.forgotPassword,
    element: <ForgotPassword />,
    icon: null,
  },
  {
    path: PATH_ROUTE_PUBLICS.sendEmailForgotPassword,
    element: <SendEmail />,
    icon: null,
  }, */
  {
    path: PATH_ROUTE_PUBLICS.default,
    element: <Outlet />,
    icon: null,
  },
];
