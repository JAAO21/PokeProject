import React, { FC } from "react";
import Grid from "@mui/material/Unstable_Grid2";

import FooterComponent from "../Components/Footer/Footer.tsx";
import { HeaderPrivate } from "../Components/Header";

import { BoxComponent, DrawerComponent } from "../../Components";
import { Box } from "@mui/material";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayoutPrivate: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid sx={{ width: "100%" }}>
          <HeaderPrivate />
        </Grid>
        <Grid xs={2}>
          <DrawerComponent />
        </Grid>
        <Grid xs sx={{ flexGrow: 1, marginTop: "36px" }}>
          <BoxComponent component={"main"}>
            <BoxComponent sx={{ flexGrow: 1 }}>{children}</BoxComponent>
            <BoxComponent sx={{ flexGrow: 0 }}>
              <FooterComponent />
            </BoxComponent>
          </BoxComponent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLayoutPrivate;
