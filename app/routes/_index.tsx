import Banner from "~/components/ui/Banner";
import picture from "app/assets/media/homepage/img_hp-1.webp";
import Card, { type TypeCards } from "~/components/Card";
import Cards from "~/components/Cards";
import Button from "~/components/ui/Button/Button";
import MediaText from "~/components/MediaText";
import Text from "~/components/Text";
import { index } from "~/contents/text";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import type { InstagramMedia } from "~/utils/types/InstagramMediaTypes";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const response = await fetch(
      `https://graph.instagram.com/v23.0/${process.env.APP_ID_INSTAGRAM}/media?fields=id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN_INSTAGRAM}`,
        },
      },
    );

    if (response.ok) {
      const raw = (await response.json()) as InstagramMedia;

      const cardsData = raw.data.map((d) => {
        return {
          type: "Media",
          image: d.media_url,
          description: d.caption || "",
          to: d.permalink,
          timestamp: d.timestamp,
          like_count: d.like_count,
        };
      });

      return cardsData;
    }
    console.log(response);
    return {
      message: response.statusText,
      error: response.status,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return null;
    }
  }
}

export default function Home() {
  const instaPublication = useLoaderData();

  const isError = !Array.isArray(instaPublication);

  console.log(instaPublication);

  console.log(isError);

  return (
    <div className="flex flex-col gap-18">
      <Banner />
      <div className="container m-auto flex flex-col gap-18">
        <MediaText
          media={picture}
          altDescription="image d'un père tient sa fille par la main, ils sont tous les deux vue de dos et avancent sur un chemin"
          mediaPosition="left"
          title="Tout commence par l'humain"
          description=" Notre approche repose sur l’écoute, la pédagogie, l’empathie et la
            bienveillance. Nous croyons à la force du dialogue comme moyen et
            outil de prévention. Chaque action vise à transformer comme pour
            l’effet colibri. (Les formations sont payantes sur devis.)"
        />
      </div>

      <div className="bg-gray-100 py-14">
        <div className="container m-auto">
          <h2 className="intertitre">Découvrez-nos modules personnalisables</h2>

          <div className="flex justify-center gap-9">
            <Cards maxCardPerLine={4} card={index.cardService} />
          </div>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto">
          <h2 className="intertitre">{index.title}</h2>

          <Text description={index.paragraph} fullWidth />
        </div>
      </div>
      {!isError && (
        <div className="bg-gray-100 py-9">
          <div className="container m-auto">
            <h2 className="intertitre">Nos dernières publications</h2>
            <div className="flex flex-col justify-center gap-9 pt-9">
              <Cards maxCardPerLine={4} card={instaPublication} />
              <Button
                to="/"
                className="border-secondary-blue text-secondary-blue hover:bg-secondary-blue m-auto w-fit rounded-sm border px-9 py-2 transition-all duration-300 hover:text-white"
                title="Plus d'actualité"
                isDisabled
              />
            </div>
          </div>
        </div>
      )}

      <div className="py-9">
        <div className="container m-auto">
          <h2 className="intertitre">Nos partenaires</h2>
          <div className="flex flex-col justify-center gap-9 py-9">
            <Cards maxCardPerLine={4} card={index.partenaire} />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-9">
        <div className="container m-auto">
          <h2 className="intertitre">Nos donnateurs</h2>
          <div className="flex flex-col justify-center gap-12 py-9">
            <Cards maxCardPerLine={4} card={index.donnateurs} />
            <Card
              type="CallToDonation"
              title="Devenez acteur, soutenez nous !"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const meta = () => {
  return [
    {
      title:
        "Bouger les Lignes B2L – Sensibilisation et prévention des violences",
    },
    {
      name: "description",
      content:
        "Bouger les Lignes, B2L, association toulousaine dédiée à la sensibilisation et à la prévention des violences. Agissons ensemble pour éveiller les consciences. Nous privilégions une approche bienveillante qui place le dialogue et la réflexion commune au cœur du dispositif de la co-construction. Chez B2L, chaque action de sensibilisation inclue les victimes, les témoins, et les auteurs. Nous partons du principe qu’une personne ne se résume pas à un acte, ni à un rôle subit ou commis. Notre démarche repose sur l’écoute, la responsabilité, la compréhension et la prévention afin d’encourager un changement durable des comportements et des mentalités",
    },
  ];
};
