const Select = ({ itemPicked, verdict, toggler, str }) => {
  return (
    <div>
      <div className="flex justify-center items-center mt-[78px] mb-16 md:mb-36 gap-16">
        <div className="flex flex-col justify-center items-center gap-5">
          <div
            className="bg-white w-24 h-24 md:w-48 md:h-48 border-gray-200 border-[10px] rounded-full flex justify-center items-center shadow-md shadow-gray-500"
            style={
              itemPicked ===
              "http://localhost:3000/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg"
                ? { border: "15px solid hsl(230, 89%, 65%)" }
                : itemPicked ===
                  "http://localhost:3000/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg"
                ? { border: "15px solid hsl(40, 84%, 53%)" }
                : itemPicked ===
                  "http://localhost:3000/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg"
                ? { border: "15px solid hsl(349, 70%, 56%)" }
                : null
            }
          >
            <img src={itemPicked} alt="paper" className="h-10 md:h-20" />
          </div>
          <p className="text-white">YOU PICKED</p>
        </div>

        <div className="md:flex justify-center flex-col items-center mb-8 gap-5 hidden">
          <p className="text-white font-bold text-4xl">{verdict}</p>
          <button
            className="bg-white px-8 py-2 text-radical-gradient-from font-medium rounded-md"
            onClick={toggler}
          >
            PLAY AGAIN
          </button>
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          <div
            className="bg-white w-24 h-24 md:w-48 md:h-48 border-gray-200 border-[10px] rounded-full flex justify-center items-center shadow-md shadow-gray-500"
            style={
              str ===
              "http://localhost:3000/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg"
                ? { border: "15px solid hsl(230, 89%, 65%)" }
                : str ===
                  "http://localhost:3000/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg"
                ? { border: "15px solid hsl(40, 84%, 53%)" }
                : str ===
                  "http://localhost:3000/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg"
                ? { border: "15px solid hsl(349, 70%, 56%)" }
                : null
            }
          >
            <img src={str} alt="paper" className="h-10 md:h-20" />
          </div>
          <p className="text-white">THE HOUSE PICKED</p>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center mb-8 gap-5 md:hidden">
        <p className="text-white font-bold text-5xl">{verdict}</p>
        <button
          className="bg-white px-10 py-3 text-radical-gradient-from font-medium rounded-md md:hover:text-rock-gradient-from"
          onClick={toggler}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
};

export default Select;
