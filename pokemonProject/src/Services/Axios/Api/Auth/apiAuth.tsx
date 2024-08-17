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

const service = BaseService.getInstance(api);
const axiosInstance = service.getAxiosInstance();

class ApiAuth extends BaseService {
  static async postLogin(data: AuthParams): Promise<any> {
    try {
      const response = await axiosInstance.post("/signIn", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data; // Devuelve la respuesta
    } catch (error) {
      throw error; // Manejo de errores
    }
  }

  static async postRegister(data: AuthParams): Promise<any> {
    try {
      const response = await axiosInstance.post("/signUp", data, {
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
      const response = await axiosInstance.put("/forgotPassword", data, {
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
      const response = await axiosInstance.post(
        `/sendEmailForgotPassword?email=${email}`
      );
      return response.data; //devuelve la respuesta
    } catch (error) {
      throw error; //manejo de errores
    }
  }
}

export default ApiAuth;
