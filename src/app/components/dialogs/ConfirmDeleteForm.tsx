import { ReactNode, useState } from "react";
import Dialog from "./Dialog";
import { useDeleteForm } from "../../hooks/useDeleteForm";
interface TemplateProps {
  title?: string;
  children?: ReactNode | undefined;
  onCancel: () => void;
}

const ConfirmDeleteForm: React.FC<TemplateProps> = ({ onCancel }) => {
  const [value, setValue] = useState(``);

  const { deleteForm } = useDeleteForm();

  const alertShit = () => {
    if (value === `delete my form`) {
      deleteForm();
      onCancel();
    }
  };

  return (
    <div>
      <Dialog title="delete" onSave={alertShit} onCancel={onCancel}>
        <div className="dialog-child confirm-delete-account">
          <p>please enter delete my form</p>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="delete my form"
          />
        </div>
      </Dialog>
    </div>
  );
};

export default ConfirmDeleteForm;
