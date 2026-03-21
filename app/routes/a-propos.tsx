import Intro from "~/components/Intro";
import Text from "~/components/Text";
import imgIntro from "app/assets/media/pages/propos/img_asso-1.webp";

import member5 from "app/assets/media/pages/propos/img_member-5.png";

import MediaText from "~/components/MediaText";
import Card from "~/components/Card";
import { aPropos } from "~/contents/text";

export default function PageAPropos() {
  return (
    <div className="flex flex-col gap-9 py-9">
      <div className="container m-auto flex flex-col gap-9">
        <Intro media={imgIntro} title={aPropos.mainTitle} />

        {aPropos.intro.map((items, index) => (
          <Text key="index" title={items.title} description={items.paragraph} />
        ))}
      </div>

      <div className="flex flex-col gap-9">
        {aPropos.member.map((item, index) => (
          <div className="even:bg-back-blue pb-9" key={index}>
            <div className="container m-auto">
              <MediaText
                media={item.image}
                altDescription={item.alt}
                title={item.title}
                description={item.description}
                mediaPosition={index % 2 === 0 ? "left" : "right"}
                className="after:bg-tertiary-blue"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="container m-auto">
        <Text
          title={aPropos.adherent.title}
          underline
          description={aPropos.adherent.paragraph}
        />
      </div>

      <div className="container m-auto px-9">
        <h2 className="intertitre">La marraine de l'association</h2>
        <MediaText
          media={member5}
          altDescription="Photo de CLOE CORREA, marraine de l'association et joueuse au Stade Toulousain"
          title="CLOE CORREA - Marraine de l'association"
          description="Description à venir"
          className="after:bg-tertiary-blue"
        />
      </div>

      <div className="container m-auto">
        <Card
          type="CallToDonation"
          title="Devenez acteur, soutenez nous !"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                    eveniet, quos iure eligendi dolores voluptatum nobis eos saepe,
                    ducimus laboriosam nihil sapiente porro repellendus libero minus,
                    repudiandae sequi aut perferendis! Iusto architecto incidunt
                    corporis delectus."
        />
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
