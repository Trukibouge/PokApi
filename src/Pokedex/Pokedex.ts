import {randomBytes} from "crypto";
import { Pokemon } from "./Pokemon/Pokemon";

const fetch = require("node-fetch");
const pokedexJsonUrl = 'https://raw.githubusercontent.com/Trukibouge/pokemon.json/master/pokedex.json';

export class Pokedex{
    public id = randomBytes(16).toString('hex');

    private pokemonList;
    private discoveredPokemon = new Map<number, Pokemon>();

    constructor(public readonly name: string){
        this.pokemonList = this.initializePokemonList();
    }

    async initializePokemonList(): Promise<Map<number, Pokemon>>{
        let pokeListRaw = await fetch(pokedexJsonUrl).json();
        let pokeList = new Map<number, Pokemon>();
        pokeListRaw().forEach((pokemon) => this.pokemonList.set(pokemon.id, pokemon));
        if(!pokeList){
            return Promise.reject('Pokedex data fetch failed');
        }
        else{
            return Promise.resolve(pokeList);
        }
    }

    addDiscoveredPokemon(pokemon: Pokemon): void{
        this.discoveredPokemon.set(pokemon.id, pokemon);
    }

    getDiscoveredPokemon(id: number): Pokemon{
        return this.discoveredPokemon.get(id);
    }

    getTotalNumberOfDiscoveredPokemon(): number{
        return this.discoveredPokemon.size;
    }

}