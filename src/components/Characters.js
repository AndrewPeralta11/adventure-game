import React from "react";
import "../styles.css";
import data from "../data/character-info.json";

function CharSelect() {
  return (
    <div>
      <h1>Adventure Game</h1>
      <h2>Choose your character</h2>
      {data.map(function (character) {
        return (
          <div>
            <h2> {character.name} </h2>
            <div className="tooltip">
              <img className="character" src={character.image}/>
              <h3 className="tooltiptext"> {character.description} </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CharSelect;
