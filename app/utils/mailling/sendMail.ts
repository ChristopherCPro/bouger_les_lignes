import { BrevoClient, logging } from "@getbrevo/brevo";
import type { contactFormTypes } from "./types";

export async function sendContactEmail(data: contactFormTypes) {
  const key = process.env.MAIL_KEY;
  const brevo = new BrevoClient({
    apiKey: key ? key : "",
    logging: {
      level: logging.LogLevel.Debug,
      logger: new logging.ConsoleLogger(),
    },
  });

  const content = `<html>
      <body>
          <p>Hello, ${data.firstname}</p>
          <p>Nous avons bien reçu ton message :
          ${data.message}</p>
      </body>
  </html>
  `;

  await brevo.transactionalEmails.sendTransacEmail({
    subject: "Nouveau message",
    htmlContent: content,
    sender: { name: "Site - B2L", email: data.email },
    //to: [{ email: "b2l.asso@gmail.com" }],
    to: [{ email: "chiarandini.christopher@gmail.com" }],
  });
}
