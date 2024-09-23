import "../styles/components/editInput.css";
import EditDetail from "./EditDetails";

interface TemplateProps {
  onCancel: () => void;
  value?: string;
}

const EditFormStatus: React.FC<TemplateProps> = ({ onCancel, value }) => {
  const save = () => {
    onCancel();
  };

  return (
    <EditDetail detailName={"name field"} onCancel={save}>
      <div className="editInput">
        {value ? (
          <p>are you sure you want to disable</p>
        ) : (
          <p>are you sure you want to enable</p>
        )}
      </div>
    </EditDetail>
  );
};

export default EditFormStatus;
