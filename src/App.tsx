import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
type Pokemon = {
  name: string;
  url: string;
};
const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const pokemonData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`).then(
      (res) => res.json()
    );

    const data = await response.results;

    setPokemons(data);
  };

  useEffect(() => {
    pokemonData();
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto my-10 p-10">
      <h1 className="">Pokemon Icon</h1>
      <Header />
      <ul>
        {pokemons.map((pokemon) => {
          return <li key={pokemon.name}>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
