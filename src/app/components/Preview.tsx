import { useEffect } from "react";
import One from "./skeletons/One";
import Two from "./skeletons/Two";
import Three from "./skeletons/Three";
import { form } from "../helpers/helpers";
import "../styles/pages/preview.css";

interface TemplateProps {
  onCancel: () => void;
  template: string;
  form: form;
}

const Preview: React.FC<TemplateProps> = ({ onCancel, template, form }) => {
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
    <div className="preview">
      <div className="preview-top">
        <h1>preview</h1>
        <div>
          <button onClick={() => onCancel()}>close</button>
        </div>
      </div>
      <div className="preview-bottom">
        {template === `ONE` ? <One form={form} preview={true} /> : null}
        {template === `TWO` ? <Two form={form} preview={true} /> : null}
        {template === `THREE` ? <Three form={form} preview={true} /> : null}
      </div>
    </div>
  );
};

export default Preview;
