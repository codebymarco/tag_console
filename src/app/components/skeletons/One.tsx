import { form } from "../../helpers/helpers";
import "../../styles/skeletons/one.css";

interface TemplateProps {
  form?: form;
  preview?: boolean;
}

const One: React.FC<TemplateProps> = ({ form, preview }) => {
  if (preview) {
    return (
      <div className="one">
        <h1 className="title">{form?.title}</h1>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <textarea placeholder="body" name="" id=""></textarea>
        <div className="button">submit</div>
      </div>
    );
  }

  return (
    <div className="one">
      <h1 className="title">title</h1>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="email" />
      <textarea placeholder="body" name="" id=""></textarea>
      <div className="button">submit</div>
    </div>
  );
};

export default One;
