import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" es más robusto que "window.scrollTo"
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Opcional: 'smooth' para un scroll suave
    });
  }, [pathname]); 

  return null; 
}

export default ScrollToTop;
