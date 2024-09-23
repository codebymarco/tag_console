import { form } from "../helpers/helpers";
import { usePostData } from "../hooks/usePostData";
import "../styles/components/editInput.css";
import EditDetail from "./EditDetails";

interface TemplateProps {
  onCancel: () => void;
  data: form;
  refetch: () => void;
}

const EditReplyEmail: React.FC<TemplateProps> = ({ onCancel, refetch, data  }) => {

  const { postdata } = usePostData();

  const save = async () => {
    await postdata({ ...data, reply_email: !data.reply_email });
    refetch();
    onCancel();
  };
  return (
    <EditDetail detailName={"reply email"} onCancel={save}>
      <div className="editInput">
        {data.reply_email ? (
          <p>are you sure you want to disable</p>
        ) : (
          <p>are you sure you want to enable</p>
        )}
      </div>
    </EditDetail>
  );
};

export default EditReplyEmail;
