import { useContext } from "react";

//Redux para autenticar
import { AuthContext } from "../Layout/AuthProvider/AuthProvider";

//vistas publicas y privadas
import HandleRoutesPublic from "../Routes/Public/RoutePublic.js";
import HandleRoutesPrivates from "../Routes/Private/RoutePrivate.js";

const AuthChecker = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const token = isAuthenticated;

  return token ? <HandleRoutesPrivates /> : <HandleRoutesPublic />;
};

export default AuthChecker;
