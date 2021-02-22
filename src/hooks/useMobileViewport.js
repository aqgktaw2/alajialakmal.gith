import debounce from "@/utils/debounce";
import { useEffect } from "react";

const useMobileViewport = () => {
  useEffect(() => {
    const setVH = debounce(function () {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight / 100}px`);
    }, 100);
    setVH();
    window.addEventListener("resize", setVH);
    return () => {
      window.removeEventListener("resize", setVH);
    };
  }, []);
  return null;
};

export default useMobileViewport;
