import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { MenuComponent } from "../../../Components";
import "./main.css";
const drawerWidth = 240;
const HeaderPrivate = () => {
  return (
    <div className="containerHeaderPrivate">
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
    </div>
  );
};

export default HeaderPrivate;
