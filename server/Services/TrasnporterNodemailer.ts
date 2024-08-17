import nodemailer from "nodemailer";
import config from "../config";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.AUTH_USER,
    pass: config.AUTH_PASSWORD,
  },
});

export default transporter;
