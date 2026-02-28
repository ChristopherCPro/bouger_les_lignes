import background from "~/assets/media/bannerIndex.jpg";
import Button from "../Button/Button";

export default function Banner() {
  return (
    <div className="flex flex-col">
      <div
        className="flex bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}>
        <div className="flex h-[75vh] w-1/2 items-center bg-black/45 backdrop-blur-xs">
          <div className="mx-auto text-center text-white">
            <h1>
              <span className="mb-4 block">Agir - Comprendre - Prévenir</span>
              <span className="block italic">
                Ensemble, faisons reculer les violences
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-secondary-blue py-16 text-white">
        <div className="container mx-auto flex flex-col gap-2.5">
          <h3 className="intertitre">Qui sommes-nous ?</h3>
          <div className="mx-auto mb-9 w-1/2 text-center">
            Bouger les Lignes est une association toulousaine d’intérêt général
            dédiée à la prévention et la sensibilisation contre les violences
            intra et extra familiales. Nous intervenons auprès d’enfants,
            adolescents, jeunes, adultes et professionnels pour éveiller les
            consciences, libérer la parole et favoriser le respect de soi et des
            autres. L’association défend une approche inclusive et sans
            jugements qui considère les victimes, les témoins et les auteurs
            comme des acteurs essentiels au changement. Parce qu’une personne ne
            se résume pas à un acte, chaque action vise à restaurer le dialogue
            et la responsabilité.
          </div>
          <Button
            title="En savoir plus"
            to="/"
            className="hover:text-secondary-blue mx-auto w-fit rounded-lg border border-white p-2.5 transition-all duration-300 hover:bg-white"
          />
        </div>
      </div>
    </div>
  );
}
