import "../styles/pages/templates.css";
import "../styles/pages/customize.css";
import { useEffect, useState } from "react";
import { form } from "../helpers/helpers";

interface TemplateProps {
  onCancel: () => void;
  data: form;
  refetch: () => void;
}

const Customize: React.FC<TemplateProps> = ({ onCancel, data, refetch }) => {
  console.log(data, refetch);

  const [bg, setBg] = useState("#ffffff");
  const [font, setFont] = useState("#000000");
  const [ButtonBg, setButtonBg] = useState("#000000");

  const save = () => {
    onCancel();
  };

  const reset = () => {
    onCancel();
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
        <h1>cusotmize theme</h1>
        <div>
          <button onClick={() => reset()}>reset</button>
          <button onClick={() => onCancel()}>cancel</button>
          <button onClick={() => save()}>save</button>
        </div>
      </div>
      <div className="customize-bottom">
        <div className="box">
          <div>
            <h1>bgcolor</h1>
            <p>{bg}</p>
          </div>
          <input
            value={bg}
            onChange={(e) => setBg(e.target.value)}
            type="color"
            className="color"
          />
        </div>
        <div className="box">
          <div>
            <h1>fontcolor</h1>
            <p>{font}</p>
          </div>
          <input
            value={font}
            onChange={(e) => setFont(e.target.value)}
            type="color"
            className="color"
          />
        </div>
        <div className="box">
          <div>
            <h1>input color</h1>
            <p>#sjfgkjjs</p>
          </div>
          <input type="color" className="color" />
        </div>
        <div className="box">
          <div>
            <h1>button color</h1>
            <p>{ButtonBg}</p>
          </div>
          <input
            value={ButtonBg}
            onChange={(e) => setButtonBg(e.target.value)}
            type="color"
            className="color"
          />
        </div>
        <div className="box">
          <div>
            <h1>button txt color</h1>
            <p>#sjfgkjjs</p>
          </div>
          <input type="color" className="color" />
        </div>
        <div className="box">
          <div>
            <h1>input txt color</h1>
            <p>#sjfgkjjs</p>
          </div>
          <input type="color" className="color" />
        </div>
      </div>
    </div>
  );
};

export default Customize;
