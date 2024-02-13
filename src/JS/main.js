"use strict";

window.onload = init;

function init() {
 displayPokemons()
}

//get pokemon by id
async function getPokemon(id) {

    let url = "https://pokeapi.co/api/v2/pokemon/" + id;





}
/*
const url = " https://pokeapi.co/api/v2/pokemon/";
let pokemon;

async function init() {
    try {
        

    // fetchanrop
    const response = await fetch(url);
    pokemon = await response.json();
  

    displayPokemon(pokemon.results);
    console.log(pokemon.results);
    
} catch {
    // catch om något går fel
    document.getElementById("error").innerHTML = "<p>Något gick fel!</p>";
}
}

function displayPokemon(pokemonList) {
    const pokemonEl = document.getElementById("display");
    pokemonEl.innerHTML = ``;

    pokemonList.forEach((pokemon) => {
        pokemonEl.innerHTML += `
            <h2>${pokemon.name}</h2>
            <img src ="${pokemon.sprites}"
            `;        
    });
    
}*/
