import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    //scuffed version
    const tomeghin = window.localStorage.setItem(key, initialValue);
    //slightly bettery
    const setValue = value => {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    };
    return item ? JSON.parse(item) : setValue(initialValue);
  });
  return [storedValue];
};

export default useLocalStorage;
