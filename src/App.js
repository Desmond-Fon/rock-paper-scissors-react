import { useState } from "react";
// import Button from './component/Button';
import Rules from "./component/Rules";
import Home from "./page/Home";

function App() {
  const [showRules, setShowRules] = useState(false);
  const [selectSection, setSelectSection] = useState(false);
  const [itemPicked, setItemPicked] = useState("");
  const [score, setScore] = useState(0);

  const toggleRules = () => setShowRules((value) => !value);

  const toggleSelectSection = (e) => {
    const el = e.target;
    console.log(el);
    setItemPicked(el.src);
    setSelectSection((value) => !value);
  };

  console.log(setItemPicked)


  return (
    <div>
      {showRules ? (
        <Rules toggleRules={toggleRules} />
      ) : (
        <Home
          toggleRules={toggleRules}
          score={score}
          toggleSelectSection={toggleSelectSection}
          selectSection={selectSection}
          itemPicked={itemPicked}
        />
      )}
      {/* <Home /> */}
      {/* <Rules /> */}
      {/* <Button toggleRules = {toggleRules}/> */}
    </div>
  );
}

export default App;
