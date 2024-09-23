import { useState } from "react";
import "../styles/components/editInput.css";
import EditDetail from "./EditDetails";
import { form } from "../helpers/helpers";
import { usePostData } from "../hooks/usePostData";

interface TemplateProps {
  onCancel: () => void;
  data: form;
  refetch: () => void;
}

const EditEmail: React.FC<TemplateProps> = ({ onCancel, refetch, data }) => {
  const [val, setVal] = useState<string>(data.email!);

  const { postdata } = usePostData();

  const save = async () => {
    await postdata({ ...data, email: val });
    refetch();
    onCancel();
  };

  return (
    <EditDetail detailName={"form email"} onCancel={save}>
      <div className="editInput">
        <input
          type="text"
          placeholder="email"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
    </EditDetail>
  );
};

export default EditEmail;
