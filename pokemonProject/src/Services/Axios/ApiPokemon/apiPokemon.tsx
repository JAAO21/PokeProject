import { apiPokeApi } from "../../../../config";
import BaseService from "../axiosAPi";

const PokemonService = async (path?: string) => {
  const service = BaseService.getInstance(apiPokeApi);
  const axiosInstance = service.getAxiosInstance();
  try {
    const response = await axiosInstance.get(`/${path}`);
    return response; // Devuelve los datos de la respuesta
  } catch (error) {
    throw error;
  }
};

export default PokemonService;
