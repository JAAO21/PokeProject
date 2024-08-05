import { PokeProps } from "../../Layout/Types/PokemonType";

export interface AuthState {
  isAuthenticated: boolean;
  // Añade más propiedades si es necesario
}

export interface PokemonState {
  pokemonData: Array<PokeProps>;
}

export interface RootState {
  auth: AuthState;
  pokemons: PokemonState;
}
