import { useState } from "react";
// import Button from './component/Button';
import Rules from "./component/Rules";
import Home from "./page/Home";

function App() {
  const [showRules, setShowRules] = useState(false);
  const [selectSection, setSelectSection] = useState(false);
  const [itemPicked, setItemPicked] = useState("");
  const [score, setScore] = useState(0);

  const arr = [
    "http://localhost:3000/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg",
    "http://localhost:3000/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg",
    "http://localhost:3000/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg",
  ];
  let str = arr[Math.floor(Math.random() * arr.length)]
  // function getMultipleRandom(arr, num) {
  //   const shuffled = [...arr].sort(() => 0.5 - Math.random());

  //   return shuffled.slice(0, num);
  // }

  // let str = getMultipleRandom(arr, 1).toString();

  console.log(str);
  // // console.log(setItemPicked);

  const toggleRules = () => setShowRules((value) => !value);

  let el;

  const toggleSelectSection = (e) => {
    el = e.target;
    console.log(el.src);
    console.log(str);
    setItemPicked(el.src);
    setSelectSection(true);

    if (
      (el.src ===
        "http://localhost:3000/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg" &&
        str ===
          "http://localhost:3000/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg") ||
      (el.src ===
        "http://localhost:3000/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg" &&
        str ===
          "http://localhost:3000/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg") ||
      (el.str ===
        "http://localhost:3000/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg" &&
        str === "http://localhost:3000/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg")
    ) {
      console.log("you win!");
      setScore (prevActiveStep => prevActiveStep + 1);
    } else if (
      (el.src ===
        "http://localhost:3000/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg" &&
        str ===
          "http://localhost:3000/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg") ||
      (el.src ===
        "http://localhost:3000/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg" &&
        str ===
          "http://localhost:3000/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg") ||
      (el.src ===
        "http://localhost:3000/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg" &&
        str === "http://localhost:3000/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg")
    ) {
      if (score > 0){
        setScore (prevActiveStep => prevActiveStep - 1);
      }
      console.log("you lose!");
    } else {
      console.log("draw");
    }
  };
  // console.log(el)

  const toggler = () => {
    setSelectSection(false);
  }

  return (
    <div>
      {showRules ? (
        <Rules toggleRules={toggleRules} />
      ) : (
        <Home
          toggleRules={toggleRules}
          score={score}
          toggleSelectSection={toggleSelectSection}
          toggler={toggler}
          selectSection={selectSection}
          itemPicked={itemPicked}
          setItemPicked={el}
          str={str}
        />
      )}
      {/* <Home /> */}
      {/* <Rules /> */}
      {/* <Button toggleRules = {toggleRules}/> */}
    </div>
  );
}

export default App;
