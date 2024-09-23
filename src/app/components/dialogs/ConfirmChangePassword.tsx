import { ReactNode, useState } from "react";
import Dialog from "./Dialog";
import { useCheckPwd } from "../../hooks/useCheckPwd";
import { useChangePwd } from "../../hooks/useChangePwd";
interface TemplateProps {
  title?: string;
  children?: ReactNode | undefined;
  onCancel: () => void;
}

const ConfirmChangePassword: React.FC<TemplateProps> = ({ onCancel }) => {
  const [value, setValue] = useState(``);
  const [value2, setValue2] = useState(``);
  const [currentPwd, setCurrentPwd] = useState(``);
  const [error2, setError2] = useState(``);

  const { postdata, check, executeNext } = useCheckPwd();
  const { postdata2 } = useChangePwd();

  const alertShit = () => {
    if (value !== value2 && value !== `` && value2 != ``){
      setError2('passwords dont match')
      return
    }
    postdata2({ password: value });
    onCancel();
  };

  const checkPWD = () => {
    postdata({ password: currentPwd });
  };

  return (
    <div>
      <Dialog
        executeNext={executeNext}
        next={() => checkPWD()}
        title="change password"
        onSave={alertShit}
        onCancel={onCancel}
      >
        {check ? (
          <div className="dialog-child confirm-delete-account">
            <p>please choose mew pwd</p>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="new password"
            />
            <input
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              type="text"
              placeholder="confirm password"
            />
            <span>{error2}</span>
          </div>
        ) : (
          <div className="dialog-child confirm-delete-account">
            <p>please enter curennt password</p>
            <input
              value={currentPwd}
              onChange={(e) => setCurrentPwd(e.target.value)}
              type="text"
              placeholder="current password"
            />
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default ConfirmChangePassword;
