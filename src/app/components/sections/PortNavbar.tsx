import { useState } from "react";
import "../../styles/sections/PortNavbar.css";
import Section from "../Section";
import EditPortNavbar from "../EditPortNavbar";
import { portfolio } from "../../helpers/helpers";
interface TemplateProps {
  mode: string;
  theme: string;
  template: string;
  setPortfolio: any;
  data: portfolio;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const PortNavbar: React.FC<TemplateProps> = ({
  mode,
  theme,
  template,
  setPortfolio,
  data,
  scrollToSection,
  aboutRef,
  contactRef,
}) => {
  const [show, setShow] = useState(false);

  const hello = () => {
    setShow(true);
  };

  //update functions
  // update font
  const updateNavbar = (font: string) => {
    setPortfolio((prevPortfolio: any) => ({
      ...prevPortfolio,
      navbar: font,
    }));
  };

  const areAllValuesEmpty = (arr: any, keys: any) => {
    return arr.every((obj: any) => {
      return keys.every((key: any) => {
        return !obj[key];
      });
    });
  };

  // Usage example: checking if all 'url' values are empty
  const keysToCheck = ["value"];
  const allEmpty = areAllValuesEmpty(data.links, keysToCheck);

  const everythingEmpty = allEmpty && data.about === ``;

  if (everythingEmpty === true) {
    return null;
  }

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
        <EditPortNavbar
          updateNavbar={updateNavbar}
          value={data.navbar!}
          sectionName="dhhd"
          onCancel={() => setShow(false)}
        />
      ) : null}

      {template === `ONE` || template === `TWO` ? (
        <div className="portNavbar">
          <h1>{data.navbar}</h1>
          <div className="portNavbarLinks">
            {data.about === `` ? null : (
              <button onClick={() => scrollToSection(aboutRef)}>about</button>
            )}
            {allEmpty ? null : (
              <button onClick={() => scrollToSection(contactRef)}>
                contact
              </button>
            )}
          </div>
        </div>
      ) : null}

      {template === `THREE` ? (
        <div className="portNavbar-three">
          <h1>{data.navbar}</h1>
          <div className="portNavbarLinks">
            {data.about === `` ? null : (
              <button onClick={() => scrollToSection(aboutRef)}>about</button>
            )}
            {allEmpty ? null : (
              <button onClick={() => scrollToSection(contactRef)}>
                contact
              </button>
            )}{" "}
          </div>
        </div>
      ) : null}
    </Section>
  );
};

export default PortNavbar;
