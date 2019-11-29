import {randomBytes} from "crypto";
import { Pokemon } from "./Pokemon/Pokemon";

const fetch = require("node-fetch");
const pokeJsonUrl = 'https://raw.githubusercontent.com/Trukibouge/pokemon.json/master/pokedex.json';

export class Pokedex{
    public id = randomBytes(16).toString('hex');
    private discoveredPokemon = new Map<number, Pokemon>();
    public pokemonList = new Map<number, Pokemon>();

    constructor(public readonly name: string){}

    addDiscoveredPokemon(pokemon: Pokemon): void{
        this.discoveredPokemon.set(pokemon.id, pokemon);
    }

    getDiscoveredPokemons(): Pokemon[]{
        return Array.from(this.discoveredPokemon.values());
    }

    getDiscoveredPokemon(name: string): Pokemon{
        return(this.discoveredPokemon.get(this.getPokemonInformationByName(name).id));
    }

    getPokemonInformationByName(name: string): Pokemon | undefined {
        let found: Pokemon;
        this.pokemonList.forEach(pokemon => {
            if(pokemon.name.english == name || pokemon.name.french == name
                || pokemon.name.chinese == name || pokemon.name.japanese == name){
                    found = pokemon;
            }
        });
        return found;
    }

    async fillPokemonMap(): Promise<void> {
        let request = await fetch(pokeJsonUrl);
        let pokeListRaw = await request.json();
        if(!pokeListRaw){
            return Promise.reject('Pokedex data fetch failed');
        }
        pokeListRaw.forEach((pokemon) => this.pokemonList.set(pokemon.id, pokemon));
        return Promise.resolve();
    }

}