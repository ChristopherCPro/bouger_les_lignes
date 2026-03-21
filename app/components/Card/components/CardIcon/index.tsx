import { Icon } from "~/components/ui/Icon";
import type { CardProps } from "../..";

export default function CardIcon({ icon, title, description }: CardProps) {
  return (
    <div className="bg-back-blue/30 flex w-5/12 flex-row items-center gap-3 rounded-md p-3 text-sm">
      <div className="bg-back-blue flex h-11 w-11 items-center rounded-full p-3">
        <Icon name={icon!} className="size-7" />
      </div>
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
