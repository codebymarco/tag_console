import { useState } from "react";
import "../styles/components/editInput.css";
import EditDetail from "./EditDetails";
import { useCreateForm } from "../hooks/useCreateForm";

interface TemplateProps {
  onCancel: () => void;
  refetch: () => void
}

const CreateForm: React.FC<TemplateProps> = ({ onCancel, refetch}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");


    const { postdata } = useCreateForm();

  const save = async () => {
    await postdata({ name, email, title });
    refetch();
    onCancel();
  };

  return (
    <EditDetail detailName={"Create Form"} onCancel={save}>
      <div className="editInput">
      <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </EditDetail>
  );
};

export default CreateForm;


