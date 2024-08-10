import React, { FC } from "react";
import Grid from "@mui/material/Grid";

import FooterComponent from "../Components/Footer/Footer.tsx";
import { HeaderPublic, HeaderPrivate } from "../Components/Header";

/* import { DrawerComponent } from '../../components'
 */

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  return (
    <Grid
      container
      direction="column"
      style={{ minHeight: "100%", minWidth: "100%", boxSizing: "border-box" }}
    >
      <Grid item sx={{ width: "100%" }}>
        {token ? <HeaderPrivate /> : <HeaderPublic />}
      </Grid>

      <Grid item xs style={{ flexGrow: 1, marginTop: "36px" }}>
        {children}
      </Grid>
      <Grid item>
        <FooterComponent />
      </Grid>
    </Grid>
  );
};

export default MainLayout;
