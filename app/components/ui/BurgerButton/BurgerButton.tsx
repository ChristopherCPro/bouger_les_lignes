import { cn } from "~/utils/ui";

type BurgerButtonProps = {
  onToggle: () => void;
  isOpen: boolean;
};

export default function BurgerButton({ onToggle, isOpen }: BurgerButtonProps) {
  return (
    <button
      className="w-7.5 flex flex-col justify-center gap-1.5 border-none bg-transparent p-0"
      onClick={onToggle}
      aria-label="Menu principal"
      aria-expanded={isOpen}
      aria-controls="mobileMenu">
      <span
        className={cn(
          "bg-primary-grey block h-1 w-full transition-all duration-200 origin-left",
          {
            "rotate-45 translate-y-0": isOpen,
          },
        )}
      />
      <span
        className={cn(
          "bg-primary-grey block h-1 w-full transition-all duration-200",
          {
            "opacity-0 -translate-x-1": isOpen,
          },
        )}
      />
      <span
        className={cn(
          "bg-primary-grey block h-1 w-full transition-all duration-200 origin-left",
          {
            "-rotate-45 translate-y-0 ": isOpen,
          },
        )}
      />
    </button>
  );
}
