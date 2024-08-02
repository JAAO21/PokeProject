import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { MenuComponent, BoxComponent } from "../../../Components";
import "./main.css";
const drawerWidth = 240;
const HeaderPrivate = () => {
  return (
    <BoxComponent sx={{ width: "240px" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="containerTolbar">
          <MenuComponent />
        </Toolbar>
      </AppBar>
    </BoxComponent>
  );
};

export default HeaderPrivate;
