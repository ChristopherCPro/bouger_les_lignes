import { useLocation } from "react-router";
import { formation1 } from "~/contents/text";
import Button from "../ui/Button/Button";

export default function InformationPanel() {
  return (
    <div className="flex flex-col gap-9">
      <div className="border-tertiary-blue flex min-h-44 flex-col gap-6 rounded-lg border border-t-15 p-5">
        <h3 className="intertitre">Information complémentaire</h3>
        <p>
          <span className="font-semibold">Nombre de participant : </span>{" "}
          {formation1.info_sup.nbr_participant}
        </p>
        <p>
          <span className="font-semibold">Tarif : </span>{" "}
          {formation1.info_sup.tarif}
        </p>
        <p>
          <span className="font-semibold">Prérequis : </span>{" "}
          {formation1.info_sup.prerequis}
        </p>
        <p>
          <span className="font-semibold">Formateur.rice.s : </span>{" "}
          {formation1.info_sup.formateur}
        </p>
      </div>

      <Button
        to="/contact"
        title="Nous contacter"
        className="border-secondary-blue hover:bg-secondary-blue rounded-lg border p-2 text-center transition-all duration-300 hover:text-white"
      />
    </div>
  );
}
