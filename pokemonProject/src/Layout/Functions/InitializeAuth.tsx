import { Dispatch } from "react";
import { login, logout } from "../../Services/Auth/AuthSlice";

export const initializeAuth = async (
  dispatch: Dispatch<any>,
  setLoading: (loading: boolean) => void
) => {
  const token = localStorage.getItem("token");
  if (token) {
    dispatch(login(token));
  } else {
    dispatch(logout());
  }
  setLoading(false);
};
