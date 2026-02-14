import { useViewport } from "~/utils/contexts/useViewport";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

export default function Footer() {
  const { isMobile } = useViewport();

  return isMobile ? <FooterMobile /> : <FooterDesktop />;
}
