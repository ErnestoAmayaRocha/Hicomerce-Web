import { useEffect } from "react";

export default function useRevealSections({ key } = {}) {
  useEffect(() => {
    // Solo p e img dentro de section, excluyendo header/footer
    const targets = Array.from(
      document.querySelectorAll("section p, section img, section h2, section h3")
    ).filter(
      (el) => !el.closest("header, footer") && !el.hasAttribute("data-no-reveal")
    );

    if (!targets.length) return;

    // Fallback si no hay IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.setAttribute("data-reveal", "in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-reveal", "in");
          io.unobserve(entry.target); // una vez
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    targets.forEach((el) => {
      el.setAttribute("data-reveal", "out");
      io.observe(el);
    });

    return () => io.disconnect();
  }, [key]);
}
