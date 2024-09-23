import { form } from "../helpers/helpers";
import "../styles/components/editInput.css";
import EditDetail from "./EditDetails";
import { usePostData } from "../hooks/usePostData";

interface TemplateProps {
  onCancel: () => void;
  data: form;
  refetch: () => void;
}

const EditStatus: React.FC<TemplateProps> = ({
  onCancel,
  refetch,
  data,
}) => {

  const { postdata } = usePostData();

  const save = async () => {
    await postdata({ ...data, status: !data.status });
    refetch();
    onCancel();
  };

  return (
    <EditDetail detailName={"form status"} onCancel={save}>
      <div className="editInput">
        {data.status ? (
          <p>are you sure you want to disable</p>
        ) : (
          <p>are you sure you want to enable</p>
        )}
      </div>
    </EditDetail>
  );
};

export default EditStatus;
