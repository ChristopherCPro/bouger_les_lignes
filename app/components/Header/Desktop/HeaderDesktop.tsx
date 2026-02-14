import logo from "/media/logo.webp";
import { cn } from "~/utils/ui";

export default function HeaderDesktop() {
  const navigation = [
    { title: "Nos Services", url: "/services" },
    { title: "A propos", url: "/a-propos" },
    { title: "Actualités", url: "/actualites" },
    { title: "FAQ", url: "/foire-aux-questions" },
    { title: "Contact", url: "/contact" },
    { title: "Faire un don", url: "/" },
  ];

  return (
    <header
      id="mainHeader"
      className="h-20 w-full shadow-xl sticky top-0 z-40 bg-white">
      <div className="flex w-full items-center justify-between px-20 py-2.5">
        <a href="/">
          <img src={logo} />
        </a>
        <div>
          <ul className="flex list-none space-x-4">
            {navigation.map((i, index) => {
              return (
                <li
                  key={index}
                  className={cn("hover:text-secondary-blue", {
                    "text-primary-orange hover:text-primary-orange":
                      index === navigation.length - 1,
                  })}>
                  <a href={i.url}>{i.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
