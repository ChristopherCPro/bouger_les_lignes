import { useViewport } from "~/utils/contexts/useViewport";

export default function Home() {
  const { isMobile } = useViewport();

  return isMobile ? <h1>Pouet</h1> : <div>Pouet en plus grand</div>;
}
