import Intro from "~/components/Intro";
import { formation1 } from "~/contents/text";
import imgIntro from "app/assets/media/pages/services/intro_services.jpg";
import Card from "~/components/Card";
import InformationPanel from "~/components/InformationPanel";

export default function Service1() {
  return (
    <div className="flex flex-col gap-9 py-9">
      <div className="container m-auto flex flex-col gap-9">
        <Intro
          media={imgIntro}
          altDescription="image"
          title={formation1.title}
          detail={formation1.intro}
        />

        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="flex flex-col gap-9 px-6 md:w-3/4">
            <div className="font-semibold">{formation1.resume}</div>
            <section>
              <h2 className="text-secondary-blue mb-6">
                {formation1.contenu.objectif.title}
              </h2>

              <ul className="list-disc px-3 md:px-9">
                {formation1.contenu.objectif.list.map((item, index) => (
                  <li key={index}>{item.libelle}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-secondary-blue mb-6">
                {formation1.contenu.deroule.title}
              </h2>

              <ul className="list-disc px-3 md:px-9">
                {formation1.contenu.deroule.list.map((item, index) => (
                  <li key={index}>{item.libelle}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-secondary-blue mb-6">
                {formation1.contenu.modalite.title}
              </h2>

              <ul className="list-disc px-3 md:px-9">
                {formation1.contenu.modalite.list.map((item, index) => (
                  <li key={index}>{item.libelle}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-secondary-blue mb-6">
                {formation1.contenu.eval.title}
              </h2>

              <ul className="list-disc px-3 md:px-9">
                {formation1.contenu.eval.list.map((item, index) => (
                  <li key={index}>{item.libelle}</li>
                ))}
              </ul>
            </section>
          </div>
          <div className="px-6 md:w-1/4">
            <InformationPanel />
          </div>
        </div>
      </div>
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
  );
}
export const meta = () => {
  return [
    {
      title: `${formation1.title} | Bouger les Lignes B2L`,
    },
    {
      description:
        "Bouger les Lignes, B2L, association toulousaine dédiée à la sensibilisation et à la prévention des violences. Agissons ensemble pour éveiller les consciences. Nous privilégions une approche bienveillante qui place le dialogue et la réflexion commune au cœur du dispositif de la co-construction. Chez B2L, chaque action de sensibilisation inclue les victimes, les témoins, et les auteurs. Nous partons du principe qu’une personne ne se résume pas à un acte, ni à un rôle subit ou commis. Notre démarche repose sur l’écoute, la responsabilité, la compréhension et la prévention afin d’encourager un changement durable des comportements et des mentalités",
    },
  ];
};
