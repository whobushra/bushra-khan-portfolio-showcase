import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top on path changes (e.g. leaving /#projects for a case study).
 * If the URL has a hash (e.g. /#projects), scrolls that section into view after navigation.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace(/^#/, "");
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
