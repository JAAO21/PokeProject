import axios, { AxiosInstance } from "axios";

class BaseService {
  private static instance: BaseService;
  protected axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL: baseURL,
    });

    // Configurar el interceptor para agregar el token de autenticación a las solicitudes
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  //Metodo estático para obtener una unica instancia singleton

  public static getInstance(baseURL: string): BaseService {
    if (!BaseService.instance) {
      BaseService.instance = new BaseService(baseURL);
    }
    return BaseService.instance;
  }

  public getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}

export default BaseService;
