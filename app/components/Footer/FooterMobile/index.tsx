import { navigation } from "~/components/Header/Mobile/HeaderMobile";

import logo from "/media/logo.webp";
import Button from "~/components/ui/Button/Button";
import { Icon } from "~/components/ui/Icon";
import BurgerButton from "~/components/ui/BurgerButton/BurgerButton";

export default function FooterMobile() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-blue min-h-125 flex flex-col gap-9 py-9 text-white">
      <div className="container mx-auto flex flex-col gap-8 items-center">
        <div className="text-center">
          {" "}
          <ul className="flex list-none flex-col gap-3.5">
            {navigation.map((i, index) => {
              return (
                <li key={index}>
                  <a
                    href={i.url}
                    className="hover:text-tertiary-blue transition-all duration-300">
                    {i.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="px-9">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            sunt eveniet assumenda quasi quam, dolor quisquam at ducimus
            consequatur et soluta hic error optio odio? Tempore at illo optio!
            Placeat.
          </p>
        </div>
        <div className="px-9">
          <h3>Nous contacter</h3>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            sunt eveniet assumenda quasi quam, dolor quisquam at ducimus
            consequatur.
          </p>
          <Button
            to="/"
            className="hover:text-secondary-blue flex w-fit cursor-pointer justify-center rounded-lg border border-white p-2.5 text-white transition-all duration-300 hover:bg-white mx-auto"
            title="Accéder au formulaire"
          />
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Button to="/" img={logo} title="Retour à l'accueil" type="image" />
      </div>
      <div className="flex w-full justify-center">
        <ul className="list-none flex space-x-8">
          <li>
            <Button
              title="Suivez nous sur le réseau social X"
              to="https://x.com/?lang=fr"
              type="icon"
              icon="twitter"
              externalLink
            />
          </li>
          <li>
            <Button to="/" type="icon" icon="facebook" />
          </li>
          <li>
            <Button to="/" type="icon" icon="instagram" />
          </li>
          <li>
            <Button to="/" type="icon" icon="linkedin" />
          </li>
          <li>
            <Button to="/" type="icon" icon="tiktok" />
          </li>
        </ul>
      </div>
      <div className="flex w-full items-center flex-col font-verdana font-bold text-xs gap-3 pb-9">
        <p>
          <span className="font-thin">&copy; {currentYear}</span> - Bouger les
          lignes
        </p>
        <Button to="/" title="Mentions Légales" />
        <p> Designed with ❤️</p>
      </div>
    </footer>
  );
}
