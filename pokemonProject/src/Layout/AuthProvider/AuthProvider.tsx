import { createContext, useEffect, FC } from "react"; //contexto y efecto react

import { useSelector, useDispatch } from "react-redux"; //redux selector ,manejador de autenticador, dispatch acciones

import { ChildrenSxInterface } from "../../Layout/Types/ChildrenSxInterface";

import { login, logout } from "../../Services/Auth/AuthSlice"; //servicios de auth para el logeo y deslogueo

import { useLoading } from "../../Hook/UseLoading";

import { RootState } from "../../Store/Types/StoreTypes";

interface AuthContextType {
  isAuthenticated: boolean;
  handleLogin: (token: string) => void;
  handleLogout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  handleLogin: () => {},
  handleLogout: () => {},
});

const AuthProvider: FC<ChildrenSxInterface> = ({ children }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        dispatch(login(token));
      } else {
        dispatch(logout());
      }
      setLoading(false);
    };

    initializeAuth();
  }, [dispatch, setLoading]);

  if (loading) return <p>Cargando</p>;
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        handleLogin: (token) => dispatch(login(token)),
        handleLogout: () => dispatch(logout()),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
