import "../styles/pages/templates.css";
import { useEffect } from "react";

interface TemplateProps {
  onCancel: () => void;
}

const Themes: React.FC<TemplateProps> = ({ onCancel }) => {
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
      <button onClick={() => onCancel()}>close</button>
      <h1>themes</h1>
    </div>
  );
};

export default Themes;
