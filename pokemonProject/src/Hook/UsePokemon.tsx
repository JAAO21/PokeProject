import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonService from "../Services/Axios/ApiPokemon/ApiPokemon.tsx";
import { useLoading } from "./UseLoading.tsx";
import { allPokemon, setCopyData } from "../Services/Pokemons/PokemonSlice.tsx";

import { RootState } from "../Store/Store.tsx";
export const usePokemon = () => {
  const dispatch = useDispatch();
  const copyData = useSelector((state: RootState) => state.pokemons.copyData);

  /* const [copyData, setCopyData] = useState<PokeProps[]>([]); */
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const axioData = async () => {
      setLoading(true); // Establecer loading en true al comenzar la solicitud
      try {
        let response = [];
        const responseData = await PokemonService();
        if (responseData) {
          const pokemonList = responseData.data.results;

          response = await Promise.all(
            pokemonList.map(async (pokemon: any) => {
              const pokemonId = extractPokemonIdFromUrl(pokemon.url);
              const pokemonResponse = await PokemonService(`/${pokemonId}`);
              return pokemonResponse.data;
            })
          );
        }
        dispatch(allPokemon(response.length > 1 ? response : []));
      } catch (error) {
        console.error(error);
        //falta manejo de erorres
      } finally {
        setLoading(false); // Establecer loading en false al finalizar la solicitud
      }
    };
    axioData();
  }, []);

  const updateCopyData = (data: any[]) => {
    dispatch(setCopyData(data));
  };

  return { loading, setLoading, copyData, updateCopyData };
};

const extractPokemonIdFromUrl = (url: string) => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};
