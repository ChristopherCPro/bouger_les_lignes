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
import "@fontsource-variable/montserrat";
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
      <Suspense fallback={<div>Chargement...</div>}>{children}</Suspense>
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
        <ViewportProvider viewport={loaderData.viewport || 0}>
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

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
