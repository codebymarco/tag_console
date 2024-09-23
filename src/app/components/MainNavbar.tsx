import { Link, useNavigate } from "react-router-dom";
import "../styles/components/navbar.css";
import "../styles/components/mobilenavbar.css";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { useLogin } from "../hooks/useLogin";

const MainNavbar = () => {
  const navigate = useNavigate();

  const route = (path: string) => {
    navigate(path);
    setShowmobile(false);
  };

  const [showmobile, setShowmobile] = useState(false);

  const { login } = useLogin();

  const loginGuest = () => {
    login("12345", "12345");
  };

  return (
    <nav className="navbar">
      {showmobile ? (
        <div className="mobilenav">
          <IoIosClose
            className="mobilenav-button"
            onClick={() => setShowmobile(false)}
          />
          <div className="mobilenav-container">
            <div className="mobilenavbarroute" onClick={() => route(`/`)}>
              home
            </div>
            <div className="mobilenavbarroute" onClick={loginGuest}>
              guest
            </div>
            <div className="mobilenavbarroute" onClick={() => route(`/login`)}>
              login
            </div>
            <div className="mobilenavbarroute" onClick={() => route(`/signup`)}>
              signup
            </div>
          </div>
        </div>
      ) : null}

      <h1 className="logo-navbar" onClick={() => route(`/`)}>
        tag loader
      </h1>
      <AiOutlineMenu
        onClick={() => setShowmobile(true)}
        id="usernavbarlinks-mobile-button"
      />
      <div className="usernavbarlinks" id="usernavbarlinks">
        <div className="usernavbarlinks-container">
          <button onClick={loginGuest}>guest</button>
          <Link to="/login">login</Link>
          <Link to="/signup">signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
