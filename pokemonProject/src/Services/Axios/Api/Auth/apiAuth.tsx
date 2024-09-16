import { AxiosInstance } from "axios";
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
  email?: string;
  password?: string;
};

class ApiAuth extends BaseService {
  private static serviceInstance: BaseService;
  private static axiosInstance: AxiosInstance;

  constructor() {
    super(api);
    ApiAuth.serviceInstance = BaseService.getInstance(api);
    ApiAuth.axiosInstance = ApiAuth.serviceInstance.getAxiosInstance();
  }
  async postLogin(data: AuthParams): Promise<any> {
    try {
      const response = await ApiAuth.axiosInstance.post("/auth/signIn", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      return response.data; // Devuelve la respuesta
    } catch (error) {
      throw error; // Manejo de errores
    }
  }

  async postRegister(data: AuthParams): Promise<any> {
    try {
      const response = await ApiAuth.axiosInstance.post("/auth/signUp", data, {
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
      const response = await ApiAuth.axiosInstance.put(
        "/forgotPassword",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data; //devuelve la respuesta
    } catch (error) {
      throw error; //manejo de errores
    }
  }

  async postSendEmailForgotPassword(email: string | undefined) {
    try {
      const response = await ApiAuth.axiosInstance.post(
        `auth/sendEmailForgotPassword?email=${email}`
      );
      return response.data; //devuelve la respuesta
    } catch (error) {
      throw error; //manejo de errores
    }
  }
}

export default ApiAuth;
