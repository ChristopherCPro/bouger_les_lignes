import { useMemo } from "react";
import { useViewport } from "~/utils/contexts/useViewport";
import { cn } from "~/utils/ui";
import type { CardProps } from "../Card";
import Card from "../Card";

export type CardsProps = {
  direction?: string;
  maxCardPerLine: number;
  card: CardProps[];
};

export default function Cards({ direction, maxCardPerLine, card }: CardsProps) {
  const isMobile = useViewport();

  const gridCols = useMemo(() => {
    if (direction === "column") return "grid-cols-1 gap-4";

    if (maxCardPerLine) {
      switch (maxCardPerLine) {
        case 2:
          return "md:grid-cols-2";
        case 3:
          return "md:grid-cols-3";
        case 4:
          return "md:grid-cols-4";
        case 5:
          return "md:grid-cols-5";
        case 6:
          return "md:grid-cols-6";

        default:
          "md:grid-cols-1";
      }
    }
  }, [direction, maxCardPerLine]);

  return (
    <div className="relative m-auto w-full px-9">
      <div className={cn("grid gap-4 px-9", gridCols)}>
        {card.map((props, index) => (
          <div
            className="col-span-1 mb-3 flex w-full justify-center md:col-span-1"
            key={`${props.title}-${index}`}>
            <Card {...props} />
          </div>
        ))}
      </div>
    </div>
  );
}
