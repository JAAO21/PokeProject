import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemonData: [],
  },
  reducers: {
    allPokemon: (state, action) => {
      state.pokemonData = action.payload; // Guarda el token proporcionado en el payload
    },
  },
});

export const { allPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
