import { cn } from "~/utils/ui";

interface MediaProps {
  media: string;
  altDescription: string;
  mediaPosition?: "left" | "right";
  title?: string;
  description: string;
  className?: string;
}

export default function MediaText({
  media,
  altDescription,
  mediaPosition,
  title,
  description,
  className,
}: MediaProps) {
  return (
    <div
      className={cn("m-auto flex flex-col md:flex-row", {
        "md:flex-row-reverse": mediaPosition === "right",
      })}>
      <div className="md:w-1/3">
        <img
          loading="lazy"
          src={media}
          className="m-auto"
          alt={altDescription}
        />
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
