import { useEffect, useState } from "react";
import "../styles/pages/portfolio.css";
import { defaultPortfolio, portfolio } from "../helpers/helpers";
import Template from "../components/Template";
import useGetPublic from "../hooks/useGetDataPublic";
import { useParams } from "react-router-dom";
import { api } from "../api/api";

const Client = () => {
  const { username } = useParams();

  const { data } = useGetPublic(`${api}/portfolio/${username}`);

  const [portfolio, setPortfolio] = useState<portfolio>(defaultPortfolio);

  useEffect(() => {
    if (data) {
      setPortfolio(data);
    }
  }, [data]);

  const mode = `PREVIEW`;
  const theme = `light2`;

  return (
    <div className="portfolio">
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

export default Client;
