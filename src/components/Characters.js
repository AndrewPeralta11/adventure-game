import React from "react";
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
            <img src={character.image} />
            <h3> {character.description} </h3>
          </div>
        );
      })}
    </div>
  );
}

export default CharSelect;
