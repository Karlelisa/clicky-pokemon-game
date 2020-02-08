import React from "react";
import "./style.css";

function PokemonCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.pokemonClick(props.id)} className="addScore" />
      </div>
      <div className="content">

      </div>

    </div>
  );
}

export default PokemonCard;

