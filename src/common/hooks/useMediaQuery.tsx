import React from "react";

export const MediaQuery = {
  getMax: (size: number) => `(max-width: ${size}px)` as const,
  getMin: (size: number) => `(min-width: ${size}px)` as const,
  MIN_PHONE: `(min-width: 320px)`,
  MIN_TABLET: `(min-width: 768px)`,
  MIN_DESKTOP: `(min-width: 1024px)`,
} as const;

type QueryInput = string | ((m: typeof MediaQuery) => string);

export const useMediaQuery = (queryInput: QueryInput) => {
  const query =
    typeof queryInput === "string" ? queryInput : queryInput(MediaQuery);
  const [matches, setMatches] = React.useState(
    () => window.matchMedia(query).matches
  );

  React.useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
};
