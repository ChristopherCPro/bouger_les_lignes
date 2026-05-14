import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRevalidator,
  useRouteLoaderData,
  type LoaderFunctionArgs,
} from "react-router";
import { Toaster } from "react-hot-toast";
import type { Route } from "./+types/root";
import "./app.css";
import Header from "./components/Header";
import {
  mobileDetection,
  suscribeToViewportChange,
  viewportHint,
} from "./utils/responsive/viewportHint";
import { getHintUtils } from "@epic-web/client-hints";
import { Suspense, useEffect } from "react";
import { useViewport, ViewportProvider } from "./utils/contexts/useViewport";
import { ClientOnly } from "./utils/wrapper/ClientOnly";
import Footer from "./components/Footer";
import Button from "./components/ui/Button/Button";

export type AppContext = {
  isMobile: boolean;
};

const hintsUtils = getHintUtils({
  viewport: viewportHint,
});

export const links: Route.LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "preload",
    as: "image",
    href: "/media/index/bannerIndex.webp",
    type: "image/webp",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const isMobile = mobileDetection(request.headers);

  const hasViewportCookie = (request.headers.get("cookie") || "").includes(
    "CH-viewport",
  );
  const { viewport: hintedViewport } = hintsUtils.getHints(request);
  const viewport = hasViewportCookie ? hintedViewport : isMobile ? 375 : 1024;

  return { viewport };
}
function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isMobile } = useViewport();
  const { revalidate } = useRevalidator();
  useEffect(() => {
    suscribeToViewportChange(() => revalidate());
  }, [revalidate]);

  return (
    <>
      <Suspense
        fallback={
          <div role="status" aria-live="polite">
            Chargement en cours…
          </div>
        }>
        {children}
      </Suspense>
      <ClientOnly>
        <Suspense fallback={null}>
          {!isMobile && <ScrollRestoration />}
        </Suspense>
      </ClientOnly>
    </>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const loaderData = useRouteLoaderData("root");

  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ViewportProvider viewport={loaderData?.viewport ?? 1920}>
          <Header />
          <main id="mainContent" className="relative">
            <Toaster
              position="top-center"
              toastOptions={{ duration: 6000, removeDelay: 1000 }}
            />
            <LayoutContent>{children}</LayoutContent>
          </main>
          <Footer />
          <Scripts />
        </ViewportProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  return (
    <div className="flex h-screen">
      <div className="relative flex w-1/2 items-center justify-end">
        <h1 className="font-montserrat text-secondary-blue absolute -right-2 m-0 p-0 text-[256px] leading-0">
          404
        </h1>
      </div>
      <div className="bg-secondary-blue flex w-1/2 items-center p-9">
        <div className="flex flex-col gap-6 text-white">
          <p className="text-5xl">Oops..</p>
          <p>
            Une erreur est survenue, la page que vous demandez n'existe pas!
          </p>
          <Button
            to="/"
            className="hover:text-secondary-blue w-fit rounded-sm border border-white px-9 py-2 text-white transition-all duration-300 hover:bg-white"
            title="Revenir en lieu sûr"
          />
        </div>
      </div>
    </div>
  );
}
