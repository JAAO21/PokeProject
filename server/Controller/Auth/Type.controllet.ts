export type AuthProps = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: string;
  password: string;
  IdentificationType: string;
  identificationNumber: number;
};

export type AuthSigInProps = {
  email: string;
  password: string;
};
