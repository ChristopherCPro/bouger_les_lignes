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
      className="bg-primary-orange m-auto w-3/4 rounded-3xl px-1 py-12 text-white md:px-9"
      style={backgroundStyle}>
      <div className="flex flex-col items-center gap-9 md:flex-row">
        <div className="w-full text-center md:w-1/2">
          <h3 className="intertitre">{title}</h3>
          <p>{description}</p>
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
