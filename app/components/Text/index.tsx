import { cn } from "~/utils/ui";

interface TextProps {
  title?: string;
  sizeTitle?: "h2" | "h3" | "h4" | "h5" | "h6";
  description: { desc: string }[];
  underline?: boolean;
  classname?: string;
}

export default function Text({
  title,
  sizeTitle,
  description,
  underline,
  classname,
}: TextProps) {
  const TitleTag = sizeTitle || "h2";
  return (
    <div className="w-full px-9">
      {title && underline ? (
        <TitleTag
          className={cn(
            "after:bg-secondary-blue relative mb-9 inline-block after:absolute after:-bottom-1.25 after:left-[25%] after:h-1 after:w-3/4 after:content-[''] md:after:left-[50%] md:after:w-full",
            classname,
            { "md:ms-16": sizeTitle != "h2" },
          )}>
          {title}
        </TitleTag>
      ) : (
        <TitleTag className={cn("mb-9", classname)}> {title}</TitleTag>
      )}

      {description.map((paragraph: { desc: string }, index) => (
        <div
          key={index}
          className="m-auto w-9/12 text-justify md:text-left"
          dangerouslySetInnerHTML={{ __html: paragraph.desc }}
        />
      ))}
    </div>
  );
}
