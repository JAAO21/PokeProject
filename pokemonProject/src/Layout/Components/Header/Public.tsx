//manejadores de navecion y rutas reac router dom
import { Link } from "react-router-dom";

//componentes de material mui
import { AppBar, Toolbar, Typography } from "@mui/material";

//routes publics
import { dataRoute } from "../../../Routes/Public/DataRoute";

//componentes
import { BoxComponent, ButtonComponent } from "../../../Components";

import "./main.css";
const HeaderPublic = () => {
  return (
    <BoxComponent sx={{ minWidth: "100%" }}>
      <AppBar component="nav" sx={{ backgroundColor: "white", width: "100%" }}>
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
          <BoxComponent className="containerNav">
            {dataRoute.slice(0, 2).map((routes) => (
              <ButtonComponent
                key={routes.path}
                component={Link}
                to={routes?.path || ""}
                Icon={routes?.icon || undefined}
                buttonText={routes.path.replace("/", "")}
                colorIcon="#000000"
              />
            ))}
          </BoxComponent>
        </Toolbar>
      </AppBar>
    </BoxComponent>
  );
};

export default HeaderPublic;
