import { Link } from "react-router-dom";
import "../../styles/sections/BannerMain.css";
import Section from "../Section";

interface TemplateProps {
  mode: string;
  theme: string;
}

const Navbar: React.FC<TemplateProps> = ({ mode, theme }) => {


  return (
    <Section
      id={`ddd`}
      mode={mode === `EDIT` ? true : false}
      is_hidden={false}
      name={`navbar main`}
      type={`center`}
      theme={theme}
    >
      <div className="bannerMain">
        <p>navbar main</p>
        <div>
          <Link to='/'>link1</Link>
          <Link to='/'>link2</Link>
          <Link to='/'>link3</Link>
        </div>
      </div>
    </Section>
  );
};

export default Navbar;