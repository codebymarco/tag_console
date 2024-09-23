import { useState } from "react";
import "../../styles/sections/Hobbies.css";
import Section from "../Section";
import EditHobbies from "../EditHobbies";
import { CiWarning } from "react-icons/ci";
import { portfolio } from "../../helpers/helpers";

interface TemplateProps {
  mode: string;
  theme: string;
  template: string;
  setPortfolio: any;
  data: portfolio;
}
const Hobbies: React.FC<TemplateProps> = ({
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
      hobbies: font,
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
        <EditHobbies
          value={data.hobbies ? data.hobbies : []}
          updateSkills={updateSkills}
          sectionName="hobbies"
          onCancel={() => setShow(false)}
        />
      ) : null}

      {template === `ONE` || template === `TWO` ? (
        <div className="hobbies">
          <h1 className="hobbies-heading">HOBBIES</h1>
          <div className="hobbies-container">
            {data?.hobbies?.map((item, index) => (
              <div key={index} className="skill">
                <span>{item}</span>
                <span className="obj-no">{index}</span>
              </div>
            ))}
           {data?.hobbies?.length === 0 || !data.hobbies ? (
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
        <div className="hobbies-three">
          <h1 className="hobbies-heading">HOBBIES</h1>
          <div className="hobbies-container">
            {data?.hobbies?.map((item, index) => (
              <div key={index} className="skill">
                <span>{item}</span>
                <span className="obj-no">{index}</span>
              </div>
            ))}
           {data?.hobbies?.length === 0 || !data.hobbies ? (
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

export default Hobbies;
