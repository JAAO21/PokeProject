//navegacion
import { Link } from "react-router-dom";

// iconos material mui
import FavoriteIcon from "@mui/icons-material/Favorite";

//componentes
import {
  PokemonComponent,
  TypographyComponent,
  BoxComponent,
  SearchComponent,
} from "../../../Components";

//hooks
import { usePokemon } from "../../../Hook/UsePokemon";

//estilos
import "./main.css";
import { CircularProgress } from "@mui/material";
const Home = () => {
  const { loading, copyData } = usePokemon();

  if (loading)
    return (
      <BoxComponent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Para centrarlo verticalmente en la pantalla completa
        }}
      >
        <CircularProgress color="inherit" size={68} />
      </BoxComponent>
    );
  return (
    <BoxComponent
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "27px",
        marginTop: "50px",
      }}
    >
      <TypographyComponent
        component="h1"
        variant="h5"
        sx={{ color: "red", fontWeight: "bold", textAlign: "center" }}
      >
        Busqué su pokemon
      </TypographyComponent>

      <SearchComponent />

      <BoxComponent
        sx={{
          flex: 1,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {copyData?.map((data, index) => (
          <PokemonComponent
            key={index}
            data={data}
            btnData={{
              component: Link,
              buttonText: "Favorito",
              Icon: FavoriteIcon,
              to: "/login",
              colorIcon: "#ffffff",
            }}
          />
        ))}
      </BoxComponent>
    </BoxComponent>
  );
};

export default Home;
