import Button from "../Button/Button";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useViewport } from "~/utils/contexts/useViewport";

export default function Banner() {
  const { isMobile } = useViewport();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["blur(0px)", "blur(0px)"] : ["blur(0px)", "blur(12px)"],
  );

  return (
    <div className="flex flex-col">
      <div
        ref={ref}
        className="relative flex h-[75vh] items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            scale,
            filter: blur,
            //backgroundImage: `url("/media/index/bannerIndex.webp")`,
          }}>
          <img
            fetchPriority="high"
            src="/media/index/bannerIndex.webp"
            alt=""
            className="w-full object-contain"
            width={1920}
            height={1080}
          />
        </motion.div>
        <div className="relative flex h-1/2 w-full items-center bg-black/45 backdrop-blur-xs md:h-full md:w-1/2">
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
          <h2 className="intertitre">Qui sommes-nous ?</h2>
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
            to="/a-propos"
            className="hover:text-secondary-blue mx-auto w-fit rounded-lg border border-white p-2.5 transition-all duration-300 hover:bg-white"
          />
        </div>
      </div>
    </div>
  );
}
