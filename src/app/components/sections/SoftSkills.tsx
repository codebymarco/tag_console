import { useState } from "react";
import "../../styles/sections/Skills.css";
import Section from "../Section";
import EditSoftSkills from "../EditSoftSkills";
import { CiWarning } from "react-icons/ci";
import { portfolio } from "../../helpers/helpers";
interface TemplateProps {
  mode: string;
  theme: string;
  template: string;
  setPortfolio: any;
  data: portfolio;
}

const SoftSkills: React.FC<TemplateProps> = ({
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

  const updateSoftSkills = (font: string[]) => {
    setPortfolio((prevPortfolio: any) => ({
      ...prevPortfolio,
      softSkills: font,
    }));
  };

  return (
    <Section
      id={`ddd`}
      mode={mode === `EDIT` ? true : false}
      is_hidden={false}
      name={` softskills`}
      type={`center`}
      theme={theme}
      onClick={hello}
    >
      {show ? (
        <EditSoftSkills
          value={data.softSkills ? data.softSkills : []}
          updateSoftSkills={updateSoftSkills}
          sectionName="skkjs"
          onCancel={() => setShow(false)}
        />
      ) : null}

      {template === `ONE` || template === `TWO` ? (
        <div className="skills">
          <h1 className="skills-heading">SOFT SKILLS</h1>
          <div className="skills-container">
            {data?.softSkills?.map((item, index) => (
              <div key={index} className="skill">
                <span>{item}</span>
                <span className="obj-no">{index}</span>
              </div>
            ))}
            {data?.softSkills?.length === 0 || !data.softSkills ? (
              <div className="nothing">
                <p>no skills</p>
                <span>
                  <CiWarning className="warning" />
                  this section will be hidden
                </span>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {template === `THREE` ? (
        <div className="skills-three">
          <h1 className="skills-heading">SOFT SKILLS</h1>
          <div className="skills-container">
            {data?.softSkills?.map((item, index) => (
              <div key={index} className="skill">
                <span>{item}</span>
                <span className="obj-no">{index}</span>
              </div>
            ))}
            {data?.softSkills?.length === 0 || !data.softSkills ? (
              <div className="nothing-dark">
                <p>no skills</p>
                <span>
                  <CiWarning className="warning" />
                  this section will be hidden
                </span>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </Section>
  );
};

export default SoftSkills;
