import Banner from "~/components/ui/Banner";
import picture from "/media/homepage/img_hp-1.png";
import Card, { type CardProps, type TypeCards } from "~/components/Card";
import Cards from "~/components/Cards";
import Button from "~/components/ui/Button/Button";

export default function Home() {
  const cardService = [
    {
      type: "Service" as TypeCards,
      title: "Service",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing eli Cupiditate reprehenderit accusantium quas, omnis doloremque beatae saepe  blanditiis quasi maiores repellat!",
      to: "/",
    },
    {
      type: "Service" as TypeCards,
      title: "Service 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing eli Cupiditate reprehenderit accusantium quas, omnis doloremque beatae saepe  blanditiis quasi maiores repellat!",
      to: "/",
    },
    {
      type: "Service" as TypeCards,
      title: "Service 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing eli Cupiditate reprehenderit accusantium quas, omnis doloremque beatae saepe  blanditiis quasi maiores repellat!",
      to: "/",
    },
  ];

  const insta = [
    {
      type: "Media" as TypeCards,
      image: "/media/components/card/services/img_service-1.png",
    },
    {
      type: "Media" as TypeCards,
      image: "/media/components/card/services/img_service-1.png",
    },
    {
      type: "Media" as TypeCards,
      image: "/media/components/card/services/img_service-1.png",
    },
    {
      type: "Media" as TypeCards,
      image: "/media/components/card/services/img_service-1.png",
    },
    {
      type: "Media" as TypeCards,
      image: "/media/components/card/services/img_service-1.png",
    },
    {
      type: "Media" as TypeCards,
      image: "/media/components/card/services/img_service-1.png",
    },
    {
      type: "Media" as TypeCards,
      image: "/media/components/card/services/img_service-1.png",
    },
    {
      type: "Media" as TypeCards,
      image: "/media/components/card/services/img_service-1.png",
    },
  ];

  const partenaire = [
    {
      type: "Media" as TypeCards,
      image: "/media/partenaires/toulouse-olympique.png",
    },

    {
      type: "Media" as TypeCards,
      image: "/media/partenaires/toulouse-olympique.png",
    },

    {
      type: "Media" as TypeCards,
      image: "/media/partenaires/toulouse-olympique.png",
    },

    {
      type: "Media" as TypeCards,
      image: "/media/partenaires/toulouse-olympique.png",
    },
  ];

  return (
    <div className="flex flex-col gap-18">
      <Banner />
      <div className="container m-auto flex flex-col gap-18">
        <div className="m-auto flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              src={picture}
              className="m-auto"
              alt="image d'un père tient sa fille par la main, ils sont tous les deux vue de dos et avancent sur un chemin"
            />
          </div>
          <div className="flex items-center justify-center md:w-2/3">
            <div className="w-3/4">
              <h2 className="intertitre after:bg-secondary-blue relative mb-9 inline-block after:absolute after:-bottom-1.25 after:left-[25%] after:h-1 after:w-3/4 after:content-[''] md:after:left-[50%] md:after:w-full">
                Tout commence par l'humain
              </h2>
              <p className="text-justify md:text-left">
                Notre approche repose sur l’écoute, la pédagogie, l’empathie et
                la bienveillance. Nous croyons à la force du dialogue comme
                moyen et outil de prévention. Chaque action vise à transformer
                comme pour l’effet colibri. (Les formations sont payantes sur
                devis.)
              </p>
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

      <div className="bg-gray-100 py-14">
        <div className="container m-auto">
          <h3 className="intertitre">Découvrez-nos modules personnalisables</h3>

          <div className="flex justify-center gap-9">
            <Cards maxCardPerLine={3} card={cardService} />
          </div>
        </div>
      </div>

      <div className="py-9">
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
