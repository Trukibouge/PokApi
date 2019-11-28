import {randomBytes} from "crypto";
import { Pokemon } from "./Pokemon/Pokemon";

export class Pokedex{
    public id = randomBytes(16).toString('hex');
    private discoveredPokemon = new Map<number, Pokemon>();

    constructor(public readonly name: string){
        // this.pokemonList = this.initializePokemonList();
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