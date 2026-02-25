interface TextProps {
  title?: string;
  description: string;
  underline?: boolean;
}

export default function Text({ title, description, underline }: TextProps) {
  return (
    <div className="w-full px-9">
      {title && underline ? (
        <h2 className="intertitre after:bg-secondary-blue relative mb-9 inline-block after:absolute after:-bottom-1.25 after:left-[25%] after:h-1 after:w-3/4 after:content-[''] md:after:left-[50%] md:after:w-full">
          {title}
        </h2>
      ) : (
        <h2 className="intertitre mb-9"> {title}</h2>
      )}

      <div
        className="m-auto w-11/12 text-justify md:text-left"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
