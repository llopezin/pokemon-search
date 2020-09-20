import React from "react";
import { useEffect, useState } from "react";

function App() {
  let [pokemonName, setPokemonName] = useState("");
  let [img, setImg] = useState("");

  const manageInput = (name) => {
    setPokemonName(name);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) =>
      res
        .json()
        .then((response) => {
          if (!response.sprites) return;
          setImg(response.sprites.front_default);
        })
        .catch((error) => console.warn(error))
    );
  }, [pokemonName, img]);

  return (
    <div className="main">
      <h1>Poke Search</h1>
      <input
        type="text"
        onChange={(e) => {
          manageInput(e.target.value);
        }}
        value={pokemonName}
      />
      <div>
        <img src={img} alt={pokemonName} />
      </div>
    </div>
  );
}

export default App;
