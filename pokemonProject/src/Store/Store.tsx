import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Services/Auth/AuthSlice";
/* import userReducer from '../services/auth/userSlice' */
import pokemonSlice from "../Services/Pokemons/PokemonSlice";

const rootReducer = {
  auth: authReducer,
  /*  user: userReducer, */
  pokemons: pokemonSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
