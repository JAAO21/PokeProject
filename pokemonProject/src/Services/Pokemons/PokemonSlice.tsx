import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemonData: [],
    copyData: [],
  },
  reducers: {
    allPokemon: (state, action) => {
      state.pokemonData = action.payload;
      state.copyData = action.payload;
    },
    setCopyData: (state, action) => {
      state.copyData = action.payload; // Actualiza copyData con el nuevo filtro
    },
  },
});

export const { allPokemon, setCopyData } = pokemonSlice.actions;
export default pokemonSlice.reducer;
