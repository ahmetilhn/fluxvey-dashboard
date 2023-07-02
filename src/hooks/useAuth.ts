import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
enum Auth {
  StorageKey = "auth_token",
  LoginPath = "/login",
}
const authRoutes = ["/login", "/register"];
const useAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState<any>(
    localStorage.getItem(Auth.StorageKey)
  );
  useEffect(() => {
    const _token = localStorage.getItem(Auth.StorageKey);
    if (_token) {
      setToken(JSON.parse(JSON.stringify(_token)));
      if (authRoutes.includes(location.pathname)) {
        navigate("/");
      }
    } else {
      navigate(Auth.LoginPath);
    }
  }, [location]);
  const logout = () => {
    try {
      toast.loading("Exiting...");
      localStorage.removeItem(Auth.StorageKey);
      navigate(Auth.LoginPath);
    } catch (error) {}
  };
  return {
    token,
    isAuth: !!token,
    logout,
  };
};

export default useAuth;
