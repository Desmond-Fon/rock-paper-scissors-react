import Button from "../component/Button";
import Header from "../component/Header";
import Index from "../component/Index";
import Select from "../component/Select";

const Home = ({
  toggleRules,
  score,
  selectSection,
  toggleSelectSection,
  itemPicked,
  str,
  toggler,
  verdict,
}) => {
  return (
    <div className="bg-gradient-to-b from-radical-gradient-from to-radical-gradient-to h-screen">
      <Header score={score} />
      {selectSection ? (
        <Select
          itemPicked={itemPicked}
          toggleSelectSection={toggleSelectSection}
          str={str}
          toggler={toggler}
          verdict={verdict}
        />
      ) : (
        <Index toggleSelectSection={toggleSelectSection} />
      )}

      <Button toggleRules={toggleRules} />
    </div>
  );
};

export default Home;
