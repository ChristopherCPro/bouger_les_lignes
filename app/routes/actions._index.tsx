import imgIntro from "app/assets/media/pages/services/intro_services.jpg";
import Intro from "~/components/Intro";
import Text from "~/components/Text";
import { serviceIndex } from "~/contents/text";
import background from "~/assets/media/pages/services/bg_middle-1.jpg";
import Cards from "~/components/Cards";

export default function ActionIndex() {
  return (
    <div className="flex flex-col gap-9 pt-9">
      <div className="container m-auto flex flex-col gap-9">
        <Intro media={imgIntro} title={serviceIndex.mainTitle} />

        <Text
          title={serviceIndex.intro.title}
          classname="intertitre"
          description={serviceIndex.intro.paragraph}
        />
        {serviceIndex.services.map((items, index) => (
          <Text
            key={`items.title - ${index}`}
            title={items.title}
            underline
            sizeTitle="h3"
            classname="font-semibold text-lg after:bg-tertiary-blue"
            description={items.paragraph}
          />
        ))}
      </div>
      <div
        className="flex h-60 bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="container mx-auto">
        <Text
          title={serviceIndex.catalogue.title}
          underline
          sizeTitle="h3"
          classname="font-semibold text-lg after:bg-tertiary-blue"
          description={serviceIndex.catalogue.paragraph}
        />
      </div>
      <div className="bg-gray-100 py-14">
        <div className="container m-auto">
          <h3 className="intertitre">Découvrez notre catalogue de formation</h3>

          <div className="flex justify-center gap-9">
            <Cards maxCardPerLine={4} card={serviceIndex.cardService} />
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
    {
      property: "og:title",
      content:
        "Bouger les Lignes B2L – Sensibilisation et prévention des violences",
    },
  ];
};
