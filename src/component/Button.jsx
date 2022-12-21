const Button = ({ toggleRules }) => {
  return (
    <div className="flex justify-center md:justify-end md:mr-5  items-center mb-4 ">
      <button
        className="text-white border px-6 py-1 rounded-md text-sm md:tracking-wider"
        onClick={toggleRules}
      >
        RULES
      </button>
    </div>
  );
};

export default Button;
