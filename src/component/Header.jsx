import logo from "../assets/images/logo.svg";

const Header = ({ score }) => {
  return (
    <div className="mx-6 pt-6 pb-3 md:flex md:justify-center md:items-center">
      <div className="border-[3px] rounded-md  border-gray-500 h-full p-3 flex justify-between items-center  md:w-1/2">
        <div className="ml-2">
          <img src={logo} alt="logo" className="h-[50px] md:h-[70px]" />
        </div>

        <div className="bg-white p-2 rounded-md text-center w-[60px] md:h-[70px] md:w-[80px]">
          <p className="text-score-text text-[9px]">SCORE</p>
          <p className="text-radical-gradient-from text-2xl font-extrabold md:text-4xl">
            {score}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
