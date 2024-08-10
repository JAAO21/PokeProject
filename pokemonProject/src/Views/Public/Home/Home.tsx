import { useState } from "react";
import { useSelector } from "react-redux";
//navegacion
import { Link } from "react-router-dom";

// iconos material mui
import FavoriteIcon from "@mui/icons-material/Favorite";

//hook personalizado
import { usePokemon } from "../../../Hook/UsePokemon";

//componentes
import {
  PokemonComponent,
  TextComponent,
  TypographyComponent,
  BoxComponent,
} from "../../../Components";

import { RootState } from "../../../Store/Types/StoreTypes";

//estilos
import "./main.css";
const Home = () => {
  const pokemons = useSelector(
    (state: RootState) => state.pokemons.pokemonData
  ); // Accediendo al estado global de los pokemons desde Redux
  const [keyword, setKeyword] = useState("");

  const { loading, setCopyData, copyData } = usePokemon();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!keyword) {
      setCopyData(pokemons);
    }
    const find = copyData.filter((data) => data.name === keyword);
    if (find.length > 0) {
      setCopyData(find);
    } else {
      alert("No se encuentra ese pokemon");
    }
  };
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

      <BoxComponent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextComponent
            nameText="keyword"
            labelText="..."
            valueText={keyword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setKeyword(e.target.value)
            }
          />
        </form>
      </BoxComponent>

      <BoxComponent
        sx={{
          flex: 1,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {pokemons?.map((data, index) => (
          <PokemonComponent
            key={index}
            data={data}
            btnData={{
              component: Link,
              buttonText: "Favorito",
              Icon: FavoriteIcon,
              to: "/login",
            }}
          />
        ))}
      </BoxComponent>
    </BoxComponent>
  );
};

export default Home;
