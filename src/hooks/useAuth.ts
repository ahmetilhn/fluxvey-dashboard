import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState<any>(localStorage.getItem("auth_token"));
  useEffect(() => {
    const _token = localStorage.getItem("auth_token");
    console.log("x", token);
    if (_token) {
      setToken(JSON.parse(JSON.stringify(_token)));
    } else {
      navigate("/login");
    }
  }, [location]);
  return {
    token,
    isAuth: !!token,
  };
};

export default useAuth;
