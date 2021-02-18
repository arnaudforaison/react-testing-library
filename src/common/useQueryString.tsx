import { useLocation } from "react-router-dom";

const useQueryString = (key: string) => {
  const { search } = useLocation();
  return new URLSearchParams(search).get(key);
};

export default useQueryString;
