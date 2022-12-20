const Select = ({ itemPicked, verdict, toggler, str }) => {
  return (
    <div>
      <div className="flex justify-center items-center mt-[94px] mb-16 gap-16">
        <div className="flex flex-col justify-center items-center gap-5">
          <div
            className="bg-white w-24 h-24 border-gray-200 border-[10px] rounded-full flex justify-center items-center shadow-md shadow-gray-500"
            style={
              itemPicked ===
              "http://localhost:3000/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg"
                ? { border: "10px solid hsl(230, 89%, 65%)" }
                : itemPicked ===
                  "http://localhost:3000/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg"
                ? { border: "10px solid hsl(40, 84%, 53%)" }
                : itemPicked ===
                  "http://localhost:3000/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg"
                ? { border: "10px solid hsl(349, 70%, 56%)" }
                : null
            }
          >
            <img src={itemPicked} alt="paper" className="h-10" />
          </div>
          <p className="text-white">YOU PICKED</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
          <div
            className="bg-white w-24 h-24 border-gray-200 border-[10px] rounded-full flex justify-center items-center shadow-md shadow-gray-500"
            style={
              str ===
              "http://localhost:3000/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg"
                ? { border: "10px solid hsl(230, 89%, 65%)" }
                : str ===
                  "http://localhost:3000/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg"
                ? { border: "10px solid hsl(40, 84%, 53%)" }
                : str ===
                  "http://localhost:3000/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg"
                ? { border: "10px solid hsl(349, 70%, 56%)" }
                : null
            }
          >
            <img src={str} alt="paper" className="h-10" />
          </div>
          <p className="text-white">THE HOUSE PICKED</p>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center mb-10 gap-5">
        <p className="text-white font-bold text-5xl">{verdict}</p>
        <button
          className="bg-white px-10 py-3 text-radical-gradient-from font-medium rounded-md"
          onClick={toggler}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
};

export default Select;
