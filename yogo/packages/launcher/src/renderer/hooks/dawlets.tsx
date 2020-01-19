import { useEffect, useState } from "react";
import { fetchAvailableDawlets } from "common-utils";

export const useDawlets = () => {
  const [dawlets, setDawlets] = useState<Array<string>>([]);

  useEffect(() => {
    const availableDawlets = fetchAvailableDawlets();
    setDawlets(availableDawlets);
  }, []);

  return dawlets
}