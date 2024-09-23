import { useState } from "react";
import "../../styles/sections/Skills.css";
import Section from "../Section";
import EditEdu from "../EditEdu";
import { CiWarning } from "react-icons/ci";
import { portfolio } from "../../helpers/helpers";

interface TemplateProps {
  mode: string;
  theme: string;
  template: string;
  setPortfolio: any;
  data: portfolio;
}

const Education: React.FC<TemplateProps> = ({
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

  const updateSkills = (font: any[]) => {
    setPortfolio((prevPortfolio: any) => ({
      ...prevPortfolio,
      education: font,
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
        <EditEdu
          updateSkills={updateSkills}
          value={data.education!}
          sectionName="skkjs"
          onCancel={() => setShow(false)}
        />
      ) : null}

      {template === `ONE` || template === `TWO` ? (
        <div className="skills">
          <h1 className="skills-heading">EDUCATION</h1>
          <div className="skills-container">
            {data?.education?.map((item, index) => (
              <div key={index} className="education">
                <div>
                  <p className="edu-one">{item.company}</p>
                  <p className="edu-two">{item.position}</p>
                </div>
                <p className="edu-three">
                  {item.from_date} - {item.to_date}
                </p>
              </div>
            ))}
            {data?.education?.length === 0 || !data.education ? (
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
          <h1 className="skills-heading">EDUCATION</h1>
          <div className="skills-container">
            {data?.education?.map((item, index) => (
              <div key={index} className="education">
                <div>
                  <p className="edu-one">{item.company}</p>
                  <p className="edu-two">{item.position}</p>
                </div>
                <p className="edu-three">
                  {item.from_date} - {item.to_date}
                </p>
              </div>
            ))}
            {data?.education?.length === 0 ? (
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

export default Education;
