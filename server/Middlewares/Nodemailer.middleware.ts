import transporter from "../Services/TrasnporterNodemailer";
import config from "../config";

async function main(email: string | undefined): Promise<void> {
  // send mail with defined transport object
  try {
    if (email && email !== "undefined") {
      const info = await transporter.sendMail({
        from: `"Soporte ${config.APP_NAME}" <${config.AUTH_USER}>`, // sender address
        to: email, // list of receivers
        subject: "Recupera tu contraseña", // Subject line
        text: "Hello world?", // plain text body
        html: "<p>Para recuperar su contraseña presione el siguiente enlace <a href='http://localhost:5173/forgotPassword'>OlvidarContraseña </> </p>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    } else {
      console.log("Email no válido o vacío.");
    }
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
}
export default main;
