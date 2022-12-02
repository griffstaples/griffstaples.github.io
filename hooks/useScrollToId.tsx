import { useCallback } from "react";

export const useScrollToId = () => {
  return useCallback((id: string) => {
    document?.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);
};
