import { ReactNode, useState } from "react";
import Dialog from "./Dialog";
import { useDeleteAccount } from "../../hooks/useDeleteAccount";
interface TemplateProps {
  title?: string;
  children?: ReactNode | undefined;
  onCancel: () => void;
}

const ConfirmDeleteAccount: React.FC<TemplateProps> = ({ onCancel }) => {
  const [value, setValue] = useState(``);

  const { deleteAccount } = useDeleteAccount();

  const alertShit = async () => {
    if (value === `delete my account`) {
      await deleteAccount();
      onCancel();
    }
  };

  return (
    <div>
      <Dialog title="delete account" onSave={alertShit} onCancel={onCancel}>
        <div className="dialog-child confirm-delete-account">
          <p>please enter delete my account</p>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="delete my account"
          />
        </div>
      </Dialog>
    </div>
  );
};

export default ConfirmDeleteAccount;
