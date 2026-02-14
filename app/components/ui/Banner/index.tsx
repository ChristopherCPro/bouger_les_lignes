import { useEffect } from "react";
import background from "/media/bannerIndex.jpg";
import Button from "../Button/Button";

export default function Banner() {
  return (
    <>
      <div
        className="flex bg-center bg-cover bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${background})` }}>
        <div className="bg-black/45 h-[75vh] w-1/2 backdrop-blur-xs flex items-center">
          <div className="mx-auto text-white text-center">
            <h1>
              <span className="block mb-4">Agir - Comprendre - Prévenir</span>
              <span className="italic block">
                Ensemble, faisons reculer les violences
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-secondary-blue text-white py-16">
        <div className="container mx-auto flex flex-col gap-2.5">
          <h3>Qui sommes-nous ?</h3>
          <div className="w-1/2 mx-auto text-center mb-9">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ex
            nihil, culpa blanditiis, fuga magnam perferendis commodi totam eaque
            earum corporis! Doloribus mollitia debitis praesentium maxime
            necessitatibus ut laborum dignissimos.
          </div>
          <Button
            title="En savoir plus"
            to="/"
            className="border border-white hover:bg-white hover:text-secondary-blue rounded-lg w-fit p-2.5 mx-auto transition-all duration-300"
          />
        </div>
      </div>
    </>
  );
}
