//manejadores de navecion y rutas reac router dom
import { Link } from "react-router-dom";

//componentes de material mui
import { AppBar, Toolbar, Typography } from "@mui/material";

//routes publics
import { routePublic } from "../../../routes/Publics/routePublic.jsx";

//componentes
import ButtonComponent from "../../../components/Button/Button.jsx";

import "./main.css";
const HeaderPublic = () => {
  return (
    <div>
      <AppBar component="nav" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
              },
              color: "red",
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            Api Pokemon
          </Typography>
          <div className="containerNav">
            {routePublic.slice(0, 2).map((routes) => (
              <ButtonComponent
                key={routes.path}
                component={Link}
                to={routes.path}
                Icon={routes.icon}
                buttonText={routes.path.replace("/", "")}
              />
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderPublic;
