import { useState } from "react";

export const useInfoState = () => {
  const [errors, setErrors] = useState<string | null>(null);
  const [succes, setSucces] = useState<string | null>(null);
  return { errors, setErrors, succes, setSucces };
};
