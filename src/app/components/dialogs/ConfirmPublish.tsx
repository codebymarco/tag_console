import { ReactNode } from "react";
import Dialog from "./Dialog";
interface TemplateProps {
  title?: string;
  children?: ReactNode | undefined;
  onCancel: () => void;
  pub: () => void;
}

const ConfirmPublish: React.FC<TemplateProps> = ({ onCancel, pub }) => {

  const save = () => {
    pub();
    onCancel();
  };

  return (
    <div>
      <Dialog title="this is a title" onSave={save} onCancel={() => onCancel()}>
        <div>
          <p>are u sure u want to Publish</p>
        </div>
      </Dialog>
    </div>
  );
};

export default ConfirmPublish;
