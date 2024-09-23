import { useState } from "react";
import "../../styles/sections/contact.css";
import Section from "../Section";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook, CiInstagram, CiLinkedin, CiWarning } from "react-icons/ci";
import { PiTiktokLogoLight } from "react-icons/pi";
import EditContact from "../EditContact";
import { portfolio } from "../../helpers/helpers";

interface TemplateProps {
  mode: string;
  theme: string;
  template: string;
  setPortfolio: any;
  data: portfolio;
}

const Contact: React.FC<TemplateProps> = ({
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
      links: font,
    }));
  };

  const GoTo = (url: string) => {
    window.open(url, "_blank");
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
        <EditContact
          value={data.links! || []}
          updateSkills={updateSkills}
          sectionName="skkjs"
          onCancel={() => setShow(false)}
        />
      ) : null}

      {template === `ONE` || template === `TWO` ? (
        <div className="contact">
          <h1 className="skills-heading">CONTACT</h1>
          <div className="contact-container">
            {data.links && data.links[0]?.value !== `` ? (
              <div className="contact-box">
                <HiOutlineMail />
                <p>{data.links[0]?.value}</p>
              </div>
            ) : null}

            {data.links && data.links[1]?.value !== `` ? (
              <div className="contact-box">
                <IoCallOutline />
                <p>{data.links[1]?.value}</p>
              </div>
            ) : null}

            {data.links && data.links[2]?.value !== `` ? (
              <div className="contact-box">
                <FaWhatsapp />
                <p>{data.links[2]?.value}</p>
              </div>
            ) : null}

            <div className="contact-box-icons">
              {data.links && data.links[3]?.value !== `` ? (
                <CiFacebook
                  onClick={() => GoTo(data.links ? data.links[3]?.value : "")}
                />
              ) : null}

              {data.links && data.links[4]?.value !== `` ? (
                <CiInstagram
                  onClick={() => GoTo(data.links ? data.links[4]?.value : "")}
                />
              ) : null}

              {data.links && data.links[5]?.value !== `` ? (
                <CiLinkedin
                  onClick={() => GoTo(data.links ? data.links[5]?.value : "")}
                />
              ) : null}

              {data.links && data.links[6]?.value !== `` ? (
                <PiTiktokLogoLight
                  onClick={() => GoTo(data.links ? data.links[6]?.value : "")}
                />
              ) : null}
            </div>
            {allEmpty ? (
              <div className="nothing">
                <p>all values are empty</p>
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
        <div className="contact-three">
          <h1 className="skills-heading">CONTACT</h1>
          <div className="contact-container">
            {data.links && data.links[0]?.value !== `` ? (
              <div className="contact-box">
                <HiOutlineMail />
                <p>{data.links[0]?.value}</p>
              </div>
            ) : null}

            {data.links && data.links[1]?.value !== `` ? (
              <div className="contact-box">
                <IoCallOutline />
                <p>{data.links[1]?.value}</p>
              </div>
            ) : null}

            {data.links && data.links[2]?.value !== `` ? (
              <div className="contact-box">
                <FaWhatsapp />
                <p>{data.links[2]?.value}</p>
              </div>
            ) : null}

            <div className="contact-box-icons">
              {data.links && data.links[3]?.value !== `` ? (
                <CiFacebook
                  onClick={() => GoTo(data.links ? data.links[3]?.value : "")}
                />
              ) : null}

              {data.links && data.links[4]?.value !== `` ? (
                <CiInstagram
                  onClick={() => GoTo(data.links ? data.links[4]?.value : "")}
                />
              ) : null}

              {data.links && data.links[5]?.value !== `` ? (
                <CiLinkedin
                  onClick={() => GoTo(data.links ? data.links[5]?.value : "")}
                />
              ) : null}

              {data.links && data.links[6]?.value !== `` ? (
                <PiTiktokLogoLight
                  onClick={() => GoTo(data.links ? data.links[6]?.value : "")}
                />
              ) : null}
            </div>
            {allEmpty ? (
              <div className="nothing">
                <p>all values are empty</p>
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

export default Contact;
