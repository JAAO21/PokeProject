import { api } from "../../../../config";
import BaseService from "../../axiosAPi";

type PokeParams = {
  name?: string;
  type?: string;
  damage?: number;
  userId: string;
};

class ApiPokemon extends BaseService {
  constructor() {
    super(api); // Utiliza la URL base específica para la API de Pokémon
  }

  async postPokemon(data: PokeParams) {
    try {
      const response = await this.instance.post("/createPokemon", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data; //devuelve la respuesta
    } catch (error) {
      console.error(error);
      throw error; //manejo de errores
    }
  }

  async getPokemon() {
    try {
      const response = await this.instance.get("/");
      return response.data; //devuelve la respuesta
    } catch (error) {
      console.error(error);
      throw error; //manejo de errores
    }
  }

  //trae las cantidades de estado activo,inactivo,tipos y pokemons.
  async AmountsGetAllPokemon() {
    try {
      const response = await this.instance.get("/amountsGetAllPokemon");
      return response.data; //devuelve la respuesta
    } catch (error) {
      console.error(error);
      throw error; //manejo de errores
    }
  }

  //Trae las cantidades de pokemon y los meses en que se crearon.
  async DateMAmountPokemon() {
    try {
      const response = await this.instance.get("/datePokemonAmount");
      return response.data; //devuelve la respuesta
    } catch (error) {
      console.error(error);
      throw error; //manejo de errores
    }
  }

  //actulizar pokemon
  async putPokemon(data: PokeParams, _id: string) {
    try {
      const response = await this.instance.put(
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
      console.error(error);
      throw error; //manejo de errores
    }
  }

  //eliminar pokemon
  async DeletePokemon(_id: string) {
    try {
      const response = await this.instance.delete(`/deletePokemon?_id=${_id}`);
      return response.data; //devuelve la respuesta
    } catch (error) {
      console.error(error);
      throw error; //manejo de errores
    }
  }
}

export default ApiPokemon;
