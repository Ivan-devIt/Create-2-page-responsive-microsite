import { useState, useEffect } from "react";
import { ISize } from "../types";

export const useResize = (): ISize => {
  const [windowSize, setWindowSize] = useState<ISize>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
