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
          <p>Nouveau message du formulaire contact : </p>
          <p>${data.message}</p>

          <div>
            <p>Expediteur :  ${data.firstname} ${data.lastname}</p>
            <p> Telephone : ${data.phone}</p>
            <p>Mail : ${data.email}</p>
          </div>
      </body>
  </html>
  `;

  await brevo.transactionalEmails.sendTransacEmail({
    subject: "Nouveau message",
    htmlContent: content,
    sender: { name: "Site - B2L", email: "no-reply@b-2l.fr" },
    to: [{ email: "b2l.asso@gmail.com" }],
  });
}
