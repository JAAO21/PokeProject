import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PokemonService from "../Services/Axios/ApiPokemon/ApiPokemon.tsx";
import { useLoading } from "./UseLoading.tsx";
import { allPokemon } from "../Services/Pokemons/PokemonSlice.tsx";
import { PokeProps } from "../Layout/Types/PokemonType.tsx";
export const usePokemon = () => {
  const [copyData, setCopyData] = useState<PokeProps[]>([]);
  const { loading, setLoading } = useLoading();
  const dispatch = useDispatch();

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
              const pokemonResponse = await PokemonService(
                `pokemon/${pokemonId}`
              );
              return pokemonResponse.data;
            })
          );
        }

        dispatch(allPokemon(response.length > 1 ? response : []));
        setCopyData(response.length > 1 ? response : []);
      } catch (error) {
        console.error(error);
        //falta manejo de erorres
      } finally {
        setLoading(false); // Establecer loading en false al finalizar la solicitud
      }
    };
    axioData();
  }, []);
  return { loading, setLoading, copyData, setCopyData };
};

const extractPokemonIdFromUrl = (url: string) => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};
