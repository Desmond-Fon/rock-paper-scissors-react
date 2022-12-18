import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import triangle from "../assets/images/bg-triangle.svg"

const Index = ({toggleSelectSection}) => {
    return ( <div className="flex flex-col justify-center items-center mt-32 mb-44">
    <img src={triangle} alt="" className="h-36"/>
    <div className="flex justify-center items-center flex-col gap-10 absolute">
        <div className="flex justify-center items-center gap-10">
        <div className="bg-white w-24 h-24 border-paper-gradient-from border-[10px] rounded-full flex justify-center items-center shadow-sm shadow-paper-gradient-to drop-shadow-md" onClick={toggleSelectSection}> 
        <img src={paper} alt="paper" className="h-12"/>
        </div>
        <div className="bg-white w-24 h-24 border-scissors-gradient-from border-[10px] rounded-full flex justify-center items-center shadow-sm shadow-scissors-gradient-to drop-shadow-md" onClick={toggleSelectSection}>
        <img src={scissors} alt="scissors" className="h-12"/>
        </div>
        </div>
        <div className="bg-white w-24 h-24 border-rock-gradient-from border-[10px] rounded-full flex justify-center items-center shadow-sm shadow-rock-gradient-to drop-shadow-md" onClick={toggleSelectSection}>
        <img src={rock} alt="rock" className="h-10"/>
        </div>
    </div>
    </div> );
}
 
export default Index;


// http://localhost:3000/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg paper
// http://localhost:3000/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg scissors
// http://localhost:3000/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg rock