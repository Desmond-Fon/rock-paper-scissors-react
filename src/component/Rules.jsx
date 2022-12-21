import rules from "../assets/images/image-rules.svg";
import close from "../assets/images/icon-close.svg";

const Rules = ({ toggleRules }) => {
  return (
    <div className="md:flex md:justify-center md:items-center">
      <div className="flex flex-col justify-around items-center mt-20 md:hidden">
        <h1 className="text-radical-gradient-from text-2xl font-extrabold pb-20">
          RULES
        </h1>
        <img src={rules} alt="rules" className="pb-28" />
        <img src={close} alt="close" onClick={toggleRules} />
      </div>

      <div className="md:flex flex-col justify-between items-center mt-20 hidden w-1/4 h-1/2 p-7">
        <div className="flex justify-between items-center mb-10 w-full">
          <h1 className="text-radical-gradient-from text-2xl font-extrabold ">
            RULES
          </h1>
          <div>
            <img src={close} alt="close" onClick={toggleRules} />
          </div>
        </div>
        <img src={rules} alt="rules" className="pb-28" />
      </div>
    </div>
  );
};

export default Rules;
