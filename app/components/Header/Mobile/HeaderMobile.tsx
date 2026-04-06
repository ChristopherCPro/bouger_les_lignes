import BurgerButton from "~/components/ui/BurgerButton/BurgerButton";
import logo from "app/assets/media/logo.webp";
import { useEffect, useState } from "react";
import { cn } from "~/utils/ui";
import Button from "~/components/ui/Button/Button";
import { Icon } from "~/components/ui/Icon";

export const navigation = [
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
export const subNav = [
  {
    title: "",
    url: "",
  },
  {
    title: "",
    url: "",
  },
  {
    title: "",
    url: "",
  },
  {
    title: "",
    url: "",
  },
];

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  console.log("Menu", isOpen);
  console.log("Sub Menu", isSubMenuOpen);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);

    if (isSubMenuOpen) {
      setTimeout(() => {
        setIsSubMenuOpen(false);
      }, 500);
    }
  };
  const handleSubMenu = () => {
    setIsSubMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        id="mainHeader"
        className="sticky top-0 z-50 h-20 w-full bg-white shadow-xl">
        <div className="py-2. flex h-full w-full items-center justify-between px-10">
          <a href="/">
            <img src={logo} className="w-2/3" />
          </a>
          <BurgerButton onToggle={handleToggle} isOpen={isOpen} />
        </div>
      </header>
      <div
        id="mobileMenu"
        role="navigation"
        aria-hidden={!isOpen}
        className={cn(
          "bg-back-blue fixed top-20 right-0 bottom-0 left-0 z-30 flex h-full w-full flex-row items-center justify-between overflow-hidden transition-all duration-300 ease-in-out",
          {
            "translate-x-0": isOpen,
            "-translate-x-full": !isOpen,
          },
        )}>
        <div
          className={cn(
            "-mt-20 flex h-full w-full shrink-0 flex-col items-center justify-between pt-36 pb-16 transition-all duration-300 ease-in-out",
            {
              "-translate-x-full": isSubMenuOpen,
            },
          )}>
          <ul className="flex w-3/4 list-none flex-col gap-6">
            <li className="text-center">
              <button onClick={handleSubMenu} className="relative w-full gap-4">
                Services
                <Icon name="chevronRight" className="absolute top-0 right-0" />
              </button>
              <hr className="border-primary-grey border-0.5 mt-6" />
            </li>
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
              to="https://www.helloasso.com/associations/bouger-les-lignes-toulouse/adhesions/adhesion"
              className="bg-primary-orange mx-auto flex w-3/4 justify-center rounded-lg p-2.5 text-white"
              title="Faire un don"
              externalLink
            />
          </div>
        </div>

        {/* Sous Menu  */}

        <div
          className={cn(
            "-mt-20 flex h-full w-full shrink-0 flex-col items-center justify-between pt-36 pb-16 transition-all duration-300 ease-in-out",
            {
              "translate-x-full": !isSubMenuOpen,
              "-translate-x-full": isSubMenuOpen,
            },
          )}>
          <ul className="flex w-3/4 list-none flex-col gap-6">
            <li className="mb-5">
              <button
                onClick={handleSubMenu}
                className="flex w-full flex-row items-center gap-1">
                <Icon name="chevronLeft" />
                Retour
              </button>
            </li>
            {navigation.map((i, index) => {
              return (
                <li key={index} className="text-center">
                  <a href={i.url}>{i.title}</a>
                  <hr className="border-primary-grey border-0.5 mt-6" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
