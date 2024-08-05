import { api } from "../../../../../config";
import BaseService from "../../axiosAPi";

type AuthParams = {
  firstName?: string;
  lastName?: string;
  email?: string;
  age?: 0;
  gender?: string;
  password?: string;
  IdentificationType?: string;
  identificationNumber?: 0;
};

class ApiAuth extends BaseService {
  constructor() {
    super(api); // Utiliza la URL base específica para la API de Pokémon
  }

  async postLogin(data: AuthParams): Promise<any> {
    try {
      const response = await this.instance.post("/signIn", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data; // Devuelve la respuesta
    } catch (error) {
      throw error; // Manejo de errores
    }
  }

  async postRegister(data: AuthParams): Promise<any> {
    try {
      const response = await this.instance.post("/signUp", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
      console.error(error); // Puedes manejar el error aquí o lanzarlo de nuevo
      throw error;
    }
  }

  async postForgotPassword(data: AuthParams) {
    try {
      const response = await this.instance.put("/forgotPassword", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data; //devuelve la respuesta
    } catch (error) {
      throw error; //manejo de errores
    }
  }

  async postSendEmailForgotPassword(data: AuthParams) {
    try {
      const response = await this.instance.post(
        `/sendEmailForgotPassword?email=${data}`
      );
      return response.data; //devuelve la respuesta
    } catch (error) {
      throw error; //manejo de errores
    }
  }
}

export default ApiAuth;
