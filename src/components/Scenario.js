import React from "react";
import data from "../data/scenario-info.json";

function renderScenario(scenario) {
  return(
    <div>
      <div className="tooltiptext"> {scenario.description} </div>
        <img src={scenario.image}/>
        <button> {scenario.optionA}</button>
        <button> {scenario.optionB}</button>
    </div>
  )
}

function Scenario() {
  return (
    <div>{renderScenario(data[0])}</div>
  )
}




  

export default Scenario;
