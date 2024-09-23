import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import "../styles/pages/auth.css";

const Signup = () => {
  const { signup, error } = useSignup();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const execute = () => {
    signup(email, password);
  };

  return (
    <div className="auth">
      <h1 className="auth-heading">Signup</h1>
      <p className="auth-para">Your first step in getting noticed</p>
      <div className="auth-form">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="pwd"
        />
        <button type="button" onClick={() => execute()}>
          signup
        </button>
        {error ? (
          <div className="error-box">
            <p>{error}</p>
          </div>
        ) : (
          <div className="error-box-hidden"></div>
        )}
      </div>
    </div>
  );
};

export default Signup;
