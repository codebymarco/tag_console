import { Link } from "react-router-dom";
import "../styles/pages/home.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-heading">TAG MANAGER</h1>
      <p className="home-para">tag loader for your website</p>
      <div className="home-con">
        <Link className="home-link" to="/login">
          get started
        </Link>
      </div>
    </div>
  );
};

export default Home;
