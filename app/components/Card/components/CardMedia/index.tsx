import { Icon } from "~/components/ui/Icon";
import type { CardProps } from "../..";
import { cn } from "~/utils/ui";

export default function CardMedia({
  image,
  description,
  title,
  to,
  like_count,
  isPartenaire,
}: CardProps) {
  return to ? (
    <a href={to} target="_blank" rel="noopener noreferrer">
      <div
        className="group relative flex cursor-pointer items-center overflow-hidden rounded-lg md:h-77.5 md:w-77.5"
        role="button"
        tabIndex={0}>
        <img
          src={image}
          alt={description || "image de présentation"}
          width={310}
          height={310}
          className={cn(
            "mx-auto h-full object-cover transition-all duration-300 group-hover:scale-110",
            { "h-auto": isPartenaire },
          )}
        />

        {(description || like_count) && (
          <div className="absolute right-0 bottom-0 left-0 flex h-full w-full translate-y-100 flex-col justify-center gap-4 bg-black/75 p-2 text-white transition-transform duration-300 group-hover:translate-y-0">
            <div>{description}</div>
            <div className="flex items-center gap-3">
              {" "}
              <Icon name="heart" className="size-5 fill-red-400" />
              {like_count}
            </div>
          </div>
        )}
      </div>
    </a>
  ) : (
    <div
      className="group relative flex cursor-pointer items-center overflow-hidden rounded-lg md:h-77.5 md:w-77.5"
      role="button"
      tabIndex={0}>
      <img
        src={image}
        alt={description || "image de présentation"}
        width={310}
        height={310}
        className={cn(
          "mx-auto h-full object-cover transition-all duration-300 group-hover:scale-110",
          { "h-auto": isPartenaire },
        )}
      />

      {(description || like_count) && (
        <div className="absolute right-0 bottom-0 left-0 flex h-full w-full translate-y-100 flex-col justify-center gap-4 bg-black/75 p-2 text-white transition-transform duration-300 group-hover:translate-y-0">
          <div>{description}</div>
          <div>{like_count}</div>
        </div>
      )}
    </div>
  );
}
