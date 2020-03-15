import { useEffect, useState } from "react";

function useWindowSize() {
  const isClient = typeof window === "object";
  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }

    function handleResize() {
      console.log(windowSize);
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient, windowSize]);

  return windowSize;
}

export default useWindowSize;
