import React, { useEffect, useState } from "react";
import NameTag from "./NameTag.js";
import UserInput from "./UserInput.js";
//updated with Hooks instead of class components
const App = () => {
  // The default list of names will only show when there is nothing
  // in the localStorage
  const [names, setNames] = useState(
    JSON.parse(localStorage.getItem("names")) || [
      "Jody",
      "Caleb",
      "Violette",
      "Isaac",
      "Everett"
    ]
  );

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  ///the removeName method is calling State//
  const removeName = (clickedIndex) => {
    const newNames = names.filter((_, index) => index !== clickedIndex);
    setNames(newNames);
  };

  //method that will add a new name to the names array in state//
  const addName = (name) => {
    //we are updating our names property of state to include the new name//
    //has to be an array bc names is an array//
    //the new name shows up first and then ... spreads out the remaining names//
    setNames([name, ...names]);
  };

  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      <UserInput addName={addName} />
      {names.map((name, index) => (
        <NameTag
          key={index}
          index={index}
          name={name}
          removeName={removeName}
        />
      ))}
    </div>
  );
};

export default App;
