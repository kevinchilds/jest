import React, { useEffect, useState } from 'react'

function ListsDemo() {

    let [pokemons, setPokemons] = useState([{name: ""}]);

    useEffect(() => {
      async function getPokemon(){
        let response = await fetch("https://pokeapi.co/api/v2/pokemon");

        let responseBody = await response.json();

        setPokemons(responseBody.results);
      }

      getPokemon();
    }, [])
    

  return (
    <div data-testid="pokemon-container">
        {
            pokemons.map((pokemon,index) => {
                return (
                    <button className='pokemon' key={index}>{pokemon.name}</button>
                )
            })
        }
    </div>
  )
}

export default ListsDemo