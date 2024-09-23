import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import "../styles/pages/auth.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, error } = useLogin();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const execute = () => {
    navigate(`/console/userid/forms`);
    // login(username, password);
  };

  return (
    <div className="auth">
      <h1 className="auth-heading">Login</h1>
      <p className="auth-para">Need to make some changes?</p>
      <div className="auth-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="pwd"
        />
        <button type="button" onClick={() => execute()}>
          login
        </button>
        {error ? (
          <div className="error-box">
            <p>{error}</p>
          </div>
        ) : (
          <div className="error-box-hidden">
            <p></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
