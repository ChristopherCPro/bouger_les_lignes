import { formation1 } from "~/contents/text";
import Button from "../ui/Button/Button";

interface infoType {
  info: {
    nbr_participant: string;
    tarif: string;
    prerequis: string;
    formateur: string;
    info_cplt: string;
  };
}

export default function InformationPanel(info: infoType) {
  console.log(info);
  return (
    <div className="flex flex-col gap-9">
      <div className="border-tertiary-blue flex min-h-44 flex-col gap-6 rounded-lg border border-t-15 p-5">
        <h3 className="intertitre">Information complémentaire</h3>
        <p>
          <span className="font-semibold">Nombre de participant : </span>{" "}
          {info.info.nbr_participant}
        </p>
        <p>
          <span className="font-semibold">Tarif : </span> {info.info.tarif}
        </p>
        <p>
          <span className="font-semibold">Prérequis : </span>{" "}
          {info.info.prerequis}
        </p>
        <p>
          <span className="font-semibold">Formateur.rice.s : </span>{" "}
          {info.info.formateur}
        </p>
        <p className="text-xs">* {info.info.info_cplt}</p>
      </div>

      <Button
        to="/contact"
        title="Nous contacter"
        className="border-secondary-blue hover:bg-secondary-blue rounded-lg border p-2 text-center transition-all duration-300 hover:text-white"
      />
    </div>
  );
}
