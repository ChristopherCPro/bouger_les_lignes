import type { ActionFunctionArgs } from "react-router";
import { getValidatedFormData } from "remix-hook-form";
import FormContact from "~/components/FormContact";
import { formContactSchema } from "~/utils/schema/formContactSchema";
import { success, type z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactEmail } from "~/utils/mailling/sendMail";
import { contact } from "~/contents/text";
import Text from "~/components/Text";
import CardIcon from "~/components/Card/components/CardIcon";

type FormData = z.infer<typeof formContactSchema>;
const resolver = zodResolver(formContactSchema);

export const action = async ({ request }: ActionFunctionArgs) => {
  const key = process.env.MAIL_KEY;
  const { errors, data } = await getValidatedFormData<FormData>(
    request,
    resolver,
  );

  if (errors) {
    throw { errors };
  }

  try {
    await sendContactEmail(data);

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
  }

  throw Response.json(
    { error: "Échec de l'envoi de l'email" },
    { status: 500 },
  );
};

export default function Contact() {
  return (
    <div className="flex h-full flex-col gap-9 py-9">
      <div className="container m-auto flex h-full flex-col gap-9">
        <div className="md-mx-0 mx-3 flex h-full w-full flex-col items-center gap-3 md:flex-row">
          <div className="hidden gap-9 md:flex md:w-1/2 md:flex-col">
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
                  description={`3 rue test
                  31000 Toulouse`}
                />
              </div>
            </div>
          </div>

          <div className="to-secondary-blue from-primary-blue flex min-h-52 w-full flex-col gap-9 rounded-xl bg-linear-to-br from-65% px-4 pt-9 pb-20 md:w-1/2">
            <h1 className="text-white">Contact</h1>
            <div>
              <FormContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
