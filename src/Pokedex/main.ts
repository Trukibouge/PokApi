import {Pokemon} from './Pokemon/Pokemon'
import {Pokedex} from './Pokedex'

const fetch = require("node-fetch");
const pokeJsonUrl = 'https://raw.githubusercontent.com/Trukibouge/pokemon.json/master/pokedex.json';

main();

function main(){
    let pokemonList = new Map<number, Pokemon>();
    // pokemonList = await initializePokemonList();
    initializePokemonList(pokemonList).then(() => console.log(pokemonList));

}

async function initializePokemonList(targetList: Map<number, Pokemon>): Promise<void> | undefined {
    let request = await fetch(pokeJsonUrl);
    let pokeListRaw = await request.json();
    if(!pokeListRaw){
        return Promise.reject('Pokedex data fetch failed');
    }
    pokeListRaw.forEach((pokemon) => targetList.set(pokemon.id, pokemon));
    return Promise.resolve();
}

