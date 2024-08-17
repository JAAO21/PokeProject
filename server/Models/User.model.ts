import mongoose, { Model } from "mongoose";
import { IUser } from "./TypesModels";

const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    gender: {
      type: String,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
    identificationType: {
      //enum
      type: String,
      enum: ["Passport", "DriverLicense", "IDCard"],
    },
    identificationNumber: {
      type: Number,
      unique: true,
    },
    state: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

class UserModel {
  public model: Model<IUser>;

  constructor() {
    this.model = mongoose.model<IUser>("User", UserSchema);
  }
}
export default UserModel;
