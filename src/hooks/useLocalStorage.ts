import { useState, useEffect, Dispatch } from "react";

function getStorageValue(key: string) {
  const saved = localStorage.getItem(key);
  if (saved) {
    return  JSON.parse(saved);
  }

  return {};
}

type SetStateAction<S> = S | ((prevState: S) => S);

export function useLocalStorage<S>(key: string): [S, Dispatch<SetStateAction<S>>] {
  const [value, setValue] = useState(() => {
    return getStorageValue(key);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
