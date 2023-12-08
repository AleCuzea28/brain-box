import logo from "../assets/images/logo.png";

const Logo = ({ logoClassName }) => {
  return (
    <div>
      <img src={logo} alt="logo for brain box" className={logoClassName} />
    </div>
  );
};
export default Logo;
