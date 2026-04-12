import Banner from "~/components/ui/Banner";
import picture from "app/assets/media/homepage/img_hp-1.png";
import Card, { type CardProps, type TypeCards } from "~/components/Card";
import Cards from "~/components/Cards";
import Button from "~/components/ui/Button/Button";
import MediaText from "~/components/MediaText";
import media1 from "app/assets/media/components/card/services/img_service-1.png";
import media2 from "app/assets/media/partenaires/toulouse-olympique.png";
import Text from "~/components/Text";
import { index } from "~/contents/text";

export default function Home() {
  const cardService = [
    {
      type: "Service" as TypeCards,
      title: "Capitole",
      description:
        "Session structurée  | 3h30 <br/>Une intervention pour clarifier les repères essentiels (respect, consentement, limites), comprendre les mécanismes des violences et adopter une posture adaptée face aux situations sensibles.Format destiné aux professionnels souhaitant renforcer leurs pratiques, avec des apports concrets, des repères clairs et des outils directement mobilisables.",
      to: "/services/capitole/session-structuree",
    },
    {
      type: "Service" as TypeCards,
      title: "Saint-Sernin",
      description:
        "Journée pédagogique | 7h <br/> Une journée pour mieux comprendre les mécanismes des violences, analyser des situations concrètes et ajuster les pratiques professionnelles.Un format qui permet aux équipes de prendre du recul, d’échanger et de renforcer une posture commune face aux situations de terrain.",
      to: "services/sernin/journee-pedagogique",
    },
    {
      type: "Service" as TypeCards,
      title: "Carmes",
      description:
        "Sensibilisation des jeunes | 1h30 <br/> Une intervention adaptée aux adolescents pour comprendre les violences, leurs mécanismes et leurs impacts, et encourager une réflexion sur les relations, le respect et le consentement. Un format dynamique qui aborde les réalités des jeunes (pression sociale, cyberharcèlement, violences sexuelles) et favorise l’expression et la prise de conscience.",
      to: "services/carmes/sensibilisation-des-jeunes",
    },
    {
      type: "Service" as TypeCards,
      title: "Esquirol",
      description:
        "Sensibilisation enfants | 1h  <br/>Une première sensibilisation pour introduire les notions de respect, de limites et de consentement auprès des enfants.Un format adapté au primaire, ludique et accessible, pour aider à identifier les situations inconfortables, comprendre ses émotions et repérer les adultes ressources.",
      to: "services/esquirol/sensibilisation-enfants",
    },
  ];

  const insta = [
    {
      type: "Media" as TypeCards,
      image: media1,
    },
    {
      type: "Media" as TypeCards,
      image: media1,
    },
    {
      type: "Media" as TypeCards,
      image: media1,
    },
    {
      type: "Media" as TypeCards,
      image: media1,
    },
    {
      type: "Media" as TypeCards,
      image: media1,
    },
    {
      type: "Media" as TypeCards,
      image: media1,
    },
    {
      type: "Media" as TypeCards,
      image: media1,
    },
    {
      type: "Media" as TypeCards,
      image: media1,
    },
  ];

  const partenaire = [
    {
      type: "Media" as TypeCards,
      image: media2,
    },

    {
      type: "Media" as TypeCards,
      image: media2,
    },

    {
      type: "Media" as TypeCards,
      image: media2,
    },

    {
      type: "Media" as TypeCards,
      image: media2,
    },
  ];

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

        <Card type="CallToDonation" title="Devenez acteur, soutenez nous !" />
      </div>

      <div className="bg-gray-100 py-14">
        <div className="container m-auto">
          <h3 className="intertitre">Découvrez-nos modules personnalisables</h3>

          <div className="flex justify-center gap-9">
            <Cards maxCardPerLine={4} card={cardService} />
          </div>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto">
          <h3 className="intertitre">{index.title}</h3>

          <Text description={index.paragraph} fullWidth />
        </div>
      </div>

      <div className="bg-gray-100 py-9">
        <div className="container m-auto">
          <h3 className="intertitre">Nos dernières actus</h3>
          <div className="flex flex-col justify-center gap-9 pt-9">
            <Cards maxCardPerLine={4} card={insta} />
            <Button
              to="/"
              className="border-secondary-blue text-secondary-blue hover:bg-secondary-blue m-auto w-fit rounded-sm border px-9 py-2 transition-all duration-300 hover:text-white"
              title="Plus d'actualité"
            />
          </div>
        </div>
      </div>

      <div className="py-9">
        <div className="container m-auto">
          <h3 className="intertitre">
            Nos partenaire / Ils ont confiance en nous
          </h3>
          <div className="flex flex-col justify-center gap-9 py-9">
            <Cards maxCardPerLine={4} card={partenaire} />
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
      description:
        "Bouger les Lignes, B2L, association toulousaine dédiée à la sensibilisation et à la prévention des violences. Agissons ensemble pour éveiller les consciences. Nous privilégions une approche bienveillante qui place le dialogue et la réflexion commune au cœur du dispositif de la co-construction. Chez B2L, chaque action de sensibilisation inclue les victimes, les témoins, et les auteurs. Nous partons du principe qu’une personne ne se résume pas à un acte, ni à un rôle subit ou commis. Notre démarche repose sur l’écoute, la responsabilité, la compréhension et la prévention afin d’encourager un changement durable des comportements et des mentalités",
    },
  ];
};
