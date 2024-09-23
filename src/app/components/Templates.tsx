import "../styles/pages/templates.css";
import { useEffect, useState } from "react";
import TemplatePrev from "./TemplatePrev";
import { form } from "../helpers/helpers";
import { usePostData } from "../hooks/usePostData";

interface TemplateProps {
  onCancel: () => void;
  data: form;
  refetch: () => void;
}

const Templates: React.FC<TemplateProps> = ({ onCancel, refetch, data }) => {
  const [template2, setTemplate] = useState(data.theme!);
  const [temp, setTemp] = useState(data.theme!);

  const { postdata } = usePostData();

  const save = async () => {
    await postdata({ ...data, theme: template2 });
    refetch();
    onCancel();
  };

  const reset = () => {
    setTemplate(data.theme!);
    setTemp(data.theme!);
  };

  useEffect(() => {
    // Set the body height and overflow when the component mounts
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";

    // Cleanup function to reset the body overflow when the component unmounts
    return () => {
      document.body.style.height = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="templates">
      <div className="templates-top">
        <h1>themes</h1>
        <div>
          <button onClick={() => reset()}>reset</button>
          <button onClick={() => onCancel()}>cancel</button>
          <button onClick={() => save()}>save</button>
        </div>
      </div>
      <div className="templates-bottom">
        <div className="templates-list">
          <div
            onClick={() => setTemp(`ONE`)}
            className={
              template2 === `ONE`
                ? "box-set"
                : temp === `ONE`
                ? "box-selected"
                : "box"
            }
          >
            <div>
              <h3>light</h3>
            </div>
          </div>
          <div
            onClick={() => setTemp(`TWO`)}
            className={
              template2 === `TWO`
                ? "box-set"
                : temp === `TWO`
                ? "box-selected"
                : "box"
            }
          >
            {" "}
            <div>
              <h3>dark</h3>
            </div>
          </div>

          <div
            onClick={() => setTemp(`THREE`)}
            className={
              template2 === `THREE`
                ? "box-set"
                : temp === `THREE`
                ? "box-selected"
                : "box"
            }
          >
            {" "}
            <div>
              <h3>ocean</h3>
            </div>
          </div>
        </div>
        <TemplatePrev template={temp} setTemplate={setTemplate} />
      </div>
    </div>
  );
};

export default Templates;
