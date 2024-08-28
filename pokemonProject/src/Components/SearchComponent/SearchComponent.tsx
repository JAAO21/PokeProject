import { useState } from "react";
import { useSelector } from "react-redux";
import BoxComponent from "../Box/Box";
import TextComponent from "../Text/Text";
import { usePokemon } from "../../Hook/UsePokemon";
import { RootState } from "../../Store/Store";
import { filterDataByName } from "../../Layout/Functions/Filter";

const SearchComponent = () => {
  const pokemons = useSelector(
    (state: RootState) => state.pokemons.pokemonData
  ); // Accediendo al estado global de los pokemons desde Redux
  const { updateCopyData, copyData } = usePokemon();
  const [keyword, setKeyword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!keyword) {
      updateCopyData(pokemons);
    }
    const find = filterDataByName(copyData, keyword);
    if (find.length > 0 || find) {
      updateCopyData(find);
    } else {
      alert("No se encuentra ese pokemon");
    }
  };
  return (
    <div>
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
    </div>
  );
};

export default SearchComponent;
