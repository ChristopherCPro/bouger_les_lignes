export const mobileDetection = (headers: Headers) => {
  const ua = headers.get("user-agent") || "";
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    ua,
  );
};

export const viewportHint = {
  cookieName: "CH-viewport",
  getValueCode: "window.screen.availWitdh",
  fallback: 1024,
} as const;

export function suscribeToViewportChange(
  suscriber: (value: number) => void,
  cookieName: string = viewportHint.cookieName,
) {
  function handleViewportChange() {
    const value = window.screen.availWidth;
    document.cookie = `${cookieName}=${JSON.stringify(value)}; Max-Age=31536000; Path=/`;
    suscriber(value);
  }
  window.addEventListener("resize", handleViewportChange);
  window.addEventListener("orientationchange", handleViewportChange);

  if (typeof requestIdleCallback !== "undefined") {
    requestIdleCallback(() => {
      handleViewportChange();
    });
  } else {
    setTimeout(() => {
      handleViewportChange();
    }, 100);
  }

  return function cleanupViewportChange() {
    window.removeEventListener("resize", handleViewportChange);
    window.removeEventListener("orientationchange", handleViewportChange);
  };
}
