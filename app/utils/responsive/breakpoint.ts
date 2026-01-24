const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1538,
};

export const TAILWIND_BREAKPOINTS = {
  sm: BREAKPOINTS.sm + "px",
  md: BREAKPOINTS.md + "px",
  lg: BREAKPOINTS.lg + "px",
  xl: BREAKPOINTS.xl + "px",
  "2xl": BREAKPOINTS["2xl"] + "px",
};

export default BREAKPOINTS;
