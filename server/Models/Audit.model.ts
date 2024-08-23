import mongoose, { Model } from "mongoose";
import { IAudit } from "./TypesModels";

const Schema = mongoose.Schema;

const AuditSchema = new Schema({
  event: { type: String, require: true },
  data: { type: Schema.Types.Mixed, require: true },
  timestamp: { type: Date, default: Date.now },
});

class AuditModel {
  public model: Model<IAudit>;
  constructor() {
    this.model = mongoose.model<IAudit>("Audit", AuditSchema);
  }
}

export default AuditModel;
