import { useState } from "react";
import "../../styles/sections/portFooter.css";
import Section from "../Section";
import EditFooter from "../EditFooter";
import { portfolio } from "../../helpers/helpers";

interface TemplateProps {
  mode: string;
  theme: string;
  template: string;
  setPortfolio: any;
  data: portfolio;
}

const PortFooter: React.FC<TemplateProps> = ({
  mode,
  theme,
  template,
  setPortfolio,
  data,
}) => {
  const [show, setShow] = useState(false);

  const hello = () => {
    setShow(true);
  };

  const updateSkills = (font: string) => {
    setPortfolio((prevPortfolio: any) => ({
      ...prevPortfolio,
      footer: font,
    }));
  };

  return (
    <Section
      id={`ddd`}
      mode={mode === `EDIT` ? true : false}
      is_hidden={false}
      name={`portfolio navbar`}
      type={`center`}
      theme={theme}
      onClick={hello}
    >
      {show ? (
        <EditFooter
          value={data.footer!}
          updateSkills={updateSkills}
          sectionName="footer"
          onCancel={() => setShow(false)}
        />
      ) : null}

      {template === `ONE` || template === `TWO` ? (
        <div className="portFooter">
          <p>powered by iportfolio</p>
          <p>{data.footer}</p>
        </div>
      ) : null}

      {template === `THREE` ? (
        <div className="portFooter-three">
          <p>powered by iportfolio</p>
          <p>{data.footer}</p>
        </div>
      ) : null}
    </Section>
  );
};

export default PortFooter;
