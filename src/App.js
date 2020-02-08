
import React, { Component } from "react";
import PokemonCard from "./components/PokemonCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pokemons from "./pokemons.json";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "./components/Container";


let score = 0;
let topScore = 0;
let message = "Click on a Pokemon Card to gain points! Click on the same one twice and you lose!";

class App extends Component {
  // Setting this.state.pokemons to the pokemons json array
  state = {
    pokemons,
    score: 0,
    topScore: 0,
    message
  };

  pokemonClick = id => {

    // Make a copy of the state matches array to work with
    const pokemons = this.state.pokemons;

    // Filter for the clicked match
    const pokemonMatch = pokemons.filter(pokemon => pokemon.id === id);

    // If the pokemonMatch image's clicked value is already true, 
    // do the game over actions
    if (pokemonMatch[0].clicked) {


      score = 0;
      message = "Ah! Sorry you already clicked that one. Game Over!"

      for (let i = 0; i < pokemons.length; i++) {
        pokemons[i].clicked = false;
      }

      this.setState({ message });
      this.setState({ score });
      this.setState({ pokemons });

      // Otherwise, if clicked = false, and the user hasn't finished
    } else if (score < 11) {

      // Set its value to true
      pokemonMatch[0].clicked = true;

      // increment the appropriate counter
      score++;
      // this.setState({ score: this.state.score + 1 });

      message = "Great! You haven't click on that one yet! Keep going!";

      if (score > topScore) {
        topScore = score;
        this.setState({ topScore });
      }

      // When a Pokemon Card is clicked, shuffle the Pokemon array in a random order
      pokemons.sort(function (a, b) { return 0.5 - Math.random() });

      // Set this.state.pokemons equal to the new pokemons array
      this.setState({ pokemons });
      this.setState({ score });
      this.setState({ message });
    } else {

      // Set its value to true
      pokemonMatch[0].clicked = true;

      // restart the score counter
      score = 0;

      // play again
      message = "Yay!!! You got ALL of them!!! Now, let's see if you can do it again!";
      topScore = 12;
      this.setState({ topScore });

      for (let i = 0; i < pokemons.length; i++) {
        pokemons[i].clicked = false;
      }

      // When a Pokemon Card is clicked, shuffle the Pokemon array in a random order
      pokemons.sort(function (a, b) { return 0.5 - Math.random() });

      // Set this.state.pokemons equal to the new pokemons array
      this.setState({ pokemons });
      this.setState({ score });
      this.setState({ message });

    }
  };



  // pokemonClick = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ score: this.state.score + 1 });

  //   // When a Pokemon Card is clicked, shuffle all the Pokemon cards in a random order
  //   this.state.pokemons.sort(() => Math.random() - 0.5)

  // };



  // 2.) If user clicks on the same card ID within the same game, then alert user "Ah sorry you already clicked that one" and game over and reset game

  // Map over this.state.pokemons and render a pokemonCard component for each pokemon object
  render() {
    return (

      <Wrapper>
        <Container></Container>
        <Title>Pokemon - Gotta "Click" Them All    <p className="card-text">Your Score: {this.state.score} | Top Score: {this.state.topScore}</p></Title>
        <h2 className="message"> {this.state.message}</h2>

        {this.state.pokemons.map(pokemon => (
          <PokemonCard
            pokemonID={this.pokemonID}
            pokemonClick={this.pokemonClick}
            id={pokemon.id}
            key={pokemon.id}
            image={pokemon.image}

          />
        ))}
      </Wrapper>
    );
  }
}


export default App;









