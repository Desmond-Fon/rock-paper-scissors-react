const Select = ({itemPicked, verdict, toggler, str,}) => {


    return ( <div>
        <div className="flex justify-center items-center mt-[94px] mb-16 gap-16">
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
    </div>
    <div className="flex justify-center flex-col items-center mb-10 gap-5">
        <p className="text-white font-bold text-5xl">{verdict}</p>
    <button className="bg-white px-10 py-3 text-radical-gradient-from font-medium rounded-md" onClick={toggler}>PLAY AGAIN</button>
    </div>
    </div> );
}
  
export default Select;