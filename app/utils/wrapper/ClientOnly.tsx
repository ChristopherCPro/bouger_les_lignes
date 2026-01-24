import { useEffect, useState } from "react";
import type { ReactNode } from "react";

/**
 * Composant ClientOnly qui évite les erreurs d'hydratation
 * En utilisant useState pour synchroniser le rendu
 */
export function ClientOnly({ children }: { children: ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setHasMounted(true);
    });
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
}
