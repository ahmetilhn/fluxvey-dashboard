import { useState } from "react";
import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import "./index.scss";
import authService from "../../services/modules/auth.service";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleForm = async () => {
    try {
      const token = await authService.login({ email, password });
      if (token) {
        localStorage.setItem("auth_token", JSON.stringify(token));
        navigate("/");
      }
    } catch (error) {}
  };
  return (
    <div className="login vertical-center">
      <h2>Login</h2>
      <div className="form vertical-center">
        <div className="form__item vertical-center">
          <span>Email</span>
          <Input
            placeholder="Email"
            value={email}
            type="text"
            onChange={(e) => setEmail(e)}
          />
        </div>
        <div className="form__item vertical-center">
          <span>Password</span>
          <Input
            placeholder="Email"
            value={password}
            type="password"
            onChange={(e) => setPassword(e)}
          />
        </div>
        <div className="form__item vertical-center">
          <Button isDisabled={false} width="100%" onClick={() => handleForm()}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
