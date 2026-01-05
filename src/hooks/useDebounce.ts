import { useEffect, useState } from "react";
import { DebounceDelayInMS } from "../shared/constants";

const useDebounce = <T>(value: T, delay: number = DebounceDelayInMS): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
