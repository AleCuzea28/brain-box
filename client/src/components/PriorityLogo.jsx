import main2 from "../assets/images/main2.png";

const PriorityLogo = ({ logoClassName }) => {
  return (
    <div>
      <img
        src={main2}
        alt="priority logo for brain box"
        className={logoClassName}
      />
    </div>
  );
};
export default PriorityLogo;
