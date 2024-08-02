import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PokemonService from "../Services/Axios/ApiPokemon/ApiPokemon.tsx";
import { useLoading } from "./UseLoading.tsx";
import { allPokemon } from "../services/pokemons/pokemonSlice.jsx";
export const usePokemon = () => {
  const [copyData, setCopyData] = useState([]);
  const { loading, setLoading } = useLoading();
  const dispatch = useDispatch();
  const pokemonService = new PokemonService();

  useEffect(() => {
    const axioData = async () => {
      setLoading(true); // Establecer loading en true al comenzar la solicitud
      try {
        let response;
        const responseData = await pokemonService.getAllPokemon("pokemon");
        if (responseData) {
          const pokemonList = responseData.data.results;
          response = await Promise.all(
            pokemonList.map(async (pokemon: any) => {
              const pokemonId = extractPokemonIdFromUrl(pokemon.url);
              const pokemonResponse = await pokemonService.getAllPokemon(
                `pokemon/${pokemonId}`
              );
              return pokemonResponse.data;
            })
          );
        }

        dispatch(allPokemon(response.length > 1 ? response : response?.data));
        setCopyData(response.length > 1 ? response : response?.data);
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

const extractPokemonIdFromUrl = (url) => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};
