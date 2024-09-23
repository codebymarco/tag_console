import React, { useRef } from "react";
import About from "./sections/About";
import Banner from "./sections/Banner";
import Divider from "./sections/Divider";
import Hobbies from "./sections/Hobbies";
import PortFooter from "./sections/PortFooter";
import PortNavbar from "./sections/PortNavbar";
import Skills from "./sections/Skills";
import "../styles/pages/portfolio.css";
import Education from "./sections/Education";
import WorkExperience from "./sections/WorkExperience";
import SoftSkills from "./sections/SoftSkills";
import ScrollToTop from "./sections/ScrollToTop";
import { portfolio } from "../helpers/helpers";
import Contact from "./sections/Contact";

interface TemplateProps {
  mode: string;
  theme: string;
  template: string;
  font: string;
  data: portfolio;
  setPortfolio: any;
}

const Template: React.FC<TemplateProps> = ({
  mode,
  theme,
  template,
  font,
  data,
  setPortfolio,
}) => {
  console.log(font, data, setPortfolio);

  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
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

  return (
    <>
      {template === `ONE` ? (
        <div
          className={
            mode === "PREVIEW"
              ? `templateOneNoPad ${data.font}`
              : `templateOne ${data.font}`
          }
        >
          <PortNavbar
            data={data}
            setPortfolio={setPortfolio}
            mode={mode}
            theme={theme}
            template={template}
            scrollToSection={scrollToSection}
            aboutRef={aboutRef}
            contactRef={contactRef}
          />
          {data.scroll ? <ScrollToTop data={data} /> : null}
          <Banner
            setPortfolio={setPortfolio}
            data={data}
            mode={mode}
            theme={theme}
            template={template}
          />

          {mode === `PREVIEW` &&
          (data?.about?.length === 0 || !data.about) ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <div ref={aboutRef}>
                <About
                  setPortfolio={setPortfolio}
                  data={data}
                  mode={mode}
                  theme={theme}
                  template={template}
                />
              </div>
            </>
          )}

          {(mode === `PREVIEW` && data?.softSkills?.length === 0) ||
          !data.softSkills ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <Skills
                setPortfolio={setPortfolio}
                data={data}
                mode={mode}
                theme={theme}
                template={template}
              />
            </>
          )}

          {(mode === `PREVIEW` && data?.softSkills?.length === 0) ||
          !data.softSkills ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <SoftSkills
                setPortfolio={setPortfolio}
                data={data}
                mode={mode}
                theme={theme}
                template={template}
              />
            </>
          )}

          {(mode === `PREVIEW` && data?.hobbies?.length === 0) ||
          !data.hobbies ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <Hobbies
                setPortfolio={setPortfolio}
                data={data}
                mode={mode}
                theme={theme}
                template={template}
              />
            </>
          )}
          {mode === `PREVIEW` &&
          (data?.education?.length === 0 || !data.education) ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <Education
                setPortfolio={setPortfolio}
                data={data}
                mode={mode}
                theme={theme}
                template={template}
              />
            </>
          )}

          {mode === `PREVIEW` &&
          (data?.workExperience?.length === 0 ||
            !data.workExperience) ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <WorkExperience
                setPortfolio={setPortfolio}
                data={data}
                mode={mode}
                theme={theme}
                template={template}
              />
            </>
          )}

          {mode === `PREVIEW` && allEmpty ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <div ref={contactRef}>
                <Contact
                  setPortfolio={setPortfolio}
                  data={data}
                  mode={mode}
                  theme={theme}
                  template={template}
                />
              </div>
            </>
          )}

          <Divider mode={mode} theme={theme} template={template} />
          <PortFooter
            setPortfolio={setPortfolio}
            data={data}
            mode={mode}
            theme={theme}
            template={template}
          />
        </div>
      ) : null}

      {template === `TWO` ? (
        <div
          className={
            mode === "PREVIEW"
              ? `templateTwoNoPad ${data.font}`
              : `templateTwo ${data.font}`
          }
        >
          <PortNavbar
            data={data}
            setPortfolio={setPortfolio}
            mode={mode}
            theme={theme}
            template={template}
            scrollToSection={scrollToSection}
            aboutRef={aboutRef}
            contactRef={contactRef}
          />
          {data.scroll ? <ScrollToTop data={data} /> : null}
          <Banner
            setPortfolio={setPortfolio}
            data={data}
            mode={mode}
            theme={theme}
            template={template}
          />
          {mode == `PREVIEW` &&
          (data?.about?.length === 0 || !data.about) ? null : (
            <>
              {" "}
              <Divider mode={mode} theme={theme} template={template} />
              <div ref={aboutRef}>
                <About
                  setPortfolio={setPortfolio}
                  data={data}
                  mode={mode}
                  theme={theme}
                  template={template}
                />
              </div>
            </>
          )}

          {mode === `PREVIEW` && data.skills?.length === 0 ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <Skills
                setPortfolio={setPortfolio}
                data={data}
                mode={mode}
                theme={theme}
                template={template}
              />
            </>
          )}

          {mode === `PREVIEW` && data.softSkills?.length === 0 ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <SoftSkills
                setPortfolio={setPortfolio}
                data={data}
                mode={mode}
                theme={theme}
                template={template}
              />
            </>
          )}

          {mode === `PREVIEW` && data.hobbies?.length === 0 ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <Hobbies
                setPortfolio={setPortfolio}
                data={data}
                mode={mode}
                theme={theme}
                template={template}
              />
            </>
          )}
          {mode === `PREVIEW` && data.education?.length === 0 ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <Education
                setPortfolio={setPortfolio}
                data={data}
                mode={mode}
                theme={theme}
                template={template}
              />
            </>
          )}

          {mode === `PREVIEW` && data.workExperience?.length === 0 ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <WorkExperience
                setPortfolio={setPortfolio}
                data={data}
                mode={mode}
                theme={theme}
                template={template}
              />
            </>
          )}

          {mode === `PREVIEW` && allEmpty ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <div ref={contactRef}>
                <Contact
                  setPortfolio={setPortfolio}
                  data={data}
                  mode={mode}
                  theme={theme}
                  template={template}
                />
              </div>
            </>
          )}
          <Divider mode={mode} theme={theme} template={template} />
          <PortFooter
            setPortfolio={setPortfolio}
            data={data}
            mode={mode}
            theme={theme}
            template={template}
          />
        </div>
      ) : null}

      {template === `THREE` ? (
        <div
          className={
            mode === "PREVIEW"
              ? `templateThreeNoPad ${data.font}`
              : `templateThree ${data.font}`
          }
        >
          <PortNavbar
            data={data}
            setPortfolio={setPortfolio}
            mode={mode}
            theme={theme}
            template={template}
            scrollToSection={scrollToSection}
            aboutRef={aboutRef}
            contactRef={contactRef}
          />
          {data.scroll ? <ScrollToTop data={data} /> : null}
          <Banner
            setPortfolio={setPortfolio}
            data={data}
            mode={mode}
            theme={theme}
            template={template}
          />
          {mode == `PREVIEW` &&
          (data?.about?.length === 0 || !data.about) ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <div ref={aboutRef}>
                <About
                  setPortfolio={setPortfolio}
                  data={data}
                  mode={mode}
                  theme={theme}
                  template={template}
                />
              </div>
            </>
          )}

          {mode === `PREVIEW` && data.skills?.length === 0 ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <Skills
                setPortfolio={setPortfolio}
                data={data}
                mode={mode}
                theme={theme}
                template={template}
              />
            </>
          )}

          {mode === `PREVIEW` && data.softSkills?.length === 0 ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <SoftSkills
                setPortfolio={setPortfolio}
                data={data}
                mode={mode}
                theme={theme}
                template={template}
              />
            </>
          )}

          {mode === `PREVIEW` && data.hobbies?.length === 0 ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <Hobbies
                setPortfolio={setPortfolio}
                data={data}
                mode={mode}
                theme={theme}
                template={template}
              />
            </>
          )}
          {mode === `PREVIEW` && data.education?.length === 0 ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <Education
                setPortfolio={setPortfolio}
                data={data}
                mode={mode}
                theme={theme}
                template={template}
              />
            </>
          )}

          {mode === `PREVIEW` && data.workExperience?.length === 0 ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <WorkExperience
                setPortfolio={setPortfolio}
                data={data}
                mode={mode}
                theme={theme}
                template={template}
              />
            </>
          )}

          {mode === `PREVIEW` && allEmpty ? null : (
            <>
              <Divider mode={mode} theme={theme} template={template} />
              <div ref={contactRef}>
                <Contact
                  setPortfolio={setPortfolio}
                  data={data}
                  mode={mode}
                  theme={theme}
                  template={template}
                />
              </div>
            </>
          )}
          <Divider mode={mode} theme={theme} template={template} />
          <PortFooter
            setPortfolio={setPortfolio}
            data={data}
            mode={mode}
            theme={theme}
            template={template}
          />
        </div>
      ) : null}

      {/* Add similar structure for template TWO and THREE */}
    </>
  );
};

export default Template;
