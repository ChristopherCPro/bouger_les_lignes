import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useViewport } from "~/utils/contexts/useViewport";
import { cn } from "~/utils/ui";

interface MediaProps {
  media: string;
  altDescription: string;
  mediaPosition?: "left" | "right";
  title?: string;
  description: string;
  className?: string;
}

export const ScrollCard = ({
  children,
  position,
}: {
  children: React.ReactNode;
  position: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const finalPos = position === "left" ? 100 : -100;
  const x = useTransform(scrollYProgress, [0, 1], [0, finalPos]);

  return (
    <>
      <motion.div ref={ref} style={{ x }}>
        {children}
      </motion.div>
    </>
  );
};

export default function MediaText({
  media,
  altDescription,
  mediaPosition,
  title,
  description,
  className,
}: MediaProps) {
  const { isMobile } = useViewport();

  return (
    <div
      className={cn("m-auto flex flex-col md:flex-row", {
        "md:flex-row-reverse": mediaPosition === "right",
      })}>
      <div className="mx-auto w-3/4 md:mx-0 md:w-1/3">
        {isMobile ? (
          <img
            loading="lazy"
            src={media}
            width={800}
            height={600}
            className="m-auto h-full"
            alt={altDescription}
          />
        ) : (
          <ScrollCard position={mediaPosition ? mediaPosition : "left"}>
            <img
              loading="lazy"
              src={media}
              width={800}
              height={600}
              className="m-auto h-full"
              alt={altDescription}
            />
          </ScrollCard>
        )}
      </div>
      <div className="flex items-center justify-center md:w-2/3">
        <div className="w-3/4">
          {title && (
            <h2
              className={cn(
                "intertitre after:bg-secondary-blue relative mb-9 inline-block after:absolute after:-bottom-1.25 after:left-[25%] after:h-1 after:w-3/4 after:content-[''] md:after:left-[50%] md:after:w-full",
                className,
              )}>
              {title}
            </h2>
          )}
          <p className="text-justify md:text-left">{description}</p>
        </div>
      </div>
    </div>
  );
}
