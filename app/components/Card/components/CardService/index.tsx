import Button from "~/components/ui/Button/Button";
import picture from "app/assets/media/components/card/services/img_service-1.png";
import type { CardProps } from "../..";

function formatHtmlChar(text: string | undefined): string {
  return (
    text
      ?.replaceAll("&nsbp;", " ")
      .replaceAll("&gt;", ">")
      .replaceAll(/<[^>]*>/g, "") ?? ""
  );
}

export function stripHtmlTags(text?: string) {
  if (!text) return "";
  return text.replace(/<\/?[^>]+(>|$)/g, "");
}

export default function CardService({ title, description, to }: CardProps) {
  return (
    <div className="flex max-w-75 scale-95 flex-col gap-6 rounded-[20px] bg-white pb-9 shadow-xl transition-all duration-300 hover:scale-100">
      <img
        src={picture}
        className="h-45 w-full rounded-t-[20px] object-cover"
      />

      <div className="flex grow flex-col gap-3 px-6">
        <p className="mb-3 font-bold">{title}</p>
        <div
          className="grow"
          dangerouslySetInnerHTML={{
            __html: description as TrustedHTML,
          }}
        />

        <Button
          to={to!}
          className="border-tertiary-blue text-tertiary-blue hover:bg-tertiary-blue bottom-0 m-auto w-fit rounded-sm border px-9 py-2 transition-all duration-300 hover:text-white"
          title="Découvrir"
        />
      </div>
    </div>
  );
}
