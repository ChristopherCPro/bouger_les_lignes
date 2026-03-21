import type { IconName } from "~/assets/icons";
import CallToDonation from "./components/CallToDonation";
import CardIcon from "./components/CardIcon";
import CardMedia from "./components/CardMedia";
import CardService from "./components/CardService";

export type TypeCards = "CallToDonation" | "Service" | "Media" | "Icon";

export type CardProps = {
  type: TypeCards;
  image?: string;
  title?: string;
  description?: string;
  to?: string;
  icon?: IconName;
};

export default function Card(props: CardProps) {
  if (props.type === "CallToDonation") {
    return <CallToDonation {...props} />;
  }
  if (props.type === "Service") {
    return <CardService {...props} />;
  }
  if (props.type === "Media") {
    return <CardMedia {...props} />;
  }
  if (props.type === "Icon") {
    return <CardIcon {...props} />;
  }
}
