import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import { useOpen } from "../../Hook/UseOpen";

type ProspAlert = {
  errors: string | null;
  loading: boolean;
  setLoading: (sate: boolean) => void;
  setErrors: (error: string) => void;
  sx?: React.ReactNode;
};
const AlertMessage = ({
  errors,
  loading,
  setLoading,
  setErrors,
}: ProspAlert) => {
  const { isOpen, setIsOpen } = useOpen();
  useEffect(() => {
    if (errors || loading) {
      setIsOpen(true);
      const timer = setTimeout(() => {
        setIsOpen(false);
        setLoading(false);
        setErrors(""); // Limpiar errores después de 3 segundos
      }, 3000);

      return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
    }
  }, [errors, setErrors, loading, setLoading]);

  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={() => setIsOpen(false)}
    >
      {loading ? (
        <CircularProgress size={68} color="inherit" />
      ) : (
        <Alert severity="error" sx={{ width: "100%" }}>
          {errors}
        </Alert>
      )}
    </Snackbar>
  );
};

export default AlertMessage;
