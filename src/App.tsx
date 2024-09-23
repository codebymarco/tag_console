import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./app/router/Router2";

const App: React.FC = () => {
  const routing = useRoutes(routes);
  return <div>{routing}</div>;

  return (
    <div className="coming-soon">
      <h1>COMING SOON</h1>
    </div>
  );
};

export default App;
