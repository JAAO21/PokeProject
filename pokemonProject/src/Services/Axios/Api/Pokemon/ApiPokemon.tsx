import { AxiosInstance } from "axios";
import { api } from "../../../../../config";
import BaseService from "../../axiosAPi";

type PokeParams = {
  name?: string;
  type?: string;
  damage?: number;
  userId: string;
};

class ApiPokemon extends BaseService {
  private static serviceInstance: BaseService;
  private static axiosInstace: AxiosInstance;
  constructor() {
    super(api); // Utiliza la URL base específica para la API de Pokémon
    ApiPokemon.serviceInstance = BaseService.getInstance(api);
    ApiPokemon.axiosInstace = ApiPokemon.serviceInstance.getAxiosInstance();
  }

  async postPokemon(data: PokeParams) {
    try {
      const response = await ApiPokemon.axiosInstace.post(
        "/createPokemon",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data; //devuelve la respuesta
    } catch (error) {
      console.error("Error creating Pokémon:", error);
      throw error; //manejo de errores
    }
  }

  async getPokemon() {
    try {
      const response = await ApiPokemon.axiosInstace.get("/");
      return response.data; //devuelve la respuesta
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
      throw error; //manejo de errores
    }
  }

  //trae las cantidades de estado activo,inactivo,tipos y pokemons.
  async AmountsGetAllPokemon() {
    try {
      const response = await ApiPokemon.axiosInstace.get(
        "/amountsGetAllPokemon"
      );
      return response.data; //devuelve la respuesta
    } catch (error) {
      console.error("Error fetching Pokémon amounts:", error);
      throw error; //manejo de errores
    }
  }

  //Trae las cantidades de pokemon y los meses en que se crearon.
  async DateMAmountPokemon() {
    try {
      const response = await ApiPokemon.axiosInstace.get("/datePokemonAmount");
      return response.data; //devuelve la respuesta
    } catch (error) {
      console.error("Error fetching Pokémon date amounts:", error);
      throw error; //manejo de errores
    }
  }

  //actulizar pokemon
  async putPokemon(data: PokeParams, _id: string) {
    try {
      const response = await ApiPokemon.axiosInstace.put(
        `/createPokemon?_id=${_id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error updating Pokémon:", error);
      throw error; //manejo de errores
    }
  }

  //eliminar pokemon
  async DeletePokemon(_id: string) {
    try {
      const response = await ApiPokemon.axiosInstace.delete(
        `/deletePokemon?_id=${_id}`
      );
      return response.data; //devuelve la respuesta
    } catch (error) {
      console.error("Error deleting Pokémon:", error);
      throw error; //manejo de errores
    }
  }
}

export default ApiPokemon;
