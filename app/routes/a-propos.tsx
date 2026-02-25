import Intro from "~/components/Intro";
import Text from "~/components/Text";
import imgIntro from "/media/pages/propos/img_asso-1.webp";
import member1 from "/media/pages/propos/img_member-1.png";
import member2 from "/media/pages/propos/img_member-2.png";
import member3 from "/media/pages/propos/img_member-3.png";
import member4 from "/media/pages/propos/img_member-4.png";
import member5 from "/media/pages/propos/img_member-5.png";

import MediaText from "~/components/MediaText";
import CallToDonation from "~/components/Card/components/CallToDonation";
import Card from "~/components/Card";

export default function PageAPropos() {
  const member = [
    {
      image: member3,
      alt: "Photo du président de l'association, FRANCOIS CUNY",
      title: "FRANCOIS CUNY - Président",
      description:
        "Engagé de longue date dans la vie collective, François a présidé le Conseil des parents d’élèves du groupe scolaire Jolimont et a participé activement au collectif FCPE de la Haute-Garonne. Fonctionnaire depuis 1984 au ministère des PPT, il a gravi les échelons. Militant syndical, il a exercé diverses responsabilités. Elu au CHSCT, délégué local cadre d’unité nationale il a également siégé à la CAF de la Haute-Garonne en tant qu’administrateur. Son parcours témoigne d’un engagement fort pour la justice sociale et son sens du collectif qui fait de lui un président investi et fédérateur",
    },
    {
      image: member4,
      title: "MYRIAM DE FAVERI - Trésorière",
      alt: "Photo de la trésorière de l'association, MYRIAM DE FAVERI",
      description:
        "Forte de plus de 15 ans d’expérience dans un cabinet d’avocat spécialisé en droit de la famille, Myriam apporte son expertise rigoureuse et bienveillante à la gestion financière de l’association. Elle a diversifié ses compétences et connaissances au sein de l’Education Nationale par son engagement d’AESH auprès d’enfants en situation de handicap. Fondatrice de l’association A-SOLIDAIRE (Téléthon), et ayant des fonctions dans le club de badminton et para-badminton de Labège. Elle s’investit activement dans les causes solidaires, garantissant à B2L transparence et éthique dans sa gestion.",
    },
    {
      image: member2,
      title: "Gaelle ROBILLARD - Secrétaire",
      alt: "Photo de la secrétaire de l'association, Gaelle ROBILLARD",
      description:
        "Diplômée en psychologie, monitrice éducatrice et éducatrice spécialisée, Gaëlle cumule depuis plus de 10 ans d’expériences dans le secteur médico-social, social. Elle s’attache à créer des environnements rassurants et porteurs de résilience pour les jeunes en difficultés, en plaçant la collaboration et l’écoute au cœur de son approche. Son engagement, son analyse, son regard humain et son professionnalisme sont d’elle un pilier essentiel au bureau.",
    },
    {
      image: member1,
      title: "Amandine CUNY - Fondatrice, directrice",
      alt: "Photo de la fondatrice et directrice de l'association, Amandine CUNY",
      description:
        "Fondatrice et chef de file du projet Bouger les Lignes qui murit depuis plus de 10 ans pour se concrétiser. Amandine a construit son parcours autour de la transmission, résilience et par de l’engagement social. Issue du secteur sanitaire et social, elle a complété son expérience de 10 ans dans la restauration et de 5 autour d’un parc de loisirs. Titulaire d’un Master 2 en Gestion des Entreprises du Social et de Santé, diplômée en Formation pour Adultes et en Psycho-Criminologie, elle allie vison stratégique et ancrage de terrain. Animée par la conviction que la prévention passe par la parole, la pédagogie et la solidarité, elle a créé Bouger les Lignes pour agir autrement, avec indépendance, créativité et impact. ",
    },
  ];

  return (
    <div className="flex flex-col gap-9 py-9">
      <div className="container m-auto flex flex-col gap-9">
        <Intro media={imgIntro} title="A propos de Bouger les Lignes B2L" />

        <Text
          title="Notre histoire et nos motivations"
          description="Face aux violences, au silence et à la peur, nous avons voulu créer un espace d’écoute, d’échange et de sensibilisation pour prévenir, comprendre et agir ensemble que l’on soit victime, témoin ou auteur pour le grand public. Notre engagement est profondément humain.
          <p class='mt-3 font-semibold'>Nos valeurs sont fondées sur l’écoute, la bienveillance, la bientraitance – La pédagogie et la transmission – Le courage de parler (victime, témoin, auteur)</p>"
        />
        <Text
          title="Notre expertise et notre parcours"
          description="<p>Porté par une fondatrice issue du secteur médico-social et formée à la gestion des organisations, l’association combine expertise, pédagogie et approche sensible. Nos interventions s’appuient sur des années de terrain, un réseau de partenaires engagés et une vision moderne et inclusive de la prévention.</p> 
          <p>Créée en 2024, B2L compte aujourd’hui 4 membres fondateurs au sein du bureau et du conseil d’administration.</p>"
        />
        <Text
          title="Notre équipe"
          description="Conseil d’administration / bureau : L’association repose sur une équipe engagée aux parcours complémentaires, unis par une même conviction : changer les mentalités, éveiller les consciences et agir concrètement contre les violences."
        />
      </div>
      <div className="flex flex-col gap-9">
        {member.map((item, key) => (
          <div className="even:bg-back-blue pb-9" key={key}>
            <div className="container m-auto">
              <MediaText
                media={item.image}
                altDescription={item.alt}
                title={item.title}
                description={item.description}
                mediaPosition={key % 2 === 0 ? "left" : "right"}
                className="after:bg-tertiary-blue"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="container m-auto">
        <Text
          title="Les adhérents : le cœur battant de l’association"
          underline
          description="Les adhérents sont au cœur de B2L. Chacun par sa cotisation, son engagement, son témoignage …. Contribue à faire vivre notre mission de prévention, d’écoute et de sensibilisation. Ils forment une communauté bienveillante et active qui partagent nos valeurs de respect, de courage et de transmission. Rejoindre B2L, c’est choisir d’agir à nos côtés pour faire évoluer les mentalités, soutenir nos actions de terrain et participer à un mouvement de collectif pour une société plus juste."
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
