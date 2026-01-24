import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import BREAKPOINTS from "../responsive/breakpoint";

// Définition des tailles d'écran possibles
type Viewport = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

// Création du contexte avec une valeur par défaut
type ViewportInfo = {
  viewport: Viewport;
  isMobile: boolean;
  isDesktop: boolean;
};

const ViewportContext = createContext<ViewportInfo>({
  viewport: "xs",
  isMobile: true,
  isDesktop: false,
});

// Hook personnalisé pour utiliser le contexte
export const useViewport = () => useContext(ViewportContext);

export const TAILWIND_BREAKPOINTS = {
  sm: BREAKPOINTS.sm + "px",
  md: BREAKPOINTS.md + "px",
  lg: BREAKPOINTS.lg + "px",
  xl: BREAKPOINTS.xl + "px",
  "2xl": BREAKPOINTS["2xl"] + "px",
};

export const ViewportProvider = ({
  children,
  viewport,
}: {
  children: ReactNode;
  viewport: number;
}) => {
  // Détermination de la taille d'écran actuelle
  const currentViewport: Viewport =
    viewport >= BREAKPOINTS["2xl"]
      ? "2xl"
      : viewport >= BREAKPOINTS.xl
        ? "xl"
        : viewport >= BREAKPOINTS.lg
          ? "lg"
          : viewport >= BREAKPOINTS.md
            ? "md"
            : viewport >= BREAKPOINTS.sm
              ? "sm"
              : "xs";

  const viewportInfo: ViewportInfo = {
    viewport: currentViewport,
    isMobile:
      currentViewport === "xs" ||
      currentViewport === "sm" ||
      currentViewport === "md" ||
      currentViewport === "lg",
    isDesktop: currentViewport === "xl" || currentViewport === "2xl",
  };

  return (
    <ViewportContext.Provider value={viewportInfo}>
      {children}
    </ViewportContext.Provider>
  );
};
