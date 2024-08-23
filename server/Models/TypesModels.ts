import mongoose, { Document } from "mongoose";
export interface IUser extends Document {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  gender: string;
  password: string;
  identificationType: "Passport" | "DriverLicense" | "IDCard";
  identificationNumber: number;
  state: boolean;
}

export interface IPokemon extends Document {
  name: string;
  type: string;
  amount: number;
  damage: number;
  baseAttack1: string;
  baseAttack2?: string;
  state: boolean;
  img?: string;
  user: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
}

export interface IAudit extends Document {
  event: string;
  data: any;
  timestamp: Date;
}
