import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";


const Select = ({itemPicked}) => {
    const arr = ['http://localhost:3000/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg', 'http://localhost:3000/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg', 'http://localhost:3000/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg'];

    function getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
      
        return shuffled.slice(0, num);
      }

      let str = getMultipleRandom(arr, 1).toString()
    
      console.log(str);

    return ( <div className="flex justify-center items-center mt-24 mb-48 gap-16">
    <div className="flex flex-col justify-center items-center gap-5">
    <div className="bg-white w-24 h-24 border-gray-200 border-[10px] rounded-full flex justify-center items-center shadow-sm shadow-rock-gradient-to drop-shadow-md">
        <img src={itemPicked} alt="paper" className="h-10"/>
        </div>
        <p className="text-white">YOU PICKED</p>
    </div>

    <div className="flex flex-col justify-center items-center gap-5">
    <div className="bg-white w-24 h-24 border-gray-200 border-[10px] rounded-full flex justify-center items-center shadow-sm shadow-rock-gradient-to drop-shadow-md">
        <img src={str} alt="paper" className="h-10"/>
        </div>
        <p className="text-white">THE HOUSE PICKED</p>
    </div>
    </div> );
}
  
export default Select;