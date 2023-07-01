import { useState } from "react";
const useLoader = () => {
  const [isLoading, setLoading] = useState(true);
  return { isLoading, setLoading };
};
export default useLoader;
