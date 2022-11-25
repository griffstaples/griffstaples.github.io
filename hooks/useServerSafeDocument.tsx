import { useEffect, useState } from "react";

export const useServerSafeDocument = () => {
  const [safeDocument, setSafeDocument] = useState<Document | null>(null);

  useEffect(() => {
    setSafeDocument(safeDocument);
  }, []);

  return safeDocument;
};
