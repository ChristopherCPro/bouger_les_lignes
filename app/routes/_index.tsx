import Banner from "~/components/ui/Banner";
import { useViewport } from "~/utils/contexts/useViewport";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="h-375">
        <div className="relative intertitre inline-block after:content-[''] after:absolute after:-bottom-1.25 after:left-[50%] after:w-full after:h-1 after:bg-secondary-blue">
          Tout commence par l'humain
        </div>
      </div>
    </>
  );
}
