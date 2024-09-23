import { useState } from "react";
import "../../styles/sections/Skills.css";
import Section from "../Section";
import EditSkills from "../EditSkills";
import { CiWarning } from "react-icons/ci";
import { portfolio } from "../../helpers/helpers";

interface TemplateProps {
  mode: string;
  theme: string;
  template: string;
  setPortfolio: any;
  data: portfolio;
}

const Skills: React.FC<TemplateProps> = ({
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

  const updateSkills = (font: string[]) => {
    setPortfolio((prevPortfolio: any) => ({
      ...prevPortfolio,
      skills: font,
    }));
  };

  return (
    <Section
      id={`ddd`}
      mode={mode === `EDIT` ? true : false}
      is_hidden={false}
      name={`skills`}
      type={`center`}
      theme={theme}
      onClick={hello}
    >
      {show ? (
        <EditSkills
          value={data.skills ? data.skills : []}
          updateSkills={updateSkills}
          sectionName="skkjs"
          onCancel={() => setShow(false)}
        />
      ) : null}

      {template === `ONE` || template === `TWO` ? (
        <div className="skills">
          <h1 className="skills-heading">SKILLS</h1>
          <div className="skills-container">
            {data?.skills?.map((item, index) => (
              <div key={index} className="skill">
                <span>{item}</span>
                <span className="obj-no">{index}</span>
              </div>
            ))}
            {data?.skills?.length === 0 || !data.skills ? (
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
          <h1 className="skills-heading">SKILLS</h1>
          <div className="skills-container">
            {data?.skills?.map((item, index) => (
              <div key={index} className="skill">
                <span>{item}</span>
                <span className="obj-no">{index}</span>
              </div>
            ))}
            {data?.skills?.length === 0 || !data.skills ? (
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

export default Skills;
