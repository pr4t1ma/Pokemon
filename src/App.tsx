import { useState } from "react";
import "./App.css";
import Header from "./Header";
type Pokemon = {
  name: string;
  id: number;
  type: string;
  cp: number;
  weight: string;
  height: string;
};

const pokemonData: Pokemon[] = [
  {
    id: 1,
    name: "Pikachu",
    type: "Electric",
    cp: 320,
    weight: "6.0 kg",
    height: "0.4 m",
  },
  {
    id: 2,
    name: "Charizard",
    type: "Fire/Flying",
    cp: 3000,
    weight: "90.5 kg",
    height: "1.7 m",
  },
  {
    id: 3,
    name: "Bulbasaur",
    type: "Grass/Poison",
    cp: 200,
    weight: "6.9 kg",
    height: "0.7 m",
  },
  {
    id: 4,
    name: "Squirtle",
    type: "Water",
    cp: 400,
    weight: "9.0 kg",
    height: "0.5 m",
  },
  {
    id: 5,
    name: "Eevee",
    type: "Normal",
    cp: 650,
    weight: "6.5 kg",
    height: "0.3 m",
  },
  {
    id: 6,
    name: "Gengar",
    type: "Ghost/Poison",
    cp: 2600,
    weight: "40.5 kg",
    height: "1.5 m",
  },
  {
    id: 7,
    name: "Snorlax",
    type: "Normal",
    cp: 3500,
    weight: "460.0 kg",
    height: "2.1 m",
  },
  {
    id: 8,
    name: "Dragonite",
    type: "Dragon/Flying",
    cp: 3800,
    weight: "210.0 kg",
    height: "2.2 m",
  },
  {
    id: 9,
    name: "Jigglypuff",
    type: "Normal/Fairy",
    cp: 500,
    weight: "5.5 kg",
    height: "0.5 m",
  },
  {
    id: 10,
    name: "Mewtwo",
    type: "Psychic",
    cp: 4200,
    weight: "122.0 kg",
    height: "2.0 m",
  },
];
const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>(pokemonData);

  return (
    <div className="max-w-screen-lg mx-auto my-10 p-10">
      <h1 className="">Pokemon Icon</h1>
      <Header />
      <ul>
        {pokemons.map((pokemon) => {
          return <li key={pokemon.id}>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
