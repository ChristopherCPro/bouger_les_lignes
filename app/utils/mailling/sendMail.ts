import { BrevoClient, logging } from "@getbrevo/brevo";
import type { contactFormTypes } from "./types";

export async function sendContactEmail(data: contactFormTypes) {
  const key = process.env.MAIL_KEY;
  const brevo = new BrevoClient({
    apiKey: key!,
    logging: {
      level: logging.LogLevel.Debug,
      logger: new logging.ConsoleLogger(),
    },
  });

  try {
    const content = `<html>
        <body>
            <p>Hello, ${data.firstname}</p>
            <p>Nous avons bien reçu ton message :
            ${data.message}</p>
        </body>
    </html>
    `;

    const sendMail = await brevo.transactionalEmails.sendTransacEmail({
      subject: "Nouveau message",
      htmlContent: content,
      sender: { name: "B2L", email: "angmarr@live.fr" },
      to: [{ email: `${data.email}` }],
    });
  } catch (error) {
    console.log(error);
  }
}
