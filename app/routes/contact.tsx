import type { ActionFunctionArgs } from "react-router";
import { getValidatedFormData } from "remix-hook-form";
import FormContact from "~/components/FormContact";
import { formContactSchema } from "~/utils/schema/formContactSchema";
import { type z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactEmail } from "~/utils/mailling/sendMail";
import { contact } from "~/contents/text";
import Text from "~/components/Text";
import CardIcon from "~/components/Card/components/CardIcon";

type FormData = z.infer<typeof formContactSchema>;
const resolver = zodResolver(formContactSchema);

export const action = async ({ request }: ActionFunctionArgs) => {
  const { errors, data } = await getValidatedFormData<FormData>(
    request,
    resolver,
  );
  console.log(errors);
  if (errors) {
    throw { errors };
  }

  try {
    await sendContactEmail(data);
    return { success: true, error: null };
  } catch {
    return {
      success: false,
      error: "Échec de l'envoi de l'email. Veuillez réessayer.",
    };
  }
};

export default function Contact() {
  return (
    <div className="flex h-full flex-col gap-9 py-9">
      <div className="container m-auto flex h-full flex-col gap-9 md:px-0">
        <div className="flex h-full w-full flex-col items-center gap-3 md:flex-row">
          <div className="flex flex-col gap-9 md:w-1/2">
            <h1 className="ms-9">Contactez-nous</h1>

            <Text description={contact.intro[0].paragraph} fullWidth />
            <div className="flex flex-col gap-3 px-9">
              <div>
                <CardIcon
                  type="Icon"
                  icon="letter"
                  title="Email"
                  description="b2l@gmail.com"
                />
              </div>
              <div>
                {" "}
                <CardIcon
                  type="Icon"
                  icon="phone"
                  title="Tel"
                  description="05 01 02 03 04"
                />
              </div>
              <div>
                <CardIcon
                  type="Icon"
                  icon="map"
                  title="Adresse"
                  description="Toulouse | interventions en Haute-Garonne, en Occitanie, en France"
                />
              </div>
            </div>
          </div>

          <div className="to-secondary-blue from-primary-blue flex min-h-52 w-10/12 flex-col gap-9 rounded-xl bg-linear-to-br from-65% px-4 pt-9 pb-20 md:w-1/2">
            <div>
              <FormContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const meta = () => {
  return [
    {
      title: "Contactez-nous – Sensibilisation et prévention des violences",
    },
    {
      name: "description",
      content:
        "Bouger les Lignes, B2L, association toulousaine dédiée à la sensibilisation et à la prévention des violences. Agissons ensemble pour éveiller les consciences. Nous privilégions une approche bienveillante qui place le dialogue et la réflexion commune au cœur du dispositif de la co-construction. Chez B2L, chaque action de sensibilisation inclue les victimes, les témoins, et les auteurs. Nous partons du principe qu’une personne ne se résume pas à un acte, ni à un rôle subit ou commis. Notre démarche repose sur l’écoute, la responsabilité, la compréhension et la prévention afin d’encourager un changement durable des comportements et des mentalités",
    },
  ];
};
