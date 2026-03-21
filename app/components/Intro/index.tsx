import type { Intro } from "~/types/formationProps";
import { cn } from "~/utils/ui";
import { Icon } from "../ui/Icon";

interface MediaProps {
  media?: string;
  altDescription?: string;
  title: string;
  detail?: Intro;
}

export default function Intro({
  media,
  altDescription,
  title,
  detail,
}: MediaProps) {
  return (
    <div
      className={cn(
        "m-auto mb-9 flex w-full flex-col gap-5 md:flex-row md:gap-0",
      )}>
      <div className="h-90.5 md:w-1/2">
        <img
          loading="lazy"
          src={media}
          className="m-auto h-full w-11/12 rounded-lg object-cover object-top-left md:w-full md:rounded-2xl md:px-0"
          alt={altDescription}
        />
      </div>
      <div className="flex flex-col justify-between gap-6 md:w-1/2 md:gap-0">
        <div className="flex h-full items-center justify-center ps-9">
          <h1 className="">{title}</h1>
        </div>
        {detail && (
          <div className="flex justify-center gap-3 md:justify-end">
            <div className="flex items-center gap-1">
              <Icon name="profil" className="size-4.5" />
              <span> {detail.public}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="clock" className="size-4.5" />
              <span> {detail.duree}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="pin" className="size-4.5" />
              <span> {detail.lieu}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
