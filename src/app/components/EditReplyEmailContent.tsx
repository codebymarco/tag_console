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

const EditReplyEmailContent: React.FC<TemplateProps> = ({
  onCancel,
  refetch,
  data,
}) => {
  const [val, setVal] = useState<string>(data.reply_email_content!);

  const { postdata } = usePostData();

  const save = async () => {
    await postdata({ ...data, reply_email_content: val });
    refetch();
    onCancel();
  };

  return (
    <EditDetail detailName={"form reply content"} onCancel={save}>
      <div className="editInput">
        <textarea
          placeholder="title"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
    </EditDetail>
  );
};

export default EditReplyEmailContent;
