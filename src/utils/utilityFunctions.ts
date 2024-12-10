import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Check if window is defined (i.e., on the client side)
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(query);
    const updateMatches = () => setMatches(mediaQueryList.matches);

    // Initialize the state
    updateMatches();

    // Add event listener for changes in media query
    mediaQueryList.addEventListener("change", updateMatches);

    // Cleanup event listener on component unmount
    return () => {
      mediaQueryList.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
