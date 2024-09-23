import "../../styles/sections/Divider.css";
interface TemplateProps {
  mode: string;
  theme: string;
  template: string;
}

const Divider: React.FC<TemplateProps> = ({ mode, theme, template }) => {
  console.log(mode, theme, template);

  return (
    <>
      {template === `ONE` ? (
        <div className="divider">
          <div className="dividerchild"></div>
        </div>
      ) : null}

      {template === `TWO` ? (
        <div className="divider">
          {" "}
          <div className="dividerchild"></div>
        </div>
      ) : null}

      {template === `THREE` ? (
        <div className="divider-white">
          {" "}
          <div className="dividerchild"></div>
        </div>
      ) : null}
    </>
  );
};

export default Divider;
