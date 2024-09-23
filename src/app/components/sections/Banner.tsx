import { useState } from "react";
import "../../styles/sections/banner.css";
import Section from "../Section";
import EditBanner from "../EditBanner";
import { portfolio } from "../../helpers/helpers";

interface TemplateProps {
  mode: string;
  theme: string;
  template: string;
  setPortfolio: any;
  data: portfolio;
}

const Banner: React.FC<TemplateProps> = ({
  mode,
  theme,
  template,
  data,
  setPortfolio,
}) => {
  const [show, setShow] = useState(false);

  const hello = () => {
    setShow(true);
  };

  const updateSkills = (font: any) => {
    setPortfolio((prevPortfolio: any) => ({
      ...prevPortfolio,
      name: font.name,
      surname: font.surname,
      occupation: font.occupation,
      photo: font.photo,
      photoChange: font.photoChange,
      photo2: font.photo2,
    }));
  };

  return (
    <Section
      id={`ddd`}
      mode={mode === `EDIT` ? true : false}
      is_hidden={false}
      name={`banner`}
      type={`center`}
      theme={theme}
      onClick={hello}
    >
      {show ? (
        <EditBanner
          updateSkills={updateSkills}
          data={data}
          onCancel={() => setShow(false)}
        />
      ) : null}

      {template === `ONE` ? (
        <div className="banner">
          <span className="banner-fullname">
            {data.name ? data.name : `name`}{" "}
            {data.surname ? data.surname : `surname`}
          </span>
          <span className="banner-occupation">
            {data.occupation ? data.occupation : `occupation`}
          </span>
        </div>
      ) : null}

      {template === `TWO` ? (
        <div className="banner-two">
          <div className="photo">
            <img
              src={data.photo2 ? URL.createObjectURL(data.photo2) : data.photo}
            />
          </div>
          <span className="banner-fullname">
            {data.name ? data.name : `name`}{" "}
            {data.surname ? data.surname : `surname`}
          </span>
          <span className="banner-occupation">
            {data.occupation ? data.occupation : `occupation`}
          </span>
        </div>
      ) : null}

      {template === `THREE` ? (
        <div className="banner-three">
          <span className="banner-fullname">
            {data.name ? data.name : `name`}{" "}
            {data.surname ? data.surname : `surname`}
          </span>
          <span className="banner-occupation">
            {data.occupation ? data.occupation : `occupation`}
          </span>
        </div>
      ) : null}
    </Section>
  );
};

export default Banner;
