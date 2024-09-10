import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import { useOpen } from "../../Hook/UseOpen";

type ProspAlert = {
  stateAlert: string | null;
  loading: boolean;
  setLoading: (sate: boolean) => void;
  setErrors: (error: string) => void;

  sx?: React.ReactNode;
};
const AlertMessage = ({
  stateAlert,
  loading,
  setLoading,
  setErrors,
}: ProspAlert) => {
  const { isOpen, setIsOpen } = useOpen();

  useEffect(() => {
    if (stateAlert || loading) {
      setIsOpen(true);
      const timer = setTimeout(() => {
        setIsOpen(false);
        setLoading(false);
        setErrors(""); // Limpiar errores después de 3 segundos */
      }, 3000);

      return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
    }
  }, [stateAlert, setErrors, loading, setLoading]);

  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={() => setIsOpen(false)}
    >
      {loading ? (
        <CircularProgress size={68} color="inherit" />
      ) : (
        <Alert
          severity={stateAlert === "succes" ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {stateAlert}
        </Alert>
      )}
    </Snackbar>
  );
};

export default AlertMessage;
