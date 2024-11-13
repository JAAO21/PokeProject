import { useNavigate } from "react-router-dom";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import { routePrivate } from "../../Routes/Private/DataRoute";

const drawerWidth = 240; // Ancho fijo para el Drawer

const DrawerComponent = () => {
  const navigate = useNavigate();

  const handleMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    text: string
  ) => {
    e.preventDefault();
    navigate(text);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {routePrivate.slice(0, -1).map((routes, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={(e) => handleMenu(e, routes.path)}>
              <ListItemIcon>{routes.icon}</ListItemIcon>
              <ListItemText
                primary={routes.path.replace("/", "").toUpperCase()}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default DrawerComponent;
