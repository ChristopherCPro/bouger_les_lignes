import Button from "~/components/ui/Button/Button";
import background from "app/assets/media/components/card/calltodonation/bg_ctd.png";
import type { CardProps } from "../..";

export default function CallToDonation({ title, description, to }: CardProps) {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "right",
    backgroundPositionY: "center",
    backgroundBlendMode: "overlay",
  };

  return (
    <div
      className="bg-primary-orange m-auto w-3/4 rounded-3xl p-4 py-12 text-white md:px-9"
      style={backgroundStyle}>
      <div className="flex flex-col items-center gap-9 md:flex-row">
        <div className="flex w-full flex-col gap-3 text-justify md:w-1/2">
          <h3 className="intertitre">{title}</h3>
          <p>
            Soutenir Bouger les Lignes B2L, c’est agir concrètement pour
            prévenir les violences, sensibiliser les enfants, les jeunes et les
            adultes, et faire évoluer les mentalités.
          </p>
          <p>
            Vous pouvez vous engager à nos côtés :
            <ul className="list-disc ps-8">
              <li>en devenant adhérent,</li>
              <li>en faisant un don,</li>
              <li>en relayant nos actions.</li>
            </ul>
          </p>

          <p>
            Chaque contribution participe à faire grandir une société plus
            respectueuse, consciente et engagée.
          </p>
        </div>
        <Button
          to="https://www.helloasso.com/associations/bouger-les-lignes-toulouse/adhesions/adhesion"
          externalLink
          title="Faire un don"
          className="text-primary-orange mx-auto h-fit w-fit rounded-lg border bg-white px-9 py-2.5 transition-all duration-300 hover:border-white hover:bg-transparent hover:text-white"
        />
      </div>
    </div>
  );
}
