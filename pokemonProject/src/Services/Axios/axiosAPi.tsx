import axios, { AxiosInstance } from "axios";

class BaseService {
  protected instance: AxiosInstance;
  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL: baseURL,
    });

    // Configurar el interceptor para agregar el token de autenticación a las solicitudes
    this.instance.interceptors.request.use(
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
}

export default BaseService;
