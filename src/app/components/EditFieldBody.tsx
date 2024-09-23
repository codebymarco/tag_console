import { form } from "../helpers/helpers";
import "../styles/components/editInput.css";
import EditDetail from "./EditDetails";
import { usePostData } from "../hooks/usePostData";

interface TemplateProps {
  onCancel: () => void;
  data: form;
  refetch: () => void;
}

const EditFieldBody: React.FC<TemplateProps> = ({
  onCancel,
  refetch,
  data,
}) => {

  const { postdata } = usePostData();

  const save = async () => {
    await postdata({ ...data, bodyfield: !data.bodyfield });
    refetch();
    onCancel();
  };

  return (
    <EditDetail detailName={"name fiel"} onCancel={save}>
      <div className="editInput">
        {data.bodyfield ? (
          <p>are you sure you want to disable</p>
        ) : (
          <p>are you sure you want to enable</p>
        )}
      </div>
    </EditDetail>
  );
};

export default EditFieldBody;
