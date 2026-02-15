import CallToDonation from "./components/CallToDonation";
import CardMedia from "./components/CardMedia";
import CardService from "./components/CardService";

export type TypeCards = "CallToDonation" | "Service" | "Media";

export type CardProps = {
  type: TypeCards;
  image?: string;
  title?: string;
  description?: string;
  to?: string;
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
}
