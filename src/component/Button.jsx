

const Button = ({toggleRules}) => {


    return ( <div className="flex justify-center items-center mb-5 ">
    <button className="text-white border px-6 py-1 rounded-md text-sm" onClick={toggleRules}>
        RULES
    </button>
    </div> );
}
 
export default Button;