import type { CardProps } from "../..";

export default function CardMedia({
  image,
  description,
  title,
  to,
}: CardProps) {
  return (
    <div
      className="cursor-pointer overflow-hidden rounded-lg md:h-77.5 md:w-77.5"
      role="button">
      <img
        src={image}
        alt={description || "image de présentation"}
        className="h-full object-cover transition-all duration-300 hover:scale-110"
      />
    </div>
  );
}
