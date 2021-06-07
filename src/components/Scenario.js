import React, { useState } from "react";
import data from "../data/scenario-info.json";

function renderScenario(scenario, setsceneNumber, diceRoll) {
  return (
    <div>
      <div className="tooltiptext"> {scenario.description} </div>
      <img className="imageStyles" src={scenario.image} />
      <div>
        {scenario.key === "death" || scenario.key === "battle" ? (
          <button className="buttonStyles" onClick={() => diceRoll("A")}>
            {" "}
            {scenario.optionA}{" "}
          </button>
        ) : (
          <div>
            <button className="buttonStyles" onClick={() => diceRoll("A")}>
              {" "}
              {scenario.optionA}{" "}
            </button>
            <button className="buttonStyles" onClick={() => diceRoll("B")}>
              {" "}
              {scenario.optionB}{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Scenario() {
  const [sceneNumber, setsceneNumber] = useState(0);
  function diceRoll(optionPicked) {
    let rollNum = Math.floor(Math.random() * 2);
    if (rollNum % 2 === 0) {
      let evenoption = `option${optionPicked}_even`;
      setsceneNumber(data[sceneNumber][evenoption]);
    } else {
      let oddoption = `option${optionPicked}_odd`;
      setsceneNumber(data[sceneNumber][oddoption]);
    }
  }
  return (
    <div className="container">
      {renderScenario(data[sceneNumber], setsceneNumber, diceRoll)}
    </div>
  );
}

export default Scenario;
