import { MdDelete, MdModeEdit, MdOutlineLogout } from "react-icons/md";
import "../styles/pages/settings.css";
import { useState } from "react";
import ConfirmDeleteAccount from "../components/dialogs/ConfirmDeleteAccount";
import ConfirmLogout from "../components/dialogs/ConfirmLogout";
import ConfirmChangePassword from "../components/dialogs/ConfirmChangePassword";

const Settings2 = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <div className="settings">
      {show ? <ConfirmDeleteAccount onCancel={() => setShow(false)} /> : null}
      {show2 ? <ConfirmLogout onCancel={() => setShow2(false)} /> : null}

      {show3 ? (
        <ConfirmChangePassword onCancel={() => setShow3(false)} />
      ) : null}
      <div className="settings-top">
        <h1>settings</h1>
      </div>
      <div className="settings-content">
        <div className="settings-container">
          <div className="settings-container-top">
            <h1>account info</h1>
          </div>
          <div className="setting">
            <div>
              <h2>email</h2>
              <p>rrjkqrkjgkrw</p>
            </div>
          </div>
          <div className="setting">
            <div>
              <h2>joined</h2>
              <p>ufwhlr</p>
            </div>
          </div>
        </div>

        <div className="settings-container">
          <div className="settings-container-top">
            <h1>account managmanet</h1>
          </div>
          <div className="setting" onClick={() => setShow3(true)}>
            <div>
              <h2>change password</h2>
              <p>change login security</p>
            </div>
            <MdModeEdit className="child-hover delete-form-icon" />
          </div>
          <div className="setting" onClick={() => setShow(true)}>
            <div>
              <h2>delete account</h2>
              <p>sick of us</p>
            </div>
            <MdDelete className="child-hover delete-form-icon" />
          </div>
          <div className="setting" onClick={() => setShow2(true)}>
            <div>
              <h2>logout</h2>
              <p>end your session</p>
            </div>
            <MdOutlineLogout className="child-hover logout-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings2;
