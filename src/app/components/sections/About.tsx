import { useState } from "react";
import "../../styles/sections/About.css";
import Section from "../Section";
import EditAbout from "../EditAbout";
import { CiWarning } from "react-icons/ci";
import { portfolio } from "../../helpers/helpers";

interface TemplateProps {
  mode: string;
  theme: string;
  template: string;
  setPortfolio: any;
  data: portfolio;
}

const About: React.FC<TemplateProps> = ({
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
      about: font,
    }));
  };

  return (
    <Section
      id={`ddd`}
      mode={mode === `EDIT` ? true : false}
      is_hidden={false}
      name={`about`}
      type={`center`}
      theme={theme}
      onClick={hello}
    >
      {show ? (
        <EditAbout
          value={data.about!}
          updateSkills={updateSkills}
          sectionName="about"
          onCancel={() => setShow(false)}
        />
      ) : null}

      {template === `ONE` || template === `TWO` ? (
        <div className="about">
          <h1 className="about-heading">ABOUT</h1>
          <p>{data.about}</p>
          {data?.about?.length === 0 || !data.about ?(
            <div className="nothing">
              <p>no data</p>
              <span>
                <CiWarning className="warning" />
                this section will be hidden
              </span>
            </div>
          ) : null}
        </div>
      ) : null}

      {template === `THREE` ? (
        <div className="about-three">
          <h1 className="about-heading">ABOUT</h1>
          <p className="about-para">{data.about}</p>
          {data?.about?.length === 0 || !data.about ? (
            <div className="nothing-dark">
              <p>no data</p>
              <span>
                <CiWarning className="warning" />
                this section will be hidden
              </span>
            </div>
          ) : null}
        </div>
      ) : null}
    </Section>
  );
};

export default About;
