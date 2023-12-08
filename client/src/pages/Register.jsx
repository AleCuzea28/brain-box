import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow } from "../components";
import main2 from "../assets/images/main2.png";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <img src={main2} alt="brain box logo" className="main2" />
        <h4>Register</h4>
        <FormRow type="text" name="name" />
        <FormRow type="text" name="lastName" labelText="Last Name" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>

      <Link to="/login">Login page</Link>
    </Wrapper>
  );
};
export default Register;
