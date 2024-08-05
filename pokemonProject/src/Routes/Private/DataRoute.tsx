import { DashBoard, InfoPokemon, Profile } from "../../Views/Private";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";

export const PATH_ROUTE_PRIVATES = {
  dahsboard: "/dashboard",
  infoPokemon: "/pokemons",
  profile: "/profile",
  default: "*",
};

export const routePrivate = [
  {
    path: PATH_ROUTE_PRIVATES.dahsboard,
    element: <DashBoard />,
    icon: <AnalyticsIcon />,
  },
  {
    path: PATH_ROUTE_PRIVATES.infoPokemon,
    element: <InfoPokemon />,
    icon: <AirlineStopsIcon />,
  },
  {
    path: PATH_ROUTE_PRIVATES.profile,
    element: <Profile />,
    icon: <AirlineStopsIcon />,
  },
  {
    path: PATH_ROUTE_PRIVATES.default,
    element: <DashBoard />,
    icon: <AnalyticsIcon />,
  },
];
