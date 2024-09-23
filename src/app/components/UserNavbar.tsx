import { Link, useNavigate } from "react-router-dom";
import "../styles/components/navbar.css";
import "../styles/components/mobilenavbar.css";

import { useState } from "react";
import ConfirmLogout from "./dialogs/ConfirmLogout";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { useStore } from "../store/store";

const UserNavbar = () => {
  const { user } = useStore();
  const [show4, setShow4] = useState(false);
  const [showmobile, setShowmobile] = useState(false);

  const navigate = useNavigate();

  const route = (path: string) => {
    navigate(path);
    setShowmobile(false);
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
            <div
              className="mobilenavbarroute"
              onClick={() => route(`/console/${user.user._id}/forms`)}
            >
              home
            </div>
            <div
              className="mobilenavbarroute"
              onClick={() => route(`/console/${user.user._id}/settings`)}
            >
              settings
            </div>
            <div className="mobilenavbarroute" onClick={() => setShow4(true)}>
              logout
            </div>
          </div>
        </div>
      ) : null}
      <h1
        className="logo-navbar"
        onClick={() => route(`/console/${user.user._id}/forms`)}
      >
        formio user
      </h1>
      <AiOutlineMenu
        onClick={() => setShowmobile(true)}
        id="usernavbarlinks-mobile-button"
      />
      <div className="usernavbarlinks" id="usernavbarlinks">
        <div className="usernavbarlinks-container">
          <Link to={`/console/${user.user._id}/settings`}>settings</Link>
          <button onClick={() => setShow4(true)}>logout</button>
        </div>
      </div>
      {show4 ? <ConfirmLogout onCancel={() => setShow4(false)} /> : null}
    </nav>
  );
};

export default UserNavbar;
