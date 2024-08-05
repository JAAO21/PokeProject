import { apiPokeApi } from "../../../../config";
import BaseService from "../axiosAPi";
class PokemonService extends BaseService {
  constructor() {
    super(apiPokeApi); // Utiliza la URL base específica para la API de Pokémon
  }

  async getAllPokemon(path: string) {
    try {
      const response = await this.instance.get(`/${path}`);
      return response; // Devuelve los datos de la respuesta
    } catch (error) {
      throw error;
    }
  }
}

export default PokemonService;
