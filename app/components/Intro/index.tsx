import { cn } from "~/utils/ui";

interface MediaProps {
  media?: string;
  altDescription?: string;
  title: string;
}

export default function Intro({ media, altDescription, title }: MediaProps) {
  return (
    <div
      className={cn(
        "m-auto mb-9 flex w-full flex-col gap-5 md:flex-row md:gap-0",
      )}>
      <div className="h-90.5 md:w-1/2">
        <img
          loading="lazy"
          src={media}
          className="m-auto h-full w-full rounded-lg object-cover object-top-left md:rounded-2xl md:px-0"
          alt={altDescription}
        />
      </div>
      <div className="flex items-center justify-center md:w-1/2">
        <div className="">
          <h1 className="">{title}</h1>
        </div>
      </div>
    </div>
  );
}
