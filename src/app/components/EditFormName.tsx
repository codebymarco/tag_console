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

const EditFormName: React.FC<TemplateProps> = ({ onCancel, refetch, data }) => {
  const [val, setVal] = useState<string>(data.name!);

  const { postdata } = usePostData();

  const save = async () => {
    await postdata({ ...data, name: val });
    refetch();
    onCancel();
  };

  return (
    <EditDetail detailName={"form name"} onCancel={save}>
      <div className="editInput">
        <input
          type="text"
          placeholder="name"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
    </EditDetail>
  );
};

export default EditFormName;


