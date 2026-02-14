import BurgerButton from "~/components/ui/BurgerButton/BurgerButton";
import logo from "/media/logo.webp";
import { useState } from "react";
import { cn } from "~/utils/ui";
import Button from "~/components/ui/Button/Button";

export const navigation = [
  {
    title: "Nos Services",
    url: "/services",
  },
  {
    title: "A propos",
    url: "/a-propos",
  },
  {
    title: "Actualités",
    url: "/actualites",
  },
  {
    title: "FAQ",
    url: "/foire-aux-questions",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header id="mainHeader" className="z-50 h-20 w-full shadow-xl sticky top-0 bg-white">
        <div className="py-2. flex h-full w-full items-center justify-between px-10">
          <a href="/">
            <img src={logo} className="w-2/3" />
          </a>
          <BurgerButton onToggle={handleToggle} isOpen={isOpen} />
        </div>
      </header>
      <div
        id="mobileMenu"
        className={cn(
          "fixed top-20 right-0 left-0 bottom-0 z-30 flex  items-center justify-between w-full flex-col bg-back-blue transition-all duration-300 ease-in-out overflow-y-auto py-16",
          {
            "translate-x-0 ": isOpen,
            "-translate-x-full": !isOpen,
          },
        )}>
        <ul className="flex w-3/4 list-none flex-col gap-6">
          {navigation.map((i, index) => {
            return (
              <li key={index} className="text-center">
                <a href={i.url}>{i.title}</a>
                <hr className="border-primary-grey border-0.5 mt-6" />
              </li>
            );
          })}
        </ul>

        <div className="w-full">
          <Button
            to="/"
            className="bg-primary-orange mx-auto flex w-3/4 justify-center rounded-lg p-2.5 text-white"
            title="Faire un don"
          />
        </div>
      </div>
    </>
  );
}
