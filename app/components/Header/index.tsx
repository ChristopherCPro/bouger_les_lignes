import { useViewport } from "~/utils/contexts/useViewport";
import HeaderDesktop from "./Desktop/HeaderDesktop";
import HeaderMobile from "./Mobile/HeaderMobile";

export default function Header() {
  const { isMobile } = useViewport();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}
