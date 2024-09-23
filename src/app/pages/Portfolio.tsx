import { useEffect, useState } from "react";
import "../styles/pages/portfolio.css";
import Banners from "../components/Banners";
import Fonts from "../components/Fonts";
import EditModalMobile from "../components/EditModalMobile";
import ConfirmPublish from "../components/dialogs/ConfirmPublish";
import EditScrollToTop from "../components/EditScrollToTop";
import { MdEdit } from "react-icons/md";
import ConfirmReset from "../components/dialogs/ConfirmReset";
import { Link } from "react-router-dom";
import { FaUserNinja } from "react-icons/fa";
import useAuthenticatedGetRequest from "../hooks/useGetData";
import { useStore } from "../store/store";
import { defaultPortfolio, portfolio } from "../helpers/helpers";
import Template from "../components/Template";
import { usePublishNoPhoto } from "../hooks/usePublishNoPhoto";
import { usePublishPhoto } from "../hooks/usePublishPhoto";
import { api } from "../api/api";

const Portfolio = () => {
  const { user } = useStore();

  const { data, refetch } = useAuthenticatedGetRequest(
    `${api}/api/projects/${user.user._id}`,
    user.token
  );

  const [portfolio, setPortfolio] = useState<portfolio>(defaultPortfolio);
  const [portfolio2, setPortfolio2] = useState<portfolio>(defaultPortfolio);

  useEffect(() => {
    if (data) {
      setPortfolio(data);
      setPortfolio2(data);
    }
  }, [data]);

  const [mode, setMode] = useState(`EDIT`); // EDIT || PREVIEW
  const [isEqual, setIsEqual] = useState(true);

  const [banners, setBanners] = useState(false);
  const [fonts, setFonts] = useState(false);
  const [publish, setPublish] = useState(false);
  const [reset, setReset] = useState(false);
  const [scrollComp, setScrollComp] = useState(false);

  const [banner, setBanner] = useState(`1`);

  const theme = `light`;

  const [showEditBarMobile, setShowEditBarMobile] = useState(false);

  // reset
  const revert = () => {
    console.log(`revert portfolio`);
    setPortfolio(JSON.parse(localStorage.getItem("portfolio") || ""));
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };

  const { postdata } = usePublishNoPhoto();
  const { postdata2 } = usePublishPhoto();

  // publish
  const pub = async () => {
    console.log(`publishing portfolio`);
    console.log(`portoflio original`, portfolio2);
    console.log(`portoflio`, portfolio);

    const newData: any = { ...portfolio };
    if (newData.photo2) {
      newData.photo = newData.photo2;
    }
    newData.photo2 = null;
    if (newData.photo === portfolio2.photo) {
      console.log(`portoflio original`, portfolio2);
      console.log(`portoflio`, portfolio);
      // no new photo
      // update just the other details
      await postdata(portfolio);
      setIsEqual(true);
      setMode(`PREVIEW`);
      window.scrollTo({
        top: 0,
        behavior: "smooth", // For smooth scrolling
      });
      refetch();
    } else {
      // add the photo in
      console.log(`portoflio original`, portfolio2);
      console.log(`portoflio`, portfolio);
      await postdata2(portfolio.photo!, newData);
      setIsEqual(true);
      setMode(`PREVIEW`);
      window.scrollTo({
        top: 0,
        behavior: "smooth", // For smooth scrolling
      });
      refetch();
    }
  };

  //update functions
  // update font
  const updateFont = (font: string) => {
    setPortfolio((prevPortfolio: any) => ({
      ...prevPortfolio,
      font: font,
    }));
  };

  // check for changes
  const areObjectsEqual = (obj1: any, obj2: any) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  };

  useEffect(() => {
    setIsEqual(areObjectsEqual(portfolio2, portfolio));
  }, [portfolio]);

  return (
    <div className="portfolio">
      {publish ? (
        <ConfirmPublish pub={pub} onCancel={() => setPublish(false)} />
      ) : null}
      {reset ? (
        <ConfirmReset revert={revert} onCancel={() => setReset(false)} />
      ) : null}

      {scrollComp ? (
        <EditScrollToTop
          setPortfolio={setPortfolio}
          data={portfolio}
          onCancel={() => setScrollComp(false)}
        />
      ) : null}

      {showEditBarMobile ? (
        <EditModalMobile
          revert={revert}
          setPortfolio={setPortfolio}
          data={portfolio}
          pub={pub}
          onCancel={() => setShowEditBarMobile(false)}
        />
      ) : null}

      {fonts ? (
        <Fonts
          updateFont={updateFont}
          template={portfolio.font!}
          onCancel={() => setFonts(false)}
        />
      ) : null}

      {banners ? (
        <Banners
          onCancel={() => setBanners(false)}
          setBanner={setBanner}
          banner={banner}
        />
      ) : null}

      <div className="portfolio-navbar">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "20px",
          }}
        >
          <Link to={`/console/${user.user._id}`}>
            <FaUserNinja />
          </Link>
        </div>

        <div
          className="portfolio-navbar-container"
          id="portfolio-navbar-container"
        >
          <div className="portfolio-navbar-container-content">
            {/* todo: make this its own component called publish and place the publish dialog in here */}
            {!isEqual ? (
              <button onClick={() => setPublish(true)}>publish</button>
            ) : null}

            {mode === `EDIT` ? (
              <>
                {" "}
                {!isEqual ? (
                  <button onClick={() => setReset(true)}>reset</button>
                ) : null}
                <button onClick={() => setScrollComp(true)}>scroll</button>
                <button onClick={() => setFonts(true)}>fonts</button>
                <button onClick={() => setMode(`PREVIEW`)}>preview</button>
              </>
            ) : null}

            {mode === "PREVIEW" ? (
              <MdEdit className="edit-icon" onClick={() => setMode(`EDIT`)} />
            ) : null}
          </div>
        </div>

        {/* show these on mobile */}
        <div className="nav2">
          <button className="preview" onClick={() => setMode(`PREVIEW`)}>
            preview
          </button>
          {!isEqual ? (
            <button className="publish" onClick={() => setPublish(true)}>
              publish
            </button>
          ) : null}
          {mode === "PREVIEW" ? (
            <MdEdit className="edit-icon" onClick={() => setMode(`EDIT`)} />
          ) : null}
          {mode === "PREVIEW" ? null : (
            <button
              className="publish"
              onClick={() => setShowEditBarMobile(true)}
              id="portfolio-navbar-container-mobile-button"
            >
              more
            </button>
          )}
        </div>
      </div>

      {/* put the templates here */}

      {/* create a component for this as well called RENDERTEMPLATES */}
      {portfolio.template === `ONE` ? (
        <Template
          setPortfolio={setPortfolio}
          data={portfolio}
          font={portfolio.font!}
          mode={mode}
          theme={theme}
          template={portfolio.template}
        />
      ) : null}

      {portfolio.template === `TWO` ? (
        <Template
          setPortfolio={setPortfolio}
          data={portfolio}
          font={portfolio.font!}
          mode={mode}
          theme={theme}
          template={portfolio.template}
        />
      ) : null}

      {portfolio.template === `THREE` ? (
        <Template
          setPortfolio={setPortfolio}
          data={portfolio}
          font={portfolio.font!}
          mode={mode}
          theme={theme}
          template={portfolio.template}
        />
      ) : null}
    </div>
  );
};

export default Portfolio;
