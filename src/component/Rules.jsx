import rules from "../assets/images/image-rules.svg";
import close from "../assets/images/icon-close.svg"

const Rules = ({toggleRules}) => {
    return ( <div className="flex flex-col justify-around items-center mt-20">
    <h1 className="text-radical-gradient-from text-2xl font-extrabold pb-20" >RULES</h1>
    <img src={rules} alt="rules" className="pb-28"/>
    <img src={close} alt="close" onClick={toggleRules}/>
    </div> );
}
 
export default Rules;