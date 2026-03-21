import { useViewport } from "~/utils/contexts/useViewport";
import HeaderDesktop from "./Desktop/HeaderDesktop";
import HeaderMobile from "./Mobile/HeaderMobile";

export interface NavigationTypes {
  title: string;
  url: string;
  isExternal: boolean;
  subNav?: {
    title: string;
    url: string;
    isExternal: boolean;
  }[];
}

export default function Header() {
  const { isMobile } = useViewport();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}
