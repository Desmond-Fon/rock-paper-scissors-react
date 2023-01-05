import { useState } from "react";
import Rules from "./component/Rules";
import Home from "./page/Home";

function App() {
  const [showRules, setShowRules] = useState(false);
  const [selectSection, setSelectSection] = useState(false);
  const [itemPicked, setItemPicked] = useState("");
  const [score, setScore] = useState(0);
  const [verdict, setVerdict] = useState("");
  const arr = [
    "https://desmond-fon.github.io/rock-paper-scissors-react/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg",
    "https://desmond-fon.github.io/rock-paper-scissors-react/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg",
    "https://desmond-fon.github.io/rock-paper-scissors-react/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg",
  ];
  let pickedItem = arr[Math.floor(Math.random() * arr.length)];
  const [str, setStr] = useState(pickedItem);
  const toggleRules = () => setShowRules((value) => !value);

  const toggleSelectSection = (e) => {
    let el = e.target;
    setStr(pickedItem);
    setItemPicked(el.src);
    setSelectSection(true);
    // console.log(el)
    console.log(el.src)
    // console.log(pickedItem);
    // console.log(str)

    
    if (
      (el.src ===
        "https://desmond-fon.github.io/rock-paper-scissors-react/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg" &&
        pickedItem ===
          "https://desmond-fon.github.io/rock-paper-scissors-react/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg") ||
      (el.src ===
        "https://desmond-fon.github.io/rock-paper-scissors-react/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg" &&
        pickedItem ===
          "https://desmond-fon.github.io/rock-paper-scissors-react/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg") ||
      (el.src ===
        "https://desmond-fon.github.io/rock-paper-scissors-react/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg" &&
        pickedItem ===
          "https://desmond-fon.github.io/rock-paper-scissors-react/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg")
    ) {
      // console.log("you win");
      setVerdict("YOU WIN");
      setScore((prevActiveStep) => prevActiveStep + 1);
    } else if (
      (el.src ===
        "https://desmond-fon.github.io/rock-paper-scissors-react/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg" &&
        pickedItem ===
          "https://desmond-fon.github.io/rock-paper-scissors-react/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg") ||
      (el.src ===
        "https://desmond-fon.github.io/rock-paper-scissors-react/static/media/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg" &&
        pickedItem ===
          "https://desmond-fon.github.io/rock-paper-scissors-react/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg") ||
      (el.src ===
        "https://desmond-fon.github.io/rock-paper-scissors-react/static/media/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg" &&
        pickedItem ===
          "https://desmond-fon.github.io/rock-paper-scissors-react/static/media/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg")
    ) {
      if (score > 0) {
        setScore((prevActiveStep) => prevActiveStep - 1);
      }
      setVerdict("YOU LOSE");
      // console.log("you lose!");
    } else {
      // console.log("draw");
      setVerdict("IT'S A DRAW");
    }
  };

  const toggler = () => {
    setSelectSection(false);
  };

  return (
    <div className="font-barlow">
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
          str={str}
          verdict={verdict}
        />
      )}
    </div>
  );
}

export default App;
