import { api } from "../../../../../config";
import BaseService from "../../axiosAPi";

type AuthParams = {
  firstName?: string;
  lastName?: string;
  email?: string;
  age?: number;
  gender?: string;
  password?: string;
  IdentificationType?: string;
  identificationNumber?: number;
};

type ForRecoveryParams = {
  email?: string | null;
  password?: string;
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

  async postForgotPassword(data: ForRecoveryParams) {
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

  async postSendEmailForgotPassword(email: string) {
    try {
      const response = await this.instance.post(
        `/sendEmailForgotPassword?email=${email}`
      );
      return response.data; //devuelve la respuesta
    } catch (error) {
      throw error; //manejo de errores
    }
  }
}

export default ApiAuth;
