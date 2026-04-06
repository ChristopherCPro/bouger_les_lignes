import logo from "app/assets/media/logo.webp";
import { useState } from "react";
import { cn } from "~/utils/ui";
import type { NavigationTypes } from "..";

export default function HeaderDesktop() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigation: NavigationTypes[] = [
    {
      title: "Nos Services",
      url: "/services",
      isExternal: false,
      subNav: [
        {
          title: "Capitole | Session structurée",
          url: "/services/capitole/session-structuree",
          isExternal: false,
        },
        {
          title: "Saint-Sernin | Journée pédagogique",
          url: "/services/sernin/journee-pedagogique",
          isExternal: false,
        },
        {
          title: "Carmes | Sensibilisation des jeunes",
          url: "/services/carmes/sensibilisation-des-jeunes",
          isExternal: false,
        },
        {
          title: "Esquirol | Sensibilisation enfants",
          url: "/services/esquirol/sensibilisation-enfants",
          isExternal: false,
        },
      ],
    },
    { title: "A propos", url: "/a-propos", isExternal: false },
    { title: "Actualités", url: "/actualites", isExternal: false },
    { title: "FAQ", url: "/foire-aux-questions", isExternal: false },
    { title: "Contact", url: "/contact", isExternal: false },
    {
      title: "Faire un don",
      url: "https://www.helloasso.com/associations/bouger-les-lignes-toulouse/adhesions/adhesion",
      isExternal: true,
    },
  ];

  return (
    <header
      id="mainHeader"
      className="sticky top-0 z-40 h-20 w-full bg-white shadow-xl">
      <div className="flex h-full w-full items-center justify-between px-20">
        <a href="/">
          <img src={logo} alt="Logo B2L" />
        </a>
        <nav aria-label="Navigation principale" className="h-full">
          <ul className="flex h-full list-none space-x-4">
            {navigation.map((i, index) => {
              return (
                <li key={index}>
                  <a
                    href={i.url}
                    target={i.isExternal ? "_blank" : "_self"}
                    rel={i.isExternal ? "noopener noreferrer" : undefined}
                    className={cn(
                      "hover:text-secondary-blue flex h-full items-center hover:border-b-2",
                      {
                        "text-primary-orange hover:text-primary-orange":
                          index === navigation.length - 1,
                      },
                    )}
                    onMouseEnter={() => i.subNav && setIsOpen(true)}
                    onMouseLeave={() => i.subNav && setIsOpen(false)}
                    onKeyDown={(e) => {
                      if ((e.key === "Enter" || e.key === " ") && i.subNav) {
                        setIsOpen(true);
                      }
                      if (e.key === "Escape" && i.subNav) {
                        setIsOpen(false);
                      }
                    }}>
                    {i.title}
                  </a>
                </li>
              );
            })}
          </ul>
          {isOpen && (
            <div
              className="max-w-131"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setIsOpen(false);
                }
              }}>
              <ul className="flex h-full list-none flex-col space-y-1 overflow-hidden rounded-b-lg bg-gray-50 shadow-2xl">
                {navigation[0].subNav?.map((i, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={i.url}
                        className={cn(
                          "hover:text-secondary-blue flex h-full items-center p-3 hover:bg-gray-200",
                        )}>
                        {i.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
