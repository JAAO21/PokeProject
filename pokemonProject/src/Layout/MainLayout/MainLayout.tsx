import Grid from "@mui/material/Grid";

import FooterComponent from "../Components/Footer/Footer.tsx";
import { HeaderPublic, HeaderPrivate } from "../Components/Header";

/* import { DrawerComponent } from '../../components'
 */

function MainLayout({ children }) {
  const token = localStorage.getItem("token");
  return (
    <Grid
      container
      direction="column"
      style={{ minHeight: "100vh", minWidth: "100%", boxSizing: "border-box" }}
    >
      <Grid item>{token ? <HeaderPrivate /> : <HeaderPublic />}</Grid>

      <Grid item xs style={{ flexGrow: 1, marginTop: "36px" }}>
        {children}
      </Grid>
      <Grid item>
        <FooterComponent />
      </Grid>
    </Grid>
  );
}

export default MainLayout;
