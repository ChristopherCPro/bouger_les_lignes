import type { IconName } from "~/assets/icons";
import { cn } from "~/utils/ui";
import { Icon } from "../Icon";

interface ButtonProps {
  to: string;
  className?: string;
  title?: string;
  img?: string;
  type?: "image" | "icon";
  icon?: IconName;
  externalLink?: boolean;
}

export default function Button({
  to,
  className,
  title,
  img,
  type,
  icon,
  externalLink,
}: ButtonProps) {
  if (type === "image") {
    return (
      <a
        href={to}
        className={cn(className)}
        rel={externalLink ? "noopener noreferrer" : undefined}
        target={externalLink ? "_blank" : undefined}>
        {img ? <img src={img} alt={title} /> : <p>{title}</p>}
      </a>
    );
  }

  if (type === "icon") {
    return (
      <a
        href={to}
        className={cn(className, {
          "flex items-center gap-2": icon,
        })}
        rel="noopener noreferrer"
        target={externalLink ? "_blank" : undefined}
        aria-label={title}>
        <Icon name={icon!} />
      </a>
    );
  }

  return (
    <a
      href={to}
      className={cn(className, {
        "flex items-center gap-2": icon,
      })}
      target={externalLink ? "_blank" : undefined}
      rel="noopener noreferrer">
      {icon ? <Icon name={icon} /> : null}
      <p>{title}</p>
    </a>
  );
}
