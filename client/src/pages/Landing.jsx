import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
import main from "../assets/images/main.png";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo logoClassName="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            <span>Quiz Your Way</span> <br></br>To Mental Fitness
          </h1>
          <p>
            Hi and welcome to Brain Box, your personal trainer for building
            those brain muscles. Let's workout together so we can develop new
            skills everyday.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
